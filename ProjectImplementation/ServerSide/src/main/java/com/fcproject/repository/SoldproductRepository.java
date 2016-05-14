package com.fcproject.repository;

import com.fcproject.model.SoldProduct;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 14/05/16.
 */

@Repository
public interface SoldproductRepository extends CrudRepository<SoldProduct, Integer> {
}
