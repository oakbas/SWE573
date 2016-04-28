package com.fcproject.repository;

import com.fcproject.model.Worktype;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 28/04/16.
 */
@Repository
public interface WorktypeRepository extends CrudRepository<Worktype, Integer> {
}
