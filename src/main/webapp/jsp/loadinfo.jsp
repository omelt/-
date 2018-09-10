<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 下午2:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class=" hasFontSmoothing-true">
<head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${luxian.title} - 密蜂窝</title>

    <meta name="keywords" content="自由行,自助游">
    <meta name="description" content="">
    <link rel="canonical" href="http://www.mafengwo.cn/sales/2477740.html">

    <script type="text/javascript">
        window.Env = {
            "salesId": 2477740,
            "salesType": 3,
            "saleStatus": 1,
            "bIsShowConnectWindow": false,
            "user_honey": 0,
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "http:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "f037059e40e05193010ab98b9d584a86_04731ee708ff779176ce9fe27e295a38",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">


    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript"
            crossorigin="anonymous"></script>
    <script type="text/javascript">
        var __mfw_uid = parseInt('72891861');
    </script>
    <script language="javascript" src="/static/js/jscommonjquery.js" type="text/javascript"
            crossorigin="anonymous"></script>
    <link href="/static/css/csssalessales-detail-v4cssmfweditormfweditorZ1w1531906593.css" rel="stylesheet"
          type="text/css">
    <script language="javascript" src="/static/js/mobilejssalesappjssaleslibdecimal.js" type="text/javascript"
            crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>
    <script async="" src="/static/js/BrowserState.js" crossorigin="anonymous"></script>
</head>
<body style="position: relative;">


<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="蜜蜂窝自由行" href="http://www.mafengwo.cn/"
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
                            <a id="_j_showlogin" title="登录蜜蜂窝" href="/user?type=login" rel="nofollow">登录</a><span
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
                                <li><a href="javascript:" target="_blank" title="我的蜜蜂窝" rel="nofollow" data-cs-p="wo"><i
                                        class="icon-wo"></i>我的蜜蜂窝 </a></li>
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
                        <div class="head-daka" style="padding-right: 20px;">
                            <a class="btn btn-info" href="javascript:" rel="nofollow" id="head-btn-daka" title="我的关注列表"
                               data-japp="daka" style="width:74px"><p>关注列表</p></a>
                        </div>


                    </c:otherwise>
                </c:choose>
            </div>
        </div>
        <div class="shadow"></div>
    </div>


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


<div class="container">
    <div class="wrapper">


        <div class="crumb">
            <!-- 面包屑开始 -->
            <div class="item">

                <a href="http://www.mafengwo.cn/sales/" target="_blank" class="crumb-index">旅行商城首页</a>
                <em>&gt;</em>
            </div>
            <div class="item">
                <div class="drop" data-crumb="type">
                        <span class="hd">
                            <a data-sk="type" data-sv="3" data-navk="type" data-navv="3" href="javascript:;">自由行<i></i>
                            </a>
                        </span>
                    <div class="bd">
                        <i class="arrow"><b></b></i>
                        <ul class="clearfix">
                            <li><a data-navk="type" data-navv="3" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-3.html">自由行</a></li>
                            <li><a data-navk="type" data-navv="32" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-32.html">私家团</a></li>
                            <li><a data-navk="type" data-navv="33" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-33.html">游学团</a></li>
                            <li><a data-navk="type" data-navv="34" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-34.html">特价机票套餐</a></li>
                            <li><a data-navk="type" data-navv="1" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-1.html">特价机票</a></li>
                            <li><a data-navk="type" data-navv="6" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-6.html">半自助游</a></li>
                            <li><a data-navk="type" data-navv="30" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-30.html">跟团游</a></li>
                            <li><a data-navk="type" data-navv="28" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-28.html">自由行定制</a></li>
                            <li><a data-navk="type" data-navv="19" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-19.html">保险</a></li>
                            <li><a data-navk="type" data-navv="5" target="_blank"
                                   href="http://www.mafengwo.cn/sales/0-0-0-5.html">邮轮</a></li>
                        </ul>
                    </div>
                </div>
                <em>&gt;</em>
            </div>
            <div class="item">
                <div class="drop" data-crumb="go_time">
                        <span class="hd">
                            <a data-sk="date" data-sv="all" data-navk="date" data-navv="all"
                               href="javascript:;">全部出发时间<i></i></a>
                        </span>
                    <div class="bd">
                        <i class="arrow"><b></b></i>
                        <ul class="clearfix">
                            <li><a data-navk="date" data-navv="all" href="http://www.mafengwo.cn/sales/0-0-0-0.html"
                                   target="_blank">全部</a></li>
                            <li><a data-navk="date" data-navv="201808"
                                   href="http://www.mafengwo.cn/sales/201808-0-0-0.html" target="_blank">八月</a></li>
                            <li><a data-navk="date" data-navv="201807"
                                   href="http://www.mafengwo.cn/sales/201807-0-0-0.html" target="_blank">七月</a></li>
                            <li><a data-navk="date" data-navv="201809"
                                   href="http://www.mafengwo.cn/sales/201809-0-0-0.html" target="_blank">九月</a></li>
                            <li><a data-navk="date" data-navv="201810"
                                   href="http://www.mafengwo.cn/sales/201810-0-0-0.html" target="_blank">十月</a></li>
                            <li><a data-navk="date" data-navv="201710"
                                   href="http://www.mafengwo.cn/sales/201710-0-0-0.html" target="_blank">十月</a></li>
                            <li><a data-navk="date" data-navv="201711"
                                   href="http://www.mafengwo.cn/sales/201711-0-0-0.html" target="_blank">十一月</a></li>
                            <li><a data-navk="date" data-navv="201712"
                                   href="http://www.mafengwo.cn/sales/201712-0-0-0.html" target="_blank">十二月</a></li>
                            <li><a data-navk="date" data-navv="201811"
                                   href="http://www.mafengwo.cn/sales/201811-0-0-0.html" target="_blank">十一月</a></li>
                        </ul>
                    </div>
                </div>
                <em>&gt;</em>
            </div>
            <a href="http://www.mafengwo.cn/sales/0-0-M10460-0-0-0-0-0.html">${luxian.location}</a>
            <!-- 面包屑结束 -->

        </div>
        <div class="sales-intro new-intro clearfix">
            <div class="intro-l">
                <div class="sales-photo">
                    <ul data-type="salesPhoto" data-stat-area="2_1" style="width: 3080px; margin-left:0px;">
                        <li><img src="${luxian.picture}"></li>
                    </ul>
                    <span class="btn-prev"><i></i></span>
                    <span class="btn-next"><i></i></span>
                    <div class="dot">
                        <span class=""></span>
                        <span class=""></span>
                        <span class=""></span>
                        <span class="on"></span>
                        <span class=""></span>
                        <span class=""></span>
                        <span class=""></span>
                    </div>
                    <span class="sales-id">ID:2477740</span>
                    <!--APP 下单减图片 -->

                    <div class="app-minus" data-promotion-img-top="" style="display: none">


                    </div>

                </div>


                <div style="display:none;">

                    <!-- 模板 月份tab -->
                    <li data-cal-month-tab-template="1" data-cal-month-tab-offset="0" data-cal-month-tab="1">
                        <a href="javascript:void(0);" data-cal-month-name="1"></a>
                    </li>

                    <!-- 模板 月份body -->
                    <div data-cal-month-body-template="1" class="cal-day">
                        <ul class="week">
                            <li>日</li>
                            <li>一</li>
                            <li>二</li>
                            <li>三</li>
                            <li>四</li>
                            <li>五</li>
                            <li>六</li>
                        </ul>
                        <ul class="list clearfix" data-cal-date-item-mount="1">


                        </ul>
                    </div>

                    <!-- 模板 日期 -->
                    <li data-cal-date-item-template="1">
                        <div class="day" data-cal-date-item-day="1"></div>
                        <div class="pro" data-cal-date-item-price="1">
                            <span data-cal-date-item-price-text="1"></span>
                            <br>
                            <span data-cal-date-item-remain-text="1"></span>
                        </div>
                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                            <i class="i-select"></i>
                        </div>
                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                    </li>

                    <li class="amount-adult" data-num-picker-template="1">
                        <div class="amount">
                            <span class="input">
                                <span data-num-picker-name="1"></span>
                                <span data-num-picker-number="1" class="num"></span>
                            </span>
                            <span class="btns">
                                <a class="btn-plus" data-num-picker-plus="1" data-num-picker-def-id="1"
                                   href="javascript:void(0);">
                                    <i>+</i>
                                </a>
                                <a class="btn-minus" data-num-picker-minus="1" data-num-picker-def-id="1"
                                   href="javascript:void(0);">
                                    <i>-</i>
                                </a>
                            </span>
                        </div>
                        <div class="s_popup num-tips hide" data-num-picker-tips="1">
                            <i class="i-arrow i-arrCenter"></i>
                            <p>
                                <span data-num-picker-name="1"></span>：
                                <span class="price" data-num-picker-price="1"></span>元
                            </p>
                        </div>
                    </li>

                    <li class="amount-adult" data-room-picker-template="1">
                        <div class="amount">
                            <span class="input">
                                <span>房间</span>
                                <span data-room-picker-number="1" class="num">0</span>
                            </span>
                            <span class="btns">
                                <a class="btn-plus" data-room-picker-plus="1" href="javascript:void(0);">
                                    <i>+</i>
                                </a>
                                <a class="btn-minus" data-room-picker-minus="1" href="javascript:void(0);">
                                    <i>-</i>
                                </a>
                            </span>
                        </div>
                        <div class="s_popup num-tips hide">
                            <i class="i-arrow i-arrCenter"></i>
                            <p><span>单房差</span>：<span class="price" data-room-picker-price="1">0</span>元</p>
                        </div>
                    </li>

                    <div class="sales-calendar" data-cal-template="1">
                        <div class="cal-month">
                            <span class="tab-arrow tab-arrLeft" data-cal-prev-month="1"><i></i></span>
                            <span class="tab-arrow tab-arrRight" data-cal-next-month="1"><i></i></span>
                            <div class="cal-tab">
                                <ul data-cal-month-tab-mount="1">

                                </ul>
                            </div>
                        </div>
                        <div data-cal-month-body-mount="1">

                        </div>
                    </div>

                    <li class="amount-adult" data-addon-template="">
                        <div class="amount">
                            <span class="input">
                                <span data-addon-name="1"></span>
                                <span data-addon-num="1" class="num">0</span>
                            </span>
                            <span class="btns">
                                <a class="btn-plus" data-addon="1" data-addon-plus="1" href="javascript:void(0);">
                                    <i>+</i>
                                </a>
                                <a class="btn-minus" data-addon="1" data-addon-minus="1" href="javascript:void(0);">
                                    <i>-</i>
                                </a>
                            </span>
                        </div>
                        <div class="s_popup num-tips hide">
                            <i class="i-arrow i-arrCenter"></i>
                            <p style="text-align : left;padding-left: 20px;"><span>服务费</span>:<span class="price"
                                                                                                    data-addon-price="1"></span>元
                            </p>
                            <p style="text-align : left;padding-left: 20px;"><span class="price"
                                                                                   data-addon-desc="1"></span></p>
                        </div>
                    </li>

                </div>
                <div data-cal-wrap="1" style="" data-stat-display="1">
                    <div class="sales-calendar" data-cal="1">
                        <div class="cal-month">
                            <span class="tab-arrow tab-arrLeft" data-cal-prev-month="1"><i></i></span>
                            <span class="tab-arrow tab-arrRight" data-cal-next-month="1"><i></i></span>
                            <div class="cal-tab">
                                <ul data-cal-month-tab-mount="1" style="width: 560px;">
                                    <li data-cal-month-tab-offset="0" data-cal-month-tab="2018-07"
                                        style="display: list-item;" class="on">
                                        <a href="javascript:void(0);" data-cal-month-name="1">2018年7月</a>
                                    </li>
                                    <li data-cal-month-tab-offset="0" data-cal-month-tab="2018-08"
                                        style="display: list-item;">
                                        <a href="javascript:void(0);" data-cal-month-name="1">2018年8月</a>
                                    </li>
                                    <li data-cal-month-tab-offset="0" data-cal-month-tab="2018-09"
                                        style="display: list-item;">
                                        <a href="javascript:void(0);" data-cal-month-name="1">2018年9月</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div data-cal-month-body-mount="1">
                            <div class="cal-day" data-cal-month-body="2018-07" style="display: block;">
                                <ul class="week">
                                    <li>日</li>
                                    <li>一</li>
                                    <li>二</li>
                                    <li>三</li>
                                    <li>四</li>
                                    <li>五</li>
                                    <li>六</li>
                                </ul>
                                <ul class="list clearfix" data-cal-date-item-mount="1">


                                    <li data-cal-date-item="2018-07-01" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">1</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-02" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">2</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-03" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">3</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-04" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">4</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-05" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">5</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-06" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">6</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-07" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">7</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-08" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">8</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-09" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">9</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-10" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">10</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-11" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">11</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-12" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">12</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-13" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">13</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-14" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">14</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-15" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">15</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-16" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">16</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-17" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">17</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-18" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">18</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-19" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">19</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-20" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">20</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-21" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">21</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-22" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">22</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-23" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">23</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-24" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">24</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-25" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">25</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-26" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">26</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-27" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">27</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余2</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-28" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">28</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-29" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">29</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-30" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">30</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-07-31" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">31</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="cal-day" data-cal-month-body="2018-08" style="display: none;">
                                <ul class="week">
                                    <li>日</li>
                                    <li>一</li>
                                    <li>二</li>
                                    <li>三</li>
                                    <li>四</li>
                                    <li>五</li>
                                    <li>六</li>
                                </ul>
                                <ul class="list clearfix" data-cal-date-item-mount="1">


                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li data-cal-date-item="2018-08-01" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">1</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-02" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">2</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-03" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">3</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-04" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">4</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-05" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">5</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-06" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">6</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-07" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">7</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-08" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">8</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-09" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">9</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-10" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">10</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-11" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">11</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-12" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">12</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-13" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">13</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-14" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">14</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-15" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">15</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-16" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">16</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-17" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">17</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-18" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">18</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-19" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">19</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-20" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">20</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-21" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">21</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-22" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">22</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-23" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">23</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-24" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">24</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-25" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">25</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-26" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">26</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-27" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">27</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-28" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">28</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-29" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">29</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥7680</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-30" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">30</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-08-31" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">31</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥5380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="cal-day" data-cal-month-body="2018-09" style="display: none;">
                                <ul class="week">
                                    <li>日</li>
                                    <li>一</li>
                                    <li>二</li>
                                    <li>三</li>
                                    <li>四</li>
                                    <li>五</li>
                                    <li>六</li>
                                </ul>
                                <ul class="list clearfix" data-cal-date-item-mount="1">


                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li data-cal-date-item="2018-09-01" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">1</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-02" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">2</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-03" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">3</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-04" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">4</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-05" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">5</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-06" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">6</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-07" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">7</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-08" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">8</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-09" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">9</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-10" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">10</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-11" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">11</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-12" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">12</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-13" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">13</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-14" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">14</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-15" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">15</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-16" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">16</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-17" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">17</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-18" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">18</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥4380起</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-19" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">19</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-20" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">20</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-21" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">21</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-22" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">22</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-23" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">23</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-24" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">24</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-25" style="display: list-item;"
                                        data-cal-date-item-checkable="1">
                                        <div class="day" data-cal-date-item-day="1">25</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1">￥6850</span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1">余4</span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: block;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-26" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">26</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-27" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">27</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-28" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">28</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-29" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">29</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li data-cal-date-item="2018-09-30" style="display: list-item;">
                                        <div class="day" data-cal-date-item-day="1">30</div>
                                        <div class="pro" data-cal-date-item-price="1">
                                            <span data-cal-date-item-price-text="1"></span>
                                            <br>
                                            <span data-cal-date-item-remain-text="1"></span>
                                        </div>
                                        <div class="border" data-cal-date-item-border="1" style="display: none;">
                                            <i class="i-select"></i>
                                        </div>
                                        <div data-cal-date-item-zao="1" style="display: none;" class="zao">早</div>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="l-ft clearfix">

                    <span class="tuan">· 如需预订更多人数请咨询客服</span>
                    <a class="btn-collect " data-stat-area="7_5" href="javascript:void(0);">
                        <i></i>收藏
                        <span class="num">233</span>
                    </a>
                    <div class="share">
                        <a class="btn-share" href="javascript:void(0)"><i></i>分享</a>
                        <div class="s_popup share-icon hide" style="display: none;">
                            <i class="i-arrow i-arrCenter"></i>
                            <a class="s-weibo" href="javascript:void(0);" title="分享到新浪微博" rel="nofollow"></a>
                            <a class="s-qzone" href="javascript:void(0);" title="分享到QQ空间" rel="nofollow"></a>
                            <a class="s-weixin" href="javascript:void(0);" title="分享到微信"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro-r">
                <div class="sales-title">
                    <span class="shop-icon">店铺</span> <span class="tag-promotion"
                                                            style="background-image: url(http://p2-q.mafengwo.net/s11/M00/77/3C/wKgBEFsQFc6AE9RPAAAM_rSsc-Y899.png); "></span>
                    <h1>${luxian.title}</h1>

                    <div class="s-label clearfix">
                        <span>${luxian.theme.title}</span>

                    </div>

                </div>

                <a href="https://imfw.cn/l/15381094" target="_blank" data-stat-area="2_6">
                    <img src="%E6%96%B0%E4%BA%BA_files/wKgBEFtUZ36AK1laAABBONQdDKo989.png" alt="" width="100%">
                </a>


                <div class="price-panel clearfix">
                    <ul>
                        <li class="item-price">
                            <em>￥</em><strong>${luxian.taocanList[0].price}~${maxValue}</strong>
                            <span id="priceDesc">
                                    <a href="javascript:void(0);" data-stat-area="2_2">价格说明</a>
                                    <span id="priceDescMsg">
                                    此价格区间是指，本产品可售日期范围内的最低价和最高价。其中最低价库存为： ${luxian.longtime}天 印尼狮子航空 【精品必选】3星宜必思 2018-09-02
                                    </span>
                                </span>
                        </li>
                        <li class="item-sold">
                            月售11
                        </li>
                        <!---- <li class="item-reviews"><a href="javascript:void(0)">92 条评论</a></li>---->
                    </ul>
                </div>
                <div class="info-panel">

                    <div class="info-promo clearfix" data-stat-area="2_5" data-promotion-list="">
                        <span class="label" data-promotion-title="">优惠信息</span>
                        <div class="promo-bd">
                            <span class="t-text" style="display: none;" data-promotion-limit-preview=""></span>

                            <span class="t-default honey-hover" style=""
                                  onclick="window.open('http://www.mafengwo.cn/g/i/2947856.html')"
                                  data-promotion-honey=""><div class="s_popup num-tips">              <i
                                    class="i-arrow i-arrCenter"></i>              <p>下单时使用蜂蜜至多可抵扣订单金额的<span>30％</span></p>            </div>            蜂蜜抵30%</span>

                            <span class="t-zao honey-hover" style="display: none;" data-promotion-zao=""></span>
                            <span class="t-n-off honey-hover" style="display: none;" data-promotion-n-off=""></span>

                            <span class="t-blue honey-hover" style="display: none;" data-promotion-limit-app=""></span>

                            <!--扫描二维码  这个要放到 优惠信息的 最后-->
                            <span class="sales-app" data-promotion-scan="" style="display: none"><a
                                    href="javascript:void(0);"><i></i>收藏产品，扫码下单<span><img
                                    src="%E6%96%B0%E4%BA%BA_files/wKgBs1bVB56AH_aIAAACrCZiYf4650.png"></span></a></span>
                            <br data-promotion-bargain="">

                            <span class="t-text" style="display: none;" data-promotion-bargain=""></span>
                        </div>
                    </div>

                    <i id="mount_ota_coupon" style="display: none;"></i>
                    <div data-stat-area="2_4">
                        <div class="info-promo clearfix">
                            <span class="label">领优惠券</span>
                            <div class="promo-bd">
                                <p class="coupon clearfix">
                                    <span class="ct"><span>¥ 500</span></span>


                                    <span class="ct"><span>¥ 300</span></span>
                                    <span class="more" id="ota_coupon_show">共2张可领</span>
                                </p>
                            </div>
                        </div>

                    </div>


                    <div class="info-tips">
                        <span class="label">预订须知</span>
                        <div class="info-tips-box">
                            <p>
                                <span data-desc="">此产品需要二次确认，商家将在18个工作小时内（工作日9:00-18:00）核实是否有位!</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="r-line"></div>
                <div class="property-panel">
                    <div id="stock_wrap">

                        <div style="display:none;" data-template-holder="1">
                            <li data-sku-id-template="1">
                                <div class="s_popup num-tips" data-sku-pop="1"
                                     style="text-align: left;white-space:normal;">
                                    <i class="i-arrow i-arrCenter"></i>
                                    <p data-sku-mode-tag-desc="1"></p>

                                </div>
                                <a href="javascript:void(0);">
                                    <span class="prop-tag" style="display: none;" data-sku-mode-tag="1"></span>
                                    <span class="prop-tag" style="display: none;" data-sku-mode-tag="1"></span>
                                    <span class="prop-tag" style="display: none;" data-sku-mode-tag="1"></span>
                                    <span class="prop-tag" style="display: none;" data-sku-mode-tag="1"></span>
                                    <span data-sku-name="1"></span><i></i>
                                </a>
                            </li>

                            <dl class="clearfix tj-type" data-attribute-template="1">
                                <dt class="label" data-attribute-name="1">
                                    套餐类型
                                </dt>
                                <dd>
                                    <ul class="ui-selProp clearfix" data-attribute-value-mount="1">
                                    </ul>
                                </dd>
                            </dl>

                            <li data-attribute-value-template="1" data-attribute="1">
                                <a href="javascript:void(0);">
                                    <span data-attribute-value-name="1"></span><i></i>
                                </a>
                            </li>

                            <p data-sku-rule-template="1" style="word-wrap: break-word; word-break: normal;">
                                <b data-sku-rule-label="1"></b> :
                                <span style="font-size: 14px; color:#333; font-weight: normal;"
                                      data-sku-rule-value="1"></span>
                            </p>
                        </div>


                        <div data-sku-wrap="1" style="">
                            <dl class="clearfix tj-type">
                                <dt class="label">
                                    套餐类型
                                </dt>
                                <dd>
                                    <ul id="taocan-ul" class="ui-selProp clearfix" data-sku-mount="1">
                                        <c:forEach items="${luxian.taocanList}" var="i">
                                            <li data-price="${i.price}">
                                                <a href="javascript:void(0);">
                                                <span class="prop-tag" style="display: none;"
                                                      data-sku-mode-tag="1"></span>
                                                    <span class="prop-tag" style="display: none;"
                                                          data-sku-mode-tag="1"></span>
                                                    <span class="prop-tag" style="display: none;"
                                                          data-sku-mode-tag="1"></span>
                                                    <span data-sku-name="1">${i.title}</span><i></i>
                                                </a>
                                            </li>
                                        </c:forEach>
                                    </ul>
                                </dd>
                            </dl>

                        </div>

                        <div data-attribute-mount="1">


                        </div>


                    </div>

                    <dl class="clearfix hide" data-range-picker="1">
                        <dt class="label">选择日期</dt>
                        <dd>
                                    <span class="ui-dateProp" data-range-picker-begin="1">
                                        起始日期<i></i>
                                    </span>
                            <span class="to">~</span>
                            <span class="ui-dateProp" data-range-picker-end="1">
                                        结束日期<i></i>
                                    </span>
                            <span data-range-picker-tips="1" class="tips"></span>
                        </dd>
                        <div class="calendar-pop calendar-start" style="display: none;"
                             data-range-cal-begin-wrap="1"></div>
                        <div class="calendar-pop calendar-end" style="display: none;" data-range-cal-end-wrap="1"></div>
                    </dl>

                    <dl class="clearfix top-bar hide" data-picker="date">
                        <dt class="label">选择日期</dt>
                        <dd>
                            <div class="ui-date">
                                <div class="trigger bookDate-trigger">
                                    <span class="label" data-text-date="1">请选择日期</span>
                                    <i></i>
                                </div>
                                <div class="s_popup bookDate-pop" data-date-pop="1" style="display: none;">
                                    <i class="i-arrow"></i>
                                    <div class="book-calendar" id="top_calendar_wrap"></div>
                                </div>
                            </div>
                        </dd>
                    </dl>

                    <dl class="clearfix" data-num-picker-wrap="1" style="display: none;">
                        <dt class="label">数量选择</dt>
                        <dd>
                            <ul class="ui-numProp clearfix" data-num-picker-mount="1">


                            </ul>
                        </dd>
                    </dl>


                    <dl class="clearfix" data-addon-wrap="1" style="display: none;">
                        <dt class="label">更多服务</dt>
                        <dd>
                            <ul class="ui-numProp clearfix" data-addon-mount="1">

                            </ul>
                        </dd>
                    </dl>
                </div>
                <div class="action-panel clearfix">
                    <div class="total">
                        <em id="flag_total_price" data-total-price-prefix="1" class="rmb-flag hide">￥</em>
                        <strong id="text_total_price" data-total-price-text="1">--</strong>
                        <span class="honey" id="used_honey" data-total-price-honey="1"></span>
                        <span class="total-price-ext" data-total-price-mode="1" style="display:none;"></span>
                        <span class="price-sg-room" data-total-price-single-room="1" style="display: none">
                                (包含<span class="total-price" data-total-price-single-room-text="1">0</span>元单房差)
                            </span>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $('#taocan-ul > li').click(function () {
                                $('#flag_total_price').removeClass("hide");
                                $('#text_total_price').html($(this).attr("data-price"));
                            });
                        });
                    </script>
                    <div class="on-countdown-hide" data-countdown-hide="1">

                        <div class="bargain" style="display: none;" data-promotion-bargain-btn="">
                            <a class="btn" href="javascript:void(0);" data-book-btn="1" data-book-bargin-btn="1">去砍价</a>
                            <a href="javascript:void(0);" class="i-tips"></a>
                            <div class="tipspop" style="display: none">
                                <i class="i-arrow"></i>
                                <a href="javascript:void(0);" class="close-btn"><i></i></a>
                                <p class="title">如何砍价：</p>
                                <div class="con">
                                    <p>1. 砍价正式开启后 ，点击 ［ 去砍价］ 即可发起砍价</p>
                                    <p>2. 选择出发时间及人数后，系统生成砍价订单。</p>
                                    <p>3. 好友砍价的总金额作为优惠项在您支付时直接减去。</p>
                                    <p>4. 砍价发起后的60分钟内，分享给微信好友请他帮你砍价。</p>
                                    <p>5. 砍价结束后的60分钟之内请在“我的订单”中完成支付，若砍价订单中的产品在支付前售罄，则相关砍价优惠作废。</p>
                                    <p>6. 用户因任何原因取消砍价订单，即不再享受砍价优惠。</p>
                                    <p>7. 砍价优惠可与优惠券同时使用。M码不适用于砍价活动。</p>
                                </div>
                            </div>
                        </div>


                        <span class="buy">
                            <a id="buy-submit" class="btn"  href="javascript:void(0);" >立即购买</a>
                                    <a class="btn btn-disabled" style="display: none;" data-book-disable-btn="1"
                                       href="javascript:void(0);">已抢光</a>
                                    <a class="btn btn-disabled" style="display: none;" data-book-disable-btn="2"
                                       href="javascript:void(0);">已售罄</a>
                                                        </span>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $('#buy-submit').click(function (){

                              $.post('/dingdan',{
                                  type:'add',
                                  user_id:'${current_user.id}',
                                  luxian_id:'${luxian.id}',
                                  saler_id:'${luxian.saler.id}',
                                  price:$('#text_total_price').html()
                              }).done(function (res) {
                                  if(res=='1'){
                                      $(location).attr('href', '/dingdan?type=pay');
                                  }
                              }).error(function () {
                                  alert('生成订单失败')
                              });
                            });
                        });
                    </script>
                    <span data-countdown-show="1" data-countdown="1" class="not-start on-countdown-show"
                          style="display: none;">距开售:<span class="dd">0</span>天<span class="hh">00</span>时<span
                            class="mm">00</span>分<span class="ss">00</span>秒</span>
                </div>
                <div class="s_popup cart-pop" style="display:none;">
                    <i class="i-arrow"></i>
                    <ul class="cart-list">


                        <li class="cart-action clearfix">
                            <span class="cart-total">总价：<strong>￥0</strong></span>
                            <a class="btn" href="javascript:void(0);">组合购买</a>
                        </li>
                    </ul>
                </div>
                <!-- //Stock End -->

            </div>
        </div>


        <div class="clearfix detail-wrapper">

            <div class="sales-nav-wrap">
                <div class="sales-nav">
                    <ul class="clearfix">

                        <li class="on"><a href="#target_introduce" data-stat-area="4_2">产品介绍</a></li>


                        <li><a href="#target_cost" data-stat-area="4_3">费用说明</a></li>


                        <li><a href="#target_purchase" data-stat-area="4_7">购买须知</a></li>

                        <li>
                            <a href="#target_review">
                                用户点评


                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="side-bar" style="">

                <div class="m-book">
                    <div class="book-action clearfix">
                <span class="buy on-countdown-hide">
                                            <a data-booking-btn-v2-side="1" class="btn"
                                               href="javascript:void(0);">立即购买</a>
                                    </span>
                    </div>
                </div>

                <div class="m-contact">

                    <div class="hd">
                        <a data-stat-display="2" data-stat-area="4_1" class="title"
                           href="http://www.mafengwo.cn/sales/shop/386" target="_blank">${luxian.saler.name}</a>
                        <span class="auth"><i></i>蜜蜂窝优质认证商家</span>
                        <a href="http://www.mafengwo.cn/sales/shop/page/license?iId=386"><i
                                class="self-license"></i></a>
                    </div>
                    <ul class="bd">

                        <li class="item-service" style="" data-show-im="entrance" data-stat-area="7_2">
                            <i class="icon-service"></i>
                            <span class="s-num">咨询客服管家<a class="btn" href="javascript:void(0);" data-japp="client"
                                                         data-jappconf="webim" data-webim-type="5"
                                                         data-webim-salesid="2477740">和我联系</a></span>
                            <span class="s-time" data-show-im="hour">周一至周日 9:00-23:59</span>
                        </li>


                        <li class="item-tel" data-stat-area="7_3">
                            <i class="icon-tel"></i>
                            <span class="s-num">售前客服</span>
                            <span class="s-num">${luxian.saler.conphone}</span>
                            <span class="s-time">周一至周日 09:00-23:00</span>
                        </li>


                    </ul>
                </div>
            </div>
            <div class="main-detail">
                <!------
                <div class="m-panel m-basic">
                    <div class="m-hd"><h2>基本信息</h2></div>
                    <div class="m-bd">
                        <table class="table">
                            <tbody>
                            <tr>
                                <th>预计出发时间</th>
                                <td>7:00-10:00am</td>
                            </tr>
                            <tr>
                                <th>预计出发时间</th>
                                <td>7:00-10:00am</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>----->
                <a id="target_introduce" class="nav-anchor"></a>
                <!--产品介绍-->
                <div class="m-panel" data-module-name="产品介绍" data-stat-display="3">
                    <div class="m-hd">
                        <h2>产品介绍</h2>
                    </div>
                    <div class="m-bd">
                        <p>${luxian.jieshao}</p>
                    </div>
                </div>
                <a id="target_cost" class="nav-anchor"></a>
                <!--费用说明-->
                <div class="m-panel m-cost" data-module-name="费用说明" data-stat-display="4">
                    <div class="m-hd">
                        <h2>费用说明</h2>
                    </div>

                    <div class="m-bd">
                        <p>${luxian.need}</p>
                    </div>
                </div>

                <a id="target_purchase" class="nav-anchor"></a>
                <!--购买须知-->
                <div class="m-panel m-notice" data-module-name="购买须知" data-stat-display="6">
                    <div class="m-hd">
                        <h2>购买须知</h2>
                    </div>
                    <div class="m-bd">
                        <p>${luxian.xvzhi}</p>
                    </div>
                </div>

                <!---用户点评----->
                <a id="target_review" class="nav-anchor"></a>
                <div class="m-panel m-reviews" data-stat-display="8">
                    <div class="m-hd"><h2>用户点评</h2></div>
                    <div class="m-bd">
                        <div class="bar">
                            <div class="sub-stars">
                                <div class="item">
                                    <div class="name">旅行交通</div>
                                    <div class="bar"><i style="width: 100%;"></i></div>
                                    <div class="score">10.0</div>
                                </div>
                                <div class="item">
                                    <div class="name">酒店住宿</div>
                                    <div class="bar"><i style="width: 100%;"></i></div>
                                    <div class="score">10.0</div>
                                </div>
                                <div class="item">
                                    <div class="name">行程安排</div>
                                    <div class="bar"><i style="width: 100%;"></i></div>
                                    <div class="score">10.0</div>
                                </div>
                            </div>
                            <div class="tags">
                                <div class="box">
                                    <span>行程安排合理</span>
                                    <span>航班准时</span>
                                    <span>酒店景色好</span>
                                    <span>酒店干净整洁</span>
                                    <span>客服服务赞</span>
                                    <span>性价比高</span>
                                    <span>早餐美味</span>
                                    <span>航班时间合适</span>
                                    <span>客服响应及时</span>
                                    <span>酒店位置交通便利</span>
                                </div>
                            </div>
                            <span class="ssi">棒极了 <em>10.0分</em></span>
                            <ul class="tab clearfix">
                                <li class="on"><a href="javascript:void(0);" data-star="0">全部

                                </a></li>
                                <li><a href="javascript:void(0);" data-star="4+">推荐
                                    <span>(34)</span>
                                </a></li>
                                <li><a href="javascript:void(0);" data-star="3">一般
                                    <span>(0)</span>
                                </a></li>
                                <li><a href="javascript:void(0);" data-star="2-">不推荐
                                    <span>(0)</span>
                                </a></li>
                                <li><a href="javascript:void(0);" data-has-img="1">有图
                                    <span>(26)</span>
                                </a></li>
                            </ul>
                        </div>
                        <div class="empty-msg" style="display: none;">暂无点评</div>
                        <div class="rev-list" style="visibility: visible;">

                        </div>
                        <script>
                            function getComment(page) {
                                $.get('/comment', {
                                    type:"findByLuxian",
                                    luxian_id:"${luxian.id}",
                                    page:page
                                }).done(function (json) {

                                    var pageInit=JSON.parse(json);
                                    var data=pageInit['list'];

                                    $(".paginator").html("");
                                    $(".rev-list").html("");
                                    if (page!=1) $(".paginator").append('<a href="javascript:void(0);" data-page="1" class="ti next">&lt;&lt;首页</a>');
                                    for (var i=pageInit['mapCount']['start'];i<=pageInit['mapCount']['end'];i++){
                                        if(i==page){
                                            $(".paginator").append('<span class="this-page">'+i+'</span>')
                                        }else{
                                            $(".paginator").append('<a href="javascript:void(0);" data-page="'+i+'" class="ti next">'+i+'</a>');
                                        }
                                    }
                                    if (page!=pageInit['mapCount']['maxPage']) $(".paginator").append('<a href="javascript:void(0);" data-page="'+pageInit['mapCount']['maxPage']+'" class="ti next">末页&gt;&gt;</a>');
                                    for(var i=0;i<data.length;i++) {

                                        $(".rev-list").append(' <li class="rev-item">\n' +
                                            '                                <div class="user"><span class="avatar"><img\n' +
                                            '                                        src="'+data[i]['user']['avater']+'"\n' +
                                            '                                        width="32" height="32"></span><span>'+data[i]['user']['nickname']+'</span></div>\n' +
                                            '                                <div class="rev-star"><span class="star star'+data[i]['score']+'"></span></div>\n' +
                                            '                                <p class="txt">\n' +
                                            '                                    '+data[i]['content']+'</p>\n' +
                                            '                                <div class="img clearfix">\n' +
                                            '                                    <a href="javascript:void(0);"\n' +
                                            '                                       data-href="http://n3-q.mafengwo.net/s11/M00/DE/2F/wKgBEFtWlBCAMxnPAABSCGmXja846.jpeg?imageView2%2F2%2Fw%2F1920%2Fh%2F1200%2Fq%2F90"\n' +
                                            '                                       data-japp="fancybox" data-jappconf="common" data-group="review_5499299"><img\n' +
                                            '                                            src="http://n3-q.mafengwo.net/s11/M00/DE/2F/wKgBEFtWlBCAMxnPAABSCGmXja846.jpeg?imageMogr2%2Fthumbnail%2F%2180x80r%2Fgravity%2FCenter%2Fcrop%2F%2180x80%2Fquality%2F100"\n' +
                                            '                                            width="80" height="80"></a>\n' +
                                            '                                </div>\n' +
                                            '                                <span class="time">'+new Date(data[i]['timestamp'])+'</span>\n' +
                                            '                                <!-- 评论回复 -->\n' +
                                            '                                <!-- 评论回复 end -->\n' +
                                            '                            </li>');
                                    }
                                }).error(function () {
                                    alert('获取评论失败')
                                })
                            }
                            $(document).ready(function () {
                                getComment(1);
                                $('.paginator').on("click",'a',function () {
                                    getComment(Number($(this).attr("data-page")));
                                })


                            });
                        </script>
                        <div class="paginator" id="review_page_box" data-stat-area="5_1" align="right">

                        </div>
                    </div>
                </div>
                <!---用户点评----->
            </div>
        </div>
        <div id="selfRecommend"></div>
        <div class="m-recommend">
            <div class="hd">看了又看</div>
            <ul class="bd clearfix">
                <c:forEach items="${againList}" var="temp">
                    <li class="item" data-stat-area="6_1" data-stat-id="2159704" data-stat-display="9"
                    data-abtest="uds_sales_order_before_view_v1">
                    <a href="http://www.mafengwo.cn/sales/2159704.html" target="_blank">
                        <div class="image">
                            <img src="${temp.picture}">


                            <span class="mark-type type-1">
                                <strong>${temp.location}</strong>
                                <span>${temp.theme.title}</span>
                            </span>

                        </div>
                        <div class="info">
                            <h4>${temp.title}</h4>
                            <div class="price">
                                <strong>${temp.taocan.price}
                                    <span style="font-size: 14px;">起</span>
                                </strong>
                                <span>约${temp.longtime}日</span>
                            </div>
                        </div>
                    </a>
                </li>
                </c:forEach>
            </ul>
        </div>


        <!-- 相关推荐 begin-->

        <!-- 相关推荐 end-->


        <div class="layer_mask _j_mask hide"
             style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.7; z-index: 400; background: rgb(0, 0, 0);"></div>


    </div>
    <!-- 微信分享 -->
    <div style="width: 420px;" id="popup_container2" class="popup-box hide">
        <a class="close-btn" href="javascript:void(0);"><i></i></a>
        <div class="pop-ico"></div>
        <div id="wx" class="pop-ctn">
            <p class="hd"></p>
            <div class="wx-mfw-pop">
                <p>使用微信“扫一扫”</p>
                <p>打开网页后点击右上角“分享按钮”</p>
                <p>
                    <img src="%E6%96%B0%E4%BA%BA_files/wKgBEFrZrAOATWuLAAACWUDCLWQ750.png" width="150" height="150"></p>
            </div>
            <p></p>
        </div>
    </div>

    <!-- 酒店地图 -->
    <div id="pnl_mappop" class="map_pop">
        <div id="hotel_map_box" style="width:100%;height:100%"></div>
        <a href="javascript:" rel="nofollow" id="btn_close_map">关闭</a>
    </div>


