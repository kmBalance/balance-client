import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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

  alignmentOptions = {
    'left': 'ion-text-left',
    'center': 'ion-text-center',
    'right' : 'ion-text-right'
  };

  alignment: keyof typeof this.alignmentOptions = 'center';
  
  
  ngOnInit() {
    this.activatedRoute.data.subscribe(({ routes, menuType, alignment }) => {
      this.routes.next(routes ?? this.routes.getValue());
      this.menuType = menuType ?? this.menuType
      this.alignment = alignment ?? this.alignment
    })
    
  }

  go(route: any) {
    this.router.navigate([route.route])
  }

  getClass() {
    return ''
  }
}
