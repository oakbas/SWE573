package com.fcproject.repository;

import com.fcproject.model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 17/05/16.
 */
@Repository
public interface AccountRepository extends CrudRepository<Account, Integer>{

    public Account findByUsername(String username);
}
