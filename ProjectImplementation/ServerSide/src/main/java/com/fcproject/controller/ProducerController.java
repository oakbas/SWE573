package com.fcproject.controller;

import com.fcproject.model.Producer;
import com.fcproject.model.Product;
import com.fcproject.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@RestController
public class ProducerController {

    private ProducerService producerService;

    @Autowired
    public void setProducerService(ProducerService producerService) {
        this.producerService = producerService;
    }

    @RequestMapping(value = "/producers", method = RequestMethod.GET)
    public Iterable<Producer> listAllProducers() {
        return producerService.listAllProducers();
    }

    @RequestMapping(value = "/producers/{producerId}", method = RequestMethod.GET)
    public Producer getProducer(@PathVariable("producerId") int producerId) {
        Producer producer = producerService.getProducerById(producerId);
        //Todo: Exception
        return producer;
    }

    @RequestMapping(value = "/producerproducts/{producerId}", method = RequestMethod.GET)
    public Iterable<Product> listProducerProductList (@PathVariable("producerId") int producerId) {
        return producerService.listProductsByProducerId(producerId);
    }

}
