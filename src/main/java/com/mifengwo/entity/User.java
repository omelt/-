package com.mifengwo.entity;

public class User {
    private int id;
    private String nickname;
    private String username;
    private String about_me;
    private String sex;
    private String avater;
    private String password;
    private String phone;
    private String show_avater;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nickname='" + nickname + '\'' +
                ", username='" + username + '\'' +
                ", about_me='" + about_me + '\'' +
                ", sex='" + sex + '\'' +
                ", avater='" + avater + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", show_avater='" + show_avater + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAbout_me() {
        return about_me;
    }

    public void setAbout_me(String about_me) {
        this.about_me = about_me;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAvater() {
        return avater;
    }

    public void setAvater(String avater) {
        this.avater = avater;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getShow_avater() {
        return show_avater;
    }

    public void setShow_avater(String show_avater) {
        this.show_avater = show_avater;
    }
}
