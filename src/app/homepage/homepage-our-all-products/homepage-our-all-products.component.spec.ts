import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageOurAllProductsComponent } from './homepage-our-all-products.component';

describe('HomepageOurAllProductsComponent', () => {
  let component: HomepageOurAllProductsComponent;
  let fixture: ComponentFixture<HomepageOurAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageOurAllProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageOurAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
