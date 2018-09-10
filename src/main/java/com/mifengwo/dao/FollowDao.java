package com.mifengwo.dao;

import com.mifengwo.entity.Follow;
import com.mifengwo.entity.User;

import java.util.List;
import java.util.Map;

public interface FollowDao {
    public boolean create(int user_id,int follow_id);
//    public int get_by_user_id(int user_id);
//    public int get_by_follow_id(int follow_id);
    public boolean delete(int user_id,int follow_id);
//    根据粉丝ID查询关注的人
    public List<Map<String,Object>> getPartUserList(int follow_id);
//    根据用户ID查询粉丝
    public List<Map<String,Object>> getFollowUserList(int user_id);

    public Follow get_by_ids(int user_id,int follow_id);
}
