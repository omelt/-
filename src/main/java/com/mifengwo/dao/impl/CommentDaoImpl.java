package com.mifengwo.dao.impl;

import com.mifengwo.dao.CommentDao;
import com.mifengwo.entity.Comment;
import com.mifengwo.util.Dbutil;

import java.util.List;

public class CommentDaoImpl implements CommentDao {
    @Override
    public boolean create(Comment comment) {
        String sql="insert into comment(user_id,luxian_id,score,timestamp,content,pictures) values (?,?,?,?,?,?)";
        int count= Dbutil.update(sql,comment.getUser_id(),comment.getLuxian_id(),comment.getScore(),comment.getTimestamp(),comment.getContent(),comment.getPictures());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean update(Comment comment) {
        return false;
    }

    @Override
    public boolean delete(int comment_id) {
        String sql="delete from comment where id=?";
        int count=Dbutil.update(sql,comment_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public Comment get(int comment_id) {
        String sql="select * from comment where id=? limit 1";
        Comment res=Dbutil.get(sql,Comment.class,comment_id);
        return res;
    }

    @Override
    public List<Comment> getList() {
        String sql="select * from comment limit 100";
        List<Comment> comments=Dbutil.list(sql, Comment.class);
        return comments;
    }

    @Override
    public List<Comment> getPartList(int startIndex, int length) {
        String sql= "select * from comment limit ?, ?";
        List<Comment> comments=Dbutil.list(sql,Comment.class,startIndex,length);
        return comments;
    }

    @Override
    public List<Comment> getUserCommentList(int user_id) {
        String sql="select  * from comment where user_id=?";
        List<Comment> comments=Dbutil.list(sql, Comment.class, user_id);
        return comments;
    }

    @Override
    public List<Comment> getLuxianCommentList(int luxian_id) {
        String sql="select * from comment where luxian_id=?";
        List<Comment> comments=Dbutil.list(sql, Comment.class, luxian_id);
        return comments;
    }

    private static class LazyHolder {
        private static final CommentDaoImpl INSTANCE = new CommentDaoImpl();
    }
    private CommentDaoImpl (){}

    public static final CommentDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
