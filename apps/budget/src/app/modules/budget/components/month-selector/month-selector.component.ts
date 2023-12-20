import { Component, Input, Output } from '@angular/core';
import { MONTH, months } from '../../../core/types/time';
import { BehaviorSubject } from 'rxjs';
import { UnionToArray } from '../../../core/types/utility';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.css'],
})
export class MonthSelectorComponent {

  thisMonth = new Date().toLocaleString('default', { month: 'long' });
  months = months;

  @Output() currentMonth$: BehaviorSubject<MONTH> = new BehaviorSubject<MONTH>(
    this.thisMonth as MONTH
  );

  onSelectMonth(month: MONTH) {
    this.currentMonth$.next(month);
  }
}
