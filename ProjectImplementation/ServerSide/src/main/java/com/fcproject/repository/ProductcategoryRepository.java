package com.fcproject.repository;

import com.fcproject.model.Productcategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 15/05/16.
 */

@Repository
public interface ProductcategoryRepository extends CrudRepository<Productcategory, Integer>{
}
