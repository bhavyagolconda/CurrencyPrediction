import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import {CountryService } from  './country.service';
import { ChartComponent } from './chart/chart.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations:[
    AppComponent,
    CountryComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
