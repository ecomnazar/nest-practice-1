import { IsNumber, Min } from 'class-validator';

export class CreateDto {
  @Min(5)
  @IsNumber()
  num: number;
}
