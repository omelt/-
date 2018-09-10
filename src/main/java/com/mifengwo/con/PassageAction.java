package com.mifengwo.con;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.mifengwo.entity.Passage;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.PassageService;
import com.mifengwo.service.UserService;
import com.mifengwo.service.impl.PassageServiceImpl;
import com.mifengwo.util.Html2Text;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@WebServlet(name = "PassageAction", urlPatterns = "/passage")
public class PassageAction extends BaseServlet {
    public static PassageService passageService = Factory.getInstance("PassageService", PassageServiceImpl.class);

    public void getlimit(HttpServletRequest request,HttpServletResponse response) {
        Long hes=passageService.getCount();
        HttpSession session=request.getSession();
        session.setAttribute("all",hes);

        List<Passage>list=passageService.getlimit();
        String result= JSONObject.toJSONString(list);
        try {
            response.getWriter().print(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public void delete(HttpServletRequest request, HttpServletResponse response) {
        String str = request.getParameter("passage_id");
        int passage_id = Integer.parseInt(str);
        try {
            if (passageService.delete(passage_id)) {
                response.getWriter().print("删除成功");
            } else {
                response.getWriter().print("删除失败");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public void getPage(HttpServletRequest request,HttpServletResponse response) {

        HttpSession session=request.getSession();
        int count=0;  //当前页数
        if(Integer.parseInt(request.getParameter("nowpage"))==0) {  //判断传递的页面是否有效
            count = Integer.parseInt(request.getParameter("nowpage"));
//                session.setAttribute("nowpage",nowpage);
        }else {
            count = Integer.parseInt(request.getParameter("nowpage")) * 6;
        }
        List<Passage>list=passageService.getpage(count,6);
        UserService userService=Factory.getInstance("UserService",UserService.class);
        for(int i=0;i<list.size();i++){
            int id=list.get(i).getUser_id();
            User user=userService.get_by_id(id);
            list.get(i).setUser(user);
        }
        String result= JSONObject.toJSONString(list);
        try {
            response.getWriter().print(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void getPassage(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setCharacterEncoding("utf-8");
        String str = request.getParameter("passage_id");
        if (str!=null){

            int passage_id = Integer.parseInt(str);
            Passage passage = passageService.get_user_passage(passage_id);

            request.setAttribute("passage", passage);
            request.getRequestDispatcher("jsp/postinfo.jsp").forward(request, response);
        }
//        String passjson = JSON.toJSONString(passage);
//        try {
//            response.getWriter().print(passjson);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }



    }

    public void update(HttpServletRequest request, HttpServletResponse response) {
        String str = request.getParameter("passage_id");
        int passage_id = Integer.parseInt(str);
        String title = request.getParameter("title");
        String picture = request.getParameter("picture");
        String content = request.getParameter("content");
        Passage passage = new Passage();
        passage.setId(passage_id);
        passage.setTitle(title);
        passage.setContent(content);
        passage.setPicture(picture);
        try {
            if (passageService.update(passage)) {
                response.getWriter().print("修改成功");
            } else {
                response.getWriter().print("修改失败");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void getList(HttpServletRequest request, HttpServletResponse response) {
        String str = request.getParameter("user_id");
        int user_id = Integer.parseInt(str);
        List<Passage> list = passageService.getUsePassageList(user_id);
        String passjson = JSON.toJSONString(list);
        try {
            response.getWriter().print(passjson);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


}