</div>

<script id="sales_pagination" type="text/html">
    <!--<span class="count">共${pageTotal}页 / ${total}条</span>-->
    {{if pageTotal > 1}}
    {{if currPage > 1}}
    <a class="pg-prev _j_pageitem" href="javascript:;" data-page="${currPage - 1}" rel="nofollow">&lt;&lt; 上一页</a>
    {{/if}}
    {{each(i, index) indexers}}
    {{if index == currPage}}
    <span class="pg-current">${index}</span>
    {{else}}
    <a class="pi _j_pageitem" href="javascript:void(0);" data-page="${index}" rel="nofollow">${index}</a>
    {{/if}}
    {{/each}}
    {{if currPage < pageTotal}}
    <a class="pg-next _j_pageitem" href="javascript:;" data-page="${currPage + 1}" rel="nofollow">下一页 &gt;&gt;</a>
    {{/if}}
    {{/if}}
</script>


<script>
    M.closure(function (require) {
        var SalesDetail = require('/js/sales/detail');
        var detail = new SalesDetail({
            sales: {
                'id': 2477740,
                'name': '新人有减+蓝天边荡秋千·上海巴厘岛6天自由行（去库塔冲浪+凹造型圣地+漂浮早餐+烛光晚餐/浪漫下午茶+悬崖透明泳池+赠接送机+奢华阿雅娜/宝格丽/多种酒店搭配）',
                'img': 'http://n3-q.mafengwo.net/s11/M00/51/AB/wKgBEFsHz4WAAlvzAAO8kRmxEso31.jpeg?imageMogr2%2Fthumbnail%2F%21450x300r%2Fgravity%2FCenter%2Fcrop%2F%21450x300%2Fquality%2F100',
                'scope': 'sales',
                'type': '3'
            },
            allow_show_review: true,
            gift_code: '',
            stock_version: 1
        });
        detail.init();
        window.detailPage = detail;
    });
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


