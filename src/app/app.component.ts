import { Component } from '@angular/core';
import { ProductList } from './mockData/productlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  products = [];
  cartlist = [];
  isShowCart = false;
  constructor(){
    this.products = new ProductList().getData();
  }

  onSelect(product){
    this.cartlist.push(product);
  }

  showCart(){
    this.isShowCart = true;
  }

  showProducts(){
    this.isShowCart = false;
  }
   
}
