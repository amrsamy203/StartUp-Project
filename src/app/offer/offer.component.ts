import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';

export interface TermType {
  value: string;
  viewValue: string;
}

export interface Terms {
  type: string;
  subject: string;
  details: string;
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent implements OnInit {
  termTypes: TermType[] = [
    {value: 'Fund', viewValue: 'Fund'},
    {value: 'HR', viewValue: 'HR'},
    {value: 'Other', viewValue: 'Other'}
  ];

  termsSelected: Terms[] = [
  ];

  Checked: Boolean[] = [];

  addTerm(term: Terms) {
    console.log('add');
    this.termsSelected.push({type: term.type, subject: term.subject, details: term.details});
  }

  deleteTerm(term: Terms) {
    console.log('delete');
    this.termsSelected.splice(this.termsSelected.findIndex(t => t === term), 1);
  }

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getTerms(this.activeRoute.snapshot.params.id);
  }

  onCheckChange(term: Terms) {
    console.log(term);
    /*
    if (!this.Checked[i]) {
      this.addTerm(this.apiService.terms[i]);
    } else {
      this.deleteTerm(this.apiService.terms[i]);
    }*/
  }

  onSubmitOffer() {
    this.termsSelected.forEach(tr => {
      console.log(tr);
    });
  }
}
