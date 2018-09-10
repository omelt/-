package com.mifengwo.con;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.mifengwo.entity.Follow;
import com.mifengwo.entity.Passage;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.FollowService;
import com.mifengwo.service.PassageService;
import com.mifengwo.service.UserService;
import com.mifengwo.util.CryptUtils;
import com.mifengwo.util.Myconfig;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.util.Base64;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.*;
import java.util.List;

@WebServlet(name = "UserAction", urlPatterns = "/user")
public class UserAction extends BaseServlet {
    public void login(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String error = null;
        request.setCharacterEncoding("UTF-8");
        if (request.getMethod().equals("POST")) {
            HttpSession session = request.getSession();
            String realcode = (String) session.getAttribute("checkcode");
            if (realcode != null && realcode.equals(request.getParameter("logCheckcode"))) {
                UserService userService = Factory.getInstance("UserService", UserService.class);
                User user = userService.login(request.getParameter("logUsername"), request.getParameter("logPassowrd"));
                if (user != null) {
                    session.setAttribute("current_user", user);
                    response.sendRedirect("jsp/index.jsp");
                } else {

                    error = "登录信息有误";
                }
            } else {
                error = "验证码错误";
            }
        }

        if (error != null) request.setAttribute("login_error", error);
        String resflag = request.getParameter("resflag");
        if (resflag != null && resflag.equals("true")) request.setAttribute("resflag", true);
        request.getRequestDispatcher("jsp/login.jsp").forward(request, response);
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.getSession().setAttribute("current_user", null);
        response.sendRedirect("/index");

    }

    public void register(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String error = null;
        request.setCharacterEncoding("utf-8");
        if (request.getMethod().equals("POST")) {
            HttpSession session = request.getSession();
            String regpassword = request.getParameter("regpassword");
            String regrepeatpassword = request.getParameter("regrepeatpassword");
            User user = new User();
            if (!regpassword.equals(regrepeatpassword)) {
                error = "两次密码输入不一致";
            } else {
                user.setUsername(request.getParameter("regusername"));
                user.setNickname(request.getParameter("regnickname"));
                user.setPassword(regpassword);

                user.setPhone(request.getParameter("regphone"));
                UserService userService = Factory.getInstance("UserService", UserService.class);
                boolean b = userService.register(user);
                if (b) {
                    user = userService.get_by_nickname(user.getNickname());
                    session.setAttribute("current_user", user);

                    response.sendRedirect("/index");

                } else {
                    error = "注册失败";
                }
            }
        }
        if (error != null) {
            request.setAttribute("resflag", true);
            request.setAttribute("register_error", error);
        }
        request.getRequestDispatcher("jsp/login.jsp").forward(request, response);
    }

    public void userInfo(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        request.setCharacterEncoding("utf-8");
        HttpSession session = request.getSession();
        String nickname = request.getParameter("nickname");
        User user = null;
        FollowService followService=Factory.getInstance("FollowService", FollowService.class);
        if (nickname != null) {
            UserService userService = Factory.getInstance("UserService", UserService.class);
            user = userService.get_by_nickname(nickname);

            if (user!=null){
                User current_user= (User) session.getAttribute("current_user");
                if (current_user!=null) {
//                在用户页面的USER和Session的用户ID不等的情况
                    if (user.getId() != current_user.getId()) {
                        Follow follow = followService.get_by_ids(user.getId(), current_user.getId());
                        if (follow != null) {
                            request.setAttribute("follow_flag", true);
                        } else {
                            request.setAttribute("follow_flag", false);
                        }
                    }
                }
            }
        } else {
            user = (User) session.getAttribute("current_user");
        }
        if (user == null) {
            response.sendRedirect("jsp/login.jsp");
        } else {
            request.setAttribute("req_user", user);
            PassageService passageService = Factory.getInstance("PassageService", PassageService.class);
            List<Passage> passages = passageService.showPassages(user.getId());
            String passages_info = null;
            if (passages != null && passages.size() > 0) {
                request.setAttribute("user_passages", passages);
            } else {
                passages_info = "static/images/resource/no_passage.jpg";
                request.setAttribute("passages_info", passages_info);
            }


            //得到ta的关注
            List<User> users= followService.getPartUserList(user.getId());
//            System.out.println(user.getId());
//            System.out.println(users);

            if (users!=null&&users.size()>0){
                request.setAttribute("user_follows", users);
                System.out.println(users);
            }
            else {
                request.setAttribute("user_follows",null);
            }

            request.getRequestDispatcher("jsp/userinfo.jsp").forward(request, response);
        }
    }

    public void check_username(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Map<String, String> result = new HashMap<String, String>();
        String username = request.getParameter("data");

        UserService userService = Factory.getInstance("UserService", UserService.class);
        User user = userService.get_by_username(username);

        if (user == null) result.put("flag", "false");
        else {
            result.put("flag", "true");
            result.put("avater", user.getAvater());
        }
        JSONObject itemJSONObj = JSONObject.parseObject(JSON.toJSONString(result));
        out.print(itemJSONObj);
    }

    public void check_checkcode(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        Map<String, String> result = new HashMap<String, String>();
        String data = request.getParameter("data");
        String checkcode = (String) request.getSession().getAttribute("checkcode");

        if (checkcode != null && checkcode.equals(data)) {
            result.put("flag", "true");
        } else result.put("flag", "false");
        JSONObject itemJSONObj = JSONObject.parseObject(JSON.toJSONString(result));
        out.print(itemJSONObj);
    }

