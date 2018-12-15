import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.css']
})
export class HomePersonComponent implements OnInit {

  constructor(public authService: AuthService, public route: ActivatedRoute, public apiService: ApiService) { }
  ngOnInit() {
    /*const id = this.authService._id;*/
    console.log(this.authService._id);
    this.apiService.getAllproject(this.authService._id);
    this.apiService.getImage(this.authService._id);
  }
}
