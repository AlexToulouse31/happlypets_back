import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Patch,
  Request,
  ConflictException,
  Get,
  ParseIntPipe,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EStatus } from 'src/constants/enum';

@ApiTags('users')
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    const saltOrRounds = 10;

    const isPseudoExist = await this.usersService.findOneByPseudo(
      createUserDto.pseudo,
    );
    if (isPseudoExist)
      throw new ConflictException(
        'Pseudo déjà utilisé, veuillez changer de pseudo',
      );

    const isEmailExist = await this.usersService.findOneByEmail(
      createUserDto.email,
    );
    if (isEmailExist)
      throw new ConflictException(
        'E-mail déjà utilisé, veuillez entrer un e-mail valide',
      );

    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

    const user = await this.usersService.create(createUserDto, hash);

    return {
      statusCode: 201,
      message: 'Utilisateur enregistré',
      data: {
        user,
      },
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('users')
  async findAll() {
    const users = await this.usersService.findAll();
    if (!users) {
      throw new NotFoundException('Pas de compte enregistreé pour l instant');
    }
    return users;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profil')
  async getProfile(@Request() req) {
    const profil = await this.usersService.findOneByPseudo(req.user.username);
    return profil;
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch()
  async update(@Body() updateUserDto: UpdateUserDto, @Request() req) {
    const userLogged = req.user.userId;

    const userUpdate = await this.usersService.update(
      userLogged,
      updateUserDto,
    );
    //console.log('apres update', userUpdate);

    return {
      statusCode: 201,
      message: 'Modifications enregistrées',
      data: {
        userUpdate,
      },
    };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete()
  async removeUser(@Request() req) {
    const userDeleted: number = req.user.userId;

    const data = await this.usersService.findOneById(userDeleted);
    if (!data) {
      throw new NotFoundException('Votre compte à déjà été supprimé');
    }

    const userRemoved = await this.usersService.delete(data.id);
    return {
      status: EStatus.OK,
      message: `Le compte numéro ${data.id} a été supprimé`,
      data: userRemoved,
    };
  }
}
