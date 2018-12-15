import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-business-porfile-page',
  templateUrl: './business-porfile-page.component.html',
  styleUrls: ['./business-porfile-page.component.css']
})

export class BusinessPorfilePageComponent implements OnInit {
  BusprofileData = {
    /*CompanyName: String,
    ManagerName: String,
    CompanyHeadquarters: String,
    CompanyPhone: String,
    Brief: String,*/
    interest: []
  };
  constructor(private authService: AuthService) { }
  array = [
    {name: 'Competeive programing', checked: false},
    {name: 'Trade', checked: false},
    {name: 'Business', checked: false},
    {name: 'Technology', checked: false},
    {name: 'Oil Rrecyclig', checked: false},
    {name: 'Oil research', checked: false}
  ];
  post() {
      this.array.forEach(element => {
        if (element.checked) {
          this.BusprofileData.interest.push(element);
      }
    });
    console.log(this.BusprofileData, this.authService.ms);
    this.authService.BusprofileUser(this.BusprofileData, this.authService.ms);
  }
  ngOnInit() {
    this.authService.getID();
    this.authService.getiD();
  }

}
