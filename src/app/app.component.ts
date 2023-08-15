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

  addEmployee():void{

  }

  deleteEmployee():void{

  }

  editEmployee():void{

  }

  updateEmployee():void{

  }
}
