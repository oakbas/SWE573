package com.fcproject.controller;

import com.fcproject.model.Producer;
import com.fcproject.model.Product;
import com.fcproject.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.*;
import java.nio.file.Paths;

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

    @Value("${app.config.upload-directory}")
    String uploadDirectory;

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

    @RequestMapping(value = "/producer/update/{id}", method = RequestMethod.PUT)
    public void updateProducer(@PathVariable("id") int id, @RequestBody Producer newProducer) {
        producerService.updateProducer(id, newProducer);
    }

    @RequestMapping(value = "/addProducer", method = RequestMethod.POST)
    public void saveProducer(@Valid @RequestBody Producer producer) {
        producerService.saveProducer(producer);
    }

}
