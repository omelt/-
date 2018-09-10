package com.mifengwo.service;

import com.mifengwo.entity.Taocan;

import java.util.List;

public interface TaoCanService {

    Taocan getMinpirce(int luxian_id);

    List<Taocan> listAbout(int luxian_id);

}