<link href="/static/css/mfw-toolbar.css" rel="stylesheet" type="text/css">

<div class="mfw-toolbar" id="_j_mfwtoolbar" style="display: block;">
    <div class="toolbar-item-top">
        <a id="back-to-top" role="button" class="btn _j_gotop">
            <i class="icon_top"></i>
            <em>返回顶部</em>
        </a>
    </div>

</div>


<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+localdeals+rest:js+sales+navbar:js+sales+stock:js+sales+sidebar:js+sales+map:js+sales+slider:js+m.sns.share:js+sales+share:js+sales+favorite:js+sales+review:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+sales+countdown:js+sales+stock+Process:js+sales+detail+Object:js+sales+detail+stock+Price:js+sales+detail+stock+SoldNode:js+sales+detail+stock+CalendarDate:js+sales+detail+stock+CalendarMonth:js+sales+detail+stock+Calendar:js+sales+detail+stock+Sku:js+sales+detail+stock+NumBox:js+sales+detail:js+M+module+PageAdmin:js+M+module+Storage:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^YlVWQA^1531391499.js");
    }
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").fadeIn(1500);
            }
            else {
                $("#back-to-top").fadeOut(1500);
            }
            $('.rev-list').css("visibility", " visible");
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


    })
</script>


<div id="_j_layer_0" class="layer _j_layer"
     style="position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 100; display: none;">
    <div class="layer_mask _j_mask"
         style="position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.7; z-index: -1;"></div>
    <div class="layer_content _j_content"
         style="position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 0; overflow: hidden;">
        <div class="popup-box layer_dialog _j_dialog pop_no_margin"
             style="position: absolute; opacity: 0; display: none; background: rgb(255, 255, 255) none repeat scroll 0% 0%; z-index: 0;">
            <div class="dialog_title" style="display:none">
                <div class="_j_title title"></div>
            </div>
            <div class="dialog_body _j_content">
                <div class="coupon-pop" style="">
                    <h3>领取商家优惠券</h3>
                    <ul class="clearfix">
                        <li>
                            <div class="coupon-detail">
                                <div><em>￥</em><strong>500</strong>满19999元可用</div>
                                <p>适用：限酒店套餐/自由行/半自助游/自由行定制/跟团游/特价机票套餐品类产品</p>
                                <p>有效期：2018-07-23
                                    至 2018-07-31</p>
                            </div>
                            <a class="btn js_ling_coupon" data-bindcode="LBIOaT4PeyY" href="javascript:;">立即领取</a>
                        </li>
                        <li>
                            <div class="coupon-detail">
                                <div><em>￥</em><strong>300</strong>满9999元可用</div>
                                <p>适用：限酒店套餐/自由行/半自助游/自由行定制/跟团游/私家团/游学团/特价机票套餐品类产品</p>
                                <p>有效期：2018-07-23
                                    至 2018-07-31</p>
                            </div>
                            <a class="btn js_ling_coupon" data-bindcode="LBMgVT4PeyY" href="javascript:;">立即领取</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a id="popup_close" class="close-btn _j_close"><i></i></a></div>
    </div>
</div>
</body>
</html>

