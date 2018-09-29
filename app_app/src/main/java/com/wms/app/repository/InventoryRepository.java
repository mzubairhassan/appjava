package com.wms.app.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wms.app.model.Inventory;
import org.springframework.web.bind.annotation.CrossOrigin;

//cross origin is mentioned so that server allow the incoming request from different source
@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
	
	//  namely jpa func. it matched and sense function name
	// takes warehouse id and return data
	public List<Inventory> findByWarehouseId(long warehouseId);
	
	// get query and get asked data, as below.
	 @Query("SELECT w.product.prodname FROM Inventory w WHERE w.warehouse.id = :w_id")
	 public String find(@Param("w_id") long w_id);
	 
	 
	 public Inventory findByProductIdAndWarehouseId(long p_id,long w_id);
	 
	 // no need for custom type
	 // object is used and data is sent directly to client basis on below query
	 // gets product id and warehouse id
	 @Query("SELECT w.product.prodname, w.warehouse.warehname FROM Inventory w WHERE w.warehouse.id = :w_id AND w.product.id = :p_id")
	 public List<Object> findTwo(@Param("p_id") long p_id,@Param("w_id") long w_id);
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

}