package com.fcproject.controller;

import com.fcproject.model.Product;
import com.fcproject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    @RequestMapping(value = "/product/update/{id}", method = RequestMethod.PUT)
    public void updateProduct(@PathVariable("id") int id, @RequestBody Product newProduct) {
        productService.updateProduct(id, newProduct);
    }

    @RequestMapping(value = "/addproduct", method = RequestMethod.POST)
    public void saveProduct(@Valid @RequestBody Product product) {
        productService.saveProduct(product);
    }

    @RequestMapping(value = "/products/{productId}", method = RequestMethod.GET)
    public Product getProduct(@PathVariable("productId") int productId) {
        Product product = productService.getProductById(productId);
        return product;
    }
}
