import { Location } from '../model/location';
import { AbstractControl } from '@angular/forms';

export class CustomValidations {
  static idExists(locations: Location[]) {
    return (control: AbstractControl) => {
      const valId = control.value;
      const exists = locations.find(loc => loc.id == valId); // Devuelve el valor del primer elemento que cumpla
      if (exists) {
        return { exists_id: true };
      }
      return null;
    };
  }

  static nameExists(locations: Location[]) {
    return (control: AbstractControl) => {
      const valName = control.value;
      const exists = locations.find(loc => loc.name == valName);
      if (exists) {
        return { exists_name: true };
      }
      return null;
    };
  }
}
