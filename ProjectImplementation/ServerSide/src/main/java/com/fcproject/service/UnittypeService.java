package com.fcproject.service;

import com.fcproject.model.UnitType;

/**
 * Created by ozlemakbas on 26/04/16.
 */
public interface UnittypeService {
    Iterable<UnitType> listAllUnittypes();

    UnitType getUnittypeById(Integer id);

    UnitType saveUnittype(UnitType unitType);
}
