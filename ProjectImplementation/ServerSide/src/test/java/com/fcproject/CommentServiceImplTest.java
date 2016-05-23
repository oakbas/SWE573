package com.fcproject;

import com.fcproject.model.Comment;
import com.fcproject.model.UnitType;
import com.fcproject.repository.CommentRepository;
import com.fcproject.repository.UnittypeRepository;
import com.fcproject.service.CommentServiceImpl;
import com.fcproject.service.UnittypeServiceImpl;
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
public class CommentServiceImplTest {

    @Mock
    CommentRepository commentRepository;

    @Mock
    private List<Comment> commentList;

    @Mock
    private Comment comment;

    @InjectMocks
    CommentServiceImpl commentService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void listComments_InvokeCommentListFuncTest() throws Exception {
        commentService.listAllComments();
        verify(commentRepository, times(1)).findAll();
    }

    @Test
    public void listComments_CommentListTest() throws Exception {
        when(commentRepository.findAll()).thenReturn(commentList);
        assertEquals(commentService.listAllComments(), commentList);
    }
}
