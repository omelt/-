package com.mifengwo.service.impl;

import com.mifengwo.dao.PassageDao;
import com.mifengwo.dao.UserDao;
import com.mifengwo.dao.impl.PassageDaoIpml;
import com.mifengwo.entity.Passage;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.PassageService;
import com.mifengwo.service.UserService;

import java.util.List;

public class PassageServiceImpl implements PassageService{
    private PassageServiceImpl(){}

    private static class inClass{
        public static PassageService passageService=new PassageServiceImpl();
    }

    public static PassageService getInstance(){
        return inClass.passageService;
    }

    public static PassageDao passageDao= Factory.getInstance("PassageDao", PassageDaoIpml.class);

    @Override
    public List<Passage> getAllList() {
        return passageDao.getList();
    }

    @Override
    public List<Passage> getUsePassageList(int user_id) {
        List<Passage> list=passageDao.getList();
        return list;
    }

    @Override
    public List<Passage> showPassages(int user_id) {
        PassageDao passageDao= Factory.getInstance("PassageDao", PassageDao.class);
        List<Passage> passages=passageDao.getUserPassageList(user_id);
        for (int i = 0; i < passages.size(); i++) {
            Passage passage=passages.get(i);
            passage.setContent(passage.getView_content());
        }
        return passages;
    }
    @Override
    public List<Passage> findByTitle(String title, int start, int step) {
        PassageDao passageDao=Factory.getInstance("PassageDao",PassageDao.class);
        return passageDao.selectLikeTitle(title,start,step);
    }

    @Override
    public boolean addPassage(Passage passage) {
        return passageDao.create(passage);
    }

    @Override
    public boolean create(Passage passage) {
        return passageDao.create(passage);
    }

    @Override
    public long getCount() {
        return passageDao.getCount();
    }

    @Override
    public Passage get_user_passage(int passage_id) {
        Passage passage=this.get(passage_id);
        UserService userService=Factory.getInstance("UserService", UserService.class);
        User user=userService.get_by_id(passage.getUser_id());
        passage.setUser(user);
        return passage;
    }
    @Override
    public List<Passage> getpage(int page,int count) {
        return passageDao.getpage(page,count);
    }

    @Override
    public List<Passage> getlimit() {
        return passageDao.getlimit();
    }

    @Override
    public Passage get(int passage_id) {
        return passageDao.get(passage_id);
    }

    @Override
    public boolean update(Passage passage) {
        return passageDao.update(passage);
    }

    @Override
    public boolean delete(int id) {
        return passageDao.delete(id);
    }
}