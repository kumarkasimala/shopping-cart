import { Component, OnInit, Input } from '@angular/core';
import { FurnitureList } from '../mockData/furniture';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  isFurniture = false;
  @Input() furnitures = [];
  
  constructor() { 
    
    this.furnitures = new FurnitureList().getData();
  }

  ngOnInit() {
  }

}
