<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 下午5:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>我的订单 - 蜜蜂窝</title>
    <meta name="renderer" content="webkit">
    <style type="text/css">
        .dimg{
            width: 190px;
            height: 120px;
            float: left;
            /*border: 1px solid red;*/
        }
        #distable span{
            font-size: 15px;
            font-family:微软雅黑;
            color:#1e1e1e;
        }
        #foot a{
            font-size: 18px;
        }
    </style>
    <script type="text/javascript">
        window.Env = {
            "status": 0,
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "http:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "bc00261bc7c4d79cd9acdaf1a0406e25_d9480d0cd55a2cc61d161b4cdb89bd9c",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">

    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript" crossorigin="anonymous"></script>

    <script async="" src="/static/js/jspageletcommonpageHeadUserInfoWWWDarkjsMmoduledialogLayerjsM.js" crossorigin="anonymous"></script>
</head>

<body>

<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo">
                <a class="mfw-logo" title="马蜂窝自由行" href="http://www.mafengwo.cn/" style="background-image: url(/static/images/resource/logo.png);text-decoration:none">
                    <span style="margin-left: 46px;font-size:24px;color:grey;">蜜蜂窝</span>
                </a>
            </div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index head-nav-active" data-cs-p="index">
                    <a href="http://www.mafengwo.cn/">首页</a>
                </li>
                <li class="head-nav-place" data-cs-p="mdd">
                    <a href="http://www.mafengwo.cn/mdd/" title="目的地">目的地</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve">
                    <a href="http://www.mafengwo.cn/gonglve/" title="旅行游记">旅行游记</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve">
                    <a href="http://www.mafengwo.cn/gonglve/" title="旅行商城">旅行商城</a>
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
            <div id="pagelet-block-54be9169b6bc460a6f50d9ecbfa26f61" class="pagelet-block" data-api="apps:user:pagelet:pageViewHeadInfo"
                 data-params="{&quot;type&quot;:1}" data-async="1" data-controller="/js/pageletcommon/pageHeadUserInfoWWWNormal">
                <c:choose>
                    <c:when test="${empty current_user}">
                        <div class="login-out">
                            <a id="_j_showlogin" title="登录马蜂窝" href="/user?type=login" rel="nofollow">登录</a>
                            <span class="split">|</span>
                            <a href="/user?type=login&&resflag=true" title="注册帐号" rel="nofollow">注册</a>
                        </div>
                    </c:when>
                    <c:otherwise>
                        <div class="login-info">

                            <div class="head-user" id="_j_head_user">

                                <a class="drop-trigger" href="http://www.mafengwo.cn/u/72891861.html" title="${current_user.nickname}的窝" rel="nofollow">
                                    <div class="user-image">
                                        <img src="${current_user.avater}" alt="omelt的窝" width="32" height="32">
                                    </div>
                                    <i class="icon-caret-down"></i>
                                </a>
                            </div>
                            <div class="head-msg" id="_j_head_msg">
                                <a href="javascript:" rel="nofollow">
                                        ${current_user.nickname}
                                </a>
                            </div>
                        </div>

                        <div class="dropdown-menu dropdown-user pull-right" id="_j_user_panel" data-cs-t="user_nav" style="margin-top: 60px;z-index: 10;display: none;">
                            <ul>
                                <li>
                                    <a href="jsp/userinfo.jsp?nickname=${current_user.nickname}" target="_blank"
                                       title="我的马蜂窝" rel="nofollow" data-cs-p="wo">
                                        <i class="icon-wo"></i>我的蜜蜂窝 </a>
                                </li>
                                <li>
                                    <a href="jsp/write.jsp" target="_blank" class="drop-write" title="写游记" rel="nofollow"
                                       data-cs-p="writenotes">
                                        <i class="icon-writenotes"></i>写游记</a>
                                </li>
                                <li>
                                    <a href="javascript:" target="_blank" title="我的问答" rel="nofollow" data-cs-p="wenda">
                                        <i class="icon-wenda"></i>我的评论</a>
                                </li>
                                <li>
                                    <a href="javascript:" title="我的路线" target="_blank" rel="nofollow" data-cs-p="route">
                                        <i class="icon-route"></i>我的路线</a>
                                </li>
                                <li>
                                    <a href="/dingdan?type=findByUser" title="我的订单" target="_blank" rel="nofollow"
                                       data-cs-p="order">
                                        <i class="icon-order"></i>我的订单</a>
                                </li>
                                <li>
                                    <a href="/user?type=logout" rel="nofollow">
                                        <i class="icon-logout" data-cs-p="logout"></i>退出</a>
                                </li>
                            </ul>
                        </div>
                        <div class="head-daka" style="padding-right: 20px;">
                            <a class="btn btn-info" href="javascript:" rel="nofollow" id="head-btn-daka" title="我的关注列表" data-japp="daka" style="width:74px">
                                <p>关注列表</p>
                            </a>
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
                <li data-type="sales">
                    <a href="http://www.mafengwo.cn/sales/">自由行</a>
                </li>
                <li data-type="freewalker">
                    <a href="http://www.mafengwo.cn/sales/0-0-0-0-0-0-0-0.html?group=4">跟团游</a>
                </li>
                <li data-type="localdeals">
                    <a href="http://www.mafengwo.cn/localdeals/">当地游</a>
                </li>
                <li data-type="flight">
                    <a href="http://www.mafengwo.cn/flight/">国内机票</a>
                </li>
                <li data-type="visa">
                    <a href="http://www.mafengwo.cn/sales/visa/">签证</a>
                </li>
                <li data-type="wifi">
                    <a href="http://www.mafengwo.cn/localdeals/0-0-0-21-0-0-0-0.html">全球WiFi</a>
                </li>
                <li data-type="cruise">
                    <a href="http://www.mafengwo.cn/sales/0-0-0-5-0-0-0-0.html">邮轮</a>
                </li>
                <li data-type="insurance">
                    <a href="http://www.mafengwo.cn/insurance/">旅游保险</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- 新自由行菜单 end -->
    <script>
        //判断是否显示 下拉bar
        (function () {
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
            window.showBarFlag = true;
            var realPathName = location.pathname,
                $nav = $('#Js_middleNav');
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
            } else if (realPathName == '/localdeals/0-0-0-21-0-0-0-0.html' || window.Env.salesType ==
                21) {
                $nav.children('[data-type="wifi"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.sales_title_tag == 'visa' || window.Env.salesType == 4) {
                $nav.children('[data-type="visa"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.sales_title_tag == 'semi_self_service' || realPathName ==
                '/sales/0-0-0-6-0-0-0-0.html?group=4' || window.Env.salesType == 30 || window.Env.salesType ==
                6) {
                $nav.children('[data-type="freewalker"]').addClass('on');
                window.showBarFlag = false;
                $('.dropdown-bar').show();
            } else if (window.Env.salesType) {
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
            } else {
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

<link href="/static/css/cssglobaldialogcsshome_new2015home_extracsshome_new2015avata.css" rel="stylesheet" type="text/css">

<div class="container">
    <div class="banner">

        <style>
            .invisible {
                opacity: 0.01;
                filter: alpha(opacity=1);
            }

            .invisible .maps-container {
                opacity: 0.01;
                filter: alpha(opacity=1);
            }
        </style>

        <div class="banner_img banner_extra" id="_j_banner">
        </div>
        <div class="tags_bar second_tags_bar">
            <div class="center clearfix">
                <div class="MAvatar clearfix">
                    <div class="MAvaImg flt1">
                        <img alt="" src="${current_user.avater}" width="120" height="120">
                    </div>
                    <div class="MAvaEasyWord flt1">
                        <span class="MAvaName">${current_user.nickname}</span>
                    </div>
                </div>
                <ul class="flt2">
                    <li>
                        <a class="tags_link" href="http://www.mafengwo.cn/u/72891861.html" title="我的窝">我的窝</a>
                    </li>
                    <li>
                        <a class="tags_link" href="http://www.mafengwo.cn/u/72891861/note.html" title="我的游记">我的游记</a>
                    </li>
                    <li>
                        <a class="tags_link" href="http://www.mafengwo.cn/wenda/u/72891861/answer.html" title="我的问答">我的问答</a>
                    </li>
                    <li id="_j_pathnav">
                        <a class="tags_link" href="http://www.mafengwo.cn/path/72891861.html" title="我的足迹">我的足迹</a>
                    </li>
                    <li>
                        <a class="tags_link" href="http://www.mafengwo.cn/u/72891861/review.html" title="我的点评">我的点评</a>
                    </li>
                    <li>
                        <a class="tags_link" href="http://www.mafengwo.cn/u/72891861/together.html" title="我的结伴">我的结伴</a>
                    </li>
                    <li class="more ">
                                        <span class="tags_link" role="button" title="更多" style="cursor:default">更多
                                            <i class="MDownMore"></i>
                                        </span>
                        <div class="tags_more_list">
                            <ul>
                                <li data-cs-t="go_to_activity">
                                    <a href="http://www.mafengwo.cn/indexactivity/index.php" title="我的活动" data-cs-p="activity">
                                        <i class="ico_activity"></i>
                                        <span>我的活动</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/home/g/my.php" title="我的小组">
                                        <i class="ico_group"></i>
                                        <span>我的小组</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/plan/fav.php" title="我的收藏">
                                        <i class="ico_collect"></i>
                                        <span>我的收藏</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/order_center/" title="我的订单">
                                        <i class="ico_order"></i>
                                        <span>我的订单</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/sales/coupon.php" title="我的优惠券">
                                        <i class="ico_ticket"></i>
                                        <span>我的优惠券</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/mall/my_exchange.php" title="我的兑换">
                                        <i class="ico_exchange"></i>
                                        <span>我的兑换</span>
                                    </a>
                                </li>
                                <!--<li><a href="/rent/order/boss?flag=-1" title="我的当地人"><i class="ico_rent"></i><span>我的当地人</span></a></li>-->
                                <li>
                                    <a href="http://www.mafengwo.cn/flight/passengers.php" title="常用信息">
                                        <i class="ico_information"></i>
                                        <span>常用信息</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="wrapper">
    <div class="home-extra">
        <div class="s-menu">
            <ul class="clearfix">

                <li class="on">
                    <a>我的订单
                        <i></i>
                    </a>
                </li>

            </ul>
        </div>
        <div class="order-table">
            <div class="order-empty" id="load">
                <i class="order-empty-icon"></i>
                <p id="display">
                    <c:if test="${not empty list}">
                <table border='1' id='distable'><tr><th>id</th><th>商品</th><th>商家</th><th>商家联系方式</th><th>支付状态</th><th>price</th><th>时间</th></tr>
                        <c:forEach items="${list}" var="list">

                               <tr style="width:100px">
                                <td>${list.id}</td>
                                <td><img class="dimg" src="${list.luxian.picture}"><span>${list.luxian.title}</span></td>
                                <td> ${list.saler.name}</td>
                                <td>${list.saler.conphone}</td>
                                <td>
                                    <c:if test="${list.state=='W'}">
                                        <c:out value="已支付"></c:out>
                                    </c:if>
                                    <c:if test="${list.state=='F'}">
                                        <c:out value="已支付"></c:out>
                                    </c:if>
                                </td>
                                <td>${list.price }</td>
                                <td>${list.timestamp}</td>
                            </tr>
                        </c:forEach>
                </table>
                    </c:if>
                    <c:if test="${empty list}">
                        暂无相关订单
                    </c:if>
                </p>
                <p id="foot"></p>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
//            $.ajax({
////                url: '/dingdan?type=findByUser&user_id=1',
////                data:{"page":page},
//                success: function (result) {
//                    alert(result);
//                    if(result.length!=0){
//                        $("#display").html(
//                            "<table border='1' id='distable'><tr><th>id</th><th>商品</th><th>商家</th><th>商家联系方式</th><th>支付状态</th><th>price</th><th>时间</th></tr>"
//                        );
//                    }
//                    $.each($.parseJSON(result), function (index, object) {
//                        if(object['state']=="W"){
//                            object['state']="已支付";
//                        }else  {
//                            object['state']="未支付";
//                        }
//                       var datetime = new Date(object['timestamp']);
//                        var year = datetime.getFullYear();
//                        var month = datetime.getMonth() + 1;
//                        var date = datetime.getDate();
//                        object['timestamp']=year + "-" + month + "-" + date ;
//                     $("#distable").append("<tr style='width: 100px border=1'><td>" + object['id']+"</td>"+
//                            "<td><img src='"+ object['luxian']['picture'] +"'><span>"+object['luxian']['title']+"</span></td>" +
//                            "<td> "+object['saler']['name']+"</td><td>"+object['saler']['conphone']+"</td>"+
//                            "<td>" + object['state'] + "</td>" +
//                            "<td>" + object['price'] + "</td><td>" +
//                            object['timestamp'] + "</td></tr>");
//                    });
//                }
//            });
//            $("#foot").html("<br><a href='javascrit:void(0)'>上一页</a>" +
//                "<a>首页</a>"+
//                "<a href='javascrit:void(0)'>下一页</a>"
//            );
        });
    </script>
</div>




<script>
    // 攻略点击报数
    $('.review-guide a').click(function () {
        var $btn = $(this),
            url = $btn.attr('href');

        mfwPageEvent('sales', 'order_center', {
            click: '点评攻略'
        });

        setTimeout(function () {
            window.open(url);
        }, 0);

        return false;
    });
    // PV
    if (window.Env.status == 4) {
        mfwPageEvent('sales', 'page', {
            pageName: '我的订单-待点评'
        });
    }
</script>

<link href="/static/css/mfw-footer.css" rel="stylesheet" type="text/css">


<div id="footer">
    <div class="ft-content">
        <div class="ft-info clearfix">
            <dl class="ft-info-social">
                <dt>向崇尚自由的加勒比海盗致敬！</dt>
            </dl>
        </div>

    </div>
</div>

<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource(
            "http://js.mafengwo.net/js/cv/js+pageletcommon+pageHeadUserInfoWWWDark:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+ACnzzGaLog:js+ARecruit^YVdV^1531130229.js"
        );
    }
</script>
</body>

</html>