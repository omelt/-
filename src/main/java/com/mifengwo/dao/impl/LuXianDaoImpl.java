package com.mifengwo.dao.impl;

import com.mifengwo.dao.LuXianDao;
import com.mifengwo.entity.Luxian;
import com.mifengwo.util.Dbutil;

import java.util.ArrayList;
import java.util.List;

public class LuXianDaoImpl implements LuXianDao {
    @Override
    public List<Luxian> getList() {
        String sql="select * from luxian limit 100";
        List<Luxian> luxians= Dbutil.list(sql,Luxian.class);
        return luxians;
    }

    @Override
    public Luxian get(int luxian_id) {
        String sql="select * from luxian where id=? limit 1";
        Luxian res=Dbutil.get(sql,Luxian.class,luxian_id);
        return res;
    }

    @Override
    public boolean create(Luxian luxian) {
        String sql="insert into luxian(saler_id,title,picture,longtime,location,theme_id,jieshao,need,xvzhi) values(?,?,?,?,?,?,?,?,?)";
        int count=Dbutil.update(sql,luxian.getSaler_id(),luxian.getTitle(),luxian.getPicture(),luxian.getLongtime(),luxian.getLocation(),luxian.getTheme_id(),luxian.getJieshao(),luxian.getNeed(),luxian.getXvzhi());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean update(String fieldname, Object data, int luxian_id) {
        String sql= String.format("update luxian set %s=? where id =?", fieldname);
        int count=Dbutil.update(sql,data,luxian_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int luxian_id) {
        String sql="delete from luxian where id=?";
        int count=Dbutil.update(sql,luxian_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public List<Luxian> getSalerLuxianList(int saler_id) {
        String sql="select * from luxian where saler_id=?";
        List<Luxian> luxians=Dbutil.list(sql, Luxian.class, saler_id);
        return luxians;
    }

    @Override
    public List<Luxian> getThemeLuxianList(int theme_id) {
        String sql="select * from luxian where theme_id=?";
        List<Luxian> luxians=Dbutil.list(sql, Luxian.class, theme_id);
        return luxians;
    }

    @Override
    public List<Luxian> pageget(int count, int page) {
        String sql=String.format("select * from luxian limit %d,%d",count,page);
        List<Luxian> luxians=Dbutil.list(sql,Luxian.class);
        return luxians;
    }

    @Override
    public List<Luxian> selectLikeTitle(String title, int start, int step) {
        title='%'+title+'%';
        String sql= String.format("select * from luxian where title like ? limit %d,%d",start,step);
        return Dbutil.list(sql,Luxian.class,title);
    }

    private static class LazyHolder {
        private static final LuXianDaoImpl INSTANCE = new LuXianDaoImpl();
    }
    private LuXianDaoImpl (){}

    public static final LuXianDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
