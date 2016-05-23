package com.fcproject;

import com.fcproject.model.UnitType;
import com.fcproject.model.Volunteerwork;
import com.fcproject.repository.UnittypeRepository;
import com.fcproject.repository.VolunteerworkRepository;
import com.fcproject.service.UnittypeServiceImpl;
import com.fcproject.service.VolunteerworkServiceImpl;
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
public class VolunteerworkServiceImplTest {

    @Mock
    VolunteerworkRepository volunteerworkRepository;

    @Mock
    private List<Volunteerwork> volunteerworkList;

    @Mock
    private Volunteerwork volunteerwork;

    @InjectMocks
    VolunteerworkServiceImpl volunteerworkService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void listUnitTypes_InvokeUnitTypeListFuncTest() throws Exception {
        volunteerworkService.listAllVolunteerworks();
        verify(volunteerworkRepository, times(1)).findAll();
    }

    @Test
    public void listUnitTypes_UnitTypeListTest() throws Exception {
        when(volunteerworkRepository.findAll()).thenReturn(volunteerworkList);
        assertEquals(volunteerworkService.listAllVolunteerworks(), volunteerworkList);
    }
}
