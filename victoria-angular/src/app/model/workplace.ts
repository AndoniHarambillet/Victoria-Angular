export class Workplace { // TODO: finish this model
  id:String = '';
  level : number = 0;

  mawWorkforce:number=0;
  maxLaborer:number=0;
  wage: number = 0;
  productivity: number = 0;
  productID: string[] = []; // Refers to IDs of ressources created by this
  rawMaterialID:string[] = [];  // Refers to IDs of raw materials used by this
}
