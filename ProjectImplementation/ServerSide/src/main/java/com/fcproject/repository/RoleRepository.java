package com.fcproject.repository;

import com.fcproject.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 17/05/16.
 */

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {
}
