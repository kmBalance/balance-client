import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-split-view',
  templateUrl: './split-view.component.html',
  styleUrls: ['./split-view.component.css']
})
export class SplitViewComponent {
  constructor(private activatedRoute: ActivatedRoute, private responsive: BreakpointObserver) {

  }
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

      })
  }


}
