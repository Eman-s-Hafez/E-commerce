import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce';

  constructor(private spinner: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show(); // Show spinner on HTTP request
    return next.handle(req).pipe(
      finalize(() => this.spinner.hide()) // Hide spinner when the request completes
    );
  }
}
