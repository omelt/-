package com.mifengwo.dao.impl;

import com.mifengwo.dao.AdminDao;
import com.mifengwo.entity.Admin;
import com.mifengwo.entity.User;
import com.mifengwo.util.Dbutil;


public class AdminDaoImpl implements AdminDao{

    @Override
    public Admin get(Admin admin) {
        String sql="select * from admin where username=? and password=? limit 1";
        Admin res= Dbutil.get(sql,Admin.class,admin.getUsername(),admin.getPassword());
        return res;
    }

    private static class LazyHolder {
        private static final AdminDaoImpl INSTANCE = new AdminDaoImpl();
    }
    private AdminDaoImpl (){}

    public static final AdminDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
