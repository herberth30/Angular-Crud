import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUpdateDataComponentComponent } from './read-update-data-component.component';

describe('ReadUpdateDataComponentComponent', () => {
  let component: ReadUpdateDataComponentComponent;
  let fixture: ComponentFixture<ReadUpdateDataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadUpdateDataComponentComponent]
    });
    fixture = TestBed.createComponent(ReadUpdateDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
