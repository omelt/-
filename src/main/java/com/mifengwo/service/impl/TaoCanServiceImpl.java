package com.mifengwo.service.impl;

import com.mifengwo.dao.TaoCanDao;
import com.mifengwo.entity.Taocan;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.TaoCanService;

import java.util.List;

public class TaoCanServiceImpl implements TaoCanService {
    public static TaoCanDao taoCanDao= Factory.getInstance("TaoCanDao",TaoCanDao.class);

    private TaoCanServiceImpl(){}

    @Override
    public Taocan getMinpirce(int luxian_id) {
        return taoCanDao.getMinpirce(luxian_id);
    }

    @Override
    public List<Taocan> listAbout(int luxian_id) {
        TaoCanDao taoCanDao=Factory.getInstance("TaoCanDao",TaoCanDao.class);
        return taoCanDao.getLuxianTaocanList(luxian_id);
    }

    private static class inClass{
        public static TaoCanService taoCanService=new TaoCanServiceImpl();
    }

    public static TaoCanService getInstance(){
        return inClass.taoCanService;
    }

}
