import { State } from './state';
import {TotalPopulation} from "./total-population";
import {Market} from "./market";
export class Country{// TODO: finish this model
  id:String = '';
  name:String = '';
  states:State[] = [];
  totalBureaucracy:number = 0;
  totalAuthority:number = 0;
  prestige:number = 0;
  GDP:number = 0;
  rank:number = 0;
  literacy:number = 0;
  market:Market | undefined;
  ownedStates:State[] | undefined;
  totalPopulation:TotalPopulation | undefined;
  countryModifier: string = "";
}
