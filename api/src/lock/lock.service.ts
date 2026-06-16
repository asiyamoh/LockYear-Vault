import { BadRequestException, Injectable } from '@nestjs/common';
import { Lock as PrismaLock, LockStatus } from '@prisma/client';
import { DemoUserService } from '../demo-user/demo-user.service';
import { LedgerEventService } from '../ledger-event/ledger-event.service';
import { PrismaService } from '../database/prisma.service';
import { CreateLockDto } from './dto/create-lock.dto';
import { GroupedLockResponseDto } from './dto/grouped-lock-response.dto';
import { LockResponseDto } from './dto/lock-response.dto';
import { LocksGroupedResponseDto } from './dto/locks-grouped-response.dto';
import { LocksIndividualResponseDto } from './dto/locks-individual-response.dto';
import {
  centsToDollars,
  dollarsToCents,
  toLockResponse,
} from './utils/lock.mapper';
import { getPeriodLabel } from './utils/period.util';

@Injectable()
export class LockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly demoUserService: DemoUserService,
    private readonly ledgerEventService: LedgerEventService,
  ) {}

  async findAllIndividual(): Promise<LocksIndividualResponseDto> {
    const locks = await this.getActiveLocks();
    const now = new Date();

    const lockResponses = locks.map(lock => toLockResponse(lock, now));

    return {
      totalLocked: this.computeTotalLocked(locks),
      nextUnlock: this.computeNextUnlock(locks),
      locks: lockResponses,
    };
  }

  async findAllGrouped(): Promise<LocksGroupedResponseDto> {
    const locks = await this.getActiveLocks();
    const now = new Date();
    const groups = this.buildGroups(locks, now);

    return {
      totalLocked: this.computeTotalLocked(locks),
      nextUnlock: this.computeNextUnlock(locks),
      groups,
    };
  }

  async create(dto: CreateLockDto): Promise<LockResponseDto> {
    const unlockAt = new Date(dto.unlockDate);

    if (Number.isNaN(unlockAt.getTime())) {
      throw new BadRequestException('unlockDate must be a valid date');
    }

    if (unlockAt <= new Date()) {
      throw new BadRequestException('unlockDate must be in the future');
    }

    const amountCents = dollarsToCents(dto.amount);

    if (amountCents <= 0) {
      throw new BadRequestException('amount must be greater than zero');
    }

    const user = await this.demoUserService.getOrCreateDemoUser();

    const lock = await this.prisma.lock.create({
      data: {
        userId: user.id,
        amountCents,
        unlockAt,
        status: LockStatus.LOCKED,
      },
    });

    await this.ledgerEventService.createLockCreated(
      user.id,
      lock.id,
      amountCents,
    );

    return toLockResponse(lock);
  }

  private async getActiveLocks(): Promise<PrismaLock[]> {
    const user = await this.demoUserService.getOrCreateDemoUser();

    return this.prisma.lock.findMany({
      where: {
        userId: user.id,
        status: LockStatus.LOCKED,
        unlockAt: { gt: new Date() },
      },
      orderBy: { unlockAt: 'asc' },
    });
  }

  private computeTotalLocked(locks: PrismaLock[]): number {
    const totalCents = locks.reduce((sum, lock) => sum + lock.amountCents, 0);
    return centsToDollars(totalCents);
  }

  private computeNextUnlock(locks: PrismaLock[]): string | null {
    if (locks.length === 0) {
      return null;
    }

    return locks[0].unlockAt.toISOString();
  }

  private buildGroups(
    locks: PrismaLock[],
    now: Date,
  ): GroupedLockResponseDto[] {
    const groupMap = new Map<
      string,
      { totalCents: number; earliestUnlock: Date; lockCount: number }
    >();

    for (const lock of locks) {
      const period = getPeriodLabel(lock.unlockAt, now);
      const existing = groupMap.get(period);

      if (existing) {
        existing.totalCents += lock.amountCents;
        existing.lockCount += 1;

        if (lock.unlockAt < existing.earliestUnlock) {
          existing.earliestUnlock = lock.unlockAt;
        }
      } else {
        groupMap.set(period, {
          totalCents: lock.amountCents,
          earliestUnlock: lock.unlockAt,
          lockCount: 1,
        });
      }
    }

    return Array.from(groupMap.entries())
      .map(([period, data]) => ({
        period,
        totalAmount: centsToDollars(data.totalCents),
        unlockDate: data.earliestUnlock.toISOString(),
        lockCount: data.lockCount,
      }))
      .sort(
        (a, b) =>
          new Date(a.unlockDate).getTime() - new Date(b.unlockDate).getTime(),
      );
  }
}
