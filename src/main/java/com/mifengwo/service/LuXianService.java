package com.mifengwo.service;

import com.mifengwo.entity.Luxian;

import java.util.List;

public interface LuXianService {
    Luxian getbyid(int id);

    List<Luxian> pageget(int count,int page);

    List<Luxian> findByTitle(String title,int start,int step);

    Luxian getDetail(int id);

    boolean create(Luxian luxian);
}
