package com.fcproject.service;

import com.fcproject.model.Product;
import com.fcproject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 31/03/16.
 */

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<Product> listAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findOne(id);
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void updateProduct(int id, Product newProduct) {
        Product updatedProduct = productRepository.findOne(id);
        updatedProduct.setUnitAmount(newProduct.getUnitAmount());
        productRepository.save(updatedProduct);
    }
}
