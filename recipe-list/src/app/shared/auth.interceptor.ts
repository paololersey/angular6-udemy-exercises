import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intercepted!', req);
        // const copiedRequest = req.clone({ headers: req.headers.set('', '') });
        const copiedRequest = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
        return next.handle(copiedRequest);
    }
}
