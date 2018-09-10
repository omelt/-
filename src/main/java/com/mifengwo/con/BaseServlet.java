package com.mifengwo.con;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Method;

@WebServlet(name = "BaseServlet")//该Servlet,是所有servlet的父类，可以用来处理*.do, urlPatterns = "*.do"
public class BaseServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 获取方法名字
        //String servletPath = request.getServletPath();// /xxxxxx.do
        // 去掉斜杠和.do

        String methodName = request.getParameter("type");// xxxxxx
        try {
            // 利用反射获取方法
            Method method = getClass().getDeclaredMethod(methodName,
                    HttpServletRequest.class, HttpServletResponse.class);
            // 执行相应的方法
            method.invoke(this, request, response);
        } catch (Exception e) {
            // TODO: handle exception
        }
    }

}
