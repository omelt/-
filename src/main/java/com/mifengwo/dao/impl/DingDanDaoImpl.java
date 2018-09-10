package com.mifengwo.dao.impl;

import com.mifengwo.dao.DingDanDao;
import com.mifengwo.entity.Dingdan;
import com.mifengwo.util.Dbutil;

import java.util.ArrayList;
import java.util.List;

public class DingDanDaoImpl implements DingDanDao {
    @Override
    public List<Dingdan> getList() {
        String sql="select * from dingdan limit 100";
        List<Dingdan> dingdans= Dbutil.list(sql,Dingdan.class);
        return dingdans;
    }

    @Override
    public boolean create(Dingdan dingdan) {
        String sql="insert into dingdan(user_id,luxian_id,saler_id,state,price,timestamp) values(?,?,?,?,?,?)";
        int count=Dbutil.update(sql,dingdan.getUser_id(),dingdan.getLuxian_id(),dingdan.getSaler_id(),dingdan.getState(),dingdan.getPrice(),dingdan.getTimestamp());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean update(String fieldname, Object data, int dingdan_id) {
        String sql= String.format("update dingdan set %s=? where id =?", fieldname);
        int count=Dbutil.update(sql,data,dingdan_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int dingdan_id) {
        String sql="delete from dingdan where id=?";
        int count=Dbutil.update(sql,dingdan_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public Dingdan get(int dingdan_id) {
        String sql="select * from dingdan where id=? limit 1";
        Dingdan res=Dbutil.get(sql,Dingdan.class,dingdan_id);
        return res;
    }

    @Override
    public List<Dingdan> getUserDingdanList(int user_id) {
        String sql="select * from dingdan where user_id=?";
        List<Dingdan> dingdans=Dbutil.list(sql, Dingdan.class, user_id);
        return dingdans;
    }

    @Override
    public List<Dingdan> getLuxianDingdanList(int luxian_id) {
        String sql="select * from dingdan where luxian_id=?";
        List<Dingdan> dingdans=Dbutil.list(sql, Dingdan.class, luxian_id);
        return dingdans;
    }

    @Override
    public List<Dingdan> getSalerDingdanList(int saler_id) {
        String sql="select * from dingdan where saler_id=?";
        List<Dingdan> dingdans=Dbutil.list(sql, Dingdan.class, saler_id);
        return dingdans;
    }

    @Override
    public Dingdan selectWaitDingdan(int user_id) {
        String sql="select * from dingdan where user_id=? and state='W' order by timestamp desc limit 1";
        return Dbutil.get(sql,Dingdan.class,user_id);
    }

    private static class LazyHolder {
        private static final DingDanDaoImpl INSTANCE = new DingDanDaoImpl();
    }
    private DingDanDaoImpl (){}

    public static final DingDanDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
