package com.fcproject;

import com.fcproject.model.UnitType;
import com.fcproject.model.Worktype;
import com.fcproject.repository.UnittypeRepository;
import com.fcproject.repository.WorktypeRepository;
import com.fcproject.service.UnittypeServiceImpl;
import com.fcproject.service.WorktypeServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

/**
 * Created by ozlemakbas on 23/05/16.
 */
public class WorktypeServiceImplTest {

    @Mock
    WorktypeRepository worktypeRepository;

    @Mock
    private List<Worktype> worktypeList;

    @Mock
    private Worktype worktype;

    @InjectMocks
    WorktypeServiceImpl worktypeService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void listWorkTypeList_InvokeWorkTypeListFuncTest() throws Exception {
        worktypeService.listAllWorktypes();
        verify(worktypeRepository, times(1)).findAll();
    }

    @Test
    public void listWorkTypeList_WorkTypeListTest() throws Exception {
        when(worktypeRepository.findAll()).thenReturn(worktypeList);
        assertEquals(worktypeService.listAllWorktypes(), worktypeList);
    }
}
