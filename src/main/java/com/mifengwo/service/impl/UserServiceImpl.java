package com.mifengwo.service.impl;

import com.mifengwo.dao.UserDao;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.UserService;
import com.mifengwo.util.CryptUtils;
import com.mifengwo.util.Dbutil;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class UserServiceImpl implements UserService {
    @Override
    public User login(String username, String password) {
        User user = new User();
        UserDao userDao = Factory.getInstance("UserDao", UserDao.class);
        user.setUsername(username);
        try {
            user.setPassword(CryptUtils.GetMD5Code(password));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userDao.get(user);
    }

    @Override
    public boolean register(User user) {
        UserDao userDao = Factory.getInstance("UserDao", UserDao.class);
        try {
            user.setPassword(CryptUtils.GetMD5Code(user.getPassword()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userDao.create_by_form(user);
    }

    @Override
    public boolean update(String fieldName, Object data, User user) {
        UserDao userDao = Factory.getInstance("UserDao", UserDao.class);
        return userDao.update(fieldName, data, user.getId());
    }

    @Override
    public User get_by_id(int id) {
        UserDao userDao = Factory.getInstance("UserDao", UserDao.class);
        return userDao.get_by_id(id);
    }

    @Override
    public User get_by_nickname(String nickname) {
        UserDao userDao = Factory.getInstance("UserDao", UserDao.class);
        return userDao.get_by_nickname(nickname);
    }

    @Override
    public User get_by_username(String username) {
        UserDao userDao = Factory.getInstance("UserDao", UserDao.class);
        return userDao.get_by_username(username);
    }

    @Override
    public boolean change_message(Map<Object, Object> map, User user) {
        boolean res=true;
        try {
            Dbutil.startTransaction(new Dbutil.TransactionProcess() {
                @Override
                public void process() throws Exception {
                    // TODO Auto-generated method stub
                    UserDao userDao=Factory.getInstance("UserDao",UserDao.class);
                    System.out.println(map);
                    Set<Object> objects=map.keySet();
                    for (Object o:objects) {
                        boolean res=userDao.update(o.toString(),map.get(o),user.getId());
                        if (!res) throw new Exception("更新失败");
                    }

                }
            });
        } catch (Exception e) {
            e.printStackTrace();
            res=false;
        }
        return res;
    }

    @Override
    public List<User> findByNickname(String nickname, int start, int step) {
        UserDao userDao=Factory.getInstance("UserDao",UserDao.class);
        return userDao.selectLikeNickname(nickname,start,step);
    }

    private UserServiceImpl() {
    }

    private static class LazyHolder {
        private static final UserServiceImpl INSTANCE = new UserServiceImpl();
    }

    public static final UserServiceImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
