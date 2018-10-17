
export class ProductList{
  data = [];
  constructor(){
    this.data = [
    {"name":"Windows", id:1, company:"Microsoft", price:100, description:"This is oldest operating system"},
    {"name":"Mac", id:2, company:"Apple", price:200, description:"This newest and costlest operating system"}
    ];
 }
 
 getData(){
   return this.data;
 }

}