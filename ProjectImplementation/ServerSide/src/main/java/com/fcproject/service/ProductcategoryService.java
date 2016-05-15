package com.fcproject.service;

import com.fcproject.model.Productcategory;

/**
 * Created by ozlemakbas on 26/04/16.
 */
public interface ProductcategoryService {
    Iterable<Productcategory> listAllProductcateroies();

    Productcategory getProductcategoryById(Integer id);

    Productcategory saveProductcategory(Productcategory productcategory);
}
