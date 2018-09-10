package com.mifengwo.service.impl;

import com.mifengwo.dao.LuXianDao;
import com.mifengwo.entity.Luxian;
import com.mifengwo.entity.Saler;
import com.mifengwo.entity.Taocan;
import com.mifengwo.entity.Theme;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.LuXianService;
import com.mifengwo.service.SalerService;
import com.mifengwo.service.TaoCanService;
import com.mifengwo.service.ThemeService;

import java.util.List;

public class LuXianServiceImpl implements LuXianService {
    public static LuXianDao luXianDao= Factory.getInstance("LuXianDao",LuXianDao.class);

    @Override
    public Luxian getbyid(int id) {
        return luXianDao.get(id);
    }

    @Override
    public List<Luxian> pageget(int count, int page) {
        return luXianDao.pageget(count,page);
    }

    @Override
    public List<Luxian> findByTitle(String title, int start, int step) {
        LuXianDao luxianDao=Factory.getInstance("LuXianDao",LuXianDao.class);
        return luxianDao.selectLikeTitle(title,start,step);
    }

    @Override
    public Luxian getDetail(int id) {
        LuXianService luXianService=Factory.getInstance("LuXianService",LuXianService.class);
        TaoCanService taoCanService=Factory.getInstance("TaoCanService",TaoCanService.class);
        SalerService salerService=Factory.getInstance("SalerService",SalerService.class);
        ThemeService themeService=Factory.getInstance("ThemeService",ThemeService.class);
        Luxian luxian=luXianService.getbyid(id);
        luxian.setTaocanList(taoCanService.listAbout(id));
        luxian.setSaler(salerService.get_by_id(luxian.getSaler_id()));
        luxian.setTheme(themeService.getById(luxian.getTheme_id()));
        return luxian;
    }

    @Override
    public boolean create(Luxian luxian) {
        LuXianDao luXianDao=Factory.getInstance("LuXianDao",LuXianDao.class);
        return luXianDao.create(luxian);
    }

    private LuXianServiceImpl(){}

    private static class inClass{
        public static LuXianService luXianService=new LuXianServiceImpl();
    }

    public static LuXianService getInstance(){
        return inClass.luXianService;
    }

}
