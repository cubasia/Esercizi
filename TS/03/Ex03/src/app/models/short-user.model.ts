import { Role } from '@models'
export interface ShortUser {
  id: number;
  foto: string;
  generalita: string;
  eta: number;
  citta: string;
  ruolo: Role;
}
