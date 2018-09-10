package com.mifengwo.con;

import com.mifengwo.entity.Passage;
import com.mifengwo.entity.Saler;
import com.mifengwo.entity.User;
import com.mifengwo.factory.Factory;
import com.mifengwo.service.SalerService;
import com.mifengwo.util.Myconfig;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

@WebServlet(name = "SalerAction", urlPatterns = "/saler")
public class SalerAction extends BaseServlet {
    public void resgister(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if(request.getMethod().equals("GET")){
            request.getRequestDispatcher("jsp/join.jsp").forward(request,response);
        }
        request.setCharacterEncoding("UTF-8");
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);
        upload.setHeaderEncoding("UTF-8");
        Saler saler=new Saler();
        try {
            List<FileItem> items = upload.parseRequest(request);
            Iterator iter = items.iterator();
            while (iter.hasNext()) {
                FileItem item = (FileItem) iter.next();
                if (item.isFormField()) {
                    if (item.getFieldName().equals("name")) saler.setFullname(item.getString("UTF-8"));
                    else if (item.getFieldName().equals("translate_name")) saler.setAbout_sale(item.getString("UTF-8"));
                    else if (item.getFieldName().equals("short_name")) saler.setName(item.getString("UTF-8"));
                    else if (item.getFieldName().equals("tel")) saler.setConphone(item.getString("UTF-8"));

                } else {
                    String uuid = UUID.randomUUID().toString();
                    String temp[] = item.getContentType().split("/");
                    String filename = "/static/images/message/" + uuid + '.' + temp[temp.length - 1];

                    item.write(new File(Myconfig.fileload + filename));
                    saler.setMessage(filename);
                }
            }

        } catch (FileUploadException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        saler.setUser_id(((User)request.getSession().getAttribute("current_user")).getId());
        SalerService salerService= Factory.getInstance("SalerService",SalerService.class);
        if(salerService.add(saler))
            request.getRequestDispatcher("jsp/index.jsp").forward(request,response);
    }
}
