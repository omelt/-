<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 下午3:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${data} - 马蜂窝</title>


    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <script type="text/javascript">
        window.Env = {
            "hotel_mdd_info": {"lat": 48.302380258156, "lng": 14.299392700195, "zoom": 12},
            "country_mddid": 10175,
            "is_cnmain": false,
            "search_keyword": "sad",
            "search_seo_type": "mdd_like",
            "search_type": null,
            "search_req_k": null,
            "search_stid": null,
            "search_req_f": null,
            "search_req_d": null,
            "search_kt": 1,
            "search_page": 1,
            "search_total": 750,
            "search_seid": "F5D2CEAC-89EB-4514-BDF0-CE6C0295F569",
            "is_async_site_search": 1,
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "http:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "095962dfad8a58bad82d340e35499a00_7502dcae78106003811987fca512e828",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">

    <link href="/static/css/mfw-search.css" rel="stylesheet" type="text/css">


    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript"
            crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>
    <script async="" src="/static/js/BrowserState.js" crossorigin="anonymous"></script>
</head>
<body>

<div class="s-head">
    <div class="wid clearfix">
        <div class="head-logo" style="margin-top: -18px;margin-left: 10px;"><a class="mfw-logo" title="马蜂窝自由行"
                                                                               href="http://www.mafengwo.cn/"
                                                                               style="background-image: url(/static/images/resource/logo.png);text-decoration:none">
            <span style="margin-left: 40px;font-size:20px;color:grey">蜜蜂窝</span></a></div>
        <div class="searchbar">
            <div class="search-wrapper">
                <div class="search-input"><input name="q" id="_j_search_input" value="${data}"
                                                 placeholder="搜目的地/攻略/酒店/自由行商品" autocomplete="off" type="text"></div>
            </div>
            <div class="search-button"><a role="button" href="javascript:" id="_j_search_button"><i
                    class="icon-search"></i></a></div>
        </div>
        <div id="pagelet-block-b008443b10e98fa2b84053663ab1e95c" class="pagelet-block"
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

                            <a class="drop-trigger" href="http://www.mafengwo.cn/u/72891861.html"
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
                            <li><a href="javascript:" target="_blank" title="我的马蜂窝" rel="nofollow" data-cs-p="wo"><i
                                    class="icon-wo"></i>我的马蜂窝 </a></li>
                            <li><a href="javascript:" target="_blank" class="drop-write" title="写游记" rel="nofollow"
                                   data-cs-p="writenotes"><i class="icon-writenotes"></i>写游记</a></li>
                            <li><a href="javascript:" target="_blank" title="我的问答" rel="nofollow" data-cs-p="wenda"><i
                                    class="icon-wenda"></i>我的评论</a></li>
                            <li><a href="javascript:" title="我的路线" target="_blank" rel="nofollow" data-cs-p="route"><i
                                    class="icon-route"></i>我的路线</a></li>
                            <li><a href="javascript:" title="我的订单" target="_blank" rel="nofollow" data-cs-p="order"><i
                                    class="icon-order"></i>我的订单</a></li>
                            <li><a href="/user?type=logout" rel="nofollow"><i class="icon-logout"
                                                                              data-cs-p="logout"></i>退出</a></li>
                        </ul>
                    </div>
                    <div class="head-daka" style="margin-top:-20px;padding-right: 20px;">
                        <a class="btn btn-info" href="javascript:" rel="nofollow" id="head-btn-daka" title="我的关注列表"
                           data-japp="daka" style="width:74px"><p>关注列表</p></a>
                    </div>


                </c:otherwise>
            </c:choose>
        </div>
    </div>
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
<c:choose>
    <c:when test="${result==null}">
        <div class="mfw-search-main" id="_j_mfw_search_main">

            <div class="wid clearfix">
                <div class="ser-nums">
                    <div class="sr-nums"><p class="ser-result-primary">
                        以下是为您找到的“${data}”相关结果${countMap['allCount']}条</p>
                    </div>
                </div>

                <div class="flt1 ser-lt" id="_j_search_result_left">

                    <div class="s-ct _j_search_section" data-category="mdd">

                        <div class="clearfix ser-title _j_search_section" data-category="sales">
                            <h2>
                                <a href="http://www.mafengwo.cn/search/s.php?q=sad&amp;t=sales" class="_j_search_link"
                                   data-is-redirect="1">结果预览</a>
                            </h2>

                        </div>
                        <div class="_j_search_section" data-category="sales">
                            <ul class="seg-catalog-list clearfix">
                                <li><a href="javascript:void (0)" target="_blank"
                                       class="_j_search_link">用户&nbsp;(${countMap['uCount']})</a></li>
                                <li><a href="javascript:void (0)" target="_blank"
                                       class="_j_search_link">游记&nbsp;(${countMap['pCount']})</a></li>
                                <li><a href="javascript:void (0)" target="_blank"
                                       class="_j_search_link">路线&nbsp;(${countMap['lCount']})</a></li>

                            </ul>
                        </div>


                        <div class="heg30"></div>
                        <div class="_j_search_section" data-category="article_gonglve">
                            <div class="clearfix ser-title">
                                <h2>
                                    <a href="http://www.mafengwo.cn/search/s.php?q=sad&amp;t=article_gonglve"
                                       target="_blank"
                                       class="_j_search_link" data-is-redirect="1">游记</a>
                                </h2>
                                <a href="/search?type=post&q=${data}" target="_blank"
                                   class="_j_search_link" data-is-redirect="1">查看更多旅游攻略 &gt;&gt;</a>
                            </div>
                            <div class="att-list">
                                <ul>
                                    <c:choose>
                                        <c:when test="${not empty plist}">
                                            <c:forEach items="${plist}" var="passage">
                                                <li>
                                                    <div class="clearfix">
                                                        <div class="flt1"><a
                                                                href="http://www.mafengwo.cn/gonglve/ziyouxing/28756.html"
                                                                target="_blank" class="_j_search_link"><img
                                                                src="${passage.picture}"
                                                                style="width:150px;height:90px;"></a></div>
                                                        <div class="ct-text ">
                                                            <h3>
                                                                <a href="/passage?type=getPassage&passage_id=${passage.id}"
                                                                   target="_blank"
                                                                   class="_j_search_link">${passage.title}</a>
                                                            </h3>
                                                            <p class="seg-desc">
                                                                    ${passage.view_content}</p>
                                                            <br>
                                                            <ul class="seg-info-list clearfix">
                                                                <li>
                                                                    <a href="javascript:void (0)"
                                                                       target="_blank"
                                                                       class="_j_search_link">${passage.user.nickname}</a>
                                                                </li>

                                                                <li>
                                                                    <img
                                                                            src="${passage.user.avater}"
                                                                            alt="omelt的窝" width="16" height="16"
                                                                            style="border-radius: 50%">
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </c:forEach>
                                        </c:when>
                                        <c:otherwise>
                                            <c:out value="没有关于${data}的用户搜索结果"></c:out>
                                        </c:otherwise>
                                    </c:choose>
                                </ul>
                            </div>
                        </div>


                        <div class="heg30"></div>
                        <div class="clearfix ser-title _j_search_section" data-category="sales">
                            <h2>
                                <a href="javascript:void (0)" class="_j_search_link"
                                   data-is-redirect="1">旅行商城</a>
                            </h2>
                            <a href="/search?type=luxian&q=${data}" class="_j_search_link"
                               data-is-redirect="1">更多旅行商城产品 &gt;&gt;</a>
                        </div>
                        <div class="_j_search_section" data-category="sales">

                            <div class="exe-packg01">
                                <ul class="clearfix">

                                    <c:choose>
                                        <c:when test="${not empty llist}">
                                            <c:forEach items="${llist}" var="luxian">
                                                <li>
                                                    <div class="flt1"><a href="javascript:void (0)" target="_blank"
                                                                         class="_j_search_link"><img
                                                            src="${luxian.picture}"
                                                            style="width:90px;height:90px;"></a></div>
                                                    <div class="dwn-nr">
                                                        <h5>
                                                            <a href="/luxian?type=Info&id=${luxian.id}" target="_blank"
                                                               class="_j_search_link">${luxian.title}</a>
                                                            <a href="javascript:void (0)" target="_blank"
                                                               class="seg-price _j_search_link">¥${luxian.taocan.price}</a>
                                                        </h5>
                                                        <p class="seg-desc"><a href="javascript:void(0)"
                                                                               target="_blank"
                                                                               class="_j_search_link">${luxian.taocan.title}</a>
                                                        </p>
                                                        <ul class="seg-info-list">
                                                                ${luxian.theme}-${luxian.location}-${luxian.longtime}
                                                        </ul>
                                                    </div>
                                                </li>
                                            </c:forEach>
                                        </c:when>
                                        <c:otherwise>
                                            <c:out value="没有关于${data}的路线搜索结果"></c:out>
                                        </c:otherwise>
                                    </c:choose>
                                </ul>
                            </div>
                        </div>


                        <div class="heg30"></div>
                        <div class="_j_search_section" data-category="user">
                            <div class="clearfix ser-title">
                                <h2>
                                    <a href="http://www.mafengwo.cn/search/s.php?q=sad&amp;t=user"
                                       class="_j_search_link"
                                       data-is-redirect="1">用户</a>
                                </h2>
                                <a href="/search?type=user&q=${data}" class="_j_search_link"
                                   data-is-redirect="1">更多用户 &gt;&gt;</a>
                            </div>
                            <ul class="user-list-row">

                                <c:choose>
                                    <c:when test="${not empty ulist}">
                                        <c:forEach items="${ulist}" var="user">
                                            <li>
                                                <div class="btns">
                                                    <a class="btn-msg _j_user_letter" href="javascript:;"
                                                       data-touid="382128">详情</a>
                                                </div>
                                                <span class="avatar"><a href="http://www.mafengwo.cn/u/382128.html"
                                                                        target="_blank"
                                                                        class="_j_search_link"><img
                                                        src="${user.avater}"
                                                        title="sadmoon" style="width:45px;height:45px;"></a></span>
                                                <div class="base">
                            <span class="name"><a href="/user?type=userInfo&nickname=${user.nickname}" target="_blank"
                                                  class="_j_search_link">${user.nickname}</a></span>
                                                    <a class="gender boy" href="javascript:;"></a>
                                                </div>
                                                <div class="nums">
                                                    <a href="javascript;" target="_blank"
                                                       class="_j_search_link">${user.about_me}</a>

                                                </div>
                                            </li>
                                        </c:forEach>
                                    </c:when>
                                    <c:otherwise>
                                        <c:out value="没有关于${data}的用户搜索结果"></c:out>
                                    </c:otherwise>
                                </c:choose>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </c:when>
    <c:otherwise>
        <div class="mfw-search-main" id="_j_mfw_search_main">

            <div class="wid clearfix">
                <div class="ser-nums">
                    <div class="sr-nums"><p class="ser-result-primary">
                        以下是为您找到的“${data}”相关结果${result.mapCount['dataCount']}条</p>
                    </div>
                </div>

                <div class="flt1 ser-lt" id="_j_search_result_left">
                    <div class="s-ct _j_search_section" data-category="mdd">
                        <div class="heg30"></div>

                        <c:if test="${result.state=='post'}">
                            <div class="_j_search_section" data-category="article_gonglve">
                                <div class="clearfix ser-title">
                                    <h2>
                                        <a href="http://www.mafengwo.cn/search/s.php?q=sad&amp;t=article_gonglve"
                                           target="_blank"
                                           class="_j_search_link" data-is-redirect="1">游记</a>
                                    </h2>
                                </div>
                                <div class="att-list">
                                    <ul>
                                        <c:choose>
                                            <c:when test="${not empty result.list}">
                                                <c:forEach items="${result.list}" var="passage">
                                                    <li>
                                                        <div class="clearfix">
                                                            <div class="flt1"><a
                                                                    href="/passage?type=getPassage&passage_id=${passage.id}"
                                                                    target="_blank" class="_j_search_link"><img
                                                                    src="${passage.picture}"
                                                                    style="width:150px;height:90px;"></a></div>
                                                            <div class="ct-text ">
                                                                <h3>
                                                                    <a href="/passage?type=getPassage&passage_id=${passage.id}"
                                                                       target="_blank"
                                                                       class="_j_search_link">${passage.title}</a>
                                                                </h3>
                                                                <p class="seg-desc">
                                                                        ${passage.view_content}</p>
                                                                <br>
                                                                <ul class="seg-info-list clearfix">
                                                                    <li>
                                                                        <a href="javascript:void (0)"
                                                                           target="_blank"
                                                                           class="_j_search_link">${passage.user.nickname}</a>
                                                                    </li>

                                                                    <li>
                                                                        <img
                                                                                src="${passage.user.avater}"
                                                                                alt="omelt的窝" width="16" height="16"
                                                                                style="border-radius: 50%">
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </c:forEach>
                                            </c:when>
                                            <c:otherwise>
                                                <c:out value="没有关于${data}的用户搜索结果"></c:out>
                                            </c:otherwise>
                                        </c:choose>
                                    </ul>
                                </div>
                            </div>
                        </c:if>

                        <c:if test="${result.state=='luxian'}">
                            <div class="clearfix ser-title _j_search_section" data-category="sales">
                                <h2>
                                    <a href="javascript:void (0)" class="_j_search_link"
                                       data-is-redirect="1">旅行商城</a>
                                </h2>
                            </div>
                            <div class="_j_search_section" data-category="sales">

                                <div class="exe-packg01">
                                    <ul class="clearfix">

                                        <c:choose>
                                            <c:when test="${not empty result.list}">
                                                <c:forEach items="${result.list}" var="luxian">
                                                    <li>
                                                        <div class="flt1"><a href="javascript:void (0)" target="_blank"
                                                                             class="_j_search_link"><img
                                                                src="${luxian.picture}"
                                                                style="width:90px;height:90px;"></a></div>
                                                        <div class="dwn-nr">
                                                            <h5>
                                                                <a href="/luxian?type=Info&id=${luxian.id}" target="_blank"
                                                                   class="_j_search_link">${luxian.title}</a>
                                                                <a href="javascript:void (0)" target="_blank"
                                                                   class="seg-price _j_search_link">¥${luxian.taocan.price}</a>
                                                            </h5>
                                                            <p class="seg-desc"><a href="javascript:void (0)"
                                                                                   target="_blank"
                                                                                   class="_j_search_link">${luxian.taocan.title}</a>
                                                            </p>
                                                            <ul class="seg-info-list">
                                                                    ${luxian.theme}-${luxian.location}-${luxian.longtime}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </c:forEach>
                                            </c:when>
                                            <c:otherwise>
                                                <c:out value="没有关于${data}的路线搜索结果"></c:out>
                                            </c:otherwise>
                                        </c:choose>
                                    </ul>
                                </div>
                            </div>
                        </c:if>


                        <c:if test="${result.state=='user'}">
                            <div class="_j_search_section" data-category="user">
                                <div class="clearfix ser-title">
                                    <h2>
                                        <a href="http://www.mafengwo.cn/search/s.php?q=sad&amp;t=user"
                                           class="_j_search_link"
                                           data-is-redirect="1">用户</a>
                                    </h2>
                                </div>
                                <ul class="user-list-row">

                                    <c:choose>
                                        <c:when test="${not empty result.list}">
                                            <c:forEach items="${result.list}" var="user">
                                                <li>
                                                    <div class="btns">
                                                        <a class="btn-msg _j_user_letter" href="javascript:;"
                                                           data-touid="382128">详情</a>
                                                    </div>
                                                    <span class="avatar"><a href="http://www.mafengwo.cn/u/382128.html"
                                                                            target="_blank"
                                                                            class="_j_search_link"><img
                                                            src="${user.avater}"
                                                            title="sadmoon" style="width:45px;height:45px;"></a></span>
                                                    <div class="base">
                            <span class="name"><a href="/user?type=userInfo&nickname=${user.nickname}" target="_blank"
                                                  class="_j_search_link">${user.nickname}</a></span>
                                                        <a class="gender boy" href="javascript:;"></a>
                                                    </div>
                                                    <div class="nums">
                                                        <a href="javascript;" target="_blank"
                                                           class="_j_search_link">${user.about_me}</a>

                                                    </div>
                                                </li>
                                            </c:forEach>
                                        </c:when>
                                        <c:otherwise>
                                            <c:out value="没有关于${data}的用户搜索结果"></c:out>
                                        </c:otherwise>
                                    </c:choose>
                                </ul>
                            </div>
                        </c:if>

                        <div class="heg30"></div>
                    </div>

                </div>
                <div class="m-pagination"><span class="count">最多显示50页 / 500条</span>

                    <c:if test="${result.mapCount['nowPage']!=1}">

                        <a class="ti last _j_pageitem" href="/search?q=${data}&type=${result.state}&page=1" data-page="${result.mapCount['maxPage']}"
                           rel="nofollow">首页</a>
                    </c:if>

                    <c:if test="${result.mapCount['start']>1}">
                        <c:out value="..."></c:out>
                    </c:if>

                    <c:forEach begin="${result.mapCount['start']}" end="${result.mapCount['end']}" var="i">
                        <c:choose>
                            <c:when test="${i==result.mapCount['nowPage']}">
                                <span class="this-page">${i}</span>
                            </c:when>
                            <c:otherwise>
                                <a class="ti _j_pageitem" href="/search?q=${data}&type=${result.state}&page=${i}" data-page="${i}" rel="nofollow">${i}</a>
                            </c:otherwise>
                        </c:choose>
                    </c:forEach>

                    <c:if test="${result.mapCount['end']<result.mapCount['maxPage']}">
                        <c:out value="..."></c:out>
                    </c:if>

                    <c:if test="${result.mapCount['nowPage']!=result.mapCount['maxPage']}">
                        <a class="ti last _j_pageitem" href="/search?q=${data}&type=${result.state}&page=${result.mapCount['maxPage']}" data-page="${result.mapCount['maxPage']}"
                           rel="nofollow">末页</a>
                    </c:if>

                </div>
            </div>

        </div>
    </c:otherwise>
</c:choose>


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


<!-- 意见反馈依托的页面模板 -->
<script type="text/x-jquery-tmpl" id="_j_tmpl_feedback">
<div class="FeedBackA">
    <div class="FeedTit">意见反馈</div>
    <div class="FeedDesc">我们倾听你的声音</div>
    <div class="FeedForm" id="feedback-form">
        <textarea id="feedback-textarea" placeholder="欢迎提出宝贵的意见和建议。抱歉我们无法逐一回复，但我们会认真阅读，你的支持是对我们最大的鼓励和帮助"></textarea>
    </div>
    <div class="FeedAct" id="feedback-act"><a href="#" class="_j_submitfeedback" data-url="">提 交</a><span id="feedback-errinfo" class="err hide">内容不能为空！</span></div>
</div>











</script>


<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+search+header:js+M+module+Pagination:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+dialog+alert:js+M+module+TopTip:js+hotel+mfwmap+mfwmap-util:js+hotel+mfwmap+mfwmap-event:js+hotel+mfwmap+mfwmap-runtime-google:js+hotel+mfwmap+mfwmap-runtime-amap:js+hotel+mfwmap+mfwmap-runtime-leaflet:js+hotel+mfwmap+mfwmap:js+M+module+Storage:js+xdate:js+hotel+module+ModuleProvider:js+hotel+module+BookingDate:js+letterTip:js+search+index:js+M+module+PageAdmin:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+AFeedback:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^alRQ^1531130229.js");
    }
</script>


</body>
</html>
