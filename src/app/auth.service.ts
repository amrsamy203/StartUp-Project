import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = true;
  ms = '';
  identifier;
  messages = [];
  path = 'http://localhost:3000/auth';
  TOKEN_KEY = 'token';
  ID = 'id';
  Type = 'type';
  userId = '';
  constructor(private http: HttpClient, public route: ActivatedRoute) { }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  get _id() {
    return localStorage.getItem(this.ID);
  }
  get _type() {
    return localStorage.getItem(this.Type);
  }
  get isAuthenticated() {
    /*console.log(localStorage.getItem(this.TOKEN_KEY));*/
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get typeExists() {
    /*console.log(localStorage.getItem(this.TOKEN_KEY));*/
    return !!localStorage.getItem(this.Type);
  }

  get idExists() {
    /*console.log(localStorage.getItem(this.TOKEN_KEY));*/
    return !!localStorage.getItem(this.ID);
  }
  PerprofileUser(PerprofileData, id) {
    this.http.put<any>(this.path + '/Perprofile/' + id, PerprofileData).subscribe(res => {
      /*this.saveToken(res.token);*/
    });
  }
  BusprofileUser(BusprofileData, id) {
    this.http.put<any>(this.path + '/Busprofile/' + id, BusprofileData).subscribe(res => {
      /*this.saveToken(res.token);*/
    });
  }
  UbPerProfile(PerProfileUb, id) {
    this.http.post<any>(this.path + '/Preprofile/' + id, PerProfileUb).subscribe(res => {
      this.saveToken(res.token.userId);
    });
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.Type);
    localStorage.removeItem(this.ID);
  }
  registerUser(registerData) {
    this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
      this.saveToken(res.token);
      console.log(res.token);
    });
  }
  loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
      if (res.message === 'Email or Password invalid') {
         this.authenticated = false;
      } else {
        this.authenticated = true;
      }
      console.log(res);
      this.identifier = res;
      console.log(this.identifier);
      this.saveToken(res.token);
      this.saveID(res.id);
      this.saveType(res.type);
    });
  }
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  saveID(id) {
    localStorage.setItem(this.ID, id);
  }
  saveType(type) {
    localStorage.setItem(this.Type, type);
  }
  getID() {
    this.http.get<any>(this.path + '/register').subscribe(res => {
      this.ms = res;
      console.log(this.ms);
    });
  }
  getiD() {
    this.http.get<any>(this.path + '/Perprofile').subscribe(res => {
      this.ms = res;
      console.log(this.ms);
    });
  }
}
