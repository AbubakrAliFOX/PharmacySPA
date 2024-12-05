export interface UserExtensive {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address?: string | null;
  gender: number;
  roleId: number;
  branchId: number;
  managerId?: number | null;
}
