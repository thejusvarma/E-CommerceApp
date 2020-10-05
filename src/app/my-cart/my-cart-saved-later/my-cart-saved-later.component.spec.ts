import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartSavedLaterComponent } from './my-cart-saved-later.component';

describe('MyCartSavedLaterComponent', () => {
  let component: MyCartSavedLaterComponent;
  let fixture: ComponentFixture<MyCartSavedLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartSavedLaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartSavedLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
