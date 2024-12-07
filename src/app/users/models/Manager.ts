import { Branch } from './Branch';

export interface Manager {
  id: number;
  fullName: string;
  imageUrl?: string;
  branch: Branch;
}
