import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStudentDetailComponent } from './staff-student-detail.component';

describe('StaffStudentDetailComponent', () => {
  let component: StaffStudentDetailComponent;
  let fixture: ComponentFixture<StaffStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
