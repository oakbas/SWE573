package com.fcproject.service;

import com.fcproject.model.SoldProduct;

/**
 * Created by ozlemakbas on 14/05/16.
 */
public interface SoldproductService {
    Iterable<SoldProduct> listAllSoldproducts();

    SoldProduct getSoldProductById(Integer id);

    SoldProduct saveSoldProduct(SoldProduct soldProduct);
}
