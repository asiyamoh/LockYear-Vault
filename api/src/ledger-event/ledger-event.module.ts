import { Module } from '@nestjs/common';
import { LedgerEventService } from './ledger-event.service';

@Module({
  providers: [LedgerEventService],
  exports: [LedgerEventService],
})
export class LedgerEventModule {}
