import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
    public auth: AuthServiceService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.isLogin()) {
      const token: string = localStorage.getItem('access_token')
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
        // .set('Content-Type', 'application/x-www-form-urlencoded');
        .set('Content-Type', 'application/json')
      const authRequest = request.clone({ headers: headers })
      return next.handle(authRequest)
    }
    return next.handle(request)
  }

}
