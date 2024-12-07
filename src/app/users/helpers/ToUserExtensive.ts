import { UserExtensive } from '../models/UserExtensive';

export function ToUserExtensive(formValue: any): UserExtensive {
  return {
    id: null,
    userName: formValue.userName,
    email: formValue.email,
    password: formValue.password,
    firstName: formValue.firstName,
    lastName: formValue.lastName,
    phoneNumber: formValue.phoneNumber ?? null,
    address: formValue?.address, // Optional field
    gender: Number(formValue.gender), // Casting to ensure it's of type Gender
    roleId: Number(formValue.roleId),
    branchId: Number(formValue.branchId),
    managerId: formValue?.managerId ? Number(formValue.managerId) : null, // Optional field
  };
}
