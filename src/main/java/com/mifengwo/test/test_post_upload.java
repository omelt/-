package com.mifengwo.test;

import com.mifengwo.dao.PassageDao;
import com.mifengwo.entity.Passage;
import com.mifengwo.factory.Factory;
import com.mifengwo.util.Html2Text;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "test_post_upload",urlPatterns = "/test_post_upload")
public class test_post_upload extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");

        Passage post=new Passage();
        post.setContent(req.getParameter("postbody"));
        post.setView_content(req.getParameter("postview"));

        post.setTitle("test");
        post.setPicture("/static/images/resource/default-show.jpg");
        post.setUser_id(1);
        PassageDao passageDao= Factory.getInstance("PassageDao",PassageDao.class);
        //System.out.println(passageDao.create(post));
        req.setAttribute("post",post);
        req.getRequestDispatcher("jsp/write.jsp").forward(req,resp);
    }
}
