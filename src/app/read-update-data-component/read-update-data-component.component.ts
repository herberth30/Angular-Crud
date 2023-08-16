import { Component } from '@angular/core';

@Component({
  selector: 'app-read-update-data-component',
  templateUrl: './read-update-data-component.component.html',
  styleUrls: ['./read-update-data-component.component.css']
})
export class ReadUpdateDataComponentComponent {

  
  hideUpdate:boolean = true;

 


  
  model2: any = {};




  deleteEmployee(i: number): void {
    var answr = confirm('Seguro de eliminar?');
    if(answr){
      this.employees.splice(i, 1); // Remove 1 element at index i
    
    }

  }

  myValue!: number;

  editEmployee(i: number): void {
    
    this.hideUpdate= false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    let i = this.myValue;
    this.employees[i] = this.model2;
    this.model2 = {};
    this.myValue = -1; // Reset myValue after updating
    
    
    this.hideUpdate= true;
  }
}
