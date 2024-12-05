import { ValidationErrors } from '@angular/forms';

export function getErrorMessages(
  validationError: ValidationErrors | null | undefined
): string {
  const errorKeys: string[] = Object.keys(validationError as Object);

  const errorMessages: { [key: string]: string } = {
    required: 'This field is required.',
    minlength: 'Minimum length not met.',
    maxlength: 'Maximum length exceeded.',
    email: 'Enter a valid email address.',
  };

  return errorMessages[errorKeys[0]] || 'Invalid value.';
}
