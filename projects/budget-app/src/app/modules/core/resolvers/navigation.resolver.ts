import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";

export type navArray = {route: string, title: string }[];
export const navigationResolver: ResolveFn<navArray> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return [{title: 'resolvedRoute', route: '/test'}];
    };