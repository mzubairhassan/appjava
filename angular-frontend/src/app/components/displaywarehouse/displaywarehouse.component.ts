import { Component, OnInit } from '@angular/core';
import {WarehousedataService} from '../../services/warehousedata.service';
@Component({
  selector: 'app-displaywarehouse',
  templateUrl: './displaywarehouse.component.html',
  styleUrls: ['./displaywarehouse.component.css']
})
export class DisplaywarehouseComponent implements OnInit {

  constructor(private dataService: WarehousedataService) { }

  
  modelHeader: String = '';     // model header. assinged values when required by any

   warehouseId: Number;       // model variable, a badge showing this id. used in functions below
   warehouseName: String ;   // model variable, to get and set input for name
   warehouseLocation: String;         // model variable, to get and set model input for type
   warehouses = [];           // Golabal product array object, used in table, model for a warehouses
   modelBtn : String;           // simple toggler for model to show in edit mode or add mode

   warehouse = {} as any;     // obj of warehouse assigned when making an obj

  ngOnInit(){
   this.dataService.getAllWarehouses().subscribe(listWarehouses => this.warehouses = listWarehouses);
   
  }

  showAddModel(){
    this.modelBtn = "Add Warehouse";
    this.warehouseName = '';   // set null
    this.warehouseLocation = ''; // set null remove previus values
    this.modelHeader = "Add New Warehouse";

  }

  // model will map to edit 
  showeditModel(warehouse){
    console.log(warehouse);
    this.modelBtn = "Edit Warehouse";
    this.warehouseName = warehouse.warehname;
    this.warehouseLocation = warehouse.location;
    this.warehouseId = warehouse.id;  
    this.modelHeader = "Edit Warehouse";

  }

  // delete product. args product coming from view template
  deleteWarehouse(warehouse)
  {
    this.dataService.deleteWarehouse(warehouse.id).subscribe(msg => console.log(msg));
    this.ngOnInit();;
  }
  // edit warehouse. model button event for edit mode, using above variable value to update. 
  editWarehouseSubmit(){
    this.warehouse.id = this.warehouseId;
    this.warehouse.warehname = this.warehouseName,
    this.warehouse.location = this.warehouseLocation
    this.dataService.updateWarehouse(this.warehouse).subscribe(warehouse => console.log(warehouse));
    this.ngOnInit();
  }
// submit to service for warhouse. 
// get values
  addWarehouseSubmit(){
    this.warehouse.id = this.warehouseId;
    this.warehouse.warehname = this.warehouseName,
    this.warehouse.location = this.warehouseLocation
    this.dataService.addWarehouse(this.warehouse).subscribe(warehouse => this.warehouse.push(warehouse));
    this.ngOnInit();
  }

}
