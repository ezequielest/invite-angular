import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthLogin implements HttpInterceptor {

    constructor(private route: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        
        return next.handle(req).pipe(
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        window.location.href="/#/login";
                        return of(err.message);
                    }
                    
                  }
                
                return throwError(err)
            })
            
        )
    }

}
