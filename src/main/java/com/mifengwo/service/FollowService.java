package com.mifengwo.service;

import com.mifengwo.entity.Follow;
import com.mifengwo.entity.User;

import java.util.List;

public interface FollowService {
    public boolean create(int user_id,int follow_id);
    //    public int get_by_user_id(int user_id);
//    public int get_by_follow_id(int follow_id);
    public boolean delete(int user_id,int follow_id);

    public List<User> getPartUserList(int follow_id);

    public List<User> getFollowUserList(int user_id);

    public Follow get_by_ids(int user_id,int follow_id);
}
