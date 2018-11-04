import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem;
  quantity = 1;
  pTotalPrice;

  constructor() {
    this.cartItem = null;
  }
  decQuantity() {
    if (this.quantity > 0) {
    this.quantity--;
    }
    this.pTotalPrice = this.quantity * this.cartItem.price;
  }
  incQuantity() {
    this.quantity++;
    this.pTotalPrice = this.quantity * this.cartItem.price;
  }
  pTotPrice() {
    this.pTotalPrice = this.quantity * this.cartItem.price;
  }
  ngOnInit() {
  }

}
