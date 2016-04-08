package com.fcproject.repository;

import com.fcproject.model.Producer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Repository
public interface ProducerRepository extends CrudRepository<Producer, Integer>{
}
