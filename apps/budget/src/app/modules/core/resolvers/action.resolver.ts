import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { NavigationService } from "../services/navigation/navigation.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthState, authFeature } from "../../auth/state/auth/auth.reducer";
import { Action, NavigationArray } from "../types/navigation/navigation";
import { ActionService } from "../services/action/action.service";


@Injectable()
export class ActionResolver implements Resolve<Array<Action<any,any>>> {
  constructor(private service: ActionService, private store: Store<AuthState>) { }

  resolve(): Observable<Array<Action<any,any>>> | Promise<Array<Action<any,any>>> | Array<Action<any,any>> {

    var nav: Observable<Array<Action<any,any>>> = new Observable();
    
    this.store.select(authFeature.selectAuth).subscribe( data => {
     
      nav = this.service.getActions(data);
    })
    return nav;
  }
}