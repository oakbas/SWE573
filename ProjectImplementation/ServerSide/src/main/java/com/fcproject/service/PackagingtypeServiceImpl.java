package com.fcproject.service;

import com.fcproject.model.PackagingType;
import com.fcproject.repository.PackagingtypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@Service
public class PackagingtypeServiceImpl implements PackagingtypeService {

    private PackagingtypeRepository packagingtypeRepository;

    @Autowired
    public void setPackagingtypeRepository(PackagingtypeRepository packagingtypeRepository) {
        this.packagingtypeRepository = packagingtypeRepository;
    }

    @Override
    public Iterable<PackagingType> listAllPackagingtypes() { return packagingtypeRepository.findAll(); }

    @Override
    public PackagingType getPackagingtypeById(Integer id) { return packagingtypeRepository.findOne(id); }

    @Override
    public PackagingType savePackagingtype(PackagingType packagingType) { return packagingtypeRepository.save(packagingType); }
}
