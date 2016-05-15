package com.fcproject.service;

import com.fcproject.model.Productcategory;
import com.fcproject.model.UnitType;
import com.fcproject.repository.ProductcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 15/05/16.
 */

@Service
public class ProductcategoryServiceImpl implements ProductcategoryService {

    ProductcategoryRepository productcategoryRepository;

    @Autowired
    public void setProductcategoryRepository(ProductcategoryRepository productcategoryRepository) {
        this.productcategoryRepository = productcategoryRepository;
    }

    @Override
    public Iterable<Productcategory> listAllProductcateroies() { return productcategoryRepository.findAll(); }

    @Override
    public Productcategory getProductcategoryById(Integer id) { return productcategoryRepository.findOne(id); }

    @Override
    public Productcategory saveProductcategory(Productcategory productcategory) {
        return productcategoryRepository.save(productcategory);
    }
}
