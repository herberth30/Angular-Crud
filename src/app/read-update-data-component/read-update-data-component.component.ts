import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service.service'; // Asegúrate de tener la ruta correcta al servicio

@Component({
  selector: 'app-read-update-data-component',
  templateUrl: './read-update-data-component.component.html',
  styleUrls: ['./read-update-data-component.component.css']
})
export class ReadUpdateDataComponentComponent {

  hideUpdate: boolean = true;
  model2: any = {};
  employees: any[] = [];  // Add this line to store the current employees

  constructor(private sharedDataService: SharedDataService) {
    // Subscribe to the currentEmployees Observable
    this.sharedDataService.currentEmployees.subscribe(employees => {
      this.employees = employees;
    });
  }

  deleteEmployee(i: number): void {
    var answr = confirm('Seguro de eliminar?');
    if (answr) {
      this.employees.splice(i, 1);
      this.sharedDataService.changeEmployees(this.employees); // Update the employees list
    }
  }

  myValue!: number;

  editEmployee(i: number): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    let i = this.myValue;
    this.employees[i] = this.model2;
    this.model2 = {};
    this.myValue = -1;
    this.sharedDataService.changeEmployees(this.employees); // Update the employees list

    this.hideUpdate = true;
  }
}
