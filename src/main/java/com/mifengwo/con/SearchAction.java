package com.mifengwo.con;

import com.mifengwo.entity.Luxian;
import com.mifengwo.entity.Passage;
import com.mifengwo.entity.Taocan;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.LuXianService;
import com.mifengwo.service.PassageService;
import com.mifengwo.service.TaoCanService;
import com.mifengwo.service.UserService;
import com.mifengwo.util.SearchPageInit;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(name = "SearchAction", urlPatterns = "/search")
public class SearchAction extends BaseServlet {
    public void all(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data = request.getParameter("q");

        if (data == null) response.sendRedirect("/index");

        Map<String, Integer> countMap = new HashMap<>();
        UserService userService = Factory.getInstance("UserService", UserService.class);
        PassageService passageService = Factory.getInstance("PassageService", PassageService.class);
        LuXianService luXianService = Factory.getInstance("LuXianService", LuXianService.class);
        TaoCanService taoCanService = Factory.getInstance("TaoCanService", TaoCanService.class);

        List<User> ulist = userService.findByNickname(data, 0, Integer.MAX_VALUE);
        List<Passage> plist = passageService.findByTitle(data, 0, Integer.MAX_VALUE);
        List<Luxian> llist = luXianService.findByTitle(data, 0, Integer.MAX_VALUE);

        countMap.put("uCount", ulist.size());
        countMap.put("pCount", plist.size());
        countMap.put("lCount", llist.size());
        countMap.put("allCount", ulist.size() + plist.size() + llist.size());


        ulist = ulist.size() > 3 ? ulist.subList(0, 3) : ulist.subList(0, ulist.size());
        plist = plist.size() > 3 ? plist.subList(0, 3) : plist.subList(0, plist.size());
        llist = llist.size() > 6 ? llist.subList(0, 6) : llist.subList(0, llist.size());


        for (int i = 0; i < llist.size(); i++) {
            int luxian_id = llist.get(i).getId();
            Taocan taocan = taoCanService.getMinpirce(luxian_id);
            llist.get(i).setTaocan(taocan);
        }

        for (int i = 0; i < plist.size(); i++) {
            Passage temp = plist.get(i);
            int id = temp.getUser_id();
            User user = userService.get_by_id(id);
            temp.setUser(user);
        }


        request.setAttribute("data", data);
        request.setAttribute("ulist", ulist);
        request.setAttribute("plist", plist);
        request.setAttribute("llist", llist);
        request.setAttribute("countMap", countMap);

        request.getRequestDispatcher("jsp/search.jsp").forward(request, response);

    }

    public void post(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data = request.getParameter("q");
        if (data == null) response.sendRedirect("/index");
        int nowPage = 1;
        String pageData = null;
        if ((pageData = request.getParameter("page")) != null) nowPage = Integer.parseInt(pageData);

        PassageService passageService = Factory.getInstance("PassageService", PassageService.class);
        List<Passage> plist = passageService.findByTitle(data, 0, Integer.MAX_VALUE);

        if (plist.size() == 0) request.setAttribute("result", null);
        else {
            SearchPageInit<Passage> searchPageInit = new SearchPageInit<>(nowPage, plist);

            searchPageInit.setState("post");

            request.setAttribute("data", data);
            request.setAttribute("result", searchPageInit);


        }request.getRequestDispatcher("jsp/search.jsp").forward(request, response);
    }

    public void luxian(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data = request.getParameter("q");
        if (data == null) response.sendRedirect("/index");
        int nowPage = 1;
        String pageData = null;
        if ((pageData = request.getParameter("page")) != null) nowPage = Integer.parseInt(pageData);

        LuXianService luXianService = Factory.getInstance("LuXianService", LuXianService.class);
        List<Luxian> plist = luXianService.findByTitle(data, 0, Integer.MAX_VALUE);
        if (plist.size() == 0) request.setAttribute("result", null);
        else {
            SearchPageInit<Luxian> searchPageInit = new SearchPageInit<>(nowPage, plist);

            searchPageInit.setState("luxian");

            request.setAttribute("data", data);
            request.setAttribute("result", searchPageInit);


        }
        request.getRequestDispatcher("jsp/search.jsp").forward(request, response);
    }

    public void user(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String data = request.getParameter("q");
        if (data == null) response.sendRedirect("/index");
        int nowPage = 1;
        String pageData = null;
        if ((pageData = request.getParameter("page")) != null) nowPage = Integer.parseInt(pageData);

        UserService userService = Factory.getInstance("UserService", UserService.class);
        List<User> plist = userService.findByNickname(data, 0, Integer.MAX_VALUE);
        if (plist.size() == 0) request.setAttribute("result", null);
        else {
            SearchPageInit<User> searchPageInit = new SearchPageInit<>(nowPage, plist);

            searchPageInit.setState("user");
            request.setAttribute("result", searchPageInit);
        }
        request.setAttribute("data", data);
        request.getRequestDispatcher("jsp/search.jsp").forward(request, response);
    }
}
