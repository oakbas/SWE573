package com.fcproject.controller;

import com.fcproject.model.Worktype;
import com.fcproject.service.WorktypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ozlemakbas on 15/05/16.
 */

@RestController
public class WorktypeController {

    private WorktypeService worktypeService;

    @Autowired
    public void setWorktypeService(WorktypeService worktypeService) {
        this.worktypeService = worktypeService;
    }

    @RequestMapping(value = "/worktypes", method = RequestMethod.GET)
    public Iterable<Worktype> listAllWorktypes() { return worktypeService.listAllWorktypes(); }
}
