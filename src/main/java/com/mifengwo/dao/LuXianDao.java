package com.mifengwo.dao;

import com.mifengwo.entity.Luxian;
import com.mifengwo.entity.User;

import java.util.List;

public interface LuXianDao {
    //查询所有
    public List<Luxian> getList();
    //用ID查询路线
    public Luxian get(int luxian_id);
    //创建路线
    public boolean create(Luxian luxian);
    //修改路线
    public boolean update(String fieldname, Object data, int luxian_id);
//    用ID删除路线
    public boolean delete(int luxian_id);
//    查询同一saler_id下的路线
    public List<Luxian> getSalerLuxianList(int saler_id);
//    查询同一theme_id下的路线
    public List<Luxian> getThemeLuxianList(int theme_id);

    List<Luxian> pageget(int count,int page);

    public List<Luxian> selectLikeTitle(String title,int start,int step);
}
