import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideInAnimation } from 'projects/budget-app/src/assets/route-transition-animations';

@Component({
  selector: 'app-budget-container',
  templateUrl: './budget-container.component.html',
  styleUrls: ['./budget-container.component.css'],
  animations: [
    slideInAnimation
  ],
})
export class BudgetContainerComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
