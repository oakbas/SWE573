package com.fcproject.repository;

import com.fcproject.model.News;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by ozlemakbas on 15/05/16.
 */

@Repository
public interface NewsRepository extends CrudRepository<News, Integer>{
}
