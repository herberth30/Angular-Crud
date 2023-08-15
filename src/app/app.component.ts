import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';

  employees=[
    {'name': 'herberth', position:'programer' },
    {'name': 'david', position:'designer' },
    {'name': 'zulma', position:'manager' }
  ];

  model:any={};
  model2:any={};


  addEmployee():void{
    this.employees.push(this.model);

  }

  deleteEmployee(i:number):void{

  }


  editEmployee(i: number):void{

    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
   
  }

  updateEmployee():void{

  }
}
