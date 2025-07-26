import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModifyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ✅ Modify the request
    const modifiedReq = req.clone({
      setHeaders: {
        'Authorization': 'Bearer FAKE-TOKEN',
        'X-Custom-Header': 'AngularInterceptor'
      },
    });
    return next.handle(modifiedReq).pipe(
      // ✅ Modify the response
      map(event => {
        if (event instanceof HttpResponse) {
          const modifiedBody = {
            ...event.body
          };
          return event.clone({ body: modifiedBody });
        }
        return event;
      })
    );
  }
}
