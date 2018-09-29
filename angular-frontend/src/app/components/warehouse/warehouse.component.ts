import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor() { }

  private toggleWindow: Boolean;
  ngOnInit() {
  }

 // a toggler to switch componenets to view
  viewWarehouses(){
  	
  		this.toggleWindow = true;	
  	
  }

  viewProdQty(){
  	this.toggleWindow = false;
  }
}
