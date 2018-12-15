import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id;
  type;
  constructor(public authService: AuthService, public route: ActivatedRoute, public apiService: ApiService) { }
  ngOnInit() {
    /*this.id = this.authService.identifier.id;
    this.type = this.authService.identifier.type;*/
  }

}
