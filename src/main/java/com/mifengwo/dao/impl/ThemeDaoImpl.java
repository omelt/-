package com.mifengwo.dao.impl;

import com.mifengwo.dao.ThemeDao;
import com.mifengwo.entity.Theme;
import com.mifengwo.util.Dbutil;

import java.util.ArrayList;
import java.util.List;

public class ThemeDaoImpl implements ThemeDao {
    @Override
    public List<Theme> getList() {
        String sql="select * from theme limit 100";
        List<Theme> themes= Dbutil.list(sql,Theme.class);
        return themes;
    }

    @Override
    public boolean update(String fieldname, Object data, int theme_id) {
        String sql= String.format("update theme set %s=? where id =?", fieldname);
        int count=Dbutil.update(sql,data,theme_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int theme_id) {
        String sql="delete from theme where id=?";
        int count=Dbutil.update(sql,theme_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public Theme get(int theme_id) {
        String sql="select * from theme where id=? limit 1";
        Theme theme=Dbutil.get(sql,Theme.class,theme_id);
        return theme;
    }

    @Override
    public boolean create(Theme theme) {
        String sql="insert into theme(title) values(?)";
        int count=Dbutil.update(sql,theme.getTitle());
        if (count>0){
            return true;
        }
        else return false;
    }

    private static class LazyHolder {
        private static final ThemeDaoImpl INSTANCE = new ThemeDaoImpl();
    }
    private ThemeDaoImpl (){}

    public static final ThemeDaoImpl getInstance() {
        return LazyHolder.INSTANCE;
    }
}
