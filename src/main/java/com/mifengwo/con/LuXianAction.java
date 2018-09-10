package com.mifengwo.con;

import com.alibaba.fastjson.JSONObject;
import com.mifengwo.entity.Luxian;
import com.mifengwo.entity.Taocan;
import com.mifengwo.entity.Theme;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.LuXianService;
import com.mifengwo.service.TaoCanService;
import com.mifengwo.service.ThemeService;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "LuXianAction",urlPatterns = "/luxian")
public class LuXianAction extends BaseServlet{

    public void get(HttpServletRequest request,HttpServletResponse response) {
          LuXianService luXianService= Factory.getInstance("LuXianService",LuXianService.class);
        TaoCanService  taoCanService=Factory.getInstance("TaoCanService",TaoCanService.class);
        List<Luxian> Tlist=luXianService.pageget(0,3);
        for(int i=0;i<Tlist.size();i++){
            int luxian_id=Tlist.get(i).getId();
            Taocan taocan=taoCanService.getMinpirce(luxian_id);
            Tlist.get(i).setTaocan(taocan);
        }
        String result= JSONObject.toJSONString(Tlist);

        try {
            response.getWriter().print(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public void Info(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
        String id=request.getParameter("id");
        if(id==null||id=="") request.getRequestDispatcher("jsp/sale.jsp").forward(request,response);

        LuXianService luXianService=Factory.getInstance("LuXianService",LuXianService.class);
        Luxian luxian=luXianService.getDetail(Integer.parseInt(id));
        List<Luxian> Tlist=luXianService.pageget(0,8);
        TaoCanService taoCanService=Factory.getInstance("TaoCanService",TaoCanService.class);
        ThemeService themeService=Factory.getInstance("ThemeService",ThemeService.class);
        for(int i=0;i<Tlist.size();i++){
            Luxian luxian_temp=Tlist.get(i);
            Taocan taocan=taoCanService.getMinpirce(luxian_temp.getId());
            Theme theme=themeService.getById(luxian_temp.getTheme_id());
            luxian_temp.setTaocan(taocan);
            luxian_temp.setTheme(theme);
        }
        request.setAttribute("againList",Tlist);
        request.setAttribute("luxian",luxian);
        request.setAttribute("maxValue",luxian.getTaocanList().get(luxian.getTaocanList().size()-1).getPrice());


        request.getRequestDispatcher("jsp/loadinfo.jsp").forward(request,response);
    }


}