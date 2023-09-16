import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../../service/budget.service';
import { UserBudgetFacade } from '../../state/userBudget.facade';
import { IBudget } from '../../../core/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   budget!: IBudget;
  constructor(private userBudgetFacade: UserBudgetFacade) {}

  ngOnInit() {
    this.userBudgetFacade.loadBudget();
    this.userBudgetFacade.budget$.subscribe(data => {
      this.budget = data;
    })
  }

}
