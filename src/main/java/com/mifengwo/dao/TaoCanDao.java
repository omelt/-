package com.mifengwo.dao;

import com.mifengwo.entity.Taocan;

import java.util.List;

public interface TaoCanDao {
    //    创建套餐
    public boolean create(Taocan taocan);
    //    查询BY ID
    public Taocan get(int taocan_id);
    //    查询所有
    public List<Taocan> getList();
    //    修改Taocan
    public boolean update(String fieldname, Object data, int taocan_id);
    //    用ID删除套餐
    public boolean delete(int taocan_id);
    //    查询路线ID下的套餐
    public List<Taocan> getLuxianTaocanList(int luxian_id);

    Taocan getMinpirce(int luxian_id);

}
