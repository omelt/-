package com.mifengwo.test;

import com.mifengwo.dao.PassageDao;
import com.mifengwo.dao.UserDao;
import com.mifengwo.entity.Admin;
import com.mifengwo.entity.Passage;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.UserService;
import com.mifengwo.util.CryptUtils;
import com.mifengwo.util.Dbutil;
import com.mifengwo.util.Html2Text;

import java.util.UUID;

public class test {
    public static void main(String[] args) throws Exception {
//        UserDao userDao=Factory.getInstance("UserDao",UserDao.class);
//        PassageDao passageDao=Factory.getInstance("PassageDao",PassageDao.class);
//        try {
//            Passage passage=passageDao.get(1);
//            System.out.println(Html2Text.getContent(passage.getContent()));
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        System.out.println(UUID.randomUUID().toString().replace("-",""));
        System.out.println(Dbutil.list("select count(*) as data from user").get(0).get("data"));

    }
}
