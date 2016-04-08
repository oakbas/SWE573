package com.fcproject.controller;

import com.fcproject.model.Comment;
import com.fcproject.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping ("/comments")
    public Iterable<Comment> listAllComments() {
        return commentService.listAllComments();
    }
}
