import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTrendingProductsComponent } from './homepage-trending-products.component';

describe('HomepageTrendingProductsComponent', () => {
  let component: HomepageTrendingProductsComponent;
  let fixture: ComponentFixture<HomepageTrendingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTrendingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTrendingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
