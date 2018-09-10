package com.mifengwo.service;

import com.mifengwo.entity.Dingdan;

import java.util.List;

public interface DingDanService {

    List<Dingdan> getList();

    boolean create(Dingdan dingdan);

    boolean update(String fieldname, Object data, int dingdan_id);

    boolean delete(int dingdan_id);

    Dingdan get(int dingdan_id);

    List<Dingdan> getUserDingdanList(int user_id);

    List<Dingdan> getLuxianDingdanList(int luxian_id);

    List<Dingdan> getSalerDingdanList(int saler_id);

    Dingdan getToPay(int user_id);

}
