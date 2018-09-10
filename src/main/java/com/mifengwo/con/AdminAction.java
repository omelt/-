package com.mifengwo.con;


import com.mifengwo.entity.Admin;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.AdminService;
import com.mifengwo.service.impl.AdminServiceImpl;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "AdminAction", urlPatterns = "/admin")
public class AdminAction extends BaseServlet {
    public  static AdminService adminService= Factory.getInstance("AdminService", AdminServiceImpl.class);


    public void login(HttpServletRequest request,HttpServletResponse response){
            String username=request.getParameter("username");
            String password=request.getParameter("password");
            Admin admin=new Admin();
            admin.setUsername(username);
            admin.setPassword(password);
            try {
                if(adminService.findAdmin(admin)){
                    response.getWriter().print("登录成功");
                }else {
                    response.getWriter().print("登录失败");
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

    }
}
