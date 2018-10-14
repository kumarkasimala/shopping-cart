import { Component, OnInit, Input } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input() addToCart: any[];
  constructor() {

  }

  ngOnInit() {
  }

}
