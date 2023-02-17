import { Injectable } from '@nestjs/common';
import { CreateFournisseurDto } from './dto/create-fournisseurs.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseurs.dto';
import { Fournisseur } from './entities/fournisseurs.entity';

@Injectable()
export class FournisseursService {
  async createFournisseur(createFournisseurDto: CreateFournisseurDto) {
    const fournisseur = new Fournisseur();
    fournisseur.nom = createFournisseurDto.nom;
    fournisseur.url = createFournisseurDto.url;
    await Fournisseur.save(fournisseur);
    return fournisseur;
  }

  async findAllFournisseur(): Promise<Fournisseur[] | undefined> {
    const fournisseurAll = await Fournisseur.find();
    if (fournisseurAll[0]) {
      return fournisseurAll;
    }
  }

  async findOneFournisseur(id: number) {
    const fournisseurId = await Fournisseur.findOneBy({ id: id });
    return fournisseurId;
  }
  async findOneNom(nom: string) {
    const fournisseurNom = await Fournisseur.findOneBy({ nom: nom });
    return fournisseurNom;
  }

  async updateFournisseur(
    id: number,
    updateFournisseurDto: UpdateFournisseurDto,
  ) {
    await Fournisseur.update(id, updateFournisseurDto);
    const updateFournisseur = Fournisseur.findOneBy({ id: id });
    return updateFournisseur;
  }

  async removeFournisseur(id: number) {
    const deleteFournisseur = await Fournisseur.findOneBy({ id: id });
    return Fournisseur.remove(deleteFournisseur);
  }
}
