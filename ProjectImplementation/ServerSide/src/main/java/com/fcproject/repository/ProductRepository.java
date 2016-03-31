package com.fcproject.repository;

import com.fcproject.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 31/03/16.
 */
@Repository
public interface ProductRepository extends CrudRepository<Product, Integer>{
}
