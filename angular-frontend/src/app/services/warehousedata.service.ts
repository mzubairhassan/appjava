import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable() 
export class WarehousedataService {
	private url = "http://localhost:8080";
   
  constructor(private http: Http) { }
   
 // get all warehouses
  getAllWarehouses(){
    console.log("service hit");
     
    return this.http.get(this.url+'/warehouse/getall').map(res => res.json());
  }

  // add warehouse
  addWarehouse(warehouse){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url+'/warehouse/add', warehouse, { headers: header })
      .map(res => res.json());
  }

// delete warehouse
  deleteWarehouse(id){
      let header = new Headers();
    
    return this.http.delete(this.url+'/warehouse/delete/'+id);
  }
// update warehouse
  updateWarehouse(warehouse){
      let header = new Headers();
    header.append('Content-Type', 'application/json');
    console.log("service ww");
    console.log(warehouse);
    return this.http.put(this.url+'/warehouse/updateWarehouse', warehouse, { headers: header })
      .map(res => res.json());

  }

}
