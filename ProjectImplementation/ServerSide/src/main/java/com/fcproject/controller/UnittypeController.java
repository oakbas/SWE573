package com.fcproject.controller;

import com.fcproject.model.UnitType;
import com.fcproject.service.UnittypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@RestController
public class UnittypeController {

    private UnittypeService unittypeService;

    @Autowired
    public void setUnittypeService(UnittypeService unittypeService) {
        this.unittypeService = unittypeService;
    }

    @RequestMapping(value = "/unittypes", method = RequestMethod.GET)
    public Iterable<UnitType> listAllUnittypes() {

        return unittypeService.listAllUnittypes();
    }
}
