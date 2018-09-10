package com.mifengwo.dao;

import com.mifengwo.entity.Theme;

import java.util.List;

public interface ThemeDao {
    //    创建主题
    public boolean create(Theme theme);
    //    查询BY ID
    public Theme get(int theme_id);
    //    查询所有
    public List<Theme> getList();
    //    修改主题
    public boolean update(String fieldname, Object data, int theme_id);
    //    用ID删除套餐
    public boolean delete(int theme_id);
}
