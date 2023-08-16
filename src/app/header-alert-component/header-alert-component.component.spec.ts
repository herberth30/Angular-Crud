import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlertComponentComponent } from './header-alert-component.component';

describe('HeaderAlertComponentComponent', () => {
  let component: HeaderAlertComponentComponent;
  let fixture: ComponentFixture<HeaderAlertComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAlertComponentComponent]
    });
    fixture = TestBed.createComponent(HeaderAlertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
