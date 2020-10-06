import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMidCarouselComponent } from './homepage-mid-carousel.component';

describe('HomepageMidCarouselComponent', () => {
  let component: HomepageMidCarouselComponent;
  let fixture: ComponentFixture<HomepageMidCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMidCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMidCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
