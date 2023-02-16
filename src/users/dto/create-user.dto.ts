import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsEmail } from 'class-validator';

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    prenom: string;

    @ApiProperty()
    @IsString()
    nom: string;

    @ApiProperty()
    @IsString()
    pseudo: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString()
    addresse: string;

    @ApiProperty()
    @IsString()
    ville: string;

    @ApiProperty()
    @IsString()
    departement: string;

    @ApiProperty()
    @IsBoolean()
    admin: boolean;
    adresse: any;

}
