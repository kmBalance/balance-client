import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BudgetDashboardComponent implements OnInit {
  //patients$: Observable<IPatient[]> = new Observable() using custom data source to fetch instead :)
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  upload(t: any): void {
    console.log(t)
  }

}
