import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  @Input() cartList = [];

  delete(i){
   this.cartList.splice(i,1);
   }

   addNewItem(product){
    this.cartList.push(product);
   }
  removeAll(){
    
    while(this.cartList.length > 0) { this.cartList.pop(); }
  }
  constructor() { 

  }

  ngOnInit() {
  }

}
