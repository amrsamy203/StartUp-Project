import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    type: String
  };
  type;
  constructor(public authService: AuthService, public route: ActivatedRoute, public apiService: ApiService) { }
  post() {
    this.authService.registerUser(this.registerData);
  }
  ngOnInit() {
    this.type = this.route.snapshot.params.type;
    this.registerData.type = this.route.snapshot.params.type;
  }

}
