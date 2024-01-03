import { Component } from '@angular/core';
import { JsonReaderModule } from '../../json-reader/json-reader.module';
import {Country} from "../../model/country";

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent {
  selectedCountryName: string = "France";
  selectedCountry: Country;
  constructor(jsonReaderModule: JsonReaderModule) {
    this.selectedCountry = jsonReaderModule.readJsonFromCountryName(this.selectedCountryName);
  }
}
