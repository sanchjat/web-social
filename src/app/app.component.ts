import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { TickerDataService } from "./ticker-data.service";

import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-root1",
  templateUrl: "./search.html",
  styleUrls: [
    "./app.component.css",
    "./css/magnific-popup.min.css",
    "./css/dataTables.bootstrap4.min.css",
    "./css/custom.css",
    "./css/styles.css"
  ]
})
export class AppComponent implements AfterViewInit {
  title = "web-social";
  selectedValue = null;

  displayedColumns: string[] = ["job_date", "new_jobs", "total_jobs"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSkillSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA); 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private tickerService: TickerDataService) {
  
      var that = this
      this.tickerService
      .getTechnologyOptions()
      .subscribe((data: any[]) => {
        console.log(data);
        
        for (var key in data["technologies"]) {
            that.sortSkillOptions.push(
                    {
                      value: data["technologies"][key],
                      display: data["technologies"][key]
                    })
        }
        
        })

      this.tickerService
      .getTrikerOptions()
      .subscribe((data: any[]) => {
        console.log(data);
        
        for (var key in data) {
            that.sortOptions.push(
                    {
                      value: key,
                      display: data[key]["company_name"] || key
                    })
        }
        
        })

  }

  myData = [[1000, 400], [1170, 460], [660, 1120], [1030, 540]];
  myType = "LineChart";
  sortOptions = [
  ];

  sortSkillOptions = [
  ];

  selectedOption = null;

  selectedSkillOption = null;

  showSkillOption(): void {
  ////////////////////////////
  
    var that = this;
    console.log(this.selectedSkillOption);
    this.tickerService
      .getTechnology(this.selectedSkillOption["value"])
      .subscribe((data: any[]) => {
        console.log(data);

        var new_job_openings = [];
        var total_jobs = [];
        var labels = [];

        var tableData = [];

        for (var key in data) {
          if (!data[key]["% of companies (84 day moving average)"]){
             continue;
          }
          new_job_openings.push(data[key]["% of companies (84 day moving average)"]);
          total_jobs.push(data[key]["% of job openings (84 day moving average)"]);
          labels.push(key);
          tableData.push({
            job_date: key,
            new_jobs: data[key]["% of companies (84 day moving average)"],
            total_jobs: data[key]["% of job openings (84 day moving average)"]
          });
        }
        this.dataSkillSource = new MatTableDataSource<PeriodicElement>(tableData);
        
        that.lineSkillChartData = [
          {
            data: new_job_openings,
            label: "% of companies (84 day moving average)",
            yAxisID: "y-axis-1",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgb(255, 99, 132)",
            fill: false
          },
          {
            data: total_jobs,
            label: "% of job openings (84 day moving average)",
            yAxisID: "y-axis-2",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgb(54, 162, 235)",
            fill: false
          }
        ];
        that.lineSkillChartLabels = labels;
      });
  ////////////////////////////
  }

  showOption(): void {
    var that = this;
    console.log(this.selectedOption);
    this.tickerService
      .sendGetRequest(this.selectedOption["value"])
      .subscribe((data: any[]) => {
        console.log(data);

        var new_job_openings = [];
        var total_jobs = [];
        var labels = [];

        var tableData = [];

        for (var key in data["new_job_openings"]) {
          new_job_openings.push(data["new_job_openings"][key]);
          total_jobs.push(data["total_job_openings"][key]);
          labels.push(key);
          tableData.push({
            job_date: key,
            new_jobs: data["new_job_openings"][key],
            total_jobs: data["total_job_openings"][key]
          });
        }
        this.dataSource = new MatTableDataSource<PeriodicElement>(tableData);
        this.dataSource.paginator = this.paginator;
        that.lineChartData = [
          {
            data: new_job_openings,
            label: "New Jobs",
            yAxisID: "y-axis-1",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgb(255, 99, 132)",
            fill: false
          },
          {
            data: total_jobs,
            label: "Total jobs",
            yAxisID: "y-axis-2",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgb(54, 162, 235)",
            fill: false
          }
        ];
        that.lineChartLabels = labels;
      });
  }

  lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: "Jobs",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      fill: false
    },
    {
      data: [],
      label: "Skills",
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgb(54, 162, 235)",
      fill: false
    }
  ];

  lineSkillChartData: ChartDataSets[] = [
    {
      data: [],
      label: "% of companies (84 day moving average)",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
      fill: false
    },
    {
      data: [],
      label: "Skills",
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgb(54, 162, 235)",
      fill: false
    }
  ];


  lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
  ];
  lineSkillChartLabels: Label[] = [];


  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          position: "left",
          id: "y-axis-1"
        },
        {
          position: "right",
          id: "y-axis-2"
        }
      ]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: "white",
      backgroundColor: "rgba(255,255,0,0.28)"
    }
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = "line";
}

export interface PeriodicElement {
  job_date: string;
  new_jobs: number;
  total_jobs: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { job_date: "----/--/--", new_jobs: 0, total_jobs: 0 }
];
