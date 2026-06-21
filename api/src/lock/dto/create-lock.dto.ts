import { IsDateString, IsNumber, IsPositive } from 'class-validator';

export class CreateLockDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  amount: number;

  @IsDateString()
  unlockDate: string;
}
