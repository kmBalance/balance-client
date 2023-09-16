import { Component } from '@angular/core';
import { NavigationArray } from '../../types';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  actions: NavigationArray = []
}
