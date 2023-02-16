import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
  async create(createAnimalDto: CreateAnimalDto) {
    const newAnimal = new Animal();
    newAnimal.nom = createAnimalDto.nom;
    newAnimal.photo_profil_url = createAnimalDto.photo_profil_url;
    newAnimal.espece = createAnimalDto.espece;
    newAnimal.race = createAnimalDto.race;
    newAnimal.genre = createAnimalDto.genre;
    newAnimal.date_de_naissance = createAnimalDto.date_de_naissance;
    newAnimal.lof = createAnimalDto.lof;
    await newAnimal.save();
    return newAnimal;
  }

  async findAll() {
    const allAnimaux = await Animal.find();
    return allAnimaux;
  }

  async findOne(nom: string) {
    const findByNom = await Animal.findBy({
      nom,
    });
    return findByNom;
  }

  async findOneById(id: number) {
    const findAnimal = await Animal.findBy({ id });
    return findAnimal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const data = await Animal.findOneBy({ id });
    await Animal.update(data.id, updateAnimalDto);
    const dataUpdate = await Animal.findOneBy({ id });
    return dataUpdate;
  }

  async remove(id: number) {
    const idAnimal = await Animal.findOneBy({ id });
    await Animal.remove(idAnimal);
    return idAnimal;
  }
}
