import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  get(userId: string, budgetId: string | undefined = undefined) {
    return of();
  }
}
