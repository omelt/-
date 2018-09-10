package com.mifengwo.service.impl;

import com.mifengwo.dao.ThemeDao;
import com.mifengwo.entity.Theme;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.ThemeService;

public class ThemeServiceImpl implements ThemeService {
    @Override
    public Theme getById(int id) {
        ThemeDao themeDao= Factory.getInstance("ThemeDao",ThemeDao.class);
        return themeDao.get(id);
    }

    private ThemeServiceImpl (){}

    private static class LazyHolder {
        private static final ThemeServiceImpl INSTANCE = new ThemeServiceImpl();
    }

    public static final ThemeServiceImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
