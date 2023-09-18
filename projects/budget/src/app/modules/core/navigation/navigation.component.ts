import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationArray } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  routes: NavigationArray = [];

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ routes }) => {
      this.routes = routes
    })
  }
}
