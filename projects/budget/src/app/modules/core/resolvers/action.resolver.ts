import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { NavigationService } from "../service/navigation.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthState, authFeature } from "../../auth/state/auth/auth.reducer";
import { NavigationArray } from "../types/navigation/navigation";


@Injectable()
export class ActionResolver implements Resolve<NavigationArray> {
  constructor(private service: NavigationService, private store: Store<AuthState>) { }

  resolve(): Observable<NavigationArray> | Promise<NavigationArray> | NavigationArray {

    var nav: Observable<NavigationArray> = new Observable();
    this.store.select(authFeature.selectAuth).subscribe( data => {
      nav = this.service.getNavigationRoutes(data);
    })

    return nav;
  }
}