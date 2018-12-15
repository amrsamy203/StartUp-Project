import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import {People} from '../people';
import {Terms} from '../terms';
import { AuthService } from '../auth.service';
import {ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
export interface ProjectType {
  value: string;
  viewValue: string;
}

export interface TermType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})

export class NewProjectComponent implements OnInit {
  projectSize;
  projectData = {
    name: '',
    size: '',
    startDate: Date,
    about: '',
    projectType: '',
    peopleInvolved: [],
    termsNeeded: [],
    creatorId: ''
  };
  name: ''; rule: ''; about: ''; profile: ''; prev_projects: '';
  termType: ''; subject: ''; details: '';

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

  peopleInvolved: People[] = [
  ];

  termsNeeded: Terms[] = [
  ];

  addPerson() {
    this.peopleInvolved.push({name: this.name, rule: this.rule,
       about: this.about, profile: this.profile, prev_projects: '#'});
  }

  addTerm() {
    this.termsNeeded.push({type: this.termType, subject: this.subject, details: this.details});
  }

  deletePerson(person: People) {
    this.peopleInvolved.splice(this.peopleInvolved.findIndex(p => p === person), 1);
  }

  deleteTerm(term: Terms) {
    this.termsNeeded.splice(this.termsNeeded.findIndex(t => t === term), 1);

  }
  constructor(public authService: AuthService, public route: ActivatedRoute, public apiService: ApiService) { }


  post() {
    this.projectData.peopleInvolved = this.peopleInvolved;
    this.projectData.termsNeeded = this.termsNeeded;
    this.projectData.size = this.projectSize;
    this.projectData.creatorId = this.authService._id;
    this.apiService.sendNewProjectData(this.projectData);
  }

  ngOnInit() {
    this.projectSize = 'Small';
  }

  onSizeChange(size: string) {
    this.projectSize = size;
  }

}
