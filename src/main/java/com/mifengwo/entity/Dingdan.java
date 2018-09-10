package com.mifengwo.entity;

import java.util.Date;

public class Dingdan {
    private int id;
    private User user;
    private int user_id;
    private Luxian luxian;
    private int luxian_id;
    private Saler saler;
    private int saler_id;
    private String state;
    private int price;
    private Date timestamp;

    @Override
    public String toString() {
        return "Dingdan{" +
                "id=" + id +
                ", user=" + user +
                ", user_id=" + user_id +
                ", luxian=" + luxian +
                ", luxian_id=" + luxian_id +
                ", saler=" + saler +
                ", saler_id=" + saler_id +
                ", state='" + state + '\'' +
                ", price=" + price +
                ", timestamp=" + timestamp +
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

    public int getSaler_id() {
        return saler_id;
    }

    public void setSaler_id(int saler_id) {
        this.saler_id = saler_id;
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

    public Saler getSaler() {
        return saler;
    }

    public void setSaler(Saler saler) {
        this.saler = saler;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
