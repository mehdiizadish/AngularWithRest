// import { Ingredient } from '../shared/ingredient.model';

export class Product {
  public id: number;
  public name: string;
  public anzic: string;
  public premises: string;
  public owned: string;
  public revenue: number;
  public core: string[] ;
  public optional: string[];
//   public ingredients: Ingredient[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
