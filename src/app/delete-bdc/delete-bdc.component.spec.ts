import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBdcComponent } from './delete-bdc.component';

describe('DeleteBdcComponent', () => {
  let component: DeleteBdcComponent;
  let fixture: ComponentFixture<DeleteBdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
