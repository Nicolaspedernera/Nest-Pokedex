import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive({ message: `The offser has to be greater than zero` })
  @IsInt({ message: `The limit has to be a integer` })
  page?: number;

  @IsOptional()
  @IsPositive({ message: `The limit has to be greater than zero` })
  @Min(1, { message: `The min value is "1"` })
  @IsInt({ message: `The limit has to be a integer` })
  limit?: number;
}
