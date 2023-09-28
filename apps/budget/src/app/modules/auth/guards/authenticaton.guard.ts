import { Injectable } from "@angular/core";
import { MsalGuard } from "@azure/msal-angular";

@Injectable()
export class AuthenticationGuard extends MsalGuard {
    
}