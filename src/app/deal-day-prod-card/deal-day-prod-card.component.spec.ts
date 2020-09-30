import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDayProdCardComponent } from './deal-day-prod-card.component';

describe('ProductCardComponent', () => {
  let component: DealDayProdCardComponent;
  let fixture: ComponentFixture<DealDayProdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealDayProdCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDayProdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
