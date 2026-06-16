import { Module } from '@nestjs/common';
import { DemoUserModule } from '../demo-user/demo-user.module';
import { LedgerEventModule } from '../ledger-event/ledger-event.module';
import { LockController } from './lock.controller';
import { LockService } from './lock.service';

@Module({
  imports: [DemoUserModule, LedgerEventModule],
  controllers: [LockController],
  providers: [LockService],
})
export class LockModule {}
