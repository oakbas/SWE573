package com.fcproject.repository;

import com.fcproject.model.UnitType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@Repository
public interface UnittypeRepository extends CrudRepository<UnitType, Integer> {
}
