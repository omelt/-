package com.mifengwo.service;

import com.mifengwo.entity.User;

import java.util.List;
import java.util.Map;

public interface UserService {
//    登录
    public User login(String username, String password);
//    注册
    public boolean register(User user);
//    修改用户信息
    public boolean update(String fieldName, Object data, User user);

    public User get_by_nickname(String nickname);

    public User get_by_id(int id);

    public User get_by_username(String username);

    public boolean change_message(Map<Object,Object> map,User user);

    List<User> findByNickname(String nickname,int start,int step);


}
