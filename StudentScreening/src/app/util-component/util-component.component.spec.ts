import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilComponentComponent } from './util-component.component';

describe('UtilComponentComponent', () => {
  let component: UtilComponentComponent;
  let fixture: ComponentFixture<UtilComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
