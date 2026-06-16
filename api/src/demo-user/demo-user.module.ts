import { Module } from '@nestjs/common';
import { DemoUserService } from './demo-user.service';

@Module({
  providers: [DemoUserService],
  exports: [DemoUserService],
})
export class DemoUserModule {}
