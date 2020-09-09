import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestLounchComponent } from './latest-lounch.component';

describe('LatestLounchComponent', () => {
  let component: LatestLounchComponent;
  let fixture: ComponentFixture<LatestLounchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestLounchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestLounchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
