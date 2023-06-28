import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetExpensesComponent } from './budget-expenses.component';

describe('BudgetExpensesComponent', () => {
  let component: BudgetExpensesComponent;
  let fixture: ComponentFixture<BudgetExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetExpensesComponent]
    });
    fixture = TestBed.createComponent(BudgetExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
