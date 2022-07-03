import { Membre } from "./membre";
import { Projet } from "./projet";

export class Profil{
    id: number;
    libelle: string;
    isChef: boolean;
    projets: Projet[];
    membre = new Membre();

}