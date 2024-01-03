import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Country} from "../model/country";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class JsonReaderModule {
  constructor(private http: HttpClient) {
  }
  readJsonFromCountryName(countryName: string): Country{
    const obs = new Observable<Country>(); // //TODO : Set into an observable to add asynchro behaviour
    let country: Country = new Country();
    this.http.get('/assets/' + countryName + '.json').subscribe((temp: any) => {
      console.log(temp);
    });
    return country;
  }
}
