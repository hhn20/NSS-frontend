import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBdcComponent } from './update-bdc.component';

describe('UpdateBdcComponent', () => {
  let component: UpdateBdcComponent;
  let fixture: ComponentFixture<UpdateBdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
