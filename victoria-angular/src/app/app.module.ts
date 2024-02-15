import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryStatsDisplayComponent } from './ui/country-stats-display/country-stats-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainUiComponent } from './ui/main-ui/main-ui.component';
import { JsonReaderModule } from "./json-reader/json-reader.module";
import {HttpClientModule } from "@angular/common/http";
import { CardsHandlerComponent } from './cards-handler/cards-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryStatsDisplayComponent,
    MainUiComponent,
    CardsHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [JsonReaderModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
