import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
<<<<<<< HEAD
  deletedUser(id: any) {
    throw new Error('Method not implemented.');
  }
  findUserByID(id: any) {
    throw new Error('Method not implemented.');
  }

=======
>>>>>>> 5105a9c2356b018ed1b5e23e1746f53b9cf9aff5
  async create(createUserDto: CreateUserDto, hash: string) {
    const address = createUserDto.adresse;
    const city = createUserDto.ville;
    const country = createUserDto.departement;

    const newUser = new User();
    newUser.prenom = createUserDto.prenom;
    newUser.nom = createUserDto.nom;
    newUser.pseudo = createUserDto.pseudo;
    newUser.email = createUserDto.email;
    newUser.password = hash;
    newUser.adresse = createUserDto.adresse;
    newUser.ville = createUserDto.ville;
    newUser.departement = createUserDto.departement;

    await newUser.save();

    return newUser;
  }

  async findAll() {
    const users = await User.find({});
    return users;
  }

  async findOneByPseudo(pseudo: string) {
    const user = await User.findOne({ where: { pseudo: pseudo } });

    return user;
  }

  async findOneByEmail(email: string) {
    const userMail = await User.findOne({ where: { email: email } });

    return userMail;
  }

  async findOneById(id: number) {
    const user = await User.findOneBy({ id });

    if (user) {
      return user;
    }

    return undefined;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const newUser = await User.findOneBy({
      id: id,
    });
    newUser.pseudo = updateUserDto.pseudo;
    newUser.adresse = updateUserDto.adresse;
    newUser.ville = updateUserDto.ville;
    newUser.departement = updateUserDto.departement;

    await User.save(newUser);

    return await User.findOneBy({ id: id });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 5105a9c2356b018ed1b5e23e1746f53b9cf9aff5
