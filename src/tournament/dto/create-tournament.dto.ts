import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateTournamentDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name : string;

    @IsNotEmpty()
    @MinLength(3)
    date: string;

    @IsString()
    @MinLength(3)
    location : string;
}
