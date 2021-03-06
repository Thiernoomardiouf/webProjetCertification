import { Livrable } from "./livrable";
import { Projet } from "./projet";

export class Phase{
    id: number;
    code: string;
    libelle: string;
    description: string;
    date_debut: Date;
    date_fin: Date;
    montant: string;
    etat_realisation: boolean;
    projet = new Projet();
}
