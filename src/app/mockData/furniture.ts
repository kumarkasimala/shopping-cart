//import { Input } from "@angular/core";

export class FurnitureList{
    furnData = [];
    constructor(){
      this.furnData = [
      {"name":"Furniture1", id:"#1", company:"Microsoft", price:100, description:"This is oldest operating system"},
      {"name":"Furniture2", id:"#2", company:"Apple", price:200, description:"This newest and costlest operating system"}
      ];
   }
   
   getData(){
     return this.furnData;
   }
  
  }