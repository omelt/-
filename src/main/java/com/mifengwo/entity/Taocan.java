package com.mifengwo.entity;

public class    Taocan {
    private int id;
    private int luxian_id;
    private Luxian luxian;
    private String title;
    private int price;

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Taocan{" +
                "id=" + id +
                ", luxian_id=" + luxian_id +
                ", luxian=" + luxian +
                ", title='" + title + '\'' +
                ", price=" + price +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Luxian getLuxian() {
        return luxian;
    }

    public void setLuxian(Luxian luxian) {
        this.luxian = luxian;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getLuxian_id() {
        return luxian_id;
    }

    public void setLuxian_id(int luxian_id) {
        this.luxian_id = luxian_id;
    }
}
