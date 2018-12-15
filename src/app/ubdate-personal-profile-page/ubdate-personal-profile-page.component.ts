import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-ubdate-personal-profile-page',
  templateUrl: './ubdate-personal-profile-page.component.html',
  styleUrls: ['./ubdate-personal-profile-page.component.css']
})
export class UbdatePersonalProfilePageComponent implements OnInit {
  constructor(public authService: AuthService, public apiService: ApiService, public route: ActivatedRoute) { }
  PerProfileUb = {};
  post() {
    this.authService.PerprofileUser(this.PerProfileUb, this.authService.ms);
  }
  ngOnInit() {
    /*console.log(this.authService.ms);
    console.log('asas');*/
    this.authService.getID();
    this.authService.getiD();
    const id = this.authService.ms;
    this.apiService.getProfile().subscribe(data => this.PerProfileUb = data);
  }
}
