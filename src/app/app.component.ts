import { Component, Input } from '@angular/core';
import { SharedDataService } from './shared-data.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
constructor(private sharedDataService: SharedDataService){}

  ngOnInit(){
    this.sharedDataService.changeTitle('Angular Crud');
    this.sharedDataService.changeMsg('');
    this.sharedDataService.changeEmployees([
      { name: 'herberth', position: 'programmer', email: '' },
      { name: 'david', position: 'designer', email: '' },
      { name: 'zulma', position: 'manager', email: '' },
    ]);

  }
}
