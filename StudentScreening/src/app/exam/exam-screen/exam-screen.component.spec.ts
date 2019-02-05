import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamScreenComponent } from './exam-screen.component';

describe('ExamScreenComponent', () => {
  let component: ExamScreenComponent;
  let fixture: ComponentFixture<ExamScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
