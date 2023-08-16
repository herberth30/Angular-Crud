import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service.service';

@Component({
  selector: 'app-header-alert-component',
  templateUrl: './header-alert-component.component.html',
  styleUrls: ['./header-alert-component.component.css']
})
export class HeaderAlertComponentComponent {

  msg: string = '';

  constructor(private sharedDataService: SharedDataService) {
    // Suscríbete al Observable currentMsg para obtener los cambios en el mensaje
    this.sharedDataService.currentMsg.subscribe(newMsg => {
      this.msg = newMsg;
    });
  }

  closeAlert(): void {
    this.sharedDataService.changeMsg('');
  }
}
