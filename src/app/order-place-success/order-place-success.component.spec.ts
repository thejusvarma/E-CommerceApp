import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlaceSuccessComponent } from './order-place-success.component';

describe('OrderPlaceComponent', () => {
  let component: OrderPlaceSuccessComponent;
  let fixture: ComponentFixture<OrderPlaceSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPlaceSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPlaceSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
