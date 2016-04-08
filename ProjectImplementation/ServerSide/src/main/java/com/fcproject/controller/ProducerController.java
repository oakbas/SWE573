package com.fcproject.controller;

import com.fcproject.model.Producer;
import com.fcproject.service.ProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@RestController
public class ProducerController {

    private ProducerService producerService;

    @Autowired
    public void setCommentService(ProducerService producerService) {
        this.producerService = producerService;
    }

    @RequestMapping("/producers")
    public Iterable<Producer> listAllProducers() {
        return producerService.listAllProducers();
    }
}
