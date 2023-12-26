import { Strata } from './strata';
export class Profession{// TODO: finish this model
  id:String = '';
  name:String ='';
  baseQOL:number = 0;
  wageMultiplier:number = 0;
  baseLiteracyTarget:number= 0;
  dependentIncome:number = 0;
  specialPopEffect:String = '';
  strata:Strata = Strata.lower;
  baseQualificationFactor:number = 0;
  modifierFactors:number = 0;
}
