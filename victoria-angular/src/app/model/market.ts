import {ProductResource} from "./product-resource";

export class OrderBalance {
  buyOrder: number = 0;
  sellOrder:number = 0; // CAN'T BE 0 TO AVOID ratio BEING UNDEFINED
  ratio: number = 0; // Adjusted to buy/sell orders in market
}

export class Market{
  id:String = '';
  name:String = '';
  resourcesOnMarket: {productResource: ProductResource, orderBalance: OrderBalance} | undefined;
}
