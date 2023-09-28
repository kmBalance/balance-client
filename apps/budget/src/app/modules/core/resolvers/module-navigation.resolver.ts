import { Injectable, inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationStart, Resolve, ResolveFn, Route, Router, RouterStateSnapshot } from "@angular/router";
import { NavigationService } from "../services/navigation/navigation.service";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthState, authFeature } from "../../auth/state/auth/auth.reducer";
import { NavigationArray } from "../types/navigation/navigation";


@Injectable()
export class ModuleNavigationResolver implements Resolve<NavigationArray> {
  constructor(private service: NavigationService, private store: Store<AuthState>, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<NavigationArray> {
    console.log("Module Navigation Resolver")

    var menu: NavigationArray = [];

    var module = state.url.split("/")[1];
    var baseModuleRoute = route.parent?.routeConfig?.children?.find(el => el.path?.includes(module)) as any;

    if (baseModuleRoute) {
      var children = baseModuleRoute._loadedRoutes[0].children.filter((el: Route) => !!el.path) as Route[]
      children.map(el => {
        menu.push({
          route: `${baseModuleRoute.path}/${el.path}`,
          icon: '',
          title: el.title?.toString() ?? "NEEDS TITLE"
        });
      })
    }
    return of(menu);

  }
}