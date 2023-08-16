import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataFormComponentComponent } from './create-data-form-component.component';

describe('CreateDataFormComponentComponent', () => {
  let component: CreateDataFormComponentComponent;
  let fixture: ComponentFixture<CreateDataFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDataFormComponentComponent]
    });
    fixture = TestBed.createComponent(CreateDataFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
