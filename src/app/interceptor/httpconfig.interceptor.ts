import { Injectable } from '@angular/core';
import { ErrorDialogService } from '../services/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public errorDialogService: ErrorDialogService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const data = {
        timestamp: new Date().toISOString(),
        status: 200,
        ...request.body
      };
        if (request.body.numberField === 404) {
          data.status = 404;
          this.errorDialogService.openDialog(data);
          return empty();
        } else {
          this.errorDialogService.openDialog(data);
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                // let data = {};
                // data = {
                //     reason: error && error.error.reason ? error.error.reason : '',
                //     status: error.status
                // };
                // this.errorDialogService.openDialog(data);
                return throwError(error);
            }));
    }
}
