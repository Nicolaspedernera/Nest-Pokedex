import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';


export class CreatePokemonDto {
  @IsString({ message: 'The name of the Pokemon must be a string!' })
  @MinLength(1, {
    message: 'The name of the Pokemon must have more the one character...',
  })
  name: string;
  @IsInt({ message: 'The no must be a number!' })
  @IsPositive({ message: 'The no must be greater than zero!' })
  @Min(1,{message:'The no must be greater than 1..'})
  no: number;
}
