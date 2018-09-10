<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 下午5:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>订单确认 - 马蜂窝</title>
    <meta name="renderer" content="webkit">

    <script type="text/javascript">
        window.Env = {
            "payment_fee": 23780,
            "booking": {
                "id": 9042318,
                "stock_id": 1745853,
                "num": {"1745853": {"t": {"23": 2, "26": 0}, "d": {"s": "2018-07-28"}}},
                "room_num": 1,
                "tying": [],
                "promotion": [],
                "travel": [],
                "additional": [],
                "booked": [],
                "begin_date": "2018-07-28",
                "end_date": ""
            },
            "material_id": 9042318,
            "is_new": true,
            "params": {
                "room_num": 1,
                "bargain": 0,
                "gift_code": "",
                "skus": {"1745853": {"t": {"23": 2, "26": 0}, "d": {"s": "2018-07-28"}}},
                "id": 9042318,
                "source": "",
                "uid": 72891861,
                "sales_id": 347839
            },
            "version": "v201801",
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "https:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "95cc8e5c435673269ca275c48a486392_4c85bd89f688e7e26e2b098d5bb2b245",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">


    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript"
            crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>
    <script async="" src="%E8%AE%A2%E5%8D%95%E7%A1%AE%E8%AE%A4%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/BrowserState.js"
            crossorigin="anonymous"></script>
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


<link href="/static/css/csssalesorder-outercsspluginsjquery.css" rel="stylesheet" type="text/css">

<script language="javascript" src="/static/js/jsmoduleappPagejssalesorderABookingHeadZ1M1524639063.js"
        type="text/javascript" crossorigin="anonymous"></script>

<script language="javascript" src="/static/js/jquery.js" type="text/javascript" crossorigin="anonymous"></script>

<div class="wrapper">

    <div id="pagelet-block-1c5d6db15d5e00e61c144f340a55bc9f" class="pagelet-block"
         data-api="apps:sales:order:v2:Pagelet_BookingErrorStaH5" data-params="[]"
         data-controller="/js/sales/pagelet/BookingErrorStaH5"></div>
    <div class="order-cont clearfix">
        <div class="order-lt">
            <div class="buy-step">
                <ul class="clearfix">
                    <li class="step1"><p><i></i></p><em>提交订单</em></li>
                    <li class="step2"><p><i></i></p><em>确认支付</em></li>
                    <li class="step3"><p><i></i></p><em>完成购买</em></li>
                </ul>
            </div>

            <div id="_j_pagelet_travel" class="pagelet-block" data-api="apps:sales:order:v2:Pagelet_BookingTravelInfoPc"
                 data-params="{&quot;tid&quot;:&quot;13890927&quot;,&quot;people_num&quot;:&quot;2&quot;,&quot;jump_changer&quot;:0,&quot;sales_type&quot;:&quot;3&quot;}"
                 data-controller="/js/sales/pagelet/BookingTravelInfo"
                 data-controller_data="{&quot;template_people&quot;:[{&quot;required&quot;:0,&quot;name&quot;:&quot;&quot;,&quot;placeholder&quot;:&quot;&quot;,&quot;id&quot;:&quot;f10000&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:0,&quot;limit_value&quot;:0,&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:null,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:1,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684&quot;,&quot;role_types&quot;:[]},{&quot;required&quot;:1,&quot;name&quot;:&quot;\u4e2d\u6587\u59d3\u540d&quot;,&quot;placeholder&quot;:&quot;\u8bf7\u586b\u5199\u4e2d\u6587\u59d3\u540d&quot;,&quot;id&quot;:&quot;f2&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:1,&quot;limit_value&quot;:{&quot;min&quot;:2,&quot;max&quot;:15},&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:&quot;&quot;,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u51652\u81f315\u4e2a\u4e2d\u6587&quot;,&quot;role_types&quot;:[]},{&quot;required&quot;:1,&quot;name&quot;:&quot;\u8bc1\u4ef6\u7c7b\u578b&quot;,&quot;placeholder&quot;:&quot;&quot;,&quot;id&quot;:&quot;f4&quot;,&quot;group&quot;:&quot;composite&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:0,&quot;limit_value&quot;:0,&quot;use&quot;:3,&quot;forbid&quot;:1,&quot;value&quot;:[{&quot;id&quot;:&quot;\u62a4\u7167&quot;,&quot;name&quot;:&quot;\u62a4\u7167&quot;},{&quot;id&quot;:&quot;\u6e2f\u6fb3\u901a\u884c\u8bc1&quot;,&quot;name&quot;:&quot;\u6e2f\u6fb3\u901a\u884c\u8bc1&quot;},{&quot;id&quot;:&quot;\u53f0\u6e7e\u901a\u884c\u8bc1&quot;,&quot;name&quot;:&quot;\u53f0\u6e7e\u901a\u884c\u8bc1&quot;}],&quot;default_value&quot;:{&quot;id&quot;:&quot;\u62a4\u7167&quot;,&quot;name&quot;:&quot;\u62a4\u7167&quot;},&quot;ext&quot;:{&quot;\u62a4\u7167&quot;:{&quot;required&quot;:1,&quot;name&quot;:&quot;\u62a4\u7167&quot;,&quot;placeholder&quot;:&quot;&quot;,&quot;id&quot;:&quot;f2_ext&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:0,&quot;limit_value&quot;:0,&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:null,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u62a4\u7167&quot;,&quot;role_types&quot;:[]},&quot;\u6e2f\u6fb3\u901a\u884c\u8bc1&quot;:{&quot;required&quot;:1,&quot;name&quot;:&quot;\u6e2f\u6fb3\u901a\u884c\u8bc1&quot;,&quot;placeholder&quot;:&quot;&quot;,&quot;id&quot;:&quot;f11_ext&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:0,&quot;limit_value&quot;:0,&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:null,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u6e2f\u6fb3\u901a\u884c\u8bc1&quot;,&quot;role_types&quot;:[]},&quot;\u53f0\u6e7e\u901a\u884c\u8bc1&quot;:{&quot;required&quot;:1,&quot;name&quot;:&quot;\u53f0\u6e7e\u901a\u884c\u8bc1&quot;,&quot;placeholder&quot;:&quot;&quot;,&quot;id&quot;:&quot;f12_ext&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:0,&quot;limit_value&quot;:0,&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:null,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u53f0\u6e7e\u901a\u884c\u8bc1&quot;,&quot;role_types&quot;:[]}},&quot;use_value&quot;:&quot;data&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u62a4\u7167&quot;,&quot;role_types&quot;:[]},{&quot;required&quot;:1,&quot;name&quot;:&quot;\u8054\u7cfb\u7535\u8bdd&quot;,&quot;placeholder&quot;:&quot;\u5f53\u5929\u51fa\u884c\u7684\u8054\u7cfb\u7535\u8bdd&quot;,&quot;id&quot;:&quot;f147&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:3,&quot;limit_value&quot;:0,&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:&quot;&quot;,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8054\u7cfb\u7535\u8bdd&quot;,&quot;role_types&quot;:[]},{&quot;required&quot;:0,&quot;name&quot;:&quot;\u8eab\u4efd\u8bc1&quot;,&quot;placeholder&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7&quot;,&quot;id&quot;:&quot;f1_ext&quot;,&quot;group&quot;:&quot;single&quot;,&quot;type&quot;:&quot;text&quot;,&quot;limit&quot;:8,&quot;limit_value&quot;:0,&quot;use&quot;:0,&quot;forbid&quot;:0,&quot;value&quot;:&quot;&quot;,&quot;default_value&quot;:&quot;&quot;,&quot;ext&quot;:[],&quot;use_value&quot;:&quot;origin&quot;,&quot;hide&quot;:0,&quot;notice&quot;:&quot;\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1&quot;,&quot;role_types&quot;:[]}],&quot;template_stock&quot;:[],&quot;template_address&quot;:[],&quot;template_take&quot;:[],&quot;traveler&quot;:[],&quot;address&quot;:[],&quot;show_items&quot;:{&quot;people&quot;:true,&quot;stroke&quot;:false,&quot;take&quot;:false,&quot;address&quot;:false},&quot;check_items&quot;:{&quot;people&quot;:true,&quot;stroke&quot;:false,&quot;take&quot;:false,&quot;address&quot;:false},&quot;jump&quot;:0,&quot;temporary&quot;:null,&quot;tid&quot;:13890927}">
                <div class="trav-inf _j_ti_people_container" data-people_num="2" style="margin-bottom: 30px">
                    <h2><i class="_j_step_num">1</i>出行人信息（<span>用于安排出行人行程</span>）</h2>
                    <div class="_j_ti_people_inner">
                        <div class="template-form _j_ti_people_form">
                            <div class="main-trav"><h3><span class="name">出行人</span></h3>
                                <ul class="clearfix _j_ti_people_list"></ul>
                            </div>
                            <div class="user-int clearfix _j_ti_people_template">
                                <div class="form-sec flt1 _j_template_atom_container" style="display: none;"><label
                                        class="_j_template_name"></label><input class="template-field _j_template_input"
                                                                                data-limit="0" data-use="0"
                                                                                name="f10000" data-required="0"
                                                                                data-hide="1" data-notice="请输入正确的"
                                                                                data-use_value="origin" placeholder=""
                                                                                type="text"><label
                                        class="notFail _j_template_error" style="display: none"><i></i></label>
                                </div>
                                <div class="form-sec flt1 _j_template_atom_container"><label class="_j_template_name"></label><input
                                        class="template-field _j_template_input bord-red" data-limit="1" data-use="0"
                                        name="f2" data-required="1" data-hide="0" data-notice="请输入2至15个中文"
                                        data-use_value="origin" placeholder="请填写中文姓名" type="text"><label
                                        class="notFail _j_template_error"
                                        style="display: none"><i></i></label></div>
                                <div class="form-sec flt1 _j_template_atom_container form-sec-focus"><label
                                        class="_j_template_name"></label>
                                    <div class="ipt-two">
                                        <div class="_j_template_composite_inner"><input
                                                class="template-field _j_template_input bord-red" data-limit="0"
                                                data-use="3" readonly="readonly" name="f4" data-required="1"
                                                data-hide="0" data-notice="请输入正确的护照" data-use_value="data" value="护照"
                                                placeholder="" type="text"><input
                                                class="template-field _j_template_input bord-red" data-limit="0"
                                                data-use="0" name="f2_ext" data-required="1" data-hide="0"
                                                data-notice="请输入正确的护照" data-use_value="origin" placeholder=""
                                                style="border-left: 1px solid rgb(239, 82, 61);" type="text"></div>
                                        <label class="notFail _j_template_error"
                                               style="display: none"><i></i></label></div>
                                </div>
                                <div class="form-sec flt1 _j_template_atom_container"><label class="_j_template_name"></label><input
                                        class="template-field _j_template_input bord-red" data-limit="3" data-use="0"
                                        name="f147" data-required="1" data-hide="0" data-notice=""
                                        data-use_value="origin" placeholder="当天出行的联系电话" type="text"><label
                                        class="notFail _j_template_error"
                                        style="display: none"><i></i></label></div>
                                <div class="form-sec flt1 _j_template_atom_container"><label class="_j_template_name"></label><input
                                        class="template-field _j_template_input" data-limit="8" data-use="0"
                                        name="f1_ext" data-required="0" data-hide="0" data-notice=""
                                        data-use_value="origin" placeholder="请输入正确的身份证号" type="text"><label
                                        class="notFail _j_template_error" style="display: none"><i></i></label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <script id="_j_ti_people_tmpl" type="text/x-jquery-tmpl">
            <div class="template-form _j_ti_people_form">
                <div class="main-trav">
                    <h3>
                        <span class="name">出行人${location}</span>
                        <span class="collect _j_ti_expand">收起<i></i></span>
                    </h3>
                    <ul class="clearfix _j_ti_people_list"></ul>
                </div>
                <div class="user-int clearfix _j_ti_people_template"></div>
            </div>

                </script>
                <script id="_j_ti_people_list_tmpl" type="text/x-jquery-tmpl">
            <li class="cssradio _j_ti_people_atom {{if is_choose}}on{{/if}}"><i></i>${name}</li>

                </script>


            </div>

            <div id="_j_pagelet_extra_charge" class="pagelet-block" data-api="apps:sales:order:v2:Pagelet_ExtraCharge"
                 data-params="{&quot;additionals&quot;:&quot;[]&quot;}" data-controller="/js/sales/pagelet/ExtraCharge"
                 data-controller_data="{&quot;additionals&quot;:[]}">


            </div>


            <div id="_j_pagelet_tying" class="pagelet-block" data-api="apps:sales:order:v2:Pagelet_BookingTying"
                 data-params="{&quot;bargain&quot;:&quot;0&quot;,&quot;items&quot;:&quot;[{&amp;quot;item_key&amp;quot;:&amp;quot;S1745853D23&amp;quot;,&amp;quot;stock_id&amp;quot;:1745853,&amp;quot;stock_name&amp;quot;:&amp;quot;8\\u5929 6\\u665a 6\\u665a\\u4e3b\\u5c9b 5\\u2605\\u5e0c\\u5c14\\u987f\\\/\\u5a01\\u65af\\u6c40\\u9152\\u5e97&amp;quot;,&amp;quot;is_addon&amp;quot;:false,&amp;quot;price_def_id&amp;quot;:23,&amp;quot;price_def_key&amp;quot;:&amp;quot;adult&amp;quot;,&amp;quot;price_name&amp;quot;:&amp;quot;\\u6210\\u4eba&amp;quot;,&amp;quot;data_type&amp;quot;:1,&amp;quot;price_type&amp;quot;:0,&amp;quot;is_primary&amp;quot;:true,&amp;quot;num&amp;quot;:2,&amp;quot;price_id&amp;quot;:675767718,&amp;quot;price_sold&amp;quot;:11890,&amp;quot;price_settle&amp;quot;:11890,&amp;quot;price_commission&amp;quot;:0,&amp;quot;go_date&amp;quot;:&amp;quot;2018-07-28&amp;quot;,&amp;quot;end_date&amp;quot;:&amp;quot;2018-07-28&amp;quot;,&amp;quot;sales_id&amp;quot;:347839,&amp;quot;total_price&amp;quot;:23780,&amp;quot;reduce_total&amp;quot;:0,&amp;quot;payment_fee&amp;quot;:23780,&amp;quot;reduce_bargain&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_bargain_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;bargain_owner_type&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_coupon&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;coupon_code&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_coupon_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_coupon_mfw_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;coupon_code_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_early_bird&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_early_bird_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_mfw&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_honey&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;honey_rate&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;use_honey&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_mcode&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;mcode_rate&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;mcode_code&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_n_off_mfw&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_n_off_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;n_off_rate_mfw&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;n_off_rate_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;n_off_min_num_mfw&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;n_off_min_num_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;n_off_discount_repeat&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_app_mfw&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;reduce_app_ota&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;app_only_new_user&amp;quot;:&amp;quot;&amp;quot;,&amp;quot;range&amp;quot;:[]}]&quot;,&quot;sales_id&quot;:&quot;347839&quot;,&quot;params&quot;:{&quot;is_new&quot;:&quot;1&quot;,&quot;stock_id&quot;:&quot;1745853&quot;,&quot;people_num&quot;:&quot;2&quot;}}"
                 data-controller="/js/sales/pagelet/BookingTyingV2"
                 data-controller_data="{&quot;people_num&quot;:null,&quot;default_choose&quot;:0}"></div>


            <div id="_j_pagelet_booked_by" class="pagelet-block" data-api="apps:sales:order:v2:Pagelet_BookedBy"
                 data-params="{&quot;sales_id&quot;:&quot;347839&quot;,&quot;scope&quot;:&quot;sales&quot;,&quot;sales_type&quot;:&quot;3&quot;}"
                 data-controller="/js/sales/pagelet/BookedBy"
                 data-controller_data="{&quot;old_phone&quot;:&quot;15083505510&quot;,&quot;pure_phone&quot;:&quot;15083505510&quot;,&quot;phone_code&quot;:86,&quot;new_user&quot;:true}">
                <div class="res-inf" id="baseInfoForm">
                    <h2><i class="_j_step_num">2</i>预订人信息（<span>用于接收订单反馈</span>）</h2>
                    <div class="user-int clearfix">
                        <div class="form-sec flt1 form-sec-focus" style="clear: both">
                            <label for="base_name">姓名</label>
                            <input id="base_name" class="bord-red _j_booked_check" placeholder="请填写您的真实姓名" required="1"
                                   title="姓名" type="text">
                        </div>
                        <div class="ver-code clearfix">
                            <p class="form-sec flt1  form-sec-focus">
                                <input id="base_phone" placeholder="手机" value="15083505510" required="1" title="手机号"
                                       class="_j_booked_check" type="tel">
                                <label for="base_phone">手机</label>
                                <em id="btn_valid" class="valid-sms _j_send_sms" style="" data-lock="false"
                                    data-times="0">发送验证码</em>
                            </p>
                            <p class="form-sec flt1  mt16 valid-sms form-sec-focus" style="">
                                <label>验证码</label>
                                <input id="valid_code" placeholder="验证码" type="text">
                            </p>
                        </div>
                        <div class="form-sec flt1  form-sec-focus" style="clear: both">
                            <label for="base_email">邮箱</label>
                            <div class="parentCls">
                                <div id="mailListBox_0" class="justForJs parentCls"
                                     style="min-width:262px;_width:262px;position:absolute;left:-6000px;top:40px;z-index:5;"></div>
                                <input data-e="" id="base_email" class="bord-red _j_booked_check" placeholder="请填写邮箱"
                                       required="1" title="邮箱" type="text">
                            </div>
                        </div>
                        <div class="form-sec flt1  form-sec-focus" style="clear: both">
                            <label for="base_wechat">微信</label>
                            <input id="base_wechat" placeholder="仅作为备用联系方式" type="text">
                        </div>

                        <div class="form-sec flt1 form-tare form-sec-focus">
                            <label for="base_description">备注信息</label>
                            <textarea id="base_description" type="text" placeholder="备注信息"></textarea>
                        </div>
                    </div>
                </div>
                <script language="javascript" src="/static/js/jquery_002.js" type="text/javascript"
                        crossorigin="anonymous"></script>

                <script>

                </script>
            </div>
        </div>


        <div class="order-rt">
            <div class="focus-img">
                <img src="${dingdan.luxian.picture}"
                     alt="" width="310" height="182">
                <p>${dingdan.luxian.saler.name}
                    <i>
                        认证商家
                    </i>
                </p>
            </div>
            <div class="order-adv">
                <h2>${dingdan.luxian.title}</h2>
                <ul>
                    <li>
                        <p><span>${dingdan.luxian.theme.title}</span></p>
                        <p class="clearfix"><b>出行时长</b><i>${dingdan.luxian.longtime}</i></p>
                        <p class="clearfix"><b>地点</b>
                            ${dingdan.luxian.location}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="order-count clearfix">

        <div class="flt1">
            <div class="coupon" data-japp="order_coupon_pc" data-jappconf="promotion" data-product_id="347839"
                 data-price="23780" data-busi_type="sales" data-model="ota" data-id="ota" data-weight="1">
                <p><i></i>使用商家优惠券</p>
                <div class="had-been"></div>
            </div>
            <div class="coupon" data-japp="order_coupon_pc" data-jappconf="promotion" data-product_id="347839"
                 data-price="23780" data-busi_type="sales" data-model="mfw" data-id="mfw" data-weight="2"
                 data-attr="{&quot;num&quot;:2}">
                <p><i></i>使用马蜂窝优惠券</p>
                <div class="had-been"></div>
            </div>
            <div class="kouling" data-japp="order_honey_pc" data-jappconf="promotion" data-product_id="347839"
                 data-price="23780" data-busi_type="sales" data-id="honey" data-weight="3">
                <p><i></i>使用蜂蜜抵现</p>
            </div>
        </div>
        <div class="price-list flt2">
            <ul>

                <li class="clearfix">
                    <span>产品金额：</span>
                    <em>
                        ${dingdan.price}元
                    </em>
                </li>

                <li class="clearfix _j_amount_additional" style="display: none"><span>附加费用：</span><em>0元</em></li>
                <li class="clearfix _j_amount_tying" style="display: none"><span>保险费用：</span><em>0元</em></li>
                <li class="clearfix _j_amount_promotion_ota" style="display: none"><span>商家优惠券：</span><em>-0元</em></li>
                <li class="clearfix _j_amount_promotion_mfw" style="display: none"><span>马蜂窝优惠券：</span><em>-0元</em></li>
                <li class="clearfix _j_amount_promotion_honey" style="display: none"><span>蜂蜜抵现：</span><em>-0元</em></li>
                <li class="clearfix _j_amount_promotion_mcode" style="display: none"><span>M码：</span><em>-0元</em></li>

                <li class="clearfix price-count"><span>支付总金额：</span><b>￥<i class="_j_amount_payment_fee">${dingdan.price}</i></b>
                </li>
            </ul>
        </div>
    </div>

    <div class="sub-order" style="margin-bottom:200px; ">
        <p><i class="on" id="agreement"></i>我已阅读并同意
            <a href="https://www.mafengwo.cn/s/salesagreement.html" target="_blank">《马蜂窝商城服务使用协议》</a>、<a
                    href="https://www.mafengwo.cn/s/safety.html" target="_blank">《旅游安全须知》</a>
        </p>
        <div id="submit-pay" class="btn-order _j_confirm">提交订单</div>
        <script>
            $(document).ready(function () {
                $('#submit-pay').click(function (){

                    $.post('/dingdan',{
                        type:'overPay',
                        id:'${dingdan.id}'
                    }).done(function (res) {
                        if(res=='1'){
                            $(location).attr('href', '/dingdan?type=findByUser&user_id=${current_user.id}');
                        }
                    }).error(function () {
                        alert('生成订单失败')
                    });
                });
            });
        </script>
        <div class="btn-order _j_confirm_loading" style="display: none">
            <div class="btn-loading">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    </div>
</div>

<script id="_j_bargain_container" type="text/x-jquery-tmpl">
        <div class="layer_mask" style="position: fixed;width: 100%;height: 100%;top: 0px;left: 0px;background: rgb(0, 0, 0);opacity: 0.7;z-index: 9;"></div>
        <div style="width: 420px;" class="popup-box">
            <a class="close-btn _j_bargain_close" href="javascript:void(0);"><i></i></a>
            <div class="pop-ico"></div>
            <div id="wx" class="pop-ctn">
                <p class="hd"></p>
                <div class="wx-mfw-pop">
                    <p>使用微信“扫一扫”去砍价</p><p>动动手指，就能为这款产品砍个好价格喔！</p>
                    <p>本订单至多可砍掉¥<span class="_j_bargain_price">${price}</span>，邀请<span class="_j_bargain_people">${num}</span>个好友帮砍吧！</p>
                    <p>
                        <img width="150" height="150" src="${src}" style="margin:10px auto">
                    </p>
                </div>
                <p></p>
            </div>
        </div>

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
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+M+module+PageAdmin:js+M+module+Storage:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^ZlxW^1531130229.js");
    }
    $(document).ready(function () {
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
    })
</script>


</body>
</html>
