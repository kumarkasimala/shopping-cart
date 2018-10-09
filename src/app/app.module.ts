import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductComponent } from './product/product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FurnitureComponent } from './furniture/furniture.component';


@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    ProductComponent,
    CartListComponent,
    FurnitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'product', component: ProductComponent},
      {path:'furniture', component: FurnitureComponent},
      {path:'cartList', component: CartListComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
