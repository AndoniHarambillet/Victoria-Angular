import {Culture} from "./culture";
import {Religion} from "./religion";
import {Profession} from "./profession";
// pop stands for Part Of Population
export class Pop{
  isReligiouslyDiscrimiated: boolean = false;
  isCulturallyDiscrimiated: boolean = false;
  politicalImplication: number = 0; // ranges from 0 to 1 (0 to 100%)
  loyalists:number = 0;
  radicals:number = 0;
  politicalStrength:number = 0;

  profession:Profession = new Profession();
  jobSatisfactionScore:number = 0;

  culture: Culture | undefined;
  religions:Religion | undefined;
}
