import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root1',
  templateUrl: './search.html',
  styleUrls: ['./app.component.css', './css/magnific-popup.min.css', './css/dataTables.bootstrap4.min.css', './css/styles.css', './css/custom.css']
})
export class AppComponent {
  title = 'web-social';
  selectedValue = null;
  
  
  myData = [
          [  1000,      400],
          [1170,      460],
          [ 660,       1120],
          [1030,      540]
        ]
        myType = "LineChart"
    sortOptions = [
        {
            value: 'option1',
            display: 'First option'
        },
        {
            value: 'option2',
            display: 'Second option'
        },
                {
            value: 'option2',
            display: 'Second option'
        },
        {
            value: 'option2',
            display: 'Second option'
        }
    ];
    
    selectedOption = this.sortOptions[0]

    showOption(): void {
        this.myData = [
          [  1000,      500],
          [1170,      560],
          [ 660,       5120],
          [1030,      5540]
        ]
this.lineChartData= [
        { data: [850, 720, 780, 750, 770, 750], label: 'Jobs' },
        { data: [855, 70, 730, 450, 770, 650], label: 'layoff' },
      ];

    }




      lineChartData: ChartDataSets[] = [
        { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
      ];

      lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

      lineChartOptions = {
        responsive: true,
      };

      lineChartColors: Color[] = [
        {
          borderColor: "white",
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ];

      lineChartLegend = true;
      lineChartPlugins = [];
      lineChartType = "line";


}
