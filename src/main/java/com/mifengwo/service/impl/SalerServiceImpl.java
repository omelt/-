package com.mifengwo.service.impl;

import com.mifengwo.dao.SalerDao;
import com.mifengwo.entity.Saler;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.AdminService;
import com.mifengwo.service.SalerService;

import java.util.List;

public class SalerServiceImpl implements SalerService {
    private SalerServiceImpl(){}

    private static class inClass{
        public static SalerServiceImpl salerService=new SalerServiceImpl();
    }

    public static SalerService getInstance(){
        return SalerServiceImpl.inClass.salerService;
    }

    @Override
    public boolean add(Saler saler) {
        SalerDao salerDao= Factory.getInstance("SalerDao",SalerDao.class);
        return salerDao.create(saler);
    }

    @Override
    public Saler get_by_id(int saler_id) {
        SalerDao salerDao= Factory.getInstance("SalerDao",SalerDao.class);
        return salerDao.get(saler_id);
    }

    @Override
    public List<Saler> getAll() {
        SalerDao salerDao= Factory.getInstance("SalerDao",SalerDao.class);
        return salerDao.getList();
    }

    @Override
    public boolean change(String fieldname, Object data, int saler_id) {
        SalerDao salerDao= Factory.getInstance("SalerDao",SalerDao.class);
        return salerDao.update(fieldname,data,saler_id);
    }

    @Override
    public boolean delete(int saler_id) {
        SalerDao salerDao= Factory.getInstance("SalerDao",SalerDao.class);
        return salerDao.delete(saler_id);
    }

    @Override
    public Saler get_by_user_id(int user_id) {
        SalerDao salerDao= Factory.getInstance("SalerDao",SalerDao.class);
        return salerDao.get_by_user_id(user_id);
    }
}
