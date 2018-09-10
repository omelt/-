package com.mifengwo.dao.impl;

import com.mifengwo.dao.TaoCanDao;
import com.mifengwo.entity.Taocan;
import com.mifengwo.util.Dbutil;

import java.util.ArrayList;
import java.util.List;

public class TaoCanDaoImpl implements TaoCanDao {
    @Override
    public boolean create(Taocan taocan) {
        String sql="insert into taocan(luxian_id,title,price) values(?,?,?)";
        int count=Dbutil.update(sql, taocan.getLuxian_id(),taocan.getTitle(),taocan.getPrice());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public Taocan get(int taocan_id) {
        String sql="select * from taocan where id=? limit 1";
        Taocan taocan=Dbutil.get(sql,Taocan.class,taocan_id);
        return taocan;
    }

    @Override
    public List<Taocan> getList() {
        String sql="select * from taocan";
        List<Taocan>list=new ArrayList<>();
        list= Dbutil.list(sql,Taocan.class);
        return list;
    }

    @Override
    public boolean update(String fieldname, Object data, int taocan_id) {
        String sql= String.format("update taocan set %s=? where id =?", fieldname);
        int count=Dbutil.update(sql,data,taocan_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int taocan_id) {
        String sql="delete from taocan where id=?";
        int count=Dbutil.update(sql,taocan_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public List<Taocan> getLuxianTaocanList(int luxian_id) {
        String sql="select * from taocan where luxian_id=? order by price limit 100";
        List<Taocan> taocans=Dbutil.list(sql,Taocan.class,luxian_id);
        return taocans;
    }

    @Override
    public Taocan getMinpirce(int luxian_id) {
        String sql="select * from taocan where luxian_id=? AND price=(" +
                "select min(price) from taocan where luxian_id=?" +
                ");";
        Object [] objects={luxian_id,luxian_id};
        Taocan taocan=Dbutil.get(sql,Taocan.class,objects);
        return taocan;
    }


    private static class LazyHolder {
        private static final TaoCanDaoImpl INSTANCE = new TaoCanDaoImpl();
    }
    private TaoCanDaoImpl (){}

    public static final TaoCanDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
