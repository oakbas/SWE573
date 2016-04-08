package com.fcproject.controller;

import com.fcproject.model.Volunteerwork;
import com.fcproject.service.VolunteerworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@RestController
public class VolunteerworkController {
    private VolunteerworkService volunteerworkService;

    @Autowired
    public void setVolunteerworkService(VolunteerworkService volunteerworkService) {
        this.volunteerworkService = volunteerworkService;
    }

    @RequestMapping ("/volunteerworks")
    public Iterable<Volunteerwork> listAllVolunteerworks() {
        return volunteerworkService.listAllVolunteerworks();
    }
}
