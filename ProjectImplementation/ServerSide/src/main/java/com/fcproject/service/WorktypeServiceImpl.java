package com.fcproject.service;

import com.fcproject.model.Worktype;
import com.fcproject.repository.WorktypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by ozlemakbas on 28/04/16.
 */

@Service
public class WorktypeServiceImpl implements WorktypeService{

    private WorktypeRepository worktypeRepository;

    @Autowired
    public void setWorktypeRepository(WorktypeRepository worktypeRepository) {
        this.worktypeRepository = worktypeRepository;
    }

    @Override
    public Iterable<Worktype> listAllWorktypes() { return worktypeRepository.findAll(); }

    @Override
    public Worktype getWorktypeById(Integer id) { return worktypeRepository.findOne(id); }

    @Override
    public Worktype saveWorktype(Worktype worktype) { return worktypeRepository.save(worktype); }
}
