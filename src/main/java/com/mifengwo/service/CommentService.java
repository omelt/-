package com.mifengwo.service;

import com.mifengwo.entity.Comment;
import com.mifengwo.entity.Luxian;

import java.util.List;

public interface CommentService {

    List<Comment> getList();

    List<Comment> getListByluxianid(int luxian_id);

    List<Comment> getListByUser_id(int user_id);

    Comment getComment(int id);

    boolean update(Comment comment);

    boolean delete(int comment_id);
}
