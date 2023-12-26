import { Religion } from './religion';
import { Profession } from './profession';
import { Culture } from './culture';
export class Population { // TODO: finish this model
  id:String = '';
  totalAmount:number = 0;
  loyalty:number = 0;
  literacyRate:number=0;
  politicalStrength:number=0;
  qualifications:number=0;
  culture:Culture[] = [];
  religions:Religion[] = [];
  jobSatisfactionScore:number = 0;
  socialStatus:String = "";
  expectedSOL:number = 0;
  profession:Profession = new Profession();
}
