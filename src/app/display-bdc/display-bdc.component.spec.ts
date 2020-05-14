import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBdcComponent } from './display-bdc.component';

describe('DisplayBdcComponent', () => {
  let component: DisplayBdcComponent;
  let fixture: ComponentFixture<DisplayBdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
