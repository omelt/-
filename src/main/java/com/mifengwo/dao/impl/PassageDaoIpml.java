package com.mifengwo.dao.impl;

import com.mifengwo.dao.PassageDao;
import com.mifengwo.entity.Passage;
import com.mifengwo.util.Dbutil;

import java.util.ArrayList;
import java.util.List;

public class PassageDaoIpml implements PassageDao {
    @Override
    public boolean create(Passage passage) {
        String sql="insert into passage(content,user_id,title,picture,view_content) values(?,?,?,?,?)";
        int count= Dbutil.update(sql,passage.getContent(),passage.getUser_id(),passage.getTitle(),passage.getPicture(),passage.getView_content());
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public List<Passage> getList() {
        String sql="select * from passage limit 100";
        List<Passage>passages=Dbutil.list(sql,Passage.class);
        return passages;
    }



    @Override
    public Passage get(int passage_id) {
        String sql="select * from passage where id=? limit 1";
        Passage res=Dbutil.get(sql,Passage.class,passage_id);
        return res;
    }

    @Override
    public boolean update(Passage passage) {
        String sql= "update passage set content=?,title=?,picture=?,view_content=? where id =?";
        Object[]objects={passage.getContent(),passage.getTitle(),passage.getPicture(),passage.getView_content(),passage.getId()};
        int count=Dbutil.update(sql,objects);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public boolean delete(int passage_id) {
        String sql="delete from passage where id=?";
        int count=Dbutil.update(sql,passage_id);
        if (count>0){
            return true;
        }
        else return false;
    }

    @Override
    public List<Passage> getUserPassageList(int user_id) {
        String sql="select * from passage where user_id=?";
        List<Passage> passages=Dbutil.list(sql, Passage.class, user_id);
        return passages;
    }

    @Override
    public Long getCount() {
        String sql="select count(*) as data from passage";
        long s= (long) Dbutil.list(sql).get(0).get("data");
        return s;
    }

    @Override
    public List<Passage> getlimit() {
        String sql="select * from passage limit 5";
        List<Passage>passages=Dbutil.list(sql,Passage.class);
        return passages;
    }

    @Override
    public List<Passage> getpage(int page,int count) {
        String sql=String.format("select * from passage limit %d,%d",page,count);
        List<Passage> list=Dbutil.list(sql,Passage.class);
        return list;
    }

    @Override
    public List<Passage> selectLikeTitle(String title, int start, int step) {
        title='%'+title+'%';
        String sql= String.format("select * from passage where title like ? limit %d,%d",start,step);
        return Dbutil.list(sql,Passage.class,title);
    }
    private static class LazyHolder {
        private static final PassageDaoIpml INSTANCE = new PassageDaoIpml();
    }
    private PassageDaoIpml (){}

    public static final PassageDaoIpml getInstance() {
        return LazyHolder.INSTANCE;
    }
}