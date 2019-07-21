import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  private userName: string;
  private url="http://localhost:8011/clientcompanies-ws/clientcompanies"
  private message: string = "";

  constructor(private keycloakService: KeycloakService, private http: HttpClient) {

  }
  ngOnInit() {
    this.userName = this.keycloakService.getUsername();
  }

  onLogout() {
    this.keycloakService.logout();
  }

  onServiceCall() {
    this.http.get(this.url).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  }
