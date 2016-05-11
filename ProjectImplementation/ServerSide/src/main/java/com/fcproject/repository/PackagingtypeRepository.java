package com.fcproject.repository;

import com.fcproject.model.PackagingType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@Repository
public interface PackagingtypeRepository extends CrudRepository<PackagingType, Integer> {
}
