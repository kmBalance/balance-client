import { ActivationEnd, ActivationStart } from "@angular/router";

export function inputIsActivationStart(input: any): input is ActivationStart {
    return input instanceof ActivationStart;
  }

  export function inputIsActivationEnd(input: any): input is ActivationEnd {
    return input instanceof ActivationEnd;
  }