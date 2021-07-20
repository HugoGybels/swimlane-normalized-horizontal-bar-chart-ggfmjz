import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  multi: any[];
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Normalized Population';

  public greenApave = '#39b54a';
  public orangeApave = '#f89a01';
  public blueApave = '#4285F4';
  public redApave = '#f60204';
  public colorSchemePieChart = {
    domain: [this.greenApave, this.orangeApave, this.blueApave, this.redApave]
  };

  testVar = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 73000000
        },
        {
          name: '2011',
          value: 89400000
        },
        {
          name: '1990',
          value: 62000000
        }
      ]
    },

    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 309000000
        },
        {
          name: '2011',
          value: 311000000
        },
        {
          name: '1990',
          value: 250000000
        }
      ]
    },

    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 50000020
        },
        {
          name: '2011',
          value: 58000000
        },
        {
          name: '1990',
          value: 58000000
        }
      ]
    },
    {
      name: 'UK',
      series: [
        {
          name: '2010',
          value: 62000000
        },
        {
          name: '1990',
          value: 57000000
        }
      ]
    }
  ];


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }
}
