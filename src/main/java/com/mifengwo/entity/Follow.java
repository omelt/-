package com.mifengwo.entity;

public class Follow {
    private int user_id;
    private int follow_id;
    private User user;
    private User follow;

    @Override
    public String toString() {
        return "Follow{" +
                "user_id=" + user_id +
                ", follow_id=" + follow_id +
                ", user=" + user +
                ", follow=" + follow +
                '}';
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getFollow_id() {
        return follow_id;
    }

    public void setFollow_id(int follow_id) {
        this.follow_id = follow_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getFollow() {
        return follow;
    }

    public void setFollow(User follow) {
        this.follow = follow;
    }
}
