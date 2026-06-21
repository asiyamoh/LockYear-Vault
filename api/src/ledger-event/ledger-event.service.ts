import { Injectable } from '@nestjs/common';
import { LedgerEventType } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class LedgerEventService {
  constructor(private readonly prisma: PrismaService) {}

  async createLockCreated(
    userId: string,
    lockId: string,
    amountCents: number,
  ): Promise<void> {
    await this.prisma.ledgerEvent.create({
      data: {
        userId,
        lockId,
        eventType: LedgerEventType.LOCK_CREATED,
        amountCents,
      },
    });
  }
}
