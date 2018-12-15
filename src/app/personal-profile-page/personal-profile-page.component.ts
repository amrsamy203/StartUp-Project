import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import {ActivatedRoute } from '@angular/router';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { FormControlName } from '@angular/forms';
@Component({
  selector: 'app-personal-profile-page',
  templateUrl: './personal-profile-page.component.html',
  styleUrls: ['./personal-profile-page.component.css']
})
export class PersonalProfilePageComponent implements OnInit {
  PerprofileData = {
    imagePath: String
  };
  /*URL = 'http://localhost:3000/auth/fileupload/' + this.authService.ms;*/
  URL = this.authService.path + '/fileupload';
  public uploader: FileUploader = new FileUploader({url: this.URL, itemAlias: 'photo'});
  constructor(public authService: AuthService, public apiService: ApiService, public route: ActivatedRoute) { }
  post() {
    console.log(this.PerprofileData, this.authService.ms);
    this.authService.PerprofileUser(this.PerprofileData, this.authService.ms);
  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log('ImageUpload:uploaded:', item, status, response);
        };
    this.authService.getID();
    this.authService.getiD();
  }

}
