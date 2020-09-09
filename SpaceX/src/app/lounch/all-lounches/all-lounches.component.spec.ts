import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLounchesComponent } from './all-lounches.component';

describe('AllLounchesComponent', () => {
  let component: AllLounchesComponent;
  let fixture: ComponentFixture<AllLounchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLounchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLounchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
