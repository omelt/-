package com.mifengwo.entity;

import javax.swing.text.View;

public class Passage {
    private int id;
    private String content;
    private String view_content;
    private User user;
    private int user_id;
    private String title;
    private String picture;

    public String getView_content() {
        return this.view_content;
    }

    public void setView_content(String view_content) {
        this.view_content = view_content;
    }

    @Override
    public String toString() {
        return "Passage{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", View_content='" + view_content + '\'' +
                ", user=" + user +
                ", user_id=" + user_id +
                ", title='" + title + '\'' +
                ", picture='" + picture + '\'' +
                '}';
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
