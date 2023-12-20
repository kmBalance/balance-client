import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class ApiHttpClient<T extends ENDPOINT> extends HttpClient {
  public baseUrl: string;

  public constructor(handler: HttpHandler) {
    super(handler);

    // Get base url from wherever you like, or provision ApiHttpClient in your AppComponent or some other high level
    // component and set the baseUrl there.
    this.baseUrl = '/api/';
  }

  public typedGet(endpoint: T) {
    return super.get(endpoint.url)
  }
//    public override get(endpoint: T): Observable<any> {
//     return super.get(endpoint.url);
//     // url = this.baseUrl + url;
//     // return super.get(url, options);
//   }
}