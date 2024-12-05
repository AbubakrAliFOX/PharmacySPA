import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

const ERROR_MESSAGES: Record<string, string> = {
  unknown: 'This field has an error',
  required: 'This field is required',
  email: 'Invalid email format',
  minlength: 'This field is required',
  maxlength: 'This field is required',
};

@Pipe({
  name: 'validationError',
  standalone: true,
})
export class ValidationErrorPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string {
    return errors
      ? Object.entries(errors)
          .map(([key, value]) =>
            typeof value === 'string' && value.length > 0
              ? value
              : value === true && ERROR_MESSAGES[key]
              ? ERROR_MESSAGES[key]
              : ERROR_MESSAGES['unknown']
          )
          .join('. ')
      : '';
  }
}
