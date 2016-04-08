package com.fcproject.service;

import com.fcproject.model.Comment;

/**
 * Created by ozlemakbas on 08/04/16.
 */
public interface CommentService {
    Iterable<Comment> listAllComments();

    Comment getCommentById(Integer id);

    Comment saveComment(Comment comment);
}
