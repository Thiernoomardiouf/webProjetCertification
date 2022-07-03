import { Partenaire } from "./partenaire";
import { Phase } from "./phase";
import { Presence } from "./presence";

export class Projet{
        
    id: number;
    code: string;
    nom: string;
    description: string;
    cout: string;
    date_debut: Date;
    date_fin: Date;
    partenaire = new Partenaire();
    phases: Phase[];
    presences: Presence[];

}