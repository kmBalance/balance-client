import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { IonTitle } from '@ionic/angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { inputIsActivationEnd, inputIsActivationStart } from '../../guards/route.typeguards';

@Component({
  selector: 'app-base-container',
  templateUrl: './base-container.component.html',
  styleUrls: ['./base-container.component.css']
})
export class BaseContainerComponent {
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  title$ = this.activatedRoute.parent?.title
  ngOnInit() {}

  getAnimation() {
    return 'flyInOut'
  }

}
