import { Branch } from './Branch';
import { Manager } from './Manager';
import { Role } from './Role';

export interface UserMetadata {
  roles: Role[];
  branches: Branch[];
  managers: Manager[];
}
