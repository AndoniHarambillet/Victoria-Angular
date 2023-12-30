import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsDisplayComponent } from './country-stats-display.component';

describe('CountryStatsDisplayComponent', () => {
  let component: CountryStatsDisplayComponent;
  let fixture: ComponentFixture<CountryStatsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStatsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryStatsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
