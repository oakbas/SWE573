package com.fcproject.service;

import com.fcproject.model.Worktype;

/**
 * Created by ozlemakbas on 28/04/16.
 */
public interface WorktypeService {
    Iterable<Worktype> listAllWorktypes();

    Worktype getWorktypeById(Integer id);

    Worktype saveWorktype(Worktype worktype);
}
