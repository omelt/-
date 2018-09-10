package com.mifengwo.dao;

import com.mifengwo.entity.Dingdan;

import java.util.List;

public interface DingDanDao {
//    查询所有
    public List<Dingdan> getList();
//    创建订单
    public boolean create(Dingdan dingdan);
//    修改订单
    public boolean update(String fieldname, Object data, int dingdan_id);
//    删除订单BY  ID
    public boolean delete(int dingdan_id);
//    用ID查询订单
    public Dingdan get(int dingdan_id);
//    同一用户ID下的订单
    public List<Dingdan> getUserDingdanList(int user_id);
//    同一路线ID下的订单
    public List<Dingdan> getLuxianDingdanList(int luxian_id);
//    同一Saler ID下的订单
    public List<Dingdan> getSalerDingdanList(int saler_id);

    public Dingdan selectWaitDingdan(int user_id);
}
