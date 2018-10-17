import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FurnitureList } from '../mockData/furniture';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  isFurniture = false;
  @Input() furnitures = [];

  @Output() addTo = new EventEmitter<any>();
  
  constructor() { 
    
    this.furnitures = new FurnitureList().getData();
  }

  onClickAddToCart(furniture){
    this.addTo.next(furniture);
  }

  ngOnInit() {
  }

}
