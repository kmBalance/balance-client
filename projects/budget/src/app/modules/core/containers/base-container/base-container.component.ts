import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IonTitle } from '@ionic/angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-base-container',
  templateUrl: './base-container.component.html',
  styleUrls: ['./base-container.component.css']
})
export class BaseContainerComponent {
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  title$ = this.activatedRoute.parent?.title
  ngOnInit() {
    this.title$?.subscribe(data => {
      console.log(this.router)
      console.log(this.activatedRoute.parent)
    })
    this.activatedRoute.children[0].title.subscribe(data => console.log(data))
  }

}
