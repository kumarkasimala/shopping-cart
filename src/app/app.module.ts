import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductComponent } from './product/product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneFilterPipe } from './phone-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    ProductComponent,
    CartListComponent,
    FurnitureComponent,
    PhoneComponent,
    PhoneFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'os', component: ProductComponent},
      {path: 'furniture', component: FurnitureComponent},
      {path: 'cartList', component: CartListComponent},
      {path: 'phone', component: PhoneComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
