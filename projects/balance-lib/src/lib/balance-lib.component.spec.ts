import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceLibComponent } from './balance-lib.component';

describe('BalanceLibComponent', () => {
  let component: BalanceLibComponent;
  let fixture: ComponentFixture<BalanceLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceLibComponent]
    });
    fixture = TestBed.createComponent(BalanceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