    public void changePwd(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String error = null;
        request.setCharacterEncoding("UTF-8");
        if (request.getMethod().equals("POST")) {
            HttpSession session = request.getSession();
            String realcode = (String) session.getAttribute("checkcode");
            if (realcode != null && realcode.equals(request.getParameter("chaCheckcode"))) {
                UserService userService = Factory.getInstance("UserService", UserService.class);
                String password = request.getParameter("chaPassword");

                if (password != null && password.equals(request.getParameter("chaRepassword"))) {
                    try {
                        userService.update("password", CryptUtils.GetMD5Code(password), (User) request.getSession().getAttribute("current_user"));
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    logout(request, response);
                } else {

                    error = "密码不相同";
                }
            } else {
                error = "验证码错误";
            }
        }

        if (error != null) request.setAttribute("cha_error", error);
        request.getRequestDispatcher("jsp/changePwd.jsp").forward(request, response);
    }

    public void upload_head(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        String data = req.getParameter("data");
        if (data == null)
            resp.sendRedirect("/user?type=change_message");
        User user = null;
        if ((user = (User) req.getSession().getAttribute("current_user")) == null)
            resp.sendRedirect("/index");

        String[] imageData = data.split(",");
        if (imageData[0].contains("data:image")) {
            UserService userService = Factory.getInstance("UserService", UserService.class);
            String filename = "/static/images/user/head/" + user.getNickname() + ".jpg";


            Base64.Decoder decoder = Base64.getDecoder();
            byte[] b = decoder.decode(imageData[1]);
            ByteArrayInputStream in = new ByteArrayInputStream(b);
            BufferedImage image = ImageIO.read(in);
            Image after = image.getScaledInstance(120, 120, Image.SCALE_DEFAULT);
            BufferedImage inputbig = new BufferedImage(120, 120, BufferedImage.TYPE_INT_BGR);
            inputbig.getGraphics().drawImage(after, 0, 0, 120, 120, null);
            ImageIO.write(inputbig, "JPEG", new File(Myconfig.fileload + filename));

            filename += "?" + UUID.randomUUID();
            user.setAvater(filename);

            userService.update("avater", filename, user);

        }
    }

    public void publish_passage(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if (request.getMethod().equals("GET")) {
            request.getRequestDispatcher("jsp/write.jsp").forward(request, response);
        } else {
            request.setCharacterEncoding("UTF-8");
            DiskFileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);
            upload.setHeaderEncoding("UTF-8");
            Passage passage = new Passage();
            try {
                List<FileItem> items = upload.parseRequest(request);
                Iterator iter = items.iterator();
                while (iter.hasNext()) {
                    FileItem item = (FileItem) iter.next();
                    if (item.isFormField()) {
                        if (item.getFieldName().equals("title")) passage.setTitle(item.getString("UTF-8"));
                        else if (item.getFieldName().equals("postbody"))
                            passage.setContent(item.getString("UTF-8"));
                        else if (item.getFieldName().equals("postview")) {
                            System.out.println(item.getString("UTF-8"));
                            passage.setView_content(item.getString("UTF-8"));
                            System.out.println(passage.getView_content());
                        }
                    } else {
                        String uuid = UUID.randomUUID().toString();
                        String temp[] = item.getContentType().split("/");
                        String filename = "/static/images/passage/head/" + uuid + '.' + temp[temp.length - 1];
                        passage.setPicture(filename);
                        item.write(new File(Myconfig.fileload + filename));

                    }
                }

            } catch (FileUploadException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }

            PassageService passageService = Factory.getInstance("PassageService", PassageService.class);
            passage.setUser_id(((User) request.getSession().getAttribute("current_user")).getId());
            boolean res = passageService.create(passage);

            if (res)
                response.sendRedirect("/user?type=userInfo");

            request.setAttribute("post", passage);
            request.getRequestDispatcher("jsp/write.jsp").forward(request, response);

        }
    }

    public void changeInfo(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if (!request.getMethod().equals("GET")) {
            String data = request.getParameter("data");
            if (data != null) {
                Map maps = (Map) JSON.parse(data);
                UserService userService=Factory.getInstance("UserService",UserService.class);
                User user=(User) request.getSession().getAttribute("current_user");
                boolean flag=userService.change_message(maps,user);
                Object result=null;
                System.out.println(flag);
                if(flag){
                    result=JSON.toJSON("success");
                    request.getSession().setAttribute("current_user",userService.get_by_id(user.getId()));
                }
                else result=JSON.toJSON("fail");
                response.getWriter().print(result);
            }
        }else request.getRequestDispatcher("jsp/message.jsp").forward(request, response);


    }

    public void takeFollow(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
        String nickname=request.getParameter("nickname");

        if (nickname!=null){

            UserService userService=Factory.getInstance("UserService", UserService.class);
            User user=userService.get_by_nickname(nickname);
            if (user!=null){
                HttpSession session=request.getSession();
                User current_user= (User) session.getAttribute("current_user");
                if (current_user==null){
                    response.sendRedirect("jsp/login.jsp");
                }
                else {
                    if (user.getId()!=current_user.getId()){
                        FollowService followService=Factory.getInstance("FollowService", FollowService.class);
                        boolean b=followService.create(user.getId(), current_user.getId());
                        request.setAttribute("follow_flag", b);
                    }
                }
            }
        }
    }
    public void cancelFollow(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException{
        String nickname=request.getParameter("nickname");
        if (nickname!=null){

            UserService userService=Factory.getInstance("UserService", UserService.class);
            User user=userService.get_by_nickname(nickname);
            if (user!=null){
                HttpSession session=request.getSession();
                User current_user= (User) session.getAttribute("current_user");
                if (current_user!=null){
                    if (user.getId()!=current_user.getId()){
                        FollowService followService=Factory.getInstance("FollowService", FollowService.class);
                        boolean b=followService.delete(user.getId(), current_user.getId());
                        request.setAttribute("follow_flag", b);
                    }
                }
            }
        }
    }

}