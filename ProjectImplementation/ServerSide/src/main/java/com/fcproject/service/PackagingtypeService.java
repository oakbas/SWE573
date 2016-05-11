package com.fcproject.service;

import com.fcproject.model.PackagingType;

/**
 * Created by ozlemakbas on 26/04/16.
 */
public interface PackagingtypeService {
    Iterable<PackagingType> listAllPackagingtypes();

    PackagingType getPackagingtypeById(Integer id);

    PackagingType savePackagingtype(PackagingType packagingType);
}
