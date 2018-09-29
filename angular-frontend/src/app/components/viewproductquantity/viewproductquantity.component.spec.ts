import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductquantityComponent } from './viewproductquantity.component';

describe('ViewproductquantityComponent', () => {
  let component: ViewproductquantityComponent;
  let fixture: ComponentFixture<ViewproductquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproductquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
