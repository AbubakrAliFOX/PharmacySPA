import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MetadataService } from '../../services/metadata.service';
import { UserMetadata } from '../../models/UserMetadata';
import { Branch } from '../../models/Branch';
import { Role } from '../../models/Role';
import { Manager } from '../../models/Manager';

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  constructor(private metadataService: MetadataService) {}

  @Input() usersMetadata: UserMetadata | null = null;

  managers: Manager[] | null = null;
  roles: Role[] | null = null;
  branches: Branch[] | null = null;

  newUserForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    roleId: new FormControl(''),
    branchId: new FormControl(''),
    managerId: new FormControl(''),
  });

  selectedBranch: Branch | null = null;
  selectedRole: Role | null = null;

  handleRoleSelect(event: Event) {
    const target = event.target as HTMLSelectElement;

    this.selectedRole =
      this.usersMetadata?.roles.find(
        (role) => role.id == Number(target.value)
      ) || null;

    this.updateManagers();
  }

  handleBranchSelect(event: Event) {
    const target = event.target as HTMLSelectElement;

    this.selectedBranch =
      this.usersMetadata?.branches.find(
        (branch) => branch.id == Number(target.value)
      ) || null;

    this.updateManagers();
  }

  updateManagers(): void {
    const isManager: boolean = this.selectedRole?.name == 'Manager';

    if (isManager) {
      this.newUserForm.get('managerId')?.disable();
    } else {
      this.newUserForm.get('managerId')?.enable();

      this.managers =
        this.usersMetadata?.managers.filter(
          (manager) => manager.branch.id === this.selectedBranch!.id
        ) || [];
    }
  }

  handleSubmit(): void {
    console.log(this.newUserForm.value);
  }

  ngOnInit(): void {
    this.newUserForm.get('managerId')?.disable();
  }

  ngOnChanges(): void {
    if (this.usersMetadata != null) {
      this.roles = this.usersMetadata.roles;
      this.branches = this.usersMetadata.branches;
    }
  }
}
