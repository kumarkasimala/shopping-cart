import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductList } from '../mockData/productlist';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  cartlist = [];
  @Output() addTo = new EventEmitter<any>();

  constructor(){
    this.products = new ProductList().getData();
  }

  onClickAddToCart(product){
    this.addTo.next(product);
  }

  ngOnInit() {
  }

}
