import { environment } from ".environments/environment";
import { PathInterceptor } from "./path.interceptor";
import { API_HTTP_INTERCEPTORS } from "./token.injection";

export const HttpProviders = [
        { provide: API_HTTP_INTERCEPTORS, useClass: PathInterceptor, multi: true },
        { provide: 'FILE_API_URL', useValue: environment.apis.File }

]