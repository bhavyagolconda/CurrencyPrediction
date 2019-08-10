 import { Component, OnInit } from '@angular/core';
 import  { CountryService} from '../country.service';
 import {CountryClass} from '../country';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

private country :CountryClass;
private pcountry:CountryClass[]=[];
  constructor(private countryservice: CountryService) { }

  ngOnInit() {
  }
 getPrice(countryname : string):void{
   this.country=this.countryservice.getPrice(countryname);
   this.country.searchTime=(new Date()).toTimeString();
   this.pcountry.push(this.country);
  }
  

}
//<td *ngFor="let p of pastcountry.values">{{p}}</td>
