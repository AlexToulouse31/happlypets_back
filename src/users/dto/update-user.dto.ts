import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsBoolean, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

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

}
