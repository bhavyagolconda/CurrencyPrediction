import { Component, OnInit } from '@angular/core';
import  { CountryService} from '../country.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chart=[];

  constructor() { }

  ngOnInit() {
    this.chart=new Chart('canvas',{
      type:"bar",

      // The data for our dataset
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [{
              label: 'USA($)',
              backgroundColor: 'red',
              borderColor: 'teal',
              data: [68.1,70,66,67.5,68.9,69,72],
              fill:false,
              },
          {
              label: 'India(र)',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'purple',
              data: [1,1.2,1.0,1.5,1,1,1],
              fill:false,
          },
        {
          label:'UK(£)',
          backgroundColor:'teal',
          borderColor:'blue',
          data:[90,89,91,96,92,91.2,88],
          fill:false,
        }]
      },
  // Configuration options go here
      options: {
        labels:{
          fontColor:'white',
        }
      }
    })
  }

}
