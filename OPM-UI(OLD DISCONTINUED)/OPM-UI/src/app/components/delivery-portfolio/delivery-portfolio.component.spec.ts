import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPortfolioComponent } from './delivery-portfolio.component';

describe('DeliveryPortfolioComponent', () => {
  let component: DeliveryPortfolioComponent;
  let fixture: ComponentFixture<DeliveryPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
