package com.mifengwo.dao;

import com.mifengwo.entity.Comment;
import com.mifengwo.entity.User;

import java.util.List;

public interface CommentDao {
//    创建评论
    public boolean create(Comment comment);
//    修改索引
    public boolean update(Comment comment);
//    删除索引BY ID
    public boolean delete(int comment_id);
//    查询评论BY ID
    public Comment get(int comment_id);
//    查询全部
    public List<Comment> getList();
//    分页查询
    public List<Comment> getPartList(int startIndex, int length);
//    同一用户ID的所有评论
    public List<Comment> getUserCommentList(int user_id);
//    同一路线ID下的评论
    public List<Comment> getLuxianCommentList(int luxian_id);
}
