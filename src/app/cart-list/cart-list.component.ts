import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  
  @Input() cartList = [];
  @Output() clear = new EventEmitter<any>();

  delete(i){
   this.clear.next(this.cartList.splice(i,1));
   }

   addNewItem(product){
    setTimeout( function(){
      this.cartList.push(product);
    }.bind(this),500);
   }
  removeAll(){
    while(this.cartList.length > 0) { this.cartList.pop(); }
    this.clear.next(true);
  }
  constructor() { 

  }

  public trackItem (index: number, item:any) {
    return item.id;
  }

  ngOnInit() {
  }

}
