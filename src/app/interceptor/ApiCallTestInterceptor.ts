import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";

export class ApiCallBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('endpoint/test')) {
      const payload = {

      };

      return of(new HttpResponse({ status: 200, body: payload }));
    }

    return next.handle(req);
  }
}
