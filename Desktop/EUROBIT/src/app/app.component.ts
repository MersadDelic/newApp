import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EUROBIT';

  constructor(private authService: AuthService, private router: Router) {
  }

  getCurrentUser() {
    if (this.authService.isLoggedIn())
      return this.authService.getCurrentUser();
    return "";
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['login']);
  }
}
