package com.mifengwo.entity;

import java.util.Date;

public class Comment {
    private int id;
    private User user;
    private int user_id;
    private Luxian luxian;
    private int luxian_id;
    private String score;
    private Date timestamp;
    private String content;
    private String pictures;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", user=" + user +
                ", user_id=" + user_id +
                ", luxian=" + luxian +
                ", luxian_id=" + luxian_id +
                ", score='" + score + '\'' +
                ", timestamp=" + timestamp +
                ", content='" + content + '\'' +
                ", pictures='" + pictures + '\'' +
                '}';
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getLuxian_id() {
        return luxian_id;
    }

    public void setLuxian_id(int luxian_id) {
        this.luxian_id = luxian_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Luxian getLuxian() {
        return luxian;
    }

    public void setLuxian(Luxian luxian) {
        this.luxian = luxian;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPictures() {
        return pictures;
    }

    public void setPictures(String pictures) {
        this.pictures = pictures;
    }
}
