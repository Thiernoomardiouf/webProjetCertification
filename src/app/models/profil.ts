import { Membre } from "./membre";
import { Projet } from "./projet";

export class Profil{
    id: number;
    libelle: string;
    isChef: boolean;
    membre: Membre;
    projet: Projet;

}
