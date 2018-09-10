package com.mifengwo.service.impl;

import com.mifengwo.dao.DingDanDao;
import com.mifengwo.dao.impl.DingDanDaoImpl;
import com.mifengwo.entity.Dingdan;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.DingDanService;

import java.util.List;

public class DingDanServiceImpl implements DingDanService {

    private DingDanServiceImpl(){}

    private static class inClass{
        public static DingDanService dingDanService=new DingDanServiceImpl();
    }

    public static DingDanService getInstance(){
        return inClass.dingDanService;
    }

    public static DingDanDao dingDanDao= Factory.getInstance("DingDanDao", DingDanDaoImpl.class);

    @Override
    public List<Dingdan> getList() {
        return dingDanDao.getList();
    }

    @Override
    public Dingdan getToPay(int user_id) {
        DingDanDao dingDanDao=Factory.getInstance("DingDanDao",DingDanDao.class);
        Dingdan dingdan=dingDanDao.selectWaitDingdan(user_id);
        return dingdan;
    }

    @Override
    public boolean create(Dingdan dingdan) {
        return dingDanDao.create(dingdan);
    }

    @Override
    public boolean update(String fieldname, Object data, int dingdan_id) {
        return dingDanDao.update(fieldname,data,dingdan_id);
    }

    @Override
    public boolean delete(int dingdan_id) {
        return dingDanDao.delete(dingdan_id);
    }

    @Override
    public Dingdan get(int dingdan_id) {
        return dingDanDao.get(dingdan_id);
    }

    @Override
    public List<Dingdan> getUserDingdanList(int user_id) {
        return dingDanDao.getUserDingdanList(user_id);
    }

    @Override
    public List<Dingdan> getLuxianDingdanList(int luxian_id) {
        return dingDanDao.getUserDingdanList(luxian_id);
    }

    @Override
    public List<Dingdan> getSalerDingdanList(int saler_id) {
        return dingDanDao.getSalerDingdanList(saler_id);
    }
}
