import { Membre } from "./membre";

export class Profil{
    id: number;
    libelle: string;
    isChef: boolean;
    membre = new Membre();

}