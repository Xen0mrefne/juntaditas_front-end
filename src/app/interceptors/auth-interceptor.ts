import { Injectable, Provider } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let interceptedReq = req.clone();

    console.log("Auth token: ",this.authService.token)
    if (this.authService.token !== "") {
      interceptedReq = req.clone({
        headers: req.headers.set('Authorization', this.authService.token)
      });
    }

    console.log("Intercepted Req: ", interceptedReq)
    return next.handle(interceptedReq).pipe(
      tap({
        error: ({error}) => {
          if (error.status === 401) {
            if (this.authService.token !== "") this.authService.logOut();

            this.router.navigate(["login"])
          }
        }
      })
    )
  }


}

export const interceptorProvider: Provider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
}]