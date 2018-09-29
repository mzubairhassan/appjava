package com.wms.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.wms.app.model.Product;

//cross origin is mentioned so that server allow the incoming request from different source
@CrossOrigin(origins = "http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

	@Query("SELECT p.id,p.prodname,p.type FROM Product p")
	public List<Product> findAllP();
}

