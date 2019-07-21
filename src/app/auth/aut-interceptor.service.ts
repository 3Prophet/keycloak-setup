import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    private token: string;

    constructor(private keycloakService: KeycloakService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        // TODO: Check that request url is not one of that for the externally reached services
        /*
        console.log(request.headers);
        this.keycloakService.getToken().then((result) => {
            this.token = result;
            console.log(result);
        });
        const modifiedRequest = request.clone(
            {
            headers: request.headers.append('Authorization', 'Bearer ' + this.token)
            .append( 'Access-Control-Allow-Origin', 'http://localhost:4200')
            });
            console.log(modifiedRequest.headers);
            console.log(this.token);
            */
        return next.handle(request);
    }

}