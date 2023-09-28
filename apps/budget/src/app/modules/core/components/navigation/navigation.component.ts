import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationArray } from '../../types';
import { ActivatedRoute, ActivationStart, Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, filter } from 'rxjs';

export type menuType = "PRIMARY" | "SECONDARY"
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  routes: BehaviorSubject<NavigationArray> = new BehaviorSubject<NavigationArray>([]);
  
  menuType: menuType = "PRIMARY";

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ routes, menuType }) => {
      this.routes.next(routes);
      this.menuType = menuType ?? "PRIMARY"
    })
    
  }

  go(route: any) {
    this.router.navigate([route.route])
  }
}
