package com.mifengwo.service.impl;

import com.mifengwo.dao.CommentDao;
import com.mifengwo.dao.impl.CommentDaoImpl;
import com.mifengwo.entity.Comment;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.CommentService;
import com.mifengwo.service.UserService;

import java.util.List;

public class CommentServiceImpl implements CommentService {
    private CommentServiceImpl(){}

    @Override
    public List<Comment> getList() {
        return commentDao.getList();
    }

    @Override
    public List<Comment> getListByluxianid(int luxian_id) {
        List<Comment> list=commentDao.getLuxianCommentList(luxian_id);
        UserService userService=Factory.getInstance("UserService",UserService.class);
        for (Comment temp:list) {
            temp.setUser(userService.get_by_id(temp.getUser_id()));
        }
        return list;
    }

    @Override
    public List<Comment> getListByUser_id(int user_id) {
        List<Comment> list=commentDao.getUserCommentList(user_id);
        return list;
    }

    @Override
    public Comment getComment(int id) {
        return commentDao.get(id);
    }

    @Override
    public boolean update(Comment comment) {
        return commentDao.update(comment);
    }

    @Override
    public boolean delete(int comment_id) {
        return commentDao.delete(comment_id);
    }

    private static class inClass{
        public static CommentService commentService=new CommentServiceImpl();
    }

    public static CommentService getInstance(){
        return inClass.commentService;
    }

    public static CommentDao commentDao= Factory.getInstance("CommentDao", CommentDaoImpl.class);

}
