import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitCreatorComponent } from './trait-creator.component';

describe('TraitCreatorComponent', () => {
  let component: TraitCreatorComponent;
  let fixture: ComponentFixture<TraitCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
