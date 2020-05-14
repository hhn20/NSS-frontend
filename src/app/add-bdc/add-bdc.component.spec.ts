import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBdcComponent } from './add-bdc.component';

describe('AddBdcComponent', () => {
  let component: AddBdcComponent;
  let fixture: ComponentFixture<AddBdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
