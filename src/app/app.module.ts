import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {KeycloakService, KeycloakAngularModule} from "keycloak-angular";
import { RouterModule, Routes } from "@angular/router";

import {initializer} from './utils/app-init';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { AppAuthGuardService } from './auth/appauthguard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/aut-interceptor.service';

const routes: Routes = [
  {path: "", component: MessageComponent, canActivate: [AppAuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
