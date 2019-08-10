import { Injectable } from '@angular/core';

import {CountryClass} from './country';
import {COUNTRY} from './countrystock';

@Injectable()
export class CountryService {

  private curr:CountryClass[]=COUNTRY;
  private name;

  constructor() { }

  getPrice( countryname:string): CountryClass{
    for(var i=0;i<this.curr.length;i++)
    {
      if(this.curr[i].countryname == countryname)
        return this.curr[i];
      else
      alert("invalid input -Enter usa/india/london as input");
    }
    this.name=countryname;

  }

/*  addName(countryname : string):void{
  this.name={countryname};
}*/
//this.CountryClass.push(name);

         getName(){
              return this.name;
            }
}
