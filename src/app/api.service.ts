import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import {Http} from '@angular/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ms = '';
  messages = [];
  users = [];
  project;
  terms = [];
  projects = [];
  path = 'http://localhost:3000';
  pathImage = '';
  constructor(public http1: Http, private http: HttpClient, public authService: AuthService) { }
  getPerProfile(id) {
    return this.http.get(this.path + '/Preprofile/' + id);
  }
  ///////////////
  PerprofileUser(PerprofileData, id) {
    this.http.post<any>(this.path + '/Perprofile/' + id, PerprofileData).subscribe(res => {
    });
  }
  //////////////////////
  getMessages(userId) {
    this.http.get<any>(this.path + '/posts/' + userId).subscribe(res => {
      this.messages = res;
    });
  }
  postMessage(message) {
    this.http.get(this.path + '/posts', message).subscribe(res => {
    });
  }
  ////////////////////////////
  getUsers() {
    this.http.get<any>(this.path + '/users').subscribe(res => {
      this.users = res;
    });
  }
  /*getAllproject(id: string) {
     this.http.get<any>(this.path + '/Project/' + id).subscribe(res => {
      this.projects = res;
      console.log(this.projects);
    });
  }*/
  /////////////////////////////////////////////
  getProfile() {
    return this.http.get<any>(this.path + '/profile/' + this.authService.ms);
  }
  getID() {
    this.http.get<any>(this.path + '/Perprofile').subscribe(res => {
      this.ms = res;
      console.log(res);
    });
  }
  //////////////////////////
  sendNewProjectData(newProjectData) {
    this.http.post<any>('http://localhost:3000/new-project', newProjectData).subscribe(res => {
    });
  }
  getProject(id: string) {
    this.http1.get('http://localhost:3000/view-project/' + id).subscribe(res => {
      this.project = res.json();
    });
  }
  getAllproject(id: string) {
    this.http1.get(this.path + '/Project/' + id).subscribe(res => {
      this.projects = res.json();
    });
  }
  getProjBus(id: string) {
    this.http1.get(this.path + '/category/' + id).subscribe(res => {
      this.projects = res.json();
      console.log(res);
    });
  }
  getImage(id: string) {
    this.http1.get(this.path + '/getImage/' + id).subscribe(res => {
      this.pathImage = res.json().path;
      console.log(this.pathImage);
    });
  }
  getTerms(id: string) {
    this.http1.get('http://localhost:3000/offer/' + id).subscribe(res => {
      this.terms = res.json();
    });
  }
   ////////////////////////
}
