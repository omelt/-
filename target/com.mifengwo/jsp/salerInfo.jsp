<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-8-1
  Time: 上午8:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<!DOCTYPE html>
<html class=" hasFontSmoothing-true">
<head>
    <script type="text/javascript" async="" charset="utf-8"
            src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>途牛 - 马蜂窝自由行</title>

    <meta name="description" content="马蜂窝特价,专属蜂蜂的旅行低价荟萃,汇集旅游产品
    低价精品,一天一款,每天不断,折扣经济,实惠旅游,更多特价旅游信息就上马蜂窝,马蜂窝特价,秒杀蜂抢进行中...">
    <meta name="Keywords" content="马蜂窝特价,秒杀特价">

    <script type="text/javascript">
        window.Env = {
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "http:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "f070bf8672531cd6c43f014b5330dd32_3d20319bbf1833f332fb1ec2af680a39",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css"
          rel="stylesheet" type="text/css">


    <script language="javascript"
            src="/static/js/jsjquery-1.js"
            type="text/javascript" crossorigin="anonymous"></script>
    <script type="text/javascript">
        var __mfw_uid = parseInt('72891861');
    </script>
    <script language="javascript"
            src="/static/js/jscommonjquery.js"t
            type="text/javascript" crossorigin="anonymous"></script>
    <link href="/static/css/csssalesshopindexcssmfweditormfweditorZ1E1531303440.css"
          rel="stylesheet" type="text/css">
    <script language="javascript"
            src="/static/js/jssalesjquery.js"
            type="text/javascript" crossorigin="anonymous"></script>

    <script async=""
            src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>
    <script async=""
            src="/static/js/BrowserState.js"
            crossorigin="anonymous"></script>
</head>
<body style="position: relative;">


<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="马蜂窝自由行" href="http://www.mafengwo.cn/"
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


<style type="text/css">
    .blank-box {
        padding: 65px 0;
        font-size: 20px;
        text-align: center;
    }

    .blank-box i {
        display: inline-block;
        width: 45px;
        height: 39px;
        background: url(https://css.mafengwo.net/images/sales/logo-gray.png) no-repeat;
        overflow: hidden;
    }
</style>
<script>
    // js异常监控
    window.onerror = function (message, file, line, col, err) {
        if ('mfwPageEvent' in window) {
            var msgData = {
                'module': 'pc_shop_index',
                'err_msg': message,
                'err_url': file,
                'err_line': line,
                'err_col': col,
                'err_error': err
            };
            mfwPageEvent('sales', 'ota_js_crash_error', msgData);
        }
    };
</script>
<div class="main-container">
    <div class="head-container">
        <div class="shop-head clearfix">
            <img class="shop-logo-big"
                 src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBZ1lTQEmAIsTtAAA2y6YuI8Y42.jpeg">
            <div class="shop-info">
                <h3 class="shop-name">途牛</h3>
                <p class="shop-desc">公司全称：南京途牛国际旅行社有限公司
                    <a class="icon icon-license" href="http://www.mafengwo.cn/sales/shop/page/license?iId=1258"
                       target="_blank"></a>
                </p>
                <a id="collect" data-stat-area="店铺关注按钮" data-collect="0" href="javascript:;"
                   class="shop-collect ">收藏</a>
            </div>
        </div>
    </div>

    <div class="head-slider-container slider-shop">
        <div class="head-slider-title">
            <h4>店铺推荐</h4>
            <a class="head-nav-arrow left">
                <span class="icon icon-arrow_left"></span>
            </a>
            <a class="head-nav-arrow right">
                <span class="icon icon-arrow_right"></span>
            </a>
        </div>

        <div class="head-slider-warp">
            <!--自由行攻略item-->
            <a class="head-slider-item gl-item" href="https://m.mafengwo.cn/gonglve/ziyouxing/124950.html"
               target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFtBiweAT3GEABSHlRBkoy037.jpeg"
                         class="head-item-img">
                    <div class="img-mask"></div>
                    <div class="title-box">
                        <h5>自由行攻略</h5>
                        <span class="icon head-gl-icon"></span>
                    </div>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">镜泊湖骄傲的季节到了，八大体验不可错过！</h4>
                    <p class="head-info-14 left">牡丹江</p>
                    <p class="head-info-14 right">5078人浏览过</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="https://m.mafengwo.cn/gonglve/ziyouxing/121086.html"
               target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFs1xg6AemRhAA10aYUrHl079.jpeg"
                         class="head-item-img">
                    <div class="img-mask"></div>
                    <div class="title-box">
                        <h5>自由行攻略</h5>
                        <span class="icon head-gl-icon"></span>
                    </div>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">清凉水世界、避暑游竹海……到天目湖嗨过夏天！</h4>
                    <p class="head-info-14 left">溧阳</p>
                    <p class="head-info-14 right">5012人浏览过</p>
                </div>
            </a>


            <!--普通item-->
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2052673.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBZ1nxddGAbzbQAAFBRGnCWp869.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-1">
                        <span class="top-tag-left">塞班岛</span>
                        <span class="top-tag-right">自由行</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">
                        上海直飞美国塞班岛5天自由行（海岛度假精品路线+丛林探险+军舰岛+环岛游+中文接送机+导游接送+含税费+含导服费+经济酒店+珊瑚海+格兰维罗+卡诺亚+凯悦+悦泰海景）</h4>
                    <p class="head-info-14 left">￥<span class="price">3180</span>起</p>
                    <p class="head-info-14 right">售出221</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2139567.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrrxA2AMM3JAAIYa0_nzUs44.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-1">
                        <span class="top-tag-left">大阪</span>
                        <span class="top-tag-right">自由行</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">超值游关西·北京直飞日本大阪5天4晚自由行（去大阪喂小鹿+宿特色民宿+地铁周边+享受假日乐趣+2人预定赠1台WiFi使用）</h4>
                    <p class="head-info-14 left">￥<span class="price">3999</span>起</p>
                    <p class="head-info-14 right">售出74</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2081558.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrixXSAJXMwAAG5yxhWY_A71.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-1">
                        <span class="top-tag-left">马尔代夫</span>
                        <span class="top-tag-right">自由行</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">强势控房·上海直飞马尔代夫阿雅达岛Ayada6天自由行（可申请蜜月布置+私人管家+私人泳池+马累VIP休息室+儿童活动中心+白色礼堂）</h4>
                    <p class="head-info-14 left">￥<span class="price">16580</span>起</p>
                    <p class="head-info-14 right">售出6</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/428180.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrpeeCAR8XbAA97V0TrtKM69.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-4">
                        <span class="top-tag-left">东京</span>
                        <span class="top-tag-right">特价机票</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">
                        夏日祭花火大会·上海直飞日本东京5-6天往返机票（烟火大会+全日空+部分航班含56kg行李额+2人预定赠一台WiFi租赁+可订浅草花灯旅馆489元/间/晚）</h4>
                    <p class="head-info-14 left">￥<span class="price">2799</span>起</p>
                    <p class="head-info-14 right">售出549</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2052945.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrqp-yARLTxAAEFHXjCkgQ65.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-4">
                        <span class="top-tag-left">芽庄</span>
                        <span class="top-tag-right">特价机票</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">潜水胜地·上海直飞越南芽庄5-6天往返机票（赠送wifi+越捷航空直飞+27kg行李额+可代订酒店/接送机）</h4>
                    <p class="head-info-14 left">￥<span class="price">2199</span>起</p>
                    <p class="head-info-14 right">售出456</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2098020.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsfcViAfXHTABi7pHfZ0SE876.gif"
                         class="head-item-img">
                    <p class="top-tag clearfix type-4">
                        <span class="top-tag-left">大阪</span>
                        <span class="top-tag-right">特价机票</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">夏日祭花火大会·北京直飞日本大阪5-6天往返含税机票（超大行李额+2人预定赠一台WiFi租赁使用）</h4>
                    <p class="head-info-14 left">￥<span class="price">2999</span>起</p>
                    <p class="head-info-14 right">售出102</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2281506.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsHr7mAdzu0AAUMcR6b5PY55.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-4">
                        <span class="top-tag-left">普吉岛</span>
                        <span class="top-tag-right">特价机票</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">酷爽夏日·天津直飞泰国普吉岛6/7天往返含税机票（泰国狮航直飞+20KG行李额+可代订酒店/接送机）</h4>
                    <p class="head-info-14 left">￥<span class="price">1399</span>起</p>
                    <p class="head-info-14 right">售出76</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2243641.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsHtDmAKjm-AHjcAuUtsdg45.jpeg"
                         class="head-item-img">
                    <p class="top-tag clearfix type-1">
                        <span class="top-tag-left">东京</span>
                        <span class="top-tag-right">自由行</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">
                        优质航空·上海直飞日本东京6天自由行（花火大会+民宿浅草花灯旅馆+新宿华盛顿酒店+全日空/日航/达美航空56kg行李额+双人预定赠一台WiFi+民宿可加床垫安排第三人入住）</h4>
                    <p class="head-info-14 left">￥<span class="price">3999</span>起</p>
                    <p class="head-info-14 right">售出98</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/349601.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsjLrmAC0rIAApLWAIaWN8348.gif"
                         class="head-item-img">
                    <p class="top-tag clearfix type-4">
                        <span class="top-tag-left">三亚</span>
                        <span class="top-tag-right">特价机票</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">限时特惠·上海直飞海南三亚5天往返机票（南方航空直飞+25KG行李额+赠三亚租车优惠券10元+可代订酒店）</h4>
                    <p class="head-info-14 left">￥<span class="price">899</span>起</p>
                    <p class="head-info-14 right">售出214</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2137179.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBZ1k1CnKAAHMlAAkhbwJOt68494.gif"
                         class="head-item-img">
                    <p class="top-tag clearfix type-4">
                        <span class="top-tag-left">普吉岛</span>
                        <span class="top-tag-right">特价机票</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">潜水胜地·上海直飞泰国普吉岛6-7天往返机票（赠送普吉King
                        Power皇权免税店VS海景骑大象一日游+直飞航班+可代订酒店/接送机）</h4>
                    <p class="head-info-14 left">￥<span class="price">1999</span>起</p>
                    <p class="head-info-14 right">售出90</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2229283.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsjW--AOL93AAtJbD9_zIA949.gif"
                         class="head-item-img">
                    <p class="top-tag clearfix type-1">
                        <span class="top-tag-left">三亚</span>
                        <span class="top-tag-right">自由行</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">
                        蜜月亲子度假·上海直飞三亚5天4晚自由行（金鹏航空+25KG行李额+连住丽禾温德姆/万豪/国光豪生/康年等五星酒店+赠海棠湾免税店1日游+度假狂欢趴）</h4>
                    <p class="head-info-14 left">￥<span class="price">2099</span>起</p>
                    <p class="head-info-14 right">售出29</p>
                </div>
            </a>
            <a class="head-slider-item gl-item" href="http://www.mafengwo.cn/sales/2463226.html" target="_blank">
                <div class="head-slider-pic-box">
                    <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsgsu-ARjrlAEX1bhsWun0892.gif"
                         class="head-item-img">
                    <p class="top-tag clearfix type-1">
                        <span class="top-tag-left">毛里求斯</span>
                        <span class="top-tag-right">自由行</span>
                    </p>
                </div>
                <div class="head-slider-info-box clearfix">
                    <h4 class="head-info-title">
                        超多酒店可选·上海直飞毛里求斯8天5晚自由行（北部/西北酒店+赠接当地接机+毛里求斯电话卡+赠送高端旅游险+赠送北部经典首都之旅+个性化特价当地游套餐任你选择）</h4>
                    <p class="head-info-14 left">￥<span class="price">7950</span>起</p>
                    <p class="head-info-14 right">售出2</p>
                </div>
            </a>
        </div>
    </div>

    <div class="body-container clearfix">
        <!-- 分类 -->
        <div class="body-nav-left">
            <ul class="nav-list-box">
                <li><a class="nav-list-item active" data-cateid="0">全部产品</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="6815" data-catetype="2" data-prorectype="1">【にほん 日本】</a></li>
                <li><a class="nav-list-item" data-cateid="7715" data-catetype="2" data-prorectype="1">【热销】上海出发日本</a>
                </li>
                <li><a class="nav-list-item" data-cateid="7718" data-catetype="2" data-prorectype="1">【爆款】北京出发日本</a>
                </li>
                <li><a class="nav-list-item" data-cateid="7724" data-catetype="2" data-prorectype="1">杭州出发日本</a></li>
                <li><a class="nav-list-item" data-cateid="7727" data-catetype="2" data-prorectype="1">天津出发日本</a></li>
                <li><a class="nav-list-item" data-cateid="7730" data-catetype="2" data-prorectype="1">广州出发日本</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="16601" data-catetype="2" data-prorectype="1">【魅力海岛】</a></li>
                <li><a class="nav-list-item" data-cateid="57266" data-catetype="2" data-prorectype="1">毛里求斯</a></li>
                <li><a class="nav-list-item" data-cateid="57546" data-catetype="2" data-prorectype="1">马尔代夫</a></li>
                <li><a class="nav-list-item" data-cateid="57674" data-catetype="2" data-prorectype="1">斐济</a></li>
                <li><a class="nav-list-item" data-cateid="57246" data-catetype="2" data-prorectype="1">普吉岛</a></li>
                <li><a class="nav-list-item" data-cateid="57250" data-catetype="2" data-prorectype="1">巴厘岛</a></li>
                <li><a class="nav-list-item" data-cateid="57270" data-catetype="2" data-prorectype="1">苏梅岛</a></li>
                <li><a class="nav-list-item" data-cateid="57562" data-catetype="2" data-prorectype="1">芽庄</a></li>
                <li><a class="nav-list-item" data-cateid="57554" data-catetype="2" data-prorectype="1">沙巴</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="9608" data-catetype="2" data-prorectype="1">【三亚】</a></li>
                <li><a class="nav-list-item" data-cateid="9611" data-catetype="2" data-prorectype="1">上海-三亚</a></li>
                <li><a class="nav-list-item" data-cateid="9614" data-catetype="2" data-prorectype="1">北京-三亚</a></li>
                <li><a class="nav-list-item" data-cateid="57634" data-catetype="2" data-prorectype="1">西安-三亚</a></li>
                <li><a class="nav-list-item" data-cateid="9620" data-catetype="2" data-prorectype="1">南京-三亚</a></li>
                <li><a class="nav-list-item" data-cateid="9617" data-catetype="2" data-prorectype="1">杭州-三亚</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="57582" data-catetype="2" data-prorectype="1">【东南亚】</a></li>
                <li><a class="nav-list-item" data-cateid="57622" data-catetype="2" data-prorectype="1">越南·芽庄</a></li>
                <li><a class="nav-list-item" data-cateid="57618" data-catetype="2" data-prorectype="1">越南·岘港</a></li>
                <li><a class="nav-list-item" data-cateid="57602" data-catetype="2" data-prorectype="1">泰国·清迈</a></li>
                <li><a class="nav-list-item" data-cateid="57598" data-catetype="2" data-prorectype="1">泰国·曼谷</a></li>
                <li><a class="nav-list-item" data-cateid="57590" data-catetype="2" data-prorectype="1">新加坡</a></li>
                <li><a class="nav-list-item" data-cateid="57878" data-catetype="2" data-prorectype="1">柬埔寨-暹粒</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="57638" data-catetype="2" data-prorectype="1">【国内特价机票】</a></li>
                <li><a class="nav-list-item" data-cateid="57658" data-catetype="2" data-prorectype="1">全国-厦门</a></li>
                <li><a class="nav-list-item" data-cateid="57646" data-catetype="2" data-prorectype="1">全国-重庆</a></li>
                <li><a class="nav-list-item" data-cateid="57642" data-catetype="2" data-prorectype="1">全国-成都</a></li>
                <li><a class="nav-list-item" data-cateid="57654" data-catetype="2" data-prorectype="1">全国-广州</a></li>
                <li><a class="nav-list-item" data-cateid="57650" data-catetype="2" data-prorectype="1">全国-丽江</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="18743" data-catetype="2" data-prorectype="1">【酒店套餐】</a></li>
                <li><a class="nav-list-item" data-cateid="19226" data-catetype="2" data-prorectype="1">【热销】三亚豪华酒店</a>
                </li>
                <li><a class="nav-list-item" data-cateid="73662" data-catetype="2" data-prorectype="1">【热销】华东周边酒店</a>
                </li>
                <li><a class="nav-list-item" data-cateid="18749" data-catetype="2" data-prorectype="1">【热】广东长隆系列酒店</a>
                </li>
                <li><a class="nav-list-item" data-cateid="18752" data-catetype="2" data-prorectype="1">【热】青岛酒店</a></li>
                <li><a class="nav-list-item" data-cateid="18746" data-catetype="2" data-prorectype="1">【热】长白山万达系列酒店</a>
                </li>
                <li><a class="nav-list-item" data-cateid="18767" data-catetype="2" data-prorectype="1">【荐】厦门系列酒店</a>
                </li>
                <li><a class="nav-list-item" data-cateid="18755" data-catetype="2" data-prorectype="1">【荐】其他酒店</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="85297" data-catetype="2" data-prorectype="1">【跟团游】</a></li>
                <li><a class="nav-list-item" data-cateid="85337" data-catetype="2" data-prorectype="2">国内跟团</a></li>
                <li><a class="nav-list-item" data-cateid="85333" data-catetype="2" data-prorectype="2">东南亚风情</a></li>
                <li><a class="nav-list-item" data-cateid="85329" data-catetype="2" data-prorectype="2">岛国日本</a></li>
                <li><a class="nav-list-item" data-cateid="85325" data-catetype="2" data-prorectype="2">澳非探秘</a></li>
                <li><a class="nav-list-item" data-cateid="85321" data-catetype="2" data-prorectype="2">欧美大国</a></li>
            </ul>
            <ul class="nav-list-box">
                <li><a class="nav-list-item" data-cateid="70794" data-catetype="2" data-prorectype="1">【豪华邮轮】按目的地</a>
                </li>
                <li><a class="nav-list-item" data-cateid="70806" data-catetype="2" data-prorectype="1">深度东欧</a></li>
                <li><a class="nav-list-item" data-cateid="70802" data-catetype="2" data-prorectype="1">西沙</a></li>
                <li><a class="nav-list-item" data-cateid="70798" data-catetype="2" data-prorectype="1">日本</a></li>
            </ul>
        </div>


        <!-- for search -->
        <input name="iId" value="1258" type="hidden">
        <input name="iCateId" value="" type="hidden">
        <input name="iCateType" value="" type="hidden">
        <input name="sCity" value="" type="hidden">
        <input name="iProRecType" value="" type="hidden">

        <!-- 产品 -->
        <div class="body-content-right">
            <div class="body-nav-top clearfix">
                <h4 class="J-search-title">全部产品</h4>
                <div class="body-search-box">
                    <span class="icon icon-search"></span>
                    <input class="search-item" name="sKeys" placeholder="在当前结果中搜索" type="search">
                    <a class="search-btn">搜索</a>
                </div>
            </div>
            <div class="body-nav">
                <a href="javascript:;" data-ssort="STRATEGY" class="body-top-nav-item active">综合排序</a>
                <a href="javascript:;" data-ssort="SOLD" class="body-top-nav-item">销量优先</a>
                <a href="javascript:;" class="body-top-nav-item nav-price">价格<span class="icon icon-arrow_down"></span></a>
                <a href="javascript:;" data-ssort="NEW" class="body-top-nav-item">新品</a>
            </div>

            <div class="body-content-warp">
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2501989.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFryfqeAcTwoAJvSKioyZwI22.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">无锡灵山</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>拈花湾·无锡灵山小镇拈花客栈1晚起订（客栈特色体验绳子艺术 / 草木拓印 / 生活花艺+客栈下午茶+可加购拈花湾小镇门票）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">面朝太湖</p>
                                <p class="product-tag">背倚灵山</p>
                                <p class="product-tag">主题客栈含早餐</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">556</span>起</p>
                                <p class="info-right-pv">已售<span>109</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2510485.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFr7oFWAeDynAAW0ROu7V9049.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">大连</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>【VIP快速通行】大连发现王国度假酒店·玩发现王国主题公园（含2天无限次入园门票+含早餐+可带一名1.2米以下儿童入园+亲子娱乐度假首选）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">主题乐园</p>
                                <p class="product-tag">金石滩度假区</p>
                                <p class="product-tag">家庭亲子游</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">689</span>起</p>
                                <p class="info-right-pv">已售<span>57</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2607968.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFtERUeAMSjZAAG7iIqOc8g43.jpeg">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">沙巴</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>特价甩尾·长沙往返马来西亚沙巴5/6天含税机票（马印航空+25kg行李额+可代订酒店/接送机+限时特价机票）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">潜水胜地</p>
                                <p class="product-tag">蜜月之旅</p>
                                <p class="product-tag">正点航班</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天/6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">1050</span>起</p>
                                <p class="info-right-pv">已售<span>60</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2158273.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrrxA2AMM3JAAIYa0_nzUs44_002.jpeg">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">大阪</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>优质直飞·上海直飞日本大阪5-6天往返机票（夏日祭花火大会+南方航空/乐桃航空/吉祥航空/中国国航+2人预定赠1台WiFi使用）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">优质航空</p>
                                <p class="product-tag">超大行李额</p>
                                <p class="product-tag">自由行程</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天/6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">2199</span>起</p>
                                <p class="info-right-pv">已售<span>322</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2404037.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBs1gtOiyAX8JPAATxVgwVE8871.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">三亚</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>三亚大东海· 山海天万豪酒店1晚起订· 一线海景（含双人自助早餐+儿童乐园+步行5分钟到鹿回头景区）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">含税含服务费</p>
                                <p class="product-tag">含双早</p>
                                <p class="product-tag">赠免税店一日游</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">529</span>起</p>
                                <p class="info-right-pv">已售<span>138</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2052945.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrqp-yARLTxAAEFHXjCkgQ65_002.jpeg">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">芽庄</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>潜水胜地·上海直飞越南芽庄5-6天往返机票（赠送wifi+越捷航空直飞+27kg行李额+可代订酒店/接送机）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">一站式直达</p>
                                <p class="product-tag">限时特价</p>
                                <p class="product-tag">优质航空</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天/6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">2199</span>起</p>
                                <p class="info-right-pv">已售<span>456</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2541585.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBZ1ia83OAbMjfAAFvPbqU5k486.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">杭州</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>暑价玩一夏·杭州宋城千古情主题酒店西湖店2天1晚单人/双人/天伦之乐套餐可选（千古情贵宾席+宋城门票+杭州自驾游之选）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">含双早</p>
                                <p class="product-tag">含门票2张</p>
                                <p class="product-tag">可二次入园</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">446</span>起</p>
                                <p class="info-right-pv">已售<span>34</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2539232.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFqo0R2AXMECAALsW9KvdlI00.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">无锡灵山</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>无锡灵山·君来波罗蜜多酒店1晚·漫步拈花湾（净房 / 含双人自助早餐+自助晚餐+门票套餐可选+与你相遇梵天花海）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">含双早双晚餐</p>
                                <p class="product-tag">含门票</p>
                                <p class="product-tag">酒店泳池</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">683</span>起</p>
                                <p class="info-right-pv">已售<span>38</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2051321.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrpeeCAR8XbAA97V0TrtKM69_002.jpeg">
                            <p class="top-tag clearfix type-1">
                                <span class="top-tag-left">东京</span>
                                <span class="top-tag-right">自由行</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>花火大会预售·北京直飞日本东京6天自由行（优质日本航空+浪漫民宿花灯旅馆+双人预定赠一台WiFi）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">市区酒店</p>
                                <p class="product-tag">正班飞机</p>
                                <p class="product-tag">购物商区</p>
                                <p class="product-tag">靠涉谷站</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">4499</span>起</p>
                                <p class="info-right-pv">已售<span>220</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/347628.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsfTl6AOSkwAP1NHlah3_A63.jpeg">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">东京</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>夏日祭花火大会·北京直飞日本东京5-7天往返含税机票（全日空+日航+国航+正班直飞+2人订购赠1台WiFi+可订浅草花灯旅馆489元/间/晚）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">优质航空</p>
                                <p class="product-tag">全程WiFi</p>
                                <p class="product-tag">贴心服务</p>
                                <p class="product-tag">可订民宿浅草花灯</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天/6天/7天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">2799</span>起</p>
                                <p class="info-right-pv">已售<span>371</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2315528.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsHo-KAflauAAmrgdguKdU63.jpeg">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">冲绳</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>东瀛之美·上海直飞日本冲绳5天往返机票（万座毛风景+没关系是爱情啊拍摄地+赠全程WiFi租赁）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">优质航空</p>
                                <p class="product-tag">自由行程</p>
                                <p class="product-tag">大行李额</p>
                                <p class="product-tag">四季如春</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">1999</span>起</p>
                                <p class="info-right-pv">已售<span>53</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/428180.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFrpeeCAR8XbAA97V0TrtKM69_002.jpeg">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">东京</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>夏日祭花火大会·上海直飞日本东京5-6天往返机票（烟火大会+全日空+部分航班含56kg行李额+2人预定赠一台WiFi租赁+可订浅草花灯旅馆489元/间/晚）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">优质航空</p>
                                <p class="product-tag">限时特价</p>
                                <p class="product-tag">可订民宿浅草花灯</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天/6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">2799</span>起</p>
                                <p class="info-right-pv">已售<span>549</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/435440.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFr7ksSAUN62AAlxpbnf3X0992.gif">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">新加坡</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>暑期特惠·北京直飞新加坡6天往返含税特价机票（五星航空新航+中国国航+可代订酒店/接送机+多航班可选）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">直飞航空</p>
                                <p class="product-tag">自由行程</p>
                                <p class="product-tag">一站到达</p>
                                <p class="product-tag">省心省力</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">2599</span>起</p>
                                <p class="info-right-pv">已售<span>5925</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2544190.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFtOptKACaYqAADqryctspw22.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">唐山</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>唐山乐亭月坨岛生态旅游度假中心住宿1晚（可选闻涛阁海景别墅/望海庐海景情侣木屋/月香水谢多种住宿）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">木屋</p>
                                <p class="product-tag">看海</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">329</span>起</p>
                                <p class="info-right-pv">已售<span>27</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2529169.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsI_QOAfxN9AAFQUexo9-Y37.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">河源</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>河源·客天下水晶温泉国际旅游度假酒店1晚（双人自助早餐+双人晚餐+恐龙欢乐水上世界+冰雪乐园+无限次水晶温泉+醉蝶谷花海）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">背依青山</p>
                                <p class="product-tag">环抱温泉</p>
                                <p class="product-tag">度假胜地</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">486</span>起</p>
                                <p class="info-right-pv">已售<span>19</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2565694.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsjfnCAB-VDAAO-P2KDlVc94.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">杭州</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>清凉一夏·杭州西溪湿地·西溪宾馆2天1晚套餐（双人晚餐或双人西溪国家湿地公园门船套票多套餐可选+探访非诚勿扰取景地）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">含税含服务费</p>
                                <p class="product-tag">含双早</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">1148</span>起</p>
                                <p class="info-right-pv">已售<span>6</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2499752.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFp_psyATUdNAAKeRHeWfas18.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">三亚</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>海棠湾·网红酒店 ·三亚亚特兰蒂斯酒店·海景房（无限次游览亚特兰蒂斯水世界+失落的空间水族馆+超星级度假体验+可加购5座经济车型接/送机）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">含服务费含税</p>
                                <p class="product-tag">含早餐</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">1589</span>起</p>
                                <p class="info-right-pv">已售<span>26</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2467250.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBZ1kyWe2AcqLfAAeusdZ_urQ555.gif">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">毛里求斯</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>海豚湾追海豚·上海直飞毛里求斯8-13天往返含税机票（赠接送机服务+4G电话卡+地图+北部半日游套餐+可增订选配全岛28家酒店）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">特价甩尾</p>
                                <p class="product-tag">免签</p>
                                <p class="product-tag">高端海岛</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">8天/13天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">6699</span>起</p>
                                <p class="info-right-pv">已售<span>25</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2197226.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsfcViAfXHTABi7pHfZ0SE876_002.gif">
                            <p class="top-tag clearfix type-4">
                                <span class="top-tag-left">东京</span>
                                <span class="top-tag-right">特价机票</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>优质直飞·上海直飞日本东京5-6天往返机票（27kg行李额+双人预定送WiFi+赠日上免税店打折券+可订浅草花灯旅馆489元/间/晚）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">可加购行李额</p>
                                <p class="product-tag">限时特价机票</p>
                                <p class="product-tag">可订民宿浅草花灯</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">5天/6天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">1699</span>起</p>
                                <p class="info-right-pv">已售<span>278</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>
                <div class="product-box clearfix">

                    <a href="http://www.mafengwo.cn/sales/2540645.html" target="_blank">
                        <div class="product-pic-box">
                            <img src="%E9%80%94%E7%89%9B%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/wKgBEFsRCsaAIEC7AAgMWmhhc9A31.jpeg">
                            <p class="top-tag clearfix type-3">
                                <span class="top-tag-left">安吉</span>
                                <span class="top-tag-right">酒店套餐</span>
                            </p>
                        </div>
                        <div class="product-info-box">
                            <h5>安吉涵田度假村1晚+双人早餐+双人涵田温泉门票（赠送欢迎水果+可加购深溪峡谷漂流 / 龙王山漂流 / 浙北峡谷漂流等景区门票 ）</h5>
                            <div class="info-row tag-row">
                                <p class="product-tag">休闲度假</p>
                                <p class="product-tag">温泉</p>
                                <p class="product-tag">漂流</p>
                            </div>
                            <div class="info-row">
                                <p class="product-info-key">行程天数</p>
                                <p class="product-info-value">2天</p>
                            </div>

                            <div class="product-info-footer clearfix">
                                <p class="info-left">￥<span class="price">750</span>起</p>
                                <p class="info-right-pv">已售<span>41</span></p>
                            </div>

                            <div class="product-tag-right-box">


                            </div>
                        </div>

                    </a>
                </div>

            </div>

            <div class="blank-box" style="display:none;">
                <i></i>
                <p>暂无此类产品 再逛逛其他的～</p>
            </div>


            <input class="J-page-total" value="18" type="hidden">
            <input class="J-page-item-total" value="354" type="hidden">
            <div class="body-footer-page-box">
                <p class="page-num">共18页/354条</p>
                <ul class="page page-box" maxshowpageitem="10" pagelistcount="20" id="page">
                    <li class="pages-disable" page-data="1" page-rel="firstpage">首页</li>
                    <li class="pages-disable" page-data="0" page-rel="prepage">上一页</li>
                    <li class="pages-link current" page-data="1" page-rel="itempage">1</li>
                    <li class="pages-link" page-data="2" page-rel="itempage">2</li>
                    <li class="pages-link" page-data="3" page-rel="itempage">3</li>
                    <li class="pages-link" page-data="4" page-rel="itempage">4</li>
                    <li class="pages-link" page-data="5" page-rel="itempage">5</li>
                    <li class="pages-link" page-data="6" page-rel="itempage">6</li>
                    <li class="pages-link" page-data="7" page-rel="itempage">7</li>
                    <li class="pages-link" page-data="8" page-rel="itempage">8</li>
                    <li class="pages-link" page-data="9" page-rel="itempage">9</li>
                    <li class="pages-link" page-data="10" page-rel="itempage">10</li>
                    <li class="pages-link pages-next" page-data="2" page-rel="nextpage">下一页</li>
                    <li class="pages-link pages-next" page-data="18" page-rel="lastpage">尾页</li>
                </ul>
            </div>

        </div>
    </div>
</div>

<div class="nav-side-box">
    <div class="nav-side-item nav-side-item-me">
        <div class="nav-side-btn">
            <div class="icon icon-logo"></div>
            <p>我的自由行</p>
        </div>
        <div class="nav-side-menu">
            <ul class="nav-side-menu-item">
                <li><a href="http://www.mafengwo.cn/order_center/">我的订单</a></li>
                <li><a href="http://www.mafengwo.cn/plan/fav.php">我的收藏</a></li>
                <li><a href="http://www.mafengwo.cn/sales/coupon.php">我的优惠券</a></li>
            </ul>
            <div class="arrow"></div>
            <div class="mask"></div>
        </div>
    </div>
    <div class="nav-side-item nav-side-item-contact">
        <div class="nav-side-btn">
            <div class="icon icon-chat"></div>
            <p>联系商家</p>
        </div>
        <div class="nav-side-contact-info">
            <div class="nav-side-contact-info-warp">
                <a class="contact-btn" href="javascript:void(0);" data-japp="client" data-jappconf="webim"
                   data-webim-type="9" data-webim-otaid="1258">咨询在线客服</a>
                <p class="contact-title">工作时间</p>
                <p class="contact-p">周一至周五 9:10-22:00</p>
                <p class="contact-p">周六至周日 9:10-18:00</p>
                <div class="bottom-line"></div>
                <p class="contact-title">联系电话</p>
                <p class="contact-p">
                    4006588799转1205
                </p>

                <p class="contact-title">接听时间</p>
                <p class="contact-p">周一至周五 09:00-18:00</p>
            </div>
            <div class="arrow"></div>
            <div class="mask"></div>
        </div>
    </div>


</div>

<script type="text/javascript">
    $(function () {
        // 滚动
        var slide1 = new slider(".slider-shop");
        slide1.bind();
        var slide2 = new slider(".slider-gonglve");
        slide2.bind();

        // 选择排序
        var isLoading = false;
        var sSort = $(".body-top-nav-item.active").attr('data-sSort');
        var iCurIndex = $(".body-top-nav-item.active").index();
        $(".body-top-nav-item").on("click", function () {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");

            if (!$(this).hasClass('nav-price')) {
                sSort = $(this).attr('data-sSort');
                if (!isLoading && iCurIndex != $(this).index()) {
                    getMore(1, true);
                }
            }

            iCurIndex = $(this).index();
        });
        $(".nav-price").on("click", function () {
            $(".icon-arrow_down").toggleClass("active");

            if ($('.icon-arrow_down').hasClass('active')) {
                sSort = 'PRICE-ASC';
            } else {
                sSort = 'PRICE-DESC';
            }

            if (!isLoading) {
                getMore(1, true);
            }
        });

        // 选择分类
        $('.body-nav-left .nav-list-item').on('click', function () {
            var $this = $(this),
                $iCateIdInput = $('input[name="iCateId"]'),
                $iCateTypeInput = $('input[name="iCateType"]'),
                $sCityInput = $('input[name="sCity"]'),
                $iProRecTypeInput = $('input[name="iProRecType"]'),
                iCateId = $this.attr('data-cateid'),
                iCateType = $this.attr('data-catetype'),
                sCity = $this.attr('data-city');
            iProRecType = $this.attr('data-prorectype');

            // 标题词
            $('.J-search-title').text($this.text());

            // 选中
            $('.nav-list-box .nav-list-item').removeClass('active');
            $this.addClass('active');

            if (iCateId == 0 && !isLoading) {
                $iCateIdInput.val('');
                $sCityInput.val('');
                $('input[name="sKeys"]').val('');
                getMore(1, true);
                goListTop();

                return false;
            }

            if (iCateId) {
                $iCateIdInput.val(iCateId);
            }

            if (iCateType) {
                $iCateTypeInput.val(iCateType);
            }

            if ('undefined' != typeof sCity) {
                $sCityInput.val(sCity);
            } else {
                $sCityInput.val('');
            }

            if (iProRecType) {
                $iProRecTypeInput.val(iProRecType);
            }

            if (!isLoading) {
                getMore(1, true);
                goListTop();
            }
        });

        // 搜索
        $('.search-btn').on('click', function () {
            getMore(1, true);
        });

        // 分页
        var iPage = 1;
        var iPageSize = 20;
        var iPageTotal = $('.J-page-total').val();
        var iPageItemTotal = $('.J-page-item-total').val();


        // 加载更过商品
        function getMore(page_index, reset_page_icon) {
            page_index--;
            var iOtaId = $('input[name="iId"]').val(),
                iCateId = $('input[name="iCateId"]').val(),
                iCateType = $('input[name="iCateType"]').val(),
                sCity = $('input[name="sCity"]').val(),
                sKeys = $('input[name="sKeys"]').val();
            iProRecType = $('input[name="iProRecType"]').val();

            $.ajax({
                type: 'post',
                url: '/sales/shop/page/feed',
                dataType: 'json',
                beforeSend: function () {
                    isLoading = true;
                    $('.blank-box').hide();
                    $("#btn_load_more").show()

                },
                data: {
                    iId: iOtaId,
                    iCateId: iCateId,
                    iCateType: iCateType,
                    sCity: sCity,
                    iPage: page_index,
                    sSort: sSort,
                    sKeys: sKeys,
                    iPageSize: iPageSize,
                    iProRecType: iProRecType
                },
                success: function (res) {
                    isLoading = false;
                    bHasNext = res.has_next;

                    if ('undefined' != typeof reset_page_icon) {
                        $("#page").initPage(res.total, 1, pageCallback.cur);
                    }

                    if (res.html != '') {
                        $('.blank-box').hide();
                        $('.body-content-warp').html(res.html);
                    } else {
                        $('.body-content-warp').html('');
                        $('.blank-box').show();
                    }

                    $("#btn_load_more").hide();
                },
                error: function (res) {
                    isLoading = false;
                    $("#btn_load_more").hide();
                }
            });
        }

        // 领券
        $('.coupon-item-wrap').on('click', '.J-bindCoupon', function () {
            if (window.Env.UID != 0) {
                var $this = $(this);

                if ($this.attr('data-binded') == 1) {
                    return false;
                }

                mfwRest.post('/sales/coupon/', {action: 'bindCoupon', code: $this.data('bindcode')}, function (res) {
                    if (res.errno == 0) {
                        $this.removeClass('coupon-red coupon-yellow coupon-purple coupon-green').addClass('coupon-grey').attr('data-binded', '1');
                        $this.find('.coupon-btn').text('已领取');

                        mAlert('具体使用范围以优惠券上显示为准', '恭喜你领取成功！');

                    } else {
                        mAlert('你来晚了！<br>优惠券已经被领光了哦');
                    }

                }, 'bindCoupon', 'mobile');
            } else {
                window.location.href = "https://passport.mafengwo.cn/?return_url=" + encodeURIComponent(window.location.href);
            }
        });


        var pageCallback = {
            cur: function (curPage) {
                getMore(curPage);
                // 回到列表头部
                goListTop();
            }
        };

        function goListTop() {
            var offY_ = $(".body-nav-top").offset().top - 100;
            $("html,body").animate({scrollTop: offY_}, 200);
        }

        /**
         * Created by zxm on 2017/3/31.
         */
        $.fn.extend({
            "initPage": function (listCount, currentPage, fun) {
                var maxshowpageitem = $(this).attr("maxshowpageitem");
                if (maxshowpageitem != null && maxshowpageitem > 0 && maxshowpageitem != "") {
                    page.maxshowpageitem = maxshowpageitem;
                }
                var pagelistcount = $(this).attr("pagelistcount");
                if (pagelistcount != null && pagelistcount > 0 && pagelistcount != "") {
                    page.pagelistcount = pagelistcount;
                }

                var pages_counts = Math.ceil(listCount / pagelistcount);
                $(".body-footer-page-box p").html("共" + pages_counts + "页/" + listCount + "条");

                var pageId = $(this).attr("id");
                page.pageId = pageId;
                if (listCount < 0) {
                    listCount = 0;
                }
                if (currentPage <= 0) {
                    currentPage = 1;
                }
                page.setPageListCount(pageId, listCount, currentPage, fun, false);

            }
        });
        var page = {
            "maxshowpageitem": 5,//最多显示的页码个数
            "pagelistcount": 10,//每一页显示的内容条数
            /**
             * 初始化分页界面
             * @param listCount 列表总量
             */
            "initWithUl": function (pageId, listCount, currentPage) {

                var pageCount = 1;
                if (listCount > 0) {
                    pageCount = listCount % page.pagelistcount > 0 ? parseInt(listCount / page.pagelistcount) + 1 : parseInt(listCount / page.pagelistcount);
                    var appendStr = page.getPageListModel(pageCount, currentPage);
                    $("#" + pageId).html(appendStr).parent().show();
                } else {
                    $("#" + pageId).parent().hide();
                }
            },
            /**
             * 设置列表总量和当前页码
             * @param listCount 列表总量
             * @param currentPage 当前页码
             */
            "setPageListCount": function (pageId, listCount, currentPage, fun, toCallback) {
                listCount = parseInt(listCount);
                currentPage = parseInt(currentPage);
                page.initWithUl(pageId, listCount, currentPage);
                page.initPageEvent(pageId, listCount, fun);
                if (typeof fun == "function" && toCallback) {
                    fun(currentPage);
                }
            },
            "initPageEvent": function (pageId, listCount, fun) {
                $("#" + pageId + ">li").on("click", function () {
                    page.setPageListCount(pageId, listCount, $(this).attr("page-data"), fun, true);
                });
            },
            "getPageListModel": function (pageCount, currentPage) {
                var prePage = currentPage - 1;
                var nextPage = currentPage + 1;
                var prePageClass = "pages-link pages-pre";
                var nextPageClass = "pages-link pages-next";
                if (prePage <= 0) {
                    prePageClass = "pages-disable";
                }
                if (nextPage > pageCount) {
                    nextPageClass = "pages-disable";
                }
                var appendStr = "";
                appendStr += "<li class='" + prePageClass + "' page-data='1' page-rel='firstpage'>首页</li>";
                appendStr += "<li class='" + prePageClass + "' page-data='" + prePage + "' page-rel='prepage'>上一页</li>";
                var miniPageNumber = 1;
                if (currentPage - parseInt(page.maxshowpageitem / 2) > 0 && currentPage + parseInt(page.maxshowpageitem / 2) <= pageCount) {
                    miniPageNumber = currentPage - parseInt(page.maxshowpageitem / 2);
                } else if (currentPage - parseInt(page.maxshowpageitem / 2) > 0 && currentPage + parseInt(page.maxshowpageitem / 2) > pageCount) {
                    miniPageNumber = pageCount - page.maxshowpageitem + 1;
                    if (miniPageNumber <= 0) {
                        miniPageNumber = 1;
                    }
                }
                var showPageNum = parseInt(page.maxshowpageitem);
                if (pageCount < showPageNum) {
                    showPageNum = pageCount
                }
                for (var i = 0; i < showPageNum; i++) {
                    var pageNumber = miniPageNumber++;
                    var itemPageClass = "pages-link";
                    if (pageNumber == currentPage) {
                        itemPageClass = "pages-link current";
                    }

                    appendStr += "<li class='" + itemPageClass + "' page-data='" + pageNumber + "' page-rel='itempage'>" + pageNumber + "</li>";
                }
                appendStr += "<li class='" + nextPageClass + "' page-data='" + nextPage + "' page-rel='nextpage'>下一页</li>";
                appendStr += "<li class='" + nextPageClass + "' page-data='" + pageCount + "' page-rel='lastpage'>尾页</li>";
                return appendStr;

            }
        };

        $("#page").initPage(iPageItemTotal, iPage, pageCallback.cur);

        // 右侧浮动层
        $(window).scroll(function () {
            var scrollTop_ = $("body").scrollTop();
            var containerH_ = $(".main-container").height();
            var winH = $(window).height();
            if (scrollTop_ > containerH_ - winH - 50) {
                $(".nav-side-box").hide();
            } else {
                $(".nav-side-box").show();
            }
        });
    });

    // 滚动类
    var slider = function (cla) {
        //默认配置参数
        this.this_ = $(cla),
            this.warp = $(this.this_).find(".head-slider-warp"),
            this.objl = $(this.this_).find(".head-nav-arrow.left"),
            this.objr = $(this.this_).find(".head-nav-arrow.right"),
            this.tw = $(this.warp).width(),
            this.tmove = 0;
    };
    //原型中定义函数
    slider.prototype = {
        bind: function () {
            var this_ = this;
            $(this.objr).on("click", function () {
                if (this_.tmove < this_.tw - 1050) {
                    this_.tmove += 1000;
                    $(this_.warp).transition({x: -this_.tmove});
                } else {
                    return;
                }
            })
            $(this.objl).on("click", function () {
                if (this_.tmove > 0) {
                    this_.tmove = this_.tmove - 1000;
                    $(this_.warp).transition({x: -this_.tmove});
                } else {
                    return;
                }
            })
        }
    };

    // 收藏
    $(function () {
        $('#collect').click(function () {
            if (window.Env.UID != 0) {
                var $this = $(this);
                var iOtaId = $('input[name="iId"]').val();

                if ($this.attr('data-collect') == 1) {
                    mConfirm('确定要取消对店铺的收藏吗', function (ok) {
                        if (ok) {
                            mfwRest.post('/sales/favorite/', {
                                action: 'remove',
                                data_id: iOtaId,
                                type: 5
                            }, function (res) {
                                if (res.errno == 0 && 'undefined' != typeof res.data.key) {
                                    $this.attr('data-collect', 0);
                                    $this.removeClass('collected').text('收藏');

                                    mTinyAlert('已取消收藏', 800);
                                } else {
                                    mTinyAlert('取消收藏失败，请重试！', 800);
                                }
                            });
                        }

                    }, '取消收藏');
                } else {
                    // 添加收藏
                    mfwRest.post('/sales/favorite/', {action: 'add', data_id: iOtaId, type: 5}, function (res) {
                        if (res.errno == 0 && 'undefined' != typeof res.data.key) {
                            $this.attr('data-collect', 1);
                            $this.addClass('collected').text('已收藏');
                        } else {
                            mTinyAlert('收藏失败，请重试！', 800);
                        }
                    });

                }

            } else {
                window.location.href = "https://passport.mafengwo.cn/?return_url=" + encodeURIComponent(window.location.href);
            }
        });
    });

    // 事件统计
    $(function () {
        var platform = 'www', ota_id = $('input[name="iId"]').val();

        mfwPageEvent('sales', 'shop_page_view', {
            ota_id: ota_id,
            name: '店铺首页'
        });

        /**
         * MES sales 的pageEvent
         * 统计HTML中 data-stat-area 的点击事件
         */
        $('[data-stat-area]').click(function () {
            var areaName = $(this).attr('data-stat-area');
            var areaData = {
                ota_id: ota_id,
                platform: platform,
                shop_module_name: areaName
            };

            mfwPageEvent('sales', 'shop_index_click', areaData);
        });
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
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+M+module+PageAdmin:js+M+module+Storage:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^ZlxW^1532697023.js");
    }
</script>


</body>
</html>
