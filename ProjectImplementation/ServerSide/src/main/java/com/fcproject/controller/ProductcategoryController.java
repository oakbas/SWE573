package com.fcproject.controller;

import com.fcproject.model.Productcategory;
import com.fcproject.service.ProductcategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 15/05/16.
 */
@RestController
public class ProductcategoryController {

    ProductcategoryService productcategoryService;

    @Autowired
    public void setProductcategoryService(ProductcategoryService productcategoryService) {
        this.productcategoryService = productcategoryService;
    }

    @RequestMapping(value = "/productcategories", method = RequestMethod.GET)
    public Iterable<Productcategory> listAllProductcategories() {
        return productcategoryService.listAllProductcateroies();
    }
}
