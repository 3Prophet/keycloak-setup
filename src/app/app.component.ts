import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  private userName: string;

  constructor(private keycloakService: KeycloakService) {

  }
  ngOnInit() {
    this.userName = this.keycloakService.getUsername();
  }

  onLogout() {
    this.keycloakService.logout();
  }

  }
