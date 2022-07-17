import { Partenaire } from "./partenaire";
export class Projet{
        
    id: number;
    code: string;
    nom: string;
    description: string;
    cout: string;
    date_debut: Date;
    date_fin: Date;
    partenaire_id = new Partenaire();

}