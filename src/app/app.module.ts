import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { GoogleChartsModule } from 'angular-google-charts';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table' 
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ChartsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    AuthModule.forRoot({
      domain: 'aurodata.auth0.com',
      clientId: 'AMReZbQUHCUuRIo72TMFfMXE2qs5IszM'
    }),


  ],
  providers: [],
  bootstrap: [AuthButtonComponent]
})
export class AppModule { }
