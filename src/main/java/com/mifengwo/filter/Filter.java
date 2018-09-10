package com.mifengwo.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter(filterName = "Filter")
public class Filter implements javax.servlet.Filter {
    private String encode=null;
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request= (HttpServletRequest) req;
        HttpServletResponse response=(HttpServletResponse) resp;
        response.setContentType("text/html;charset="+encode);
        request.setCharacterEncoding(encode);
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {
        encode=config.getInitParameter("encode");
    }

}
