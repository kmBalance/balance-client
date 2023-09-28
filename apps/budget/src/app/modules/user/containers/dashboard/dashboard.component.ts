import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBudget } from '../../../core/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   budget!: IBudget;
  constructor() {}

  ngOnInit() {
    
  }

}
