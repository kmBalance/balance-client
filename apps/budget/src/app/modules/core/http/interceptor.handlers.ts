import { HttpBackend, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { InjectionToken, Injector } from '@angular/core';
import { Observable } from 'rxjs';

export class CustomInterceptHandler implements HttpHandler {
    constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {}
  
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
      return this.interceptor.intercept(req, this.next);
    }
  }
  
  export class CustomInterceptorHandler implements HttpHandler {
    private chain: HttpHandler | null = null;
  
    constructor(private backend: HttpBackend, private injector: Injector, private interceptors: InjectionToken<HttpInterceptor[]>) {}
  
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
      if (this.chain === null) {
        const interceptors = this.injector.get(this.interceptors, []);
        this.chain = interceptors.reduceRight((next, interceptor) => new CustomInterceptHandler(next, interceptor), this.backend);
      }
  
      return this.chain.handle(req);
    }
  }