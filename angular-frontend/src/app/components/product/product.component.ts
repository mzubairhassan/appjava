import { Component, OnInit } from '@angular/core';
import {ProductdataService} from '../../services/productdata.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dataService: ProductdataService) {}

   
    modelHeader: String = "";    

   prodId: number;       // model variable, a badge showing this id. used in functions below
   prodName: string ;   // model variable, to get and set input for name
   prodType: string;         // model variable, to get and set model input for type
   products = [];           // Golabal product array object, used in table, model for a product
   modelBtn : String;           // simple toggler for model to show in edit mode or add mode

   product = {} as any;    // obj assigned when needed to send values to product service
   

   // getting values for all products and showing in table via angular two-way binding
  ngOnInit(){
   this.dataService.getAllProducts().subscribe(listProducts => this.products = listProducts);
   
  }
// open model in add mode
  showAddModel(){
    this.modelBtn = "Add Product";
    this.prodName = '';
    this.prodType = '';
   this.modelHeader = "Add New Product"; 
  }

  // open model in edit mode
  showeditModel(product){
    console.log(product);
    this.modelBtn = "Edit Product";
    this.prodName = product.prodname;
    this.prodType = product.type;
    this.prodId = product.id; 
    this.modelHeader = "Edit Product"; 
  }

  // delete product. args product coming from view template
  deleteProduct(product)
  {
    
    this.dataService.deleteProduct(product.id).subscribe(msg => console.log(msg));
    this.ngOnInit();;
    
  }
  // edit product. model button event for edit mode, using above variable value to update. 
  editProdSubmit(){
    this.product.id = this.prodId;
    this.product.prodname = this.prodName,
    this.product.type = this.prodType
    this.dataService.updateProduct(this.product).subscribe(product => console.log(product));
    this.ngOnInit();
    // add call to service
    // call ngOnIntit to update list
  }
// add product. model button event for add mode, using above variable value to add. 
  addProdSubmit(){

    this.product.id = this.prodId;
    this.product.prodname = this.prodName,
    this.product.type = this.prodType
    this.dataService.addProduct(this.product).subscribe(product => this.products.push(product));
    //this.ngOnInit();
  }


}
