package com.fcproject.service;

import com.fcproject.model.Producer;
import com.fcproject.model.Product;
import com.fcproject.repository.ProducerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 08/04/16.
 */
@Service
public class ProducerServiceImpl implements ProducerService{

    private ProducerRepository producerRepository;

    @Autowired
    public void setProducerRepository(ProducerRepository producerRepository) {
        this.producerRepository = producerRepository;
    }

    @Override
    public Iterable<Producer> listAllProducers() {
        return producerRepository.findAll();
    }

    @Override
    public Producer getProducerById(Integer id) {
        return producerRepository.findOne(id);
    }

    @Override
    public Producer saveProducer(Producer producer) {
        return producerRepository.save(producer);
    }

    @Override
    public Iterable<Product> listProductsByProducerId (Integer id) {
        return producerRepository.findOne(id).getProductList();
    }

    @Override
    public void updateProducer(int id, Producer newProducer) {
        Producer updatedProducer = producerRepository.findOne(id);
        updatedProducer.setProducerName(newProducer.getProducerName());
        updatedProducer.setProducerAddress(newProducer.getProducerAddress());
        updatedProducer.setProducerCity(newProducer.getProducerCity());
        updatedProducer.setProducerDesc(newProducer.getProducerDesc());
        updatedProducer.setProducerPhone(newProducer.getProducerPhone());
        producerRepository.save(updatedProducer);
    }
}
