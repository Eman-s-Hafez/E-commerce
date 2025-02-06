import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Show the spinner when an HTTP request starts
    this.spinner.show();

    // Handle the request and hide the spinner when it completes
    return next.handle(req).pipe(
      finalize(() => {
        // Hide the spinner when the request completes (success or error)
        this.spinner.hide();
      })
    );
  }
}