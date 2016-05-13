package com.fcproject.service;

import com.fcproject.model.Producer;
import com.fcproject.model.Product;

/**
 * Created by ozlemakbas on 08/04/16.
 */
public interface ProducerService {
    Iterable<Producer> listAllProducers();

    Producer getProducerById(Integer id);

    Producer saveProducer(Producer producer);

    Iterable<Product> listProductsByProducerId (Integer id);

    void updateProducer(int id, Producer newProducer);
}
