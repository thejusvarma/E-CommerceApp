import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageImageCarouselComponent } from './homepage-image-carousel.component';

describe('HomepageImageCarouselComponent', () => {
  let component: HomepageImageCarouselComponent;
  let fixture: ComponentFixture<HomepageImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageImageCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
