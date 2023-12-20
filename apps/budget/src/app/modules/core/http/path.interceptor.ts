import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../../auth/service/auth.service";

@Injectable()
export class PathInterceptor<T> implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("interceptor");
    // Get the auth token from the service.
    // const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', authToken)
    // });

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}