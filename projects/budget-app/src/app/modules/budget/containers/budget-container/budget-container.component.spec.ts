import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetContainerComponent } from './budget-container.component';

describe('UserContainerComponent', () => {
  let component: BudgetContainerComponent;
  let fixture: ComponentFixture<BudgetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
