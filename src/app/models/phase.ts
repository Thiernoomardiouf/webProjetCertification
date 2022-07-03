import { Livrable } from "./livrable";

export class Phase{
    id: number;
    code: string;
    nom: string;
    description: string;
    date_debut: Date;
    date_fin: Date;
    document: string;
    montant: string;
    etat_realisation: boolean;
    livrables: Livrable[];
}