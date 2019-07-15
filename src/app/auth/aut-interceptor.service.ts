import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private keycloakService: KeycloakService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        // TODO: Check that request url is not one of that for the externally reached services

        const modifiedRequest = request.clone(
            {
            headers: request.headers.append('Authorization', 'Bearer ' + this.keycloakService.getToken())
            });
        return next.handle(modifiedRequest);
    }

}