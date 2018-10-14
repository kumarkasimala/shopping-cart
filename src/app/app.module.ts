import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductComponent } from './product/product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    ProductComponent,
    CartListComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot([
      {path: 'phone', component: PhoneComponent},
      {path: 'product', component: ProductComponent},
      {path: 'cart', component: CartListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
