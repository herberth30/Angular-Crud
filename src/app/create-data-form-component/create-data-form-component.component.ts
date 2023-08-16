import { Component, Input } from '@angular/core';
import { SharedDataService } from '../shared-data.service.service';

@Component({
  selector: 'app-create-data-form-component',
  templateUrl: './create-data-form-component.component.html',
  styleUrls: ['./create-data-form-component.component.css']
})
export class CreateDataFormComponentComponent {
  
  model: any = {};
  employees: any[] = [];  
  constructor (private sharedDataService: SharedDataService){
    
      this.sharedDataService.currentEmployees.subscribe(employees => {
      this.employees = employees;
    });
  }
 
  addEmployee(): void {
    this.employees.push(this.model);
    this.sharedDataService.changeEmployees(this.employees);

    this.model = {};
  }
}
