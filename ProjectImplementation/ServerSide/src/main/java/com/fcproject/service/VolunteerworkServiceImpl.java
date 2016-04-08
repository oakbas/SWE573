package com.fcproject.service;

import com.fcproject.model.Volunteerwork;
import com.fcproject.repository.VolunteerworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@Service
public class VolunteerworkServiceImpl implements VolunteerworkService {

    private VolunteerworkRepository volunteerworkRepository;

    @Autowired
    public void setVolunteerworkRepository(VolunteerworkRepository volunteerworkRepository) {
        this.volunteerworkRepository = volunteerworkRepository;
    }

    @Override
    public Iterable<Volunteerwork> listAllVolunteerworks() {
        return volunteerworkRepository.findAll();
    }

    @Override
    public Volunteerwork getVolunteerworkById(Integer id) {
        return volunteerworkRepository.findOne(id);
    }

    @Override
    public Volunteerwork saveVolunteerwork(Volunteerwork volunteerwork) {
        return volunteerworkRepository.save(volunteerwork);
    }
}
