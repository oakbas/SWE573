package com.fcproject.service;

import com.fcproject.model.UnitType;
import com.fcproject.repository.UnittypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@Service
public class UnittypeServiceImpl implements UnittypeService {

    private UnittypeRepository unittypeRepository;

    @Autowired
    public void setUnittypeRepository(UnittypeRepository unittypeRepository) {
        this.unittypeRepository = unittypeRepository;
    }

    @Override
    public Iterable<UnitType> listAllUnittypes() {
        return unittypeRepository.findAll();
    }

    @Override
    public UnitType getUnittypeById(Integer id) {
        return unittypeRepository.findOne(id);
    }

    @Override
    public UnitType saveUnittype(UnitType unitType) {
        return unittypeRepository.save(unitType);
    }
}
