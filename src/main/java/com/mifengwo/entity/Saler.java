package com.mifengwo.entity;

public class Saler {
    private int id;
    private User user;
    private int user_id;
    private String name;
    private String fullname;
    private String state;
    private String message;
    private String about_sale;
    private String conphone;

    @Override
    public String toString() {
        return "Saler{" +
                "id=" + id +
                ", user=" + user +
                ", user_id=" + user_id +
                ", name='" + name + '\'' +
                ", fullname='" + fullname + '\'' +
                ", state='" + state + '\'' +
                ", message='" + message + '\'' +
                ", describe='" + about_sale + '\'' +
                ", conphone='" + conphone + '\'' +
                '}';
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAbout_sale() {
        return about_sale;
    }

    public void setAbout_sale(String about_sale) {
        this.about_sale = about_sale;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }


    public String getConphone() {
        return conphone;
    }

    public void setConphone(String conphone) {
        this.conphone = conphone;
    }
}
