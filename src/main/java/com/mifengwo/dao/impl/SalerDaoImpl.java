package com.mifengwo.dao.impl;

import com.mifengwo.dao.SalerDao;
import com.mifengwo.entity.Saler;
import com.mifengwo.util.Dbutil;

import java.util.List;

public class SalerDaoImpl implements SalerDao {
    @Override
    public boolean create(Saler saler) {
        String sql="insert into saler(user_id,name,fullname,message,about_sale,conphone) values (?,?,?,?,?,?)";
        int count=Dbutil.update(sql,saler.getUser_id(),saler.getName(),saler.getFullname(),saler.getMessage(),saler.getAbout_sale(),saler.getConphone());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public Saler get(int id) {
        String sql="select * from saler where id=? limit 1";
        Saler saler=Dbutil.get(sql,Saler.class,id);
        return saler;
    }

    @Override
    public List<Saler> getList() {
        String sql="select * from saler limit 100";
        List<Saler>salers=Dbutil.list(sql,Saler.class);
        return salers;
    }

    @Override
    public boolean update(String fieldname, Object data, int saler_id) {
        String sql= String.format("update saler set %s=? where id =?", fieldname);
        int count=Dbutil.update(sql,data,saler_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int saler_id) {
        String sql="delete from saler where id=?";
        int count=Dbutil.update(sql,saler_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public Saler get_by_user_id(int user_id) {
        String sql="select * from saler where id=? limit 1";
        Saler saler=Dbutil.get(sql,Saler.class,user_id);
        return saler;
    }
    private static class LazyHolder {
        private static final SalerDaoImpl INSTANCE = new SalerDaoImpl();
    }
    private SalerDaoImpl (){}

    public static final SalerDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
