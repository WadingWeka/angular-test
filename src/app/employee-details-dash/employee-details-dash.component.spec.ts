import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsDashComponent } from './employee-details-dash.component';

describe('EmployeeDetailsDashComponent', () => {
  let component: EmployeeDetailsDashComponent;
  let fixture: ComponentFixture<EmployeeDetailsDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
