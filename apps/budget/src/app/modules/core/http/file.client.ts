import { HttpClient, HttpBackend, HTTP_INTERCEPTORS, HttpHandler } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { CustomInterceptorHandler } from "./interceptor.handlers";
import { API_HTTP_INTERCEPTORS } from "./token.injection";
import { ApiHttpClient } from "./base.client";
import { FILE_ENDPOINTS } from "./endpoints/files";


@Injectable()
export class FileHttpClient extends ApiHttpClient<FILE_ENDPOINTS> {
  constructor(handler: HttpHandler) {
    super(handler);
  }
}