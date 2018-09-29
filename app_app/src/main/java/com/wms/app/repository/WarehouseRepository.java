package com.wms.app.repository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wms.app.model.Warehouse;

// cross origin is mentioned so that server allow the incoming request from different source
@CrossOrigin(origins = "http://localhost:4200")
public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {

}

