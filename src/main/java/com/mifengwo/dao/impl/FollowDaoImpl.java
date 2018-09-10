package com.mifengwo.dao.impl;

import com.mifengwo.dao.FollowDao;
import com.mifengwo.entity.Follow;
import com.mifengwo.entity.User;
import com.mifengwo.util.Dbutil;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

public class FollowDaoImpl implements FollowDao {
    @Override
    public boolean create(int user_id, int follow_id) {
        String sql="insert into follow values(?,?)";
        int count=Dbutil.update(sql, user_id,follow_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int user_id, int follow_id) {
        String sql="delete from follow where user_id=? and follow_id=?";
        int count=Dbutil.update(sql, user_id,follow_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public List<Map<String,Object>> getPartUserList(int follow_id) {
        String sql="select user_id from follow where follow_id=? limit 8";
        List<Map<String,Object>> list=Dbutil.list(sql, follow_id);
        return list;
    }

    @Override
    public List<Map<String,Object>> getFollowUserList(int user_id) {
        String sql="select follow_id from follow where user_id=? limit 100";
        List<Map<String,Object>> list=Dbutil.list(sql, user_id);
        return list;
    }

    @Override
    public Follow get_by_ids(int user_id, int follow_id) {
        String sql="select * from follow where user_id=? and follow_id=? limit 1";
        Follow follow=Dbutil.get(sql, Follow.class, user_id,follow_id);
        return follow;
    }

    private static class LazyHolder {
        private static final FollowDaoImpl INSTANCE = new FollowDaoImpl();
    }
    private FollowDaoImpl (){}

    public static final FollowDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
