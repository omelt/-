<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-24
  Time: 下午4:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" async="" charset="utf-8"
            src="../static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>旅游攻略,自由行,自助游攻略,旅游社交分享网站 - 蜜蜂窝</title>
    <meta name="keywords" content="自由行,旅游攻略,自助游">
    <meta name="description" content="蜜蜂窝!靠谱的旅游攻略,自由行,自助游分享社区,海量旅游景点图片、游记、交通、美食、购物等自由行旅游攻略信息,马蜂窝旅游网获取自由行,自助游攻略信息更全面">
    <meta name="author" content="蜜蜂窝">
    <meta name="renderer" content="webkit">
    <meta property="qc:admins" content="1571256654651656777636">
    <script type="text/javascript">
        window.Env = {
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "http:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 0,
            "CSTK": "c19beee64560a8a4228e7f35ff130768_c707288c347db673118fd38e9ca7704a",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <%--其他css--%>

    <link href="../static/css/cssbasecssjquery.css"
          rel="stylesheet" type="text/css">

    <link href="../static/css/cssmfw-index.css"
          rel="stylesheet" type="text/css">
    <script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <script async=""
            src="../static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>
    <script async=""
            src="../static/js/BrowserState.js"
            crossorigin="anonymous"></script>
    <script>
        var nowpage=0;
        $(document).ready(function () {

            $.ajax({
                    url:'/passage?type=getlimit',
                    success:function (result) {
                        var i=0;
                        $.each($.parseJSON(result),function (index,object) {
                            if(i<6){
                                if(i<4) {
                                    $(".show-image").append(
                                        "<li class='first' style='display: none;'> " +
                                        "  <a href='javascript:' target='_blank' class='show-pic'>" +
                                        "  <img src='" + object['picture'] + "'>" +
                                        "  </a>" +
                                        "  <a href='/passage?type=getPassage&passage_id="+object['id']+"' target='_blank' class='show-title dark'>" +
                                        "  <div class='date'>" +
                                        "  </div>" +
                                        "  <h3>" + object['title'] + "</h3>" +
                                        "  </a>" +
                                        "</li>"
                                    );
                                    $("#nav li:eq("+i+") img").attr('src',object['picture']);

                                    $(".slide-ul li:eq("+i+") div a").attr('href',"/passage?type=getPassage&passage_id="+object['id']+"");
                                    $(".slide-ul li:eq("+i+") div img").attr('src',object['picture']);
                                    $(".slide-ul li:eq("+i+") h3 a").append(object['title']);
                                    $(".slide-ul li:eq("+i+") h3 a").attr('href',"/passage?type=getPassage&passage_id="+object['id']+"");
                                    $(".slide-ul li:eq("+i+") p").append(object['content']);
                                }
                                else if(i==4){
                                    $(".show-image").append(
                                        "<li class='first' style='display: list-item;'> " +
                                        "  <a href='javascript:' target='_blank' class='show-pic'>" +
                                        "  <img src='"+object['picture']+"'>"+
                                        "  </a>" +
                                        "  <a href='/passage?type=getPassage&passage_id="+object['id']+"' target='_blank' class='show-title dark'>" +
                                        "  <div class='date'>" +
                                        "  </div>" +
                                        "  <h3>"+object['title']+"</h3>" +
                                        "  </a>" +
                                        "</li>"
                                    );
                                    $("#nav li:eq("+i+") img").attr('src',object['picture']);

                                    $(".slide-ul li:eq("+i+") div a").attr('href',"/passage?type=getPassage&passage_id="+object['id']+"");
                                    $(".slide-ul li:eq("+i+") div img").attr('src',object['picture']);
                                    $(".slide-ul li:eq("+i+") h3 a").append(object['title']);
                                    $(".slide-ul li:eq("+i+") h3 a").attr('href',"/passage?type=getPassage&passage_id="+object['id']+"");
                                    $(".slide-ul li:eq("+i+") p").append(object['content']);
                                }else if(i==5){
                                    $(".slide-ul li:eq("+i+") div a").attr('href',"/passage?type=getPassage&passage_id="+object['id']+"");
                                    $(".slide-ul li:eq("+i+") div img").attr('src',object['picture']);
                                    $(".slide-ul li:eq("+i+") h3 a").append(object['title']);
                                    $(".slide-ul li:eq("+i+") h3 a").attr('href',"/passage?type=getPassage&passage_id="+object['id']+"");
                                    $(".slide-ul li:eq("+i+") p").append(object['content']);
                                }
                                i=i+1;
                            }
                        });
                    },
                });

            dopage(0);

            $.ajax({
                    url:'/luxian?type=get',
                    success:function (data) {
                        var i=0;
                        $.each($.parseJSON(data),function (index,obj) {
                            //alert(data);
                            var taocan=obj['taocan'];
                            //alert(obj['picture']+","+obj['title']+","+taocan['price']);
                            if (i < 3) {
                                $("#tcan li:eq("+i+") a").attr("href","/luxian?type=Info&id="+obj['id']);
                                $("#tcan li:eq("+i+") div img").attr('src',obj['picture']);
                                $("#tcan li:eq("+i+") a h3").append(obj['title']);
                                $("#tcan li:eq("+i+") a .price").append("￥<strong>"+taocan['price']+"</strong><em>起</em>");
                                i = i + 1;
                            }
                        });
                    },
                    error:function (data) {
                        alert("error");
                    }
                });

            $("#nav li").click(function () {
                var index = $(this).index() + 1;
                $(".show-nav").children().attr("class", "");
                $(this).attr("class", "active");
                $(".show-image").children().fadeOut(500);
                $(".show-image").children("li:nth-child(" + index + ")").fadeIn(500);
            });
        });

        function dopage(page){
            //alert(page);
            nowpage=page;
            $.ajax({
            url:'/passage?type=getPage&nowpage='+page+'',
            success:function (result) {
                $.each($.parseJSON(result),function (index,object) {
                    var user=object['user'];
                    $(".mfw-travelnotes").hide();
                    $(".mfw-travelnotes").append(
                        "<div class='tn-item clearfix'> " +
                        "<div class='tn-image'> "+
                        " <a href='' target='_blank'> "+
                        " <img class='' data-src='http://b1-q.mafengwo.net/s10/M00/A5/D8/wKgBZ1or4E-ALs0jABHLLjpkiHc09.jpeg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90' "+
                        " data-rt-src='http://b1-q.mafengwo.net/s10/M00/A5/D8/wKgBZ1or4E-ALs0jABHLLjpkiHc09.jpeg?imageMogr2%2Fthumbnail%2F%21440x300r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21440x300%2Fquality%2F90' "+
                        " src='"+object['picture']+"'> "+
                        " </a> </div> <div class='tn-wrapper'> "+
                        " <dl> <dt> <a href='/passage?type=getPassage&passage_id="+object['id']+"' target='_blank'>"+object['title']+"</a>"+
                        " </dt> <dd> <a href='' target='_blank'> "+
                        " "+object['view_content'] +"</a> </dd> </dl> " +
                        " <div class='tn-extra'> <span class='tn-ding'> "+
                        " <a class='btn-ding' href='javascript:;' data-japp='articleding' data-iid='8071413' data-vote='2324' rel='nofollow'></a> "+
                        "<em id='topvote8071413'></em> </span>"+
                        " <span class='tn-place> <i></i> "+
                        "<a href='javascript:void(0);' class='_j_gs_item' rel='nofollow' data-name='' data-objid='' data-type='2'></a></span>" +
                        " <span class='tn-user'> "+
                        " <a href='/user?type=userInfo&nickname="+user['nickname']+"' rel='nofollow'> "+user['nickname']+" " +
                        " <img src='"+user['avater']+"'> </a> </span> <span class='tn-nums'> "+
                        " <i></i></span> </div></div></div>"
                    );
                    $(".mfw-travelnotes").fadeIn(500);
                    });
                }
            });
            if(nowpage==0){
                $("#dscpage").hide();
            }
            if(nowpage==${Math.ceil(all/6)-1}){
                $("#mulpage").hide();
            }
        }

        function dscpage() {
            $(".tn-item").fadeOut(500);
            $("#mulpage").show();
            if(nowpage==0){
//                $("#dscpage").hide();
                s=0;
            }else{
                var s=nowpage-1;
            }
            dopage(s);
        }

        function mulpage () {
            $(".tn-item").fadeOut(500);
            $("#dscpage").show();
            var s=nowpage;
            if(nowpage==${Math.ceil(all/6)-1}){
                s=nowpage;
//                $("#mulpage").hide();
            }else{
                s=nowpage+1;
            }
            dopage(s);
        };
    </script>
</head>
<body style="position: relative;">

<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="密蜂窝自由行" href="http://www.mafengwo.cn/"
                                      style="background-image: url(/static/images/resource/logo.png);text-decoration:none">
                <span style="margin-left: 46px;font-size:24px;color:grey;">蜜蜂窝</span></a></div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index head-nav-active" data-cs-p="index"><a href="http://www.mafengwo.cn/">首页</a>
                </li>
                <li class="head-nav-place" data-cs-p="mdd"><a href="http://www.mafengwo.cn/mdd/" title="目的地">目的地</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="http://www.mafengwo.cn/gonglve/" title="旅行游记">旅行游记</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="http://www.mafengwo.cn/gonglve/" title="旅行商城">旅行商城</a>
                </li>

            </ul>
            <div class="head-search" data-online="1">
                <div class="head-search-wrapper">
                    <div class="head-searchform">
                        <input name="q" id="_j_head_search_input" autocomplete="off" type="text">
                        <a role="button" href="javascript:" class="icon-search" id="_j_head_search_link"></a>
                    </div>
                </div>
            </div>
            <div id="pagelet-block-54be9169b6bc460a6f50d9ecbfa26f61" class="pagelet-block"
                 data-api="apps:user:pagelet:pageViewHeadInfo" data-params="{&quot;type&quot;:1}" data-async="1"
                 data-controller="/js/pageletcommon/pageHeadUserInfoWWWNormal">
                <c:choose>
                    <c:when test="${empty current_user}">
                        <div class="login-out">
                            <a id="_j_showlogin" title="登录马蜂窝" href="/user?type=login" rel="nofollow">登录</a><span
                                class="split">|</span><a href="/user?type=login&&resflag=true" title="注册帐号"
                                                         rel="nofollow">注册</a>
                        </div>
                    </c:when>
                    <c:otherwise>
                        <div class="login-info">

                            <div class="head-user" id="_j_head_user">

                                <a class="drop-trigger" href=""
                                   title="${current_user.nickname}的窝"
                                   rel="nofollow">
                                    <div class="user-image"><img
                                            src="${current_user.avater}"
                                            alt="omelt的窝" width="32" height="32"></div>
                                    <i class="icon-caret-down"></i>
                                </a>
                            </div>
                            <div class="head-msg" id="_j_head_msg">
                                <a href="javascript:" rel="nofollow">
                                        ${current_user.nickname}
                                </a>
                            </div>
                        </div>

                        <div class="dropdown-menu dropdown-user pull-right" id="_j_user_panel" data-cs-t="user_nav"
                             style="margin-top: 60px;z-index: 10;display: none;">
                            <ul>
                                <li><a href="/user?type=userInfo
" target="_blank" title="我的蜜蜂窝" rel="nofollow" data-cs-p="wo"><i
                                        class="icon-wo"></i>我的蜜蜂窝 </a></li>
                                <li><a href="/jsp/write.jsp?nickname=${current_user.id}" target="_blank" class="drop-write" title="写游记" rel="nofollow"
                                       data-cs-p="writenotes"><i class="icon-writenotes"></i>写游记</a></li>
                                <li><a href="/user?type=changeInfo" target="_blank" title="我的问答" rel="nofollow" data-cs-p="wenda"><i
                                        class="icon-wenda"></i>我的信息</a></li>
                                <li><a href="javascript:" title="我的路线" target="_blank" rel="nofollow" data-cs-p="route"><i
                                        class="icon-route"></i>我的路线</a></li>
                                <li><a href="/dingdan?type=findByUser&user_id=${current_user.id}" title="我的订单" target="_blank" rel="nofollow" data-cs-p="order"><i
                                        class="icon-order"></i>我的订单</a></li>
                                <li><a href="/user?type=logout" rel="nofollow"><i class="icon-logout"
                                                                                  data-cs-p="logout"></i>退出</a></li>
                            </ul>
                        </div>
                        <div class="head-daka" style="padding-right: 40px;margin-right: 40px">
                            <a class="btn btn-info" href="javascript:" rel="nofollow" id="head-btn-daka" title="我的关注列表"
                               data-japp="daka" style="width:74px"><p style="margin-top:-6px">关注列表</p></a>
                        </div>


                    </c:otherwise>
                </c:choose>
            </div>
        </div>
        <div class="shadow"></div>
    </div>

    <!-- 新自由行菜单 begin -->
    <div class="dropdown-bar" style="display: none">
        <div class="content">
            <ul class="clearfix ul-dropdown-bar" id="Js_middleNav">
                <li data-type="sales"><a href="http://www.mafengwo.cn/sales/">自由行</a></li>
                <li data-type="freewalker"><a href="http://www.mafengwo.cn/sales/0-0-0-0-0-0-0-0.html?group=4">跟团游</a>
                </li>
                <li data-type="localdeals"><a href="http://www.mafengwo.cn/localdeals/">当地游</a></li>
                <li data-type="flight"><a href="http://www.mafengwo.cn/flight/">国内机票</a></li>
                <li data-type="visa"><a href="http://www.mafengwo.cn/sales/visa/">签证</a></li>
                <li data-type="wifi"><a href="http://www.mafengwo.cn/localdeals/0-0-0-21-0-0-0-0.html">全球WiFi</a></li>
                <li data-type="cruise"><a href="http://www.mafengwo.cn/sales/0-0-0-5-0-0-0-0.html">邮轮</a></li>

                <li data-type="insurance"><a href="http://www.mafengwo.cn/insurance/">旅游保险</a></li>
            </ul>
        </div>

    </div>
    <!-- 新自由行菜单 end -->
    <script>
        //判断是否显示 下拉bar
        ;(function () {
            window.showBarFlag = true;
            var realPathName = location.pathname, $nav = $('#Js_middleNav');
            var regExp = /localdeals|sales|flight|insurance|activity/gi;
            var pathArr = realPathName.match(regExp);
            if (window.Env.middleNavHide) {
                $('.dropdown-bar').hide();
                return;
            }
            if (realPathName == '/sales/0-0-0-5-0-0-0-0.html' || window.Env.salesType == 5) {
                $nav.children('[data-type="cruise"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType == 21) {
                $nav.children('[data-type="wifi"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4) {
                $nav.children('[data-type="visa"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.sales_title_tag == 'semi_self_service' || realPathName == '/sales/0-0-0-6-0-0-0-0.html?group=4' || window.Env.salesType == 30 || window.Env.salesType == 6) {
                $nav.children('[data-type="freewalker"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }
            else if (window.Env.salesType) {
                switch (window.Env.salesType | 0) {
                    case 1:
                    case 3:
                        $nav.children('[data-type="sales"]').addClass('on');
                        break;
                    case 2:
                        $nav.children('[data-type="localdeals"]').addClass('on');
                        break;
                    case 30:
                    case 6:
                        $nav.children('[data-type="freewalker"]').addClass('on');
                        break;
                    default:
                        $nav.children('[data-type="localdeals"]').addClass('on');
                        break;
                }
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            }
            else {
                if (pathArr) {
                    if (pathArr.length == 1 && pathArr[0] != 'activity') {
                        switch (pathArr[0]) {
                            case 'localdeals':
                                $nav.children('[data-type="localdeals"]').addClass('on');
                                break;
                            case 'insurance':
                                $nav.children('[data-type="insurance"]').addClass('on');
                                break;
                            case 'sales':
                                $nav.children('[data-type="sales"]').addClass('on');
                                break;
                            case 'flight':
                                $nav.children('[data-type="flight"]').addClass('on');
                                break;
                            default:
                                break;
                        }
                        window.showBarFlag = false;
                        $('.dropdown-bar').show();
                    } else {
                        if ('activity'.indexOf(pathArr) != -1) {
                            window.showBarFlag = true;
                            $('.dropdown-bar').hide();
                        }
                    }
                }
            }
            // 点击时触发
            $('.ul-dropdown-bar > li').on('click', function () {
                $(this).addClass('on').siblings().removeClass('on');
            });
        })();

    </script>

</div>

<!-- zhangchu123 -->
<div class="mfw-focus" id="_j_mfw_focus">
    <div class="show-slider" id="_j_top_pic_container" style="height: 635px;">
        <ul class="show-image">

        </ul>

        <ul class="show-nav" id="nav">
            <li class=""><a href="javascript:"><img
                    src="../static/images/signup/5.jpg"
                    width="106" height="58"><span></span></a>
            </li>
            <li class=""><a href="javascript:"><img
                    src="../static/images/signup/4.jpg"
                    width="106" height="58"><span></span></a></li>
            <li class=""><a href="javascript:"><img
                    src="../static/images/signup/3.jpg"
                    width="106" height="58"><span></span></a></li>
            <li class=""><a href="javascript:"><img
                    src="../static/images/signup/2.jpg"
                    width="106" height="58"><span></span></a></li>
            <li class="active"><a href="javascript:"><img
                    src="../static/images/signup/1.jpg"
                    width="106" height="58"><span></span></a></li>
        </ul>
        <%--<a class="show-more" target="_blank" href="http://www.mafengwo.cn/app/calendar.php">历历在目</a>--%>
    </div>

    <div class="search-container" id="_j_index_search">
        <div class="search-group">
            <div class="searchtab" id="_j_index_search_tab">
                <ul id="searchtab" class="clearfix">
                    <li class="tab-selected" data-index="1"><i></i>全部</li>
                    <li data-index="2"><i></i>游记</li>
                    <li data-index="3"><i></i>旅行商城</li>
                    <li data-index="4"><i></i>用户</li>
                </ul>
            </div>
            <div id="search-forms">
                <!-- 全部 begin -->
                <div class="searchbar" id="_j_index_search_bar_all">
                    <form action="/search?type=all" method="get" id="searchall-form">
                        <div class="search-wrapper">
                            <div class="search-input">
                                <input id="all-input" name="q" placeholder="搜游记/旅行特价用户" id="_j_index_search_input_all"
                                       autocomplete="off"
                                       type="text">
                                <input style="display: none" name="type" value="all" type="text">
                            </div>
                        </div>
                        <div class="search-button" id="_j_index_search_btn_all">
                            <a role="button" id="searchall-button" type="submit" href="javascript:"><i class="icon-search"></i></a>
                        </div>
                    </form>
                </div>
                <!-- 全部 end -->
                <!-- 目的地 begin -->
                <div class="searchbar hide" id="_j_index_search_bar_mdd">
                    <form action="/search?type=post" method="get" id="searchpost-form">
                        <div class="search-wrapper">
                            <div class="search-input">
                                <input id="post-input" name="q" placeholder="想看关于..." id="_j_index_search_input_mdd" autocomplete="off"
                                       type="text">
                                <input style="display: none" name="type" value="post" type="text">
                            </div>
                        </div>
                        <div class="search-button" id="_j_index_search_btn_mdd">
                            <a role="button" id="searchpost-button" type="submit" type="submit" href="javascript:"><i class="icon-search"></i></a>
                        </div>
                    </form>
                </div>
                <!-- 目的地 end -->
                <!-- 出行服务 begin -->
                <div class="searchbar hide" id="_j_index_search_bar_sales">
                    <form action="/search?type=luxian" method="get" id="searchluxian-form">
                        <div class="search-wrapper">
                            <div class="search-input">
                                <input id="luxian-input" name="q" placeholder="产品名称/目的地/优惠" id="_j_index_search_input_sales" autocomplete="off"
                                       type="text">
                                <input style="display: none" name="type" value="luxian" type="text">
                            </div>
                        </div>
                        <div class="search-button" id="_j_index_search_btn_sales">
                            <a role="button" id="searchluxian-button" type="submit" href="javascript:"><i class="icon-search"></i></a>
                        </div>
                    </form>
                </div>
                <!-- 出行服务 end -->
                <div class="searchbar hide" id="_j_index_search_bar_users">
                    <form action="/search?type=user" method="get" id="searchuser-form">
                        <div class="search-wrapper">
                            <div class="search-input">
                                <input id="user-input" name="q" placeholder="查询用户" id="_j_index_search_input_users" autocomplete="off"
                                       type="text">
                                <input style="display: none" name="type" value="user" type="text">
                            </div>
                        </div>
                        <div class="search-button" id="_j_index_search_btn_users">
                            <a role="button" id="searchuser-button" type="submit" href="javascript:"><i class="icon-search"></i></a>
                        </div>
                    </form>

                </div>
                <script>
                    $(document).ready(function () {
                        $('#searchall-button').click(function () {
                            $('#searchall-form').submit();
                        });
                        $('#searchluxian-button').click(function () {
                            $('#searchluxian-form').submit();
                        });
                        $('#searchuser-button').click(function () {
                            $('#searchuser-form').submit();
                        });
                        $('#searchpost-button').click(function () {
                            $('#searchpost-form').submit();
                        });
                    });
                </script>
            </div>
        </div>
    </div>
</div>
<div class="mfw-container clearfix" id="_j_mfw_container">
    <div class="mfw-wrapper" style="width: 1000px">
        <div class="mfw-aside" id="" style="width:260px;">
            <div class="asidebox box-traveller">
                <div class="asidebox-hd">
                    <h2 class="hd-title"><a href="/traveller/">旅行专栏</a></h2>
                    <a class="hd-right" href="/traveller/">专栏首页</a>
                </div>
                <div class="asidebox-bd" id="_j_traveller_slide">
                    <ul class="slide-ul" style="left: 0px;">
                        <li>
                            <div class="image">
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2917"
                                   href="" target="_blank">
                                <img src="" width="260" height="140">
                                </a>
                            </div>
                            <h3>
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2917"
                                   href="" target="_blank"></a>
                            </h3>
                            <p></p>
                        </li>
                        <li>
                            <div class="image">
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2913"
                                   href="" target="_blank" style="">
                                <img src="https://n2-q.mafengwo.net/s11/M00/77/6D/wKgBEFtW-qGAH88SAAEjsuOEaa094.jpeg"
                                         width="260" height="140">
                                </a>
                            </div>
                            <h3>
                                <a data-japp="oplog" data-type="thc"
                                   data-key="" href="" target="_blank"></a>
                            </h3>
                            <p></p>
                        </li>
                        <li>
                            <div class="image">
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2910"
                                   href="" target="_blank">
                                    <img src="https://p4-q.mafengwo.net/s11/M00/43/F9/wKgBEFtVupSAE2LfAAEswTcURKs00.jpeg"
                                         width="260" height="140">
                                </a>
                            </div>
                            <h3>
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2910"
                                   href="" target="_blank"></a>
                            </h3>
                            <p></p>
                        </li>
                        <li>
                            <div class="image">
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2906"
                                   href="" target="_blank">
                                    <img src="https://p1-q.mafengwo.net/s11/M00/44/54/wKgBEFtVuv6AdHajAAEGkLyK4Dk69.jpeg"
                                         width="260" height="140">
                                </a>
                            </div>
                            <h3>
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2906"
                                   href="" target="_blank"></a>
                            </h3>
                            <p></p>
                        </li>
                        <li>
                            <div class="image">
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2902"
                                   href="" target="_blank">
                                    <img src="https://b3-q.mafengwo.net/s11/M00/E7/71/wKgBEFtRyeuATt9-AAGmKqS-OM408.jpeg"
                                         width="260" height="140">
                                </a>
                            </div>
                            <h3>
                                <a data-japp="oplog" data-type="thc"
                                   data-key="http://www.mafengwo.cn/traveller/article.php?id=2902"
                                   href=""
                                   target="_blank"></a>
                            </h3>
                            <p></p>
                        </li>
                    </ul>
                    <ol class="slide-ol">
                        <li class="active" data-id="0"></li>
                        <li class="" data-id="1"></li>
                        <li class="" data-id="2"></li>
                        <li class="" data-id="3"></li>
                        <li class="" data-id="4"></li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="mfw-sales" id="_j_sales" style="width:700px;float: right">
            <div class="hd">爆款热卖</div>
            <div class="bd">
                <ul class="clearfix" id="tcan">
                    <li class="item ">
                        <a href="http://www.mafengwo.cn/sales/2579907.html" target="_blank">
                            <div class="image">
                                <img src="%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5,%E8%87%AA%E7%94%B1%E8%A1%8C,%E8%87%AA%E5%8A%A9%E6%B8%B8%E6%94%BB%E7%95%A5,%E6%97%85%E6%B8%B8%E7%A4%BE%E4%BA%A4%E5%88%86%E4%BA%AB%E7%BD%91%E7%AB%99%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgBEFtVK0-AI0BKAANWWi7R9lQ64.jpeg"
                                     width="220" height="135">
                            </div>
                            <h3></h3>
                            <div class="price"></div>
                        </a>
                    </li>
                    <li class="item ">
                        <a href="http://www.mafengwo.cn/sales/2382387.html" target="_blank">
                            <div class="image">
                                <img src="" width="220" height="135">
                            </div>
                            <h3></h3>
                            <div class="price"></div>
                        </a>
                    </li>
                    <li class="item">
                        <a href="http://www.mafengwo.cn/sales/2134845.html" target="_blank">
                            <div class="image">
                                <img src="" width="220" height="135">
                            </div>
                            <h3 style="overflow: hidden; height: 40px; margin-top: 5px;"></h3>
                            <div class="price"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mfw-travelnotes" id="_j_tn" style="clear:both">

            <div class="navbar clearfix">
                <ul class="tn-nav" id="_j_tn_nav">

                    <li class="active _j_gs_tab tn-nav-hot">
                        <a href="javascript:void(0);" rel="nofollow" data-type="0" data-objid="0">热门游记</a>
                        <span class="tn-menu _j_open_search"><i class="tn-menu-icon"></i>筛选</span></li>
                    <li class="_j_gs_tab tn-nav-new">
                        <a href="javascript:void(0);" rel="nofollow" data-type="3">最新发表</a>
                    </li>
                </ul>
                <div class="tn-write"><a class="btn-add" href="http://www.mafengwo.cn/note/create_index.php"
                                         target="_blank" rel="nofollow"><span class="glyphicon glyphicon-pencil"
                                                                              aria-hidden="true"
                                                                              style="padding-right: 10px"></span>写游记</a>
                </div>
            </div>
        </div>
                    <div class="m-pagination" id="_j_tn_pagination" data-type="0" data-objid="0" align="right">
                        <span class="count">共${Math.ceil(all/6)}页/${all}条</span>
                        <a class="pg-current" id="dscpage" onclick="dscpage()" href="javascript:void(0)" data-page="2" rel="nofollow">&lt;&lt;上一页 </a>
                        <a href="javascript:void(0)" class="pg-current">首页</a>
                        <a class="pg-current" id="mulpage" onclick="mulpage()" href="javascript:void(1)" data-page="2" rel="nofollow">下一页 &gt;&gt;</a>
                    </div>
                </div>
            </div>

<script type="text/javascript">
    var $topPicContainer = $('#_j_top_pic_container'),
        topPicSlideCnt = $topPicContainer.find('.show-image');

    function respondTopPicSize(ev) {
        var clientWidth = $(window).width(),
            picHeight = Math.round(clientWidth / 3);
        $topPicContainer.height(picHeight);
        topPicSlideCnt.find('img').each(function(idx, ele) {
            var $img = $(ele),
                imgHeight = parseInt($img.css('height'), 10);
            if(imgHeight > picHeight) {
                $img.css('marginTop', -Math.round((imgHeight - picHeight) / 2));
            }
        });
    }
    $(window).on('resize', respondTopPicSize).trigger('resize');

</script>

<link href="../static/css/coupon-pop.css"
      rel="stylesheet" type="text/css">

<div class="coupon-wrap">
    <a href="javascript:;" class="coupon-link" style=""><img
            src="%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5,%E8%87%AA%E7%94%B1%E8%A1%8C,%E8%87%AA%E5%8A%A9%E6%B8%B8%E6%94%BB%E7%95%A5,%E6%97%85%E6%B8%B8%E7%A4%BE%E4%BA%A4%E5%88%86%E4%BA%AB%E7%BD%91%E7%AB%99%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/coupon-hx-v2.png"></a>
    <div class="pop-mask" style="display: none;">
        <div class="pop-shadow"></div>
        <div class="pop">
            <div class="pop_content">
                <p><strong>领取成功！</strong><br>扫描领取180元新人红包</p>
                <div class="code-wrap">
                    <div class="code-img"><img
                            src="%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5,%E8%87%AA%E7%94%B1%E8%A1%8C,%E8%87%AA%E5%8A%A9%E6%B8%B8%E6%94%BB%E7%95%A5,%E6%97%85%E6%B8%B8%E7%A4%BE%E4%BA%A4%E5%88%86%E4%BA%AB%E7%BD%91%E7%AB%99%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/code.jpg">
                    </div>
                    <span>打开app在［我的］－［我的优惠券］查看并使用  </span>
                </div>
                <a href="javascript:;" class="closed">X</a>
            </div>
        </div>
    </div>
</div>
<script language="javascript"
        src="../static/js/app_newer_180.js"
        type="text/javascript" crossorigin="anonymous"></script>
<link href="../static/css/mfw-footer.css"
      rel="stylesheet" type="text/css">

<div id="footer">
    <div class="ft-content">
        <div class="ft-info clearfix">

            <dl class="ft-info-social">
                <dt>向崇尚自由的加勒比海盗致敬！</dt>
            </dl>
        </div>


    </div>
</div>

<link href="../static/css/mfw-toolbar.css" rel="stylesheet" type="text/css">

<div class="mfw-toolbar" id="_j_mfwtoolbar" style="display: block;">
    <div class="toolbar-item-top">
        <a id="back-to-top" role="button" class="btn _j_gotop">
            <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        </a>
    </div>

</div>


<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+jquery.lazyload:js+M+module+Pagination:js+index+ControllerRecommend:js+M+module+ClickToggle:js+M+module+Slider:js+xdate:js+hotel+module+FestivalDateConfig:js+jquery-ui-core:js+jquery-ui-datepicker:js+hotel+module+DateRangePicker:js+M+module+Storage:js+hotel+module+ModuleProvider:js+hotel+module+BookingDate:js+hotel+module+Log:js+hotel+module+Search_v2:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+AIndex:js+module+app+Page:js+M+module+Toggle:js+index+AGinfoSearch:js+M+module+PageAdmin:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^YlVTQA^1531130229.js");
    }

    function changePic() {
        var now = $(".slide-ol").children(".active");
        if ($(now).next().length == 0) {
            now = $(".slide-ol li:first-child");
        } else {
            now = $(now).next();
        }
        $(".slide-ol").children().attr("class", "");
        $(now).addClass("active");
        $(".slide-ul").css("left", Number($(now).attr("data-id")) * (-260) + "px")
    }

    $(document).ready(function () {
        var ref = setInterval(function () {
            changePic();
        }, 10000);
        $(".drop-trigger").hover(
            function () {
                $(this).addClass("drop-trigger-active");
                $("#_j_user_panel").show();
            }
        );
        $("#_j_user_panel").hover(function () {
            $(this).show();
        }, function () {
            $(this).hide();
            $(".drop-trigger").removeClass("drop-trigger-active");
        });
        //$("#search-group")
        $("#searchtab").children().click(function () {
            $("#searchtab").children().removeClass("tab-selected");
            $(this).addClass("tab-selected");
            $("#search-forms").children().addClass("hide");
            $("#search-forms").children("div:nth-child(" + $(this).attr("data-index") + ")").removeClass("hide");
        });
        $(".slide-ol").children().click(function () {
            $(".slide-ol").children().attr("class", "");
            $(this).addClass("active");
            $(".slide-ul").css("left", Number($(this).attr("data-id")) * (-260) + "px")
        });


        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(1500);
            }
            else {
                $("#back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function () {
            if ($('html').scrollTop()) {
                $('html').animate({scrollTop: 0}, 100);//动画效果
                return false;
            }
            $('body').animate({scrollTop: 0}, 100);
            return false;
        });

    });

</script>

<div id="jGrowl" class="top-right jGrowl">
    <div class="jGrowl-notification"></div>
</div>
</body>
</html>
