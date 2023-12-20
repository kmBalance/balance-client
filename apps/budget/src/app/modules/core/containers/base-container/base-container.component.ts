import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { routerTransition } from '../../animations';

@Component({
  selector: 'app-base-container',
  templateUrl: './base-container.component.html',
  styleUrls: ['./base-container.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BaseContainerComponent {
  
  constructor(private activatedRoute: ActivatedRoute) {}

  title$ = this.activatedRoute.parent?.title
  ngOnInit() {}


}
