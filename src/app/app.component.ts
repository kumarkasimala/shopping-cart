import { Component } from '@angular/core';

//import { FurnitureList } from './mockData/furniture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  
  pendingCarts=[];

  onActivate(component) {
    if(component.constructor.name === "CartListComponent"){
      for(var i in this.pendingCarts){
        component.addNewItem(this.pendingCarts[i]);
      }
      component.clear.subscribe(function(data){
        if(data !== true) {
        this.pendingCarts = [];
        } else {
          this.pendingCarts.splice(this.pendingCarts.indexOf(data[0]),1)
        }
      }.bind(this));
    } else if(component.addTo){
      component.addTo.subscribe(this.updateCartList.bind(this));
    }
  }

  updateCartList(product){
      this.pendingCarts.push(product);
  }
}
