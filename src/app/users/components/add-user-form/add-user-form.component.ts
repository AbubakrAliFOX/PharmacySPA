import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MetadataService } from '../../services/metadata.service';
import { UserMetadata } from '../../models/UserMetadata';
import { Branch } from '../../models/Branch';
import { Role } from '../../models/Role';
import { Manager } from '../../models/Manager';
import { passwordMatchValidator } from '../../helpers/passwordMatchValidator';
import { getErrorMessages } from '../../helpers/getErrorMessages';
import { UserExtensive } from '../../models/UserExtensive';
import { ToUserExtensive } from '../../helpers/ToUserExtensive';

@Component({
  selector: 'app-add-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  constructor(private metadataService: MetadataService) {}

  @Input() usersMetadata: UserMetadata | null = null;
  @Output() formSubmit = new EventEmitter<UserExtensive>();

  managers: Manager[] | null = null;
  roles: Role[] | null = null;
  branches: Branch[] | null = null;

  newUserForm = new FormGroup(
    {
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl(''),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      address: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required]),
      branchId: new FormControl('', [Validators.required]),
      managerId: new FormControl('', []),
    },
    { validators: passwordMatchValidator('password', 'passwordConfirmation') }
  );

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

  getErrorMessages(
    validationError: ValidationErrors | null | undefined
  ): string {
    return getErrorMessages(validationError);
  }

  handleSubmit(): void {
    if (this.newUserForm.valid) {
      const userInfo: UserExtensive = ToUserExtensive(this.newUserForm.value);
      this.formSubmit.emit(userInfo);
    }
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
