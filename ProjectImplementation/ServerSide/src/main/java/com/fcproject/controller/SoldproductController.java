package com.fcproject.controller;

import com.fcproject.model.SoldProduct;
import com.fcproject.service.SoldproductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 14/05/16.
 */

@RestController
public class SoldproductController {

    private SoldproductService soldproductService;

    @Autowired
    public void setSoldproductService(SoldproductService soldproductService) {
        this.soldproductService = soldproductService;
    }

    @RequestMapping("/soldproducts")
    public Iterable<SoldProduct> listAllProducts() {
        return soldproductService.listAllSoldproducts();
    }

    @RequestMapping(value = "/addsoldproduct", method = RequestMethod.POST)
    public void saveProduct(@RequestBody SoldProduct soldProduct) {
        soldproductService.saveSoldProduct(soldProduct);
    }
}
