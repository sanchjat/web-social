import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TickerDataService {


  private REST_API_SERVER = "/api/jobs/job_opening_trends.json?api_key=sidazad&company=";
  private REST_SKILL_SERVER = "/api/jobs/tech_stats.json?api_key=sidazad&technology=";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(ticker){
    const headers = new HttpHeaders();
    console.log(ticker)
    var url = this.REST_API_SERVER + ticker
    return this.httpClient.get(url, {headers: {"Host":"api.revealera.com"}}).pipe(catchError(this.handleError));
  }

  public getTechnologyOptions(){
    const headers = new HttpHeaders();
    var url = "/api/jobs/technologies.json?api_key=sidazad"
    return this.httpClient.get(url, {headers: {"Host":"api.revealera.com"}}).pipe(catchError(this.handleError));
  } 
  

  public getTrikerOptions(){
    const headers = new HttpHeaders();
    var url = "/api//jobs/companies.json?api_key=sidazad"
    return this.httpClient.get(url, {headers: {"Host":"api.revealera.com"}}).pipe(catchError(this.handleError));
  } 



  public getTechnology(technology){
    const headers = new HttpHeaders();
    console.log(technology)
    var url = this.REST_SKILL_SERVER + technology
    return this.httpClient.get(url, {headers: {"Host":"api.revealera.com"}}).pipe(catchError(this.handleError));
  } 

}
