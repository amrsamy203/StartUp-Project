import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';

export interface ProjectType {
  value: string;
  viewValue: string;
}

export interface TermType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})

export class ViewProjectComponent implements OnInit {

  projectTypes: ProjectType[] = [
    {value: 'Competeive programing', viewValue: 'Competeive programing'},
    {value: 'Trade', viewValue: 'Trade'},
    {value: 'Business', viewValue: 'Business'},
    {value: 'Technology', viewValue: 'Technology'},
    {value: 'Oil Rrecyclig', viewValue: 'Oil Rrecyclig'},
    {value: 'Oil research', viewValue: 'Oil research'}
  ];

  termTypes: TermType[] = [
    {value: 'Fund', viewValue: 'Fund'},
    {value: 'HR', viewValue: 'HR'},
    {value: 'Other', viewValue: 'Other'}
  ];

  constructor(public apiService: ApiService, public activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.apiService.getProject(this.activeRoute.snapshot.params.id);
  }


}
