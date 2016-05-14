package com.fcproject.controller;

import com.fcproject.model.Comment;
import com.fcproject.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by ozlemakbas on 05/04/16.
 */

@RestController
public class CommentController {

    private CommentService commentService;

    @Autowired
    public void setCommentService(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping (value = "/comments", method = RequestMethod.GET)
    public Iterable<Comment> listAllComments() { return commentService.listAllComments(); }

    @RequestMapping(value = "/addComment", method = RequestMethod.POST)
    public void saveComment(@Valid @RequestBody Comment comment) {
        commentService.saveComment(comment);
    }
}
