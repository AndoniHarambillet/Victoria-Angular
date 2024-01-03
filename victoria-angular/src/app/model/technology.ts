import {Era} from "./era";

export class Technology{
  id: string = "";
  name: string = "";
  eraCost: Era = Era.EraI; // Base cost of technology
  isRecommanded: boolean = false;
  description: string = "";
  type: string = ""; // "military", "production", or "society"
}
