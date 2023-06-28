import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetContainerComponent } from './budget-container.component';

describe('BudgetContainerComponent', () => {
  let component: BudgetContainerComponent;
  let fixture: ComponentFixture<BudgetContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetContainerComponent]
    });
    fixture = TestBed.createComponent(BudgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
