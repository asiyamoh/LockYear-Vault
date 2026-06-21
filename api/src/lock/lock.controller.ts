import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLockDto } from './dto/create-lock.dto';
import { LockResponseDto } from './dto/lock-response.dto';
import { LocksGroupedResponseDto } from './dto/locks-grouped-response.dto';
import { LocksIndividualResponseDto } from './dto/locks-individual-response.dto';
import { LockService } from './lock.service';

@Controller('locks')
export class LockController {
  constructor(private readonly lockService: LockService) {}

  @Get()
  findAllIndividual(): Promise<LocksIndividualResponseDto> {
    return this.lockService.findAllIndividual();
  }

  @Get('grouped')
  findAllGrouped(): Promise<LocksGroupedResponseDto> {
    return this.lockService.findAllGrouped();
  }

  @Post()
  create(@Body() dto: CreateLockDto): Promise<LockResponseDto> {
    return this.lockService.create(dto);
  }
}
