package com.mifengwo.service;

import com.mifengwo.entity.Passage;

import java.util.List;

public interface PassageService {

    List<Passage> getAllList();

    List<Passage> getUsePassageList(int user_id);

    Passage get(int passage_id);

    boolean update(Passage passage);

    boolean delete(int id);

    List<Passage> showPassages(int user_id);

    boolean addPassage(Passage passage);

    boolean create(Passage passage);

    List<Passage> findByTitle(String title,int start,int step);

    Passage get_user_passage(int passage_id);

    long getCount();

    List<Passage> getpage(int page,int count);

    List<Passage> getlimit();
}
