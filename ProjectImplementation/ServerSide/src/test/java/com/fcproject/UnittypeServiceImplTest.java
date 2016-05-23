package com.fcproject;

import com.fcproject.model.UnitType;
import com.fcproject.repository.UnittypeRepository;
import com.fcproject.service.UnittypeServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import java.util.List;

/**
 * Created by ozlemakbas on 23/05/16.
 */
public class UnittypeServiceImplTest {

    @Mock
    UnittypeRepository unittypeRepository;

    @Mock
    private List<UnitType> unitTypeList;

    @Mock
    private UnitType unitType;

    @InjectMocks
    UnittypeServiceImpl unittypeService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void listUnitTypes_InvokeUnitTypeListFuncTest() throws Exception {
        unittypeService.listAllUnittypes();
        verify(unittypeRepository, times(1)).findAll();
    }

    @Test
    public void listUnitTypes_UnitTypeListTest() throws Exception {
        when(unittypeRepository.findAll()).thenReturn(unitTypeList);
        assertEquals(unittypeService.listAllUnittypes(), unitTypeList);
    }
}
