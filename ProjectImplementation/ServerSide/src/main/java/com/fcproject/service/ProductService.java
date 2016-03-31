package com.fcproject.service;

import com.fcproject.model.Product;

/**
 * Created by ozlemakbas on 31/03/16.
 */

public interface ProductService {
    Iterable<Product> listAllProducts();

    Product getProductById(Integer id);

    Product saveProduct(Product product);
}
