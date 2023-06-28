import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetIncomeComponent } from './budget-income.component';

describe('BudgetIncomeComponent', () => {
  let component: BudgetIncomeComponent;
  let fixture: ComponentFixture<BudgetIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetIncomeComponent]
    });
    fixture = TestBed.createComponent(BudgetIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
