import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';   
import { Observable } from 'rxjs/Observable';    // as result is in promise so functions can be subscribed


@Injectable()
export class InventorydataService {
 private url = "http://localhost:8080";
  constructor(private http: Http) { }

 // map to server 
 // get single record against product id and ware house id
	getSingleInventory(prodId, wareId){
    
	    return this.http.get(this.url+'/inventory/getsingle/'+prodId+'/'+wareId)
     	 .map(res => res.json());

  	}
// map to server 
 // update product quantity. 
 // making demoobj to hide from urls.
 // it get map to server custom object
 // headers are to set content type with url
  	updateProductQ(prodId, wareId, qty){
    	 let demoObj =  {
    		"prodId" : prodId,
    		"wareId" : wareId,
    		"qty" : qty
    	};
    	let header = new Headers();
    	header.append('Content-Type', 'application/json');

	    return this.http.put(this.url+'/inventory/updateqty', demoObj, { headers: header })
     	 .map(res => res.json());

  	}
}
