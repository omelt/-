package com.mifengwo.con;

import com.alibaba.fastjson.JSONObject;
import com.mifengwo.entity.Dingdan;
import com.mifengwo.entity.Luxian;
import com.mifengwo.entity.Saler;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.DingDanService;
import com.mifengwo.service.LuXianService;
import com.mifengwo.service.SalerService;
import com.mifengwo.service.impl.DingDanServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Date;
import java.util.List;

@WebServlet(name = "DingDanAction", urlPatterns = "/dingdan")
public class DingDanAction extends BaseServlet {
    public static DingDanService dingDanService= Factory.getInstance("DingDanService", DingDanServiceImpl.class);

    public void findAll(HttpServletRequest request,HttpServletResponse response){
        List<Dingdan> list=dingDanService.getList();
        String all= JSONObject.toJSONString(list);
        try {
            response.getWriter().print(all);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public void findByUser(HttpServletRequest request,HttpServletResponse response) {
        String user_id=request.getParameter("user_id");
        System.out.println(user_id);
        int id=Integer.parseInt(user_id);
        //String nowpage=request.getParameter("page");
        List<Dingdan> list = dingDanService.getUserDingdanList(id);
        LuXianService luXianService=Factory.getInstance("LuXianService",LuXianService.class);
        SalerService salerService=Factory.getInstance("SalerService",SalerService.class);
        for(int i=0;i<list.size();i++){
            int luxian_id=list.get(i).getLuxian_id();
            int saler_id=list.get(i).getSaler_id();
            Luxian luxian=luXianService.getbyid(luxian_id);
            Saler saler=salerService.get_by_id(saler_id);
            list.get(i).setLuxian(luxian);
            list.get(i).setSaler(saler);
        }
        request.setAttribute("list",list);
        try {
            request.getRequestDispatcher("jsp/myload.jsp").forward(request,response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void findone(HttpServletRequest request,HttpServletResponse response) {
        String dingdan_id=request.getParameter("dingdan_id");
        int id=Integer.parseInt(dingdan_id);
        Dingdan dingdan = dingDanService.get(id);
        String all= JSONObject.toJSONString(dingdan);
        try {
            response.getWriter().print(all);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void findByLuxian(HttpServletRequest request,HttpServletResponse response) {
        String luxian_id=request.getParameter("luxian_id");
        int id=Integer.parseInt(luxian_id);
        List<Dingdan> list = dingDanService.getLuxianDingdanList(id);
        String all= JSONObject.toJSONString(list);
        try {
            response.getWriter().print(all);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    public void findBySaler(HttpServletRequest request,HttpServletResponse response) {
        String saler_id=request.getParameter("saler_id");
        int id=Integer.parseInt(saler_id);
        List<Dingdan> list = dingDanService.getSalerDingdanList(id);
        String all= JSONObject.toJSONString(list);
        try {
            response.getWriter().print(all);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void add(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {

        Dingdan dingdan=new Dingdan();
        dingdan.setUser_id(Integer.parseInt(request.getParameter("user_id")));
        dingdan.setLuxian_id(Integer.parseInt(request.getParameter("luxian_id")));
        dingdan.setSaler_id(Integer.parseInt(request.getParameter("saler_id")));
        dingdan.setPrice(Integer.parseInt(request.getParameter("price")));
        dingdan.setState("W");
        dingdan.setTimestamp(new Date(System.currentTimeMillis()));
        DingDanService dingDanService=Factory.getInstance("DingDanService",DingDanService.class);

        if(dingDanService.create(dingdan))
            response.getWriter().print("1");
        else
            response.getWriter().print("0");
    }

    public void pay(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException, ServletException {
        String id=request.getParameter("id");
        Dingdan dingdan=null;
        DingDanService dingDanService=Factory.getInstance("DingDanService",DingDanService.class);
        if(id!=null && id!=""){
            dingdan=dingDanService.get(Integer.parseInt(id));
        }else{
            dingdan=dingDanService.getToPay(((User)request.getSession().getAttribute("current_user")).getId());
        }
        LuXianService luXianService=Factory.getInstance("LuXianService",LuXianService.class);
        dingdan.setLuxian(luXianService.getDetail(dingdan.getLuxian_id()));
        request.setAttribute("dingdan",dingdan);
        request.getRequestDispatcher("jsp/buy.jsp").forward(request,response);
    }
    public void overPay(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
        String id=request.getParameter("id");
        DingDanService dingDanService=Factory.getInstance("DingDanService",DingDanService.class);
        int idDate=-1;
        if(id!=null && id!="") {
            idDate = Integer.parseInt(id);
        }
        System.out.println(idDate);
        if (dingDanService.update("state","F",idDate))
            response.getWriter().print("1");
        else{
            response.getWriter().print("0");
        }

    }

    public void createDingdan(HttpServletRequest request,HttpServletResponse response) {

    }

    public void update(HttpServletRequest request,HttpServletResponse response) {

    }

    public void delete(HttpServletRequest request,HttpServletResponse response) {

    }
}
