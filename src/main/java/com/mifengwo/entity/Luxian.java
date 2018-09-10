package com.mifengwo.entity;

import java.util.List;

public class Luxian {
    private int id;
    private Saler saler;
    private int saler_id;
    private String title;
    private String picture;
    private int longtime;
    private String location;
    private Theme theme;
    private int theme_id;
    private String jieshao;
    private String need;
    private String xvzhi;//须知
    private Taocan taocan;

    List<Taocan> taocanList;


    public List<Taocan> getTaocanList() {
        return taocanList;
    }

    public void setTaocanList(List<Taocan> taocanList) {
        this.taocanList = taocanList;
    }

    public Taocan getTaocan() {
        return taocan;
    }

    public void setTaocan(Taocan taocan) {
        this.taocan = taocan;
    }

    @Override
    public String toString() {
        return "Luxian{" +
                "id=" + id +
                ", saler=" + saler +
                ", saler_id=" + saler_id +
                ", title='" + title + '\'' +
                ", picture='" + picture + '\'' +
                ", longtime=" + longtime +
                ", location='" + location + '\'' +
                ", theme=" + theme +
                ", theme_id=" + theme_id +
                ", jieshao='" + jieshao + '\'' +
                ", need='" + need + '\'' +
                ", xvzhi='" + xvzhi + '\'' +
                ", taocan=" + taocan +
                '}';
    }

    public int getSaler_id() {
        return saler_id;
    }

    public void setSaler_id(int saler_id) {
        this.saler_id = saler_id;
    }

    public int getTheme_id() {
        return theme_id;
    }

    public void setTheme_id(int theme_id) {
        this.theme_id = theme_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getLongtime() {
        return longtime;
    }

    public void setLongtime(int longtime) {
        this.longtime = longtime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Saler getSaler() {
        return saler;
    }

    public void setSaler(Saler saler) {
        this.saler = saler;
    }

    public Theme getTheme() {
        return theme;
    }

    public void setTheme(Theme theme) {
        this.theme = theme;
    }

    public String getJieshao() {
        return jieshao;
    }

    public void setJieshao(String jieshao) {
        this.jieshao = jieshao;
    }

    public String getNeed() {
        return need;
    }

    public void setNeed(String need) {
        this.need = need;
    }

    public String getXvzhi() {
        return xvzhi;
    }

    public void setXvzhi(String xvzhi) {
        this.xvzhi = xvzhi;
    }
}
