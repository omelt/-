package com.mifengwo.dao.impl;

import com.mifengwo.dao.UserDao;
import com.mifengwo.entity.User;
import com.mifengwo.util.Dbutil;

import java.util.List;

public class UserDaoImpl implements UserDao {
    @Override
    public User get_by_nickname(String nickname) {
        String sql="select * from user where nickname=? limit 1";
        User res=Dbutil.get(sql, User.class,nickname);
        return res;
    }

    @Override
    public User get_by_id(int id) {
        String sql="select * from user where id=? limit 1";
        User res=Dbutil.get(sql, User.class,id);
        return res;
    }

    @Override
    public User get(User user) {
        String sql="select * from user where username=? and password =? limit 1";
        User res=Dbutil.get(sql,User.class,user.getUsername(),user.getPassword());
        return res;
    }

    @Override
    public List<User> getList() {
        String sql="select * from user limit 100";
        List<User> users=Dbutil.list(sql,User.class);
        return users;
    }

    @Override
    public boolean create(User user) {
        String sql="insert into user(nickname,username,about_me,sex,avater,password,phone,show_avater) values(?,?,?,?,?,?,?,?)";
        int count=Dbutil.update(sql, user.getNickname(),user.getUsername(),user.getAbout_me(),user.getSex(),user.getAvater(),user.getPassword(),user.getPhone(),user.getShow_avater());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean update(String fieldname, Object data, int user_id) {
        String sql= String.format("update user set %s=? where id =?", fieldname);
        int count=Dbutil.update(sql,data,user_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean create_by_form(User user) {
        String sql="insert into user(nickname,username,password,phone) values(?,?,?,?)";
        int count=Dbutil.update(sql, user.getNickname(),user.getUsername(),user.getPassword(),user.getPhone());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int user_id) {
        String sql="delete from user where id=?";
        int count=Dbutil.update(sql,user_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public User get_by_username(String username) {
        String sql="select avater from user where username=? limit 1" ;
        User user=Dbutil.get(sql,User.class,username);
        return user;
    }

    @Override
    public List<User> selectLikeNickname(String nickname, int start, int step) {
        nickname='%'+nickname+'%';
        String sql= String.format("select * from user where nickname like ? limit %d,%d",start,step);
        return Dbutil.list(sql,User.class,nickname);
    }

    private static class LazyHolder {
        private static final UserDaoImpl INSTANCE = new UserDaoImpl();
    }
    private UserDaoImpl (){}

    public static final UserDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
