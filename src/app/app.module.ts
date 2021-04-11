import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { ExpandedAqiComponent } from './components/expanded-aqi/expanded-aqi.component';

import { AirIndexSocketService } from "./services/air-index-socket-service/air-index-socket.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpandedAqiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [AirIndexSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
