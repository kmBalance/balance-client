import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader } from '@ionic/angular';
@Component({
  selector: 'app-toolbar-layout',
  templateUrl: './toolbar-layout.component.html',
  styleUrls: ['./toolbar-layout.component.css']
})
export class ToolbarLayoutComponent {

  constructor(private activatedRoute: ActivatedRoute, private responsive: BreakpointObserver) {
    
  }
  @Input()
  branding = '/assets/brand/balance-no-bg.svg'

  @Input()
  navigationRoutes: { route: string, title: string, icon: string }[] = []

  isMobile: boolean = true;

  ngOnInit() {
    
    var routeData$ = this.activatedRoute.data;

    // if(this.navigationRoutes.length == 0) {
      routeData$.subscribe(data => {
        this.navigationRoutes = data['navigation']
      })
    // }

    this.responsive.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Small, Breakpoints.Medium])
    .subscribe(result => {
      
      
     if(result.matches) {
      this.isMobile = true;
     } else {
      this.isMobile = false;
     }

    })
  }


}
