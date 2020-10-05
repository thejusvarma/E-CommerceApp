import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandingPaymentComponent } from './panding-payment.component';

describe('PandingPaymentComponent', () => {
  let component: PandingPaymentComponent;
  let fixture: ComponentFixture<PandingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandingPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
