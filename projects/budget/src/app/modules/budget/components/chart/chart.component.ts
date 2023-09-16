import { Component, Input } from '@angular/core';
import { IBudget } from '../../../core/types';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input('budget') budget: IBudget  = {
    id: 0,
    amount: 0,
    budgetAmount: 0,
    budgetInterval: 'MONTHLY',
    budgetType: 'REGULAR',
    performance: 'UNDER',
    budgetDate: new Date()
  };

  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    }
  ];
  
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  // constructor() {
  //   Object.assign(this, { multi });
  // }

  onSelect(event:any) {
    console.log(event);
  }
}
