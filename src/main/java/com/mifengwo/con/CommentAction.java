package com.mifengwo.con;

import com.alibaba.fastjson.JSONObject;
import com.mifengwo.entity.Comment;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.CommentService;
import com.mifengwo.service.impl.CommentServiceImpl;
import com.mifengwo.util.SearchPageInit;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@WebServlet(name = "CommentAction", urlPatterns = "/comment")
public class CommentAction extends BaseServlet {
    public  static CommentService  commentService= Factory.getInstance("CommentService",CommentServiceImpl.class);

    public void findAll(HttpServletRequest request, HttpServletResponse response){
        List<Comment> list=commentService.getList();
        String json= JSONObject.toJSONString(list);
        try {
            response.getWriter().print(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void findone(HttpServletRequest request, HttpServletResponse response){
        String comment_id=request.getParameter("comment_id");
        int id=Integer.parseInt(comment_id);
        Comment comment=commentService.getComment(id);
        String json= JSONObject.toJSONString(comment);
        try {
            response.getWriter().print(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void findByLuxian(HttpServletRequest request,HttpServletResponse response){
        String str=request.getParameter("luxian_id");
        int page=1;
        String pageDate=request.getParameter("page");
        if(pageDate!=null&&pageDate!="") page=Integer.parseInt(pageDate);
        int luxian_id=Integer.parseInt(str);
        List<Comment>list=commentService.getListByluxianid(luxian_id);

        SearchPageInit<Comment> result=null;
        if (list.size()>0) result=new SearchPageInit<>(page,list);

        String json= JSONObject.toJSONString(result);
        try {
            response.getWriter().print(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void findByUser(HttpServletRequest request,HttpServletResponse response){
        String str=request.getParameter("user_id");
        int user_id=Integer.parseInt(str);
        List<Comment> list=commentService.getListByUser_id(user_id);
        System.out.println(list);
        String json= JSONObject.toJSONString(list);
        System.out.println(json);
        try {
            response.getWriter().print(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void update(HttpServletRequest request,HttpServletResponse response){
        HttpSession session=request.getSession();
        Comment comment= (Comment) session.getAttribute("Comment");
        String score=request.getParameter("score");
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        String content=request.getParameter("content");
        String pictures=request.getParameter("pictures");
        comment.setScore(score);
        comment.setTimestamp(timestamp);
        comment.setContent(content);
        comment.setPictures(pictures);
        try {
            if(commentService.update(comment)){
                response.getWriter().print("修改成功");
            }else {
            response.getWriter().print("修改失败");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void delete(HttpServletRequest request,HttpServletResponse response){
        String comment_id=request.getParameter("comment_id");
        int id=Integer.parseInt(comment_id);
        try {
            if(commentService.delete(id)){
                response.getWriter().print("删除成功");
            }else {
                response.getWriter().print("删除失败");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
