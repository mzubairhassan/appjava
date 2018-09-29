package com.wms.app.controller;

import com.wms.app.exception.ResourceNotFoundException;
import com.wms.app.model.Warehouse;
import com.wms.app.repository.WarehouseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@RequestMapping("/warehouse")
@CrossOrigin(origins = "http://localhost:4200")
public class WarehouseController {
	
	
	@Autowired
	WarehouseRepository warehouseRepository;      // jpa repo link

    // Get All Products
	// 
    @GetMapping("/getall")
    public List<Warehouse> getAllWarehouses() {
    	System.out.println("RESULT!!!!!!!!::: " + warehouseRepository.findAll());
        return warehouseRepository.findAll();
    }

    
    
    
    // Create a new Product- get object of type same as Warehouse type. it will map and generate id
    @PostMapping("/add")
    public Warehouse createProduct(@Valid @RequestBody Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    // Get a Single Product
    // get warehouse id on path defined. 
    // return warehouse object requesed against id
    @GetMapping("/single/{id}")
    public Warehouse getProductById(@PathVariable(value = "id") Long warehouseId) {
        return warehouseRepository.findById(warehouseId)
                .orElseThrow(() -> new ResourceNotFoundException("Warehouse", "id", warehouseId));
    }
    // Update a Product
    // gets warehouse data in json map it to Warehouse class obj.
    // data is send from client in format of Warehouse class properties.
    @PutMapping("/updateWarehouse")
    public Warehouse updateProduct(@Valid @RequestBody Warehouse warehouseDetails) {

    	Warehouse warehouse = warehouseRepository.findById(warehouseDetails.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Warehouse", "id", warehouseDetails.getId()));
        
    	warehouse.setWarehname(warehouseDetails.getWarehname());
    	warehouse.setLocation(warehouseDetails.getLocation());

    	Warehouse updatedWarehouse = warehouseRepository.save(warehouse);
        return updatedWarehouse;
    }

    // Delete a warehouse
    // get path id
    // delete via jpa built in func.
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(value = "id") Long warehouseId) {
    	Warehouse warehouse = warehouseRepository.findById(warehouseId)
                .orElseThrow(() -> new ResourceNotFoundException("warehouse", "id", warehouseId));

        warehouseRepository.delete(warehouse);

        return ResponseEntity.ok().build();
    }

}
