package com.fcproject.service;

import com.fcproject.model.Volunteerwork;

/**
 * Created by ozlemakbas on 05/04/16.
 */
public interface VolunteerworkService {
    Iterable<Volunteerwork> listAllVolunteerworks();

    Volunteerwork getVolunteerworkById(Integer id);

    Volunteerwork saveVolunteerwork(Volunteerwork volunteerwork);
}
