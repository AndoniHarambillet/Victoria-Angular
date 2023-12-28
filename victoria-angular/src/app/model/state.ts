export class State {// TODO: finish this model
  id:String = '';
  name:String = '';
  availableResources: { id: string; amount: number} | undefined; //ID of ressource, and its amount of resource available within this state
  infrastructure: number = 0;
  turnmoil: number = 0;

}
