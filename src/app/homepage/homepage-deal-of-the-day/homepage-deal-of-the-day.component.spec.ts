import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDealOfTheDayComponent } from './homepage-deal-of-the-day.component';

describe('HomepageDealOfTheDayComponent', () => {
  let component: HomepageDealOfTheDayComponent;
  let fixture: ComponentFixture<HomepageDealOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageDealOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDealOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
