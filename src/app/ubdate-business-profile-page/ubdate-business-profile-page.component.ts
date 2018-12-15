import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-ubdate-business-profile-page',
  templateUrl: './ubdate-business-profile-page.component.html',
  styleUrls: ['./ubdate-business-profile-page.component.css']
})
export class UbdateBusinessProfilePageComponent implements OnInit {

  constructor(public authService: AuthService, public apiService: ApiService, public route: ActivatedRoute) { }
  BusProfileUb = {};
  post() {
    this.authService.BusprofileUser(this.BusProfileUb, this.authService.ms);
  }
  ngOnInit() {
    this.authService.getID();
    this.authService.getiD();
    const id = this.authService.ms;
    this.apiService.getProfile().subscribe(data => this.BusProfileUb = data);
  }

}
