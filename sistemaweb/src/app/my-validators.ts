import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class MyValidators {
  static userExists(control: AbstractControl): Observable<ValidationErrors | null> {
    const users = ['john', 'jane', 'doe']; // Simulación de lista de usuarios existentes

    return of(users).pipe(
      delay(1000), // Simula una llamada a un servidor
      map(users => {
        const userExists = users.includes(control.value);
        return userExists ? { userExists: true } : null;
      })
    );
  }
}
