import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAggregateContainerComponent } from './budget-aggregate-container.component';

describe('BudgetAggregateContainerComponent', () => {
  let component: BudgetAggregateContainerComponent;
  let fixture: ComponentFixture<BudgetAggregateContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetAggregateContainerComponent]
    });
    fixture = TestBed.createComponent(BudgetAggregateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
