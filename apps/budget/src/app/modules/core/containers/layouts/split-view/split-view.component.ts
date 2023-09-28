import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { filter } from 'rxjs';
import { inputIsActivationStart } from '../../../guards/route.typeguards';

@Component({
  selector: 'app-split-view',
  templateUrl: './split-view.component.html',
  styleUrls: ['./split-view.component.css'],
  standalone: true,
  imports: [    CommonModule,
    RouterModule,
    IonicModule,]
})
export class SplitViewComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private responsive: BreakpointObserver) {

  }

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;
  @Input()
  branding = '/assets/brand/balance-no-bg.svg'

  @Input()
  navigationRoutes: { route: string, title: string, icon: string }[] = []

  isMobile: boolean = true;

  ngOnInit() {
    var routeData$ = this.activatedRoute.data;

    routeData$.subscribe((data) => {
      this.navigationRoutes = data['navigation']
    })

    this.responsive.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((result) => {


        if (result.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }

      });
      
  }


}
