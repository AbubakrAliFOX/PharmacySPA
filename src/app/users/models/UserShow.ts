import { Branch } from './Branch';
import { Manager } from './Manager';
import { Role } from './Role';

export interface UserShow {
  id: number;
  userName: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  address?: string;
  gender: string;
  manager?: Manager;
  role: Role;
  branch: Branch;
}
