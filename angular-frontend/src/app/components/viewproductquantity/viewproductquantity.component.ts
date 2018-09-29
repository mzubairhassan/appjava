import { Component, OnInit } from '@angular/core';
import { InventorydataService } from '../../services/inventorydata.service';
import { ProductdataService } from '../../services/productdata.service';
import { WarehousedataService } from '../../services/warehousedata.service';
@Component({
  selector: 'app-viewproductquantity',
  templateUrl: './viewproductquantity.component.html',
  styleUrls: ['./viewproductquantity.component.css']
})
export class ViewproductquantityComponent implements OnInit {
	
	private productId;  // obj used in view template, two-way binding
	private warehouseId; // obj used in view template, two-way binding
	private productQty; // obj used in view template, two-way binding
	private inventoryObj; 
	products = [];    // list of all products assigned in below
	warehouses = [];   // list of all warehouses assigned in below ngOnInit

  // registering Dependcy Injectoin
  constructor(
              private dataServiceInventory: InventorydataService,
              private dataServiceWarehouse: WarehousedataService,
              private dataServiceProduct: ProductdataService
              ) { }

  ngOnInit() {
  	this.dataServiceProduct.getAllProducts().subscribe(products => this.products = products);
  	this.dataServiceWarehouse.getAllWarehouses().subscribe(warehouses => this.warehouses = warehouses);

	}

  // show in table. 
  // get product id and warehouse id from template. via binding
  viewInventory(){
  	this.dataServiceInventory.getSingleInventory(this.productId, this.warehouseId).subscribe(inventory => this.inventoryObj = inventory);
    console.log(this.inventoryObj);
    console.log(this.productId + "::" + this.warehouseId);
  }

  modelEditQty(){
    this.dataServiceInventory.updateProductQ(this.productId, this.warehouseId, this.productQty).subscribe(msg => console.log(msg));
  }

}
