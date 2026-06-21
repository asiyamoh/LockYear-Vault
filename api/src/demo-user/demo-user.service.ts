import { Injectable } from '@nestjs/common';
import { DemoUser } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DemoUserService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateDemoUser(): Promise<DemoUser> {
    const existing = await this.prisma.demoUser.findFirst({
      where: { isDemo: true },
      orderBy: { createdAt: 'asc' },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.demoUser.create({
      data: { isDemo: true },
    });
  }
}
