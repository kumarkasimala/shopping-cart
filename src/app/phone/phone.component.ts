import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhoneList } from '../mockData/phonelist';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  phones: any[];
  @Output() addToCart = new EventEmitter<any>() ;

  constructor() {
    this.phones = new PhoneList().getList();

  }
  selectPhone(p) {
    this.addToCart.next(p);
  }

  ngOnInit() {
  }

}
