import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-alert-component',
  templateUrl: './header-alert-component.component.html',
  styleUrls: ['./header-alert-component.component.css']
})
export class HeaderAlertComponentComponent {

  @Input() msg: string = '';

  closeAlert(): void {
    this.msg = '';
  }
}
