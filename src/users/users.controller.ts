import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  Patch,
  Request,
  ConflictException,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createUserDto: CreateUserDto) {
    const saltOrRounds = 10;

    const isPseudoExist = await this.usersService.findOneByPseudo(
      createUserDto.username,
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

  @Get('users')
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  //  @UseGuards(JwtAuthGuard)
  @Patch()
  @UseInterceptors(ClassSerializerInterceptor)
  async update(@Body() updateUserDto: UpdateUserDto, @Request() req) {
    const userLogged = req.user.id;

    const userUpdate = await this.usersService.update(
      userLogged,
      updateUserDto,
    );

    return {
      statusCode: 201,
      message: 'Modifications enregistrées',
      data: {
        userUpdate,
      },
    };
  }
}
