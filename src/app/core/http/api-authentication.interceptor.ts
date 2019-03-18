import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Append Header all requests with `Authorization: Bearer {token}`.
 */
@Injectable()
export class ApiAuthenticationInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.credentials) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authenticationService.credentials.token}` }
      });
    }
    return next.handle(request);
  }

  constructor(private authenticationService: AuthenticationService) {}
}
