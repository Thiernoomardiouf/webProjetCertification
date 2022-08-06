import { Membre } from "./membre";
import { Role } from "./Role";

export class RoleMembre {
  id: number;
  membre = new Membre();
  role = new Role();
}
