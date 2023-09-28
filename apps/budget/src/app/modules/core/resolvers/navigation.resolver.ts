import { Injectable, inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { NavigationService } from "../services/navigation/navigation.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthState, authFeature } from "../../auth/state/auth/auth.reducer";
import { NavigationArray } from "../types/navigation/navigation";


@Injectable()
export class NavigationResolver implements Resolve<NavigationArray> {
  constructor(private service: NavigationService, private store: Store<AuthState>) { }

  resolve(): Observable<NavigationArray> {
    console.log("Navigation Resolver")
    var nav: Observable<NavigationArray> = new Observable();
    this.store.select(authFeature.selectAuth).subscribe(data => {
      nav = this.service.getNavigationRoutes(data);
    })

    return nav;
  }
}