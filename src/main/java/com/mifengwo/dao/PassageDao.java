package com.mifengwo.dao;

import com.mifengwo.entity.Passage;

import java.util.List;

public interface PassageDao {

//    创建Passage
    public boolean create(Passage passage);
//    查询所有
    public List<Passage> getList();
//    用ID查询Passage
    public Passage get(int passage_id);
//    修改Passage
    public boolean update(Passage passage);
    //    用ID删除Passage
    public boolean delete(int passage_id);
//    查询同一用户ID下的文章
    public List<Passage> getUserPassageList(int user_id);

    public List<Passage> selectLikeTitle(String title,int start,int step);

    Long getCount();

    List<Passage> getlimit();

    List<Passage> getpage(int page,int count);
}
