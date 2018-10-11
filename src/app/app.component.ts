import { Component } from '@angular/core';

//import { FurnitureList } from './mockData/furniture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  
  cartListCmp = null;
  pendingCarts=[];

  onActivate(component) {
    if(component.constructor.name === "CartListComponent" && !this.cartListCmp){
      this.cartListCmp = component;
      for(var i in this.pendingCarts){
        this.cartListCmp.addNewItem(this.pendingCarts[i]);
      }
    } else if(component.addTo){
      component.addTo.subscribe(this.updateCartList.bind(this));
    }
  }

  updateCartList(product){
    if(this.cartListCmp) {
      this.cartListCmp.addNewItem(product);
    } else {
      this.pendingCarts.push(product);
    }
  }
}
