package com.mifengwo.service.impl;

import com.mifengwo.dao.FollowDao;
import com.mifengwo.dao.UserDao;
import com.mifengwo.dao.impl.FollowDaoImpl;
import com.mifengwo.dao.impl.UserDaoImpl;
import com.mifengwo.entity.Follow;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.FollowService;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class FollowServiceImpl implements FollowService {
    @Override
    public boolean create(int user_id, int follow_id) {
        FollowDao followDao=Factory.getInstance("FollowDao", FollowDao.class);
        return followDao.create(user_id, follow_id);
    }

    @Override
    public boolean delete(int user_id, int follow_id) {
        FollowDao followDao = Factory.getInstance("FollowDao", FollowDao.class);
        return followDao.delete(user_id, follow_id);
    }

    @Override
    public List<User> getPartUserList(int follow_id) {
        FollowDao followDao = Factory.getInstance("FollowDao", FollowDao.class);
        UserDao userDao=Factory.getInstance("UserDao", UserDao.class);
        List<Map<String,Object>> list=followDao.getPartUserList(follow_id);
        List<User> list1=new ArrayList<>();
        Iterator iterator=list.iterator();
        while (iterator.hasNext()){
            Map<String,Object> map= (Map<String, Object>) iterator.next();
            int user_id= (int) map.get("user_id");
            User user=userDao.get_by_id(user_id);
            list1.add(user);
        }
        return list1;
    }

    @Override
    public List<User> getFollowUserList(int user_id) {
        FollowDao followDao = Factory.getInstance("FollowDao", FollowDao.class);
        UserDao userDao=Factory.getInstance("UserDao", UserDao.class);
        List<Map<String,Object>> list=followDao.getFollowUserList(user_id);
        List<User> list1=new ArrayList<>();
        Iterator iterator=list.iterator();
        while (iterator.hasNext()){
            Map<String,Object> map= (Map<String, Object>) iterator.next();
            int follow_id= (int) map.get("follow_id");
            User user=userDao.get_by_id(follow_id);
            list1.add(user);
        }
        return list1;
    }

    @Override
    public Follow get_by_ids(int user_id, int follow_id) {
        FollowDao followDao=Factory.getInstance("FollowDao", FollowDao.class);
        return followDao.get_by_ids(user_id, follow_id);

    }

    private FollowServiceImpl (){}

    private static class LazyHolder {
        private static final FollowServiceImpl INSTANCE = new FollowServiceImpl();
    }

    public static final FollowServiceImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
