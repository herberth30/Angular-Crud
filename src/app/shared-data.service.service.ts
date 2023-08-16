import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService{

  private titleSource = new BehaviorSubject<string>('Angular Crud');
  currentTitle = this.titleSource.asObservable();

  private msgSource = new BehaviorSubject<string>('');
  currentMsg = this.msgSource.asObservable();

  private employeesSource = new BehaviorSubject<any[]>([]);
  currentEmployees = this.employeesSource.asObservable();

  constructor() { }

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

  changeMsg(msg: string) {
    this.msgSource.next(msg);
  }

  changeEmployees(employees: any[]) {
    this.employeesSource.next(employees);
  }
}
