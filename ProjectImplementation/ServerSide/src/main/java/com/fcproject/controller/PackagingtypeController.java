package com.fcproject.controller;

import com.fcproject.model.PackagingType;
import com.fcproject.service.PackagingtypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by ozlemakbas on 26/04/16.
 */

@RestController
public class PackagingtypeController {

    private PackagingtypeService packagingtypeService;

    @Autowired
    public void setPackagingtypeService(PackagingtypeService packagingtypeService) {
        this.packagingtypeService = packagingtypeService;
    }

    @RequestMapping(value = "/packagingtypes", method = RequestMethod.GET)
    public Iterable<PackagingType> listAllPackagingTypes() { return packagingtypeService.listAllPackagingtypes(); }

    @RequestMapping(value = "/addpackagingtype", method = RequestMethod.POST)
    public void savePackagingtype(@Valid @RequestBody PackagingType packagingType) {
        packagingtypeService.savePackagingtype(packagingType);
    }
}
