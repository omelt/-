package com.mifengwo.dao;

import com.mifengwo.entity.Saler;

import java.util.List;

public interface SalerDao {
//    创建Saler
    public boolean create(Saler saler);
//    查询BY ID
    public Saler get(int saler_id);
    //    查询所有
    public List<Saler> getList();
//    修改Saler
    public boolean update(String fieldname, Object data, int saler_id);
    //    用ID删除saler
    public boolean delete(int saler_id);
    //    查询用户ID下的Saler
    public Saler get_by_user_id(int user_id);
}
