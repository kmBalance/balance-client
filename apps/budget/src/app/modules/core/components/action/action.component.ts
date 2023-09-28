import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Action } from '../../types';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  constructor(private activatedRoute: ActivatedRoute) {}

  actions: Array<Action<any,any>> = [];

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ actions }) => {
      this.actions = actions
    })
  }
}
