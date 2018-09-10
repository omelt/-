package com.mifengwo.dao;

import com.mifengwo.entity.User;

import java.util.List;

public interface UserDao {

//    查询BY nickname
    public User get_by_nickname(String nickname);

    public User get_by_username(String username);
//    查询BY ID
    public User get_by_id(int id);
//    查询BY 用户名和密码
    public User get(User user);
//    查询所有
    public List<User> getList();
//    创建用户
    public boolean create(User user);
//    修改用户BY ID
    public boolean update(String fieldname, Object data, int user_id);
//    删除用户BY ID
    public boolean delete(int user_id);

    public boolean create_by_form(User user);

    public List<User> selectLikeNickname(String nickname,int start,int step);
}
