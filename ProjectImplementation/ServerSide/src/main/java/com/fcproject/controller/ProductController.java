package com.fcproject.controller;

import com.fcproject.model.Product;
import com.fcproject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 31/03/16.
 */
@RestController
public class ProductController {

    private ProductService productService;

    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }

    @RequestMapping("/products")
    public Iterable<Product> listAllProducts() {
        return productService.listAllProducts();
    }
}
