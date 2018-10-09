import { Component, OnInit } from '@angular/core';
import { ProductList } from '../mockData/productlist';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  cartlist = [];
  constructor(){
    this.products = new ProductList().getData();
  }

  onSelect(product){
    this.cartlist.push(product);
  }

  ngOnInit() {
  }

}
