import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoignData = {};
  constructor(private authService: AuthService, public router: Router) { }
  post() {
    this.authService.loginUser(this.LoignData);
    /*if (this.authService.authenticated) {
      this.router.navigate(['Home-person']);
    }*/
    /*this.authenticated = this.authService.authenticated;
    this.disauthenticated = this.authService.disauthenticated;*/
  }
  ngOnInit() {
  }

}
