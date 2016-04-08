package com.fcproject.service;

import com.fcproject.model.Producer;

/**
 * Created by ozlemakbas on 08/04/16.
 */
public interface ProducerService {
    Iterable<Producer> listAllProducers();

    Producer getProducerById(Integer id);

    Producer saveProducer(Producer producer);
}
