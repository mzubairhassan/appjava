package com.wms.app.controller;

import com.wms.app.exception.ResourceNotFoundException;
import com.wms.app.model.Inventory;
import com.wms.app.model.Product;
import com.wms.app.model.CustomDataInventory;
import com.wms.app.model.CustomQtyUpdate;
import com.wms.app.repository.InventoryRepository;
import com.wms.app.repository.ProductRepository;
import com.wms.app.repository.WarehouseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.validation.Valid;
import java.util.List;

//cross origin is mentioned so that server allow the incoming request from different source
@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:4200")
public class InventoryController {
	
	@Autowired
	InventoryRepository inventoryRepository;    // repo link, auto wired
	ProductRepository productRepository;
	WarehouseRepository warehouseRepository;
	
	
	
	// Get All Products in inventory table. 
	// using builtin jpa func.
    @GetMapping("/getall")
    public List<Inventory> getAllInventories() {
    	
        return inventoryRepository.findAll();
    }
    
    
    // get warehouse products
    // selective warehouse product based on id of warehouse.
    // means all products in warehouse.
    @GetMapping("/warehouseproducts/{id}")
    public List<Inventory> getWarehouseProducts(@PathVariable(value = "id") long warehouseId){
    	
    	
		return inventoryRepository.findByWarehouseId(warehouseId);
    	
    }
 
    
    // CustomDataInventory is class to handle custom input from client
    // so model is created. 
    // It get one record based on warehouse id and product id
    // return all properties of inventory of product
    @GetMapping("/getsingle/{pid}/{wid}")
    public CustomDataInventory getSingleRecord(@PathVariable(value = "pid") Long productId, @PathVariable(value = "wid") Long warehouseId){
    	
    	Inventory inv = inventoryRepository.findByProductIdAndWarehouseId(productId, warehouseId);
    	CustomDataInventory customData = new CustomDataInventory();
    	customData.setAvlqty(inv.getAvlqty());
    	customData.setInstock(inv.getInstock());
    	customData.setMoq(inv.getMoq());
    	customData.setId(inv.getId());
    	customData.setRop(inv.getRop());
    	customData.setQty(inv.getQty());
    	customData.setWarehname(inv.getWarehouse().getWarehname());
    	
		return customData;
    	
    }
    
    // it is put request. 
    // gets customData(class in model package) and maps to client requested data
    // set quantity to specific product id in inventory
    @PutMapping("/updateqty") 
    public Inventory updateProductQuantity(@Valid @RequestBody CustomQtyUpdate customData) {
    	Inventory inv = inventoryRepository.findByProductIdAndWarehouseId(customData.getProdId(), customData.getWareId());
    	inv.setQty(customData.getQty());
    	return inventoryRepository.save(inv);
    }
    
   
    
}
