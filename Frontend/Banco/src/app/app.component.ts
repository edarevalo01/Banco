import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidations } from './validations/CustomValidations';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from './model/location';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public locations: Location[] = [];

  constructor(private formBuilder: FormBuilder, private service: GeneralService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getLocations();
    this.buildForm();
  }

  createLocation(event: Event) {
    const location: Location = this.form.value;
    this.service.saveLocation(location).subscribe(
      response => {
        const newLocation: Location = response;
        newLocation.customName = `${newLocation.id} - ${newLocation.name}`;
        this.locations = this.locations.concat(newLocation);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: '¡Ups! Hubo un error', detail: error.message });
      },
      () => {
        this.buildForm();
        this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Localización cargada satisfactoriamente.' });
      }
    );
  }

  getLocations() {
    this.service.getLocations().subscribe(
      response => {
        this.locations = response;
      },
      error => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: '¡Ups! Hubo un error al cargar las localizaciones', detail: error.message });
      },
      () => {
        this.locations.forEach(e => (e.customName = `${e.id} - ${e.name}`));
        this.buildForm();
      }
    );
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required, CustomValidations.idExists(this.locations)]],
      name: [null, [Validators.required, CustomValidations.nameExists(this.locations)]],
      area: [0, Validators.required],
      parent: [null]
    });
  }

  get idField() {
    return this.form.get('id');
  }

  get nameField() {
    return this.form.get('name');
  }
}
