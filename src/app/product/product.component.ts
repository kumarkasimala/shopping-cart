import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductList } from '../mockData/productlist';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() addToCart = new EventEmitter<any>() ;
  title = 'shopping-cart';
  products = [];
  quantity = 0;
  constructor() {
    this.products = new ProductList().getData();
  }

  onSelect(product) {
    this.addToCart.next(product);
  }

  ngOnInit() {
  }

}
