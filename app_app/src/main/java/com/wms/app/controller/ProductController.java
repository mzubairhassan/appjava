package com.wms.app.controller;

import com.wms.app.exception.ResourceNotFoundException;
import com.wms.app.model.Product;
import com.wms.app.repository.ProductRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

//cross origin is mentioned so that server allow the incoming request from different source

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    // Get All Products
    // jpa builtin func.
    @GetMapping("/getall")
    public List<Product> getAllProducts() {
    	return productRepository.findAll();
        
        
        
        
    }

    // Create a new Product
    // get's json and maps to product class obj
    // save to Product table
    @PostMapping("/add")
    public Product createProduct(@Valid @RequestBody Product product) {
        return productRepository.save(product);
    }

    // Get a Single Product
    // get id of product and return that product
    @GetMapping("/getproduct/{id}")
    public Product getProductById(@PathVariable(value = "id") Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", productId));
    }
    
    // Update a Product
    // update product details 
    // get json map it to Product obj. 
    // and set type and product name
    // save
    @PostMapping("/updateProduct")
    public Product updateProduct(@Valid @RequestBody Product productDetails) {
    	System.out.println("::::::::"+productDetails);
        Product product = productRepository.findById(productDetails.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", productDetails.getId()));
        
        product.setProdname(productDetails.getProdname());
        product.setType(productDetails.getType());

        Product updatedProduct = productRepository.save(product);
        return updatedProduct;
    }

    // Delete a Product
    // get id on path
    // delete via jpa namely build in functions.
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(value = "id") Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", productId));

        productRepository.delete(product);

        return ResponseEntity.ok().build();
    }
}