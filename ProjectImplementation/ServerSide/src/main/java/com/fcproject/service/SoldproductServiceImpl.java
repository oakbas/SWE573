package com.fcproject.service;

import com.fcproject.model.SoldProduct;
import com.fcproject.repository.SoldproductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 14/05/16.
 */

@Service
public class SoldproductServiceImpl implements SoldproductService{

    SoldproductRepository soldproductRepository;

    @Autowired
    public void setSoldproductRepository(SoldproductRepository soldproductRepository) {
        this.soldproductRepository = soldproductRepository;
    }

    @Override
    public Iterable<SoldProduct> listAllSoldproducts() { return soldproductRepository.findAll(); }

    @Override
    public SoldProduct getSoldProductById(Integer id) { return soldproductRepository.findOne(id); }

    @Override
    public SoldProduct saveSoldProduct(SoldProduct soldProduct) { return soldproductRepository.save(soldProduct); }
}
