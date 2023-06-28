import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-toolbar-layout',
  templateUrl: './toolbar-layout.component.html',
  styleUrls: ['./toolbar-layout.component.css']
})
export class ToolbarLayoutComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    
  }
  @Input()
  branding = '/assets/brand/balance-no-bg.svg'

  @Input()
  navigationRoutes: { route: string, title: string }[] = []

  ngOnInit() {
    
    var routeData$ = this.activatedRoute.data;

    if(this.navigationRoutes.length == 0) {
      routeData$.subscribe(data => {
        this.navigationRoutes = data['navigation']
      })
    }
  }


}
