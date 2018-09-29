import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class ProductdataService {

  private url = "http://localhost:8080";
   
  constructor(private http: Http) { }
   
 // get warehouse
  getAllProducts(){
    console.log("service hit");
     
    return this.http.get(this.url+'/product/getall').map(res => res.json());
  }

  // add warehouse
  addProduct(product){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url+'/product/add', product, { headers: header })
      .map(res => res.json());
  }
 // delete warehouse
  deleteProduct(id){
      let header = new Headers();
    
    return this.http.delete(this.url+'/product/delete/'+id);
  }

// update warehouse
  updateProduct(product){
      let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url+'/product/updateProduct', product, { headers: header })
      .map(res => res.json());

  }

}
