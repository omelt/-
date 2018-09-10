package com.mifengwo.service.impl;

import com.mifengwo.dao.AdminDao;
import com.mifengwo.dao.impl.AdminDaoImpl;
import com.mifengwo.entity.Admin;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.AdminService;

public class AdminServiceImpl implements AdminService {
    private AdminServiceImpl(){}

    private static class inClass{
        public static AdminService adminService=new AdminServiceImpl();
    }

    public static AdminService getInstance(){
        return inClass.adminService;
    }

    public static AdminDao adminDao= Factory.getInstance("AdminDao", AdminDaoImpl.class);

    @Override
    public boolean findAdmin(Admin admin) {
        Admin a=adminDao.get(admin);
        if(a==null){
            return false;
        }else {
            return true;
        }
    }
}
