<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 下午8:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class=" hasFontSmoothing-true"><head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>自助联盟 - 蜜蜂窝自由行</title>

    <meta name="description" content="蜜蜂窝特价,专属蜂蜂的旅行低价荟萃,汇集旅游产品
    低价精品,一天一款,每天不断,折扣经济,实惠旅游,更多特价旅游信息就上蜜蜂窝,蜜蜂窝特价,秒杀蜂抢进行中...">
    <meta name="Keywords" content="蜜蜂窝特价,秒杀特价">

    <script type="text/javascript">
        window.Env = {"middleNavHide":true,"WWW_HOST":"www.mafengwo.cn","IMG_HOST":"images.mafengwo.net","P_HOST":"passport.mafengwo.cn","P_HTTP":"https:\/\/passport.mafengwo.cn","PAGELET_HTTP":"http:\/\/pagelet.mafengwo.cn","JS_HOST":"js.mafengwo.net","UID":72891861,"CSTK":"e40992dca4cf1685b0274379b6d8a6ec_86fd70190e17aa12f461d4a646c8852e","GOOGLE_MAP_KEY":"AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ","TONGJI_HOST":"tongji.mafengwo.cn"};
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">



    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript" crossorigin="anonymous"></script>
    <script type="text/javascript">
        var __mfw_uid = parseInt('72891861');
    </script>
    <script language="javascript" src="/static/js/jscommonjquery.js" type="text/javascript" crossorigin="anonymous"></script>
    <link href="/static/css/csssalesmerchant-entrymerchant-entrycsssalesalliance_v3csspl.css" rel="stylesheet" type="text/css">
    <script language="javascript" src="/static/js/jssalesotaalliance_toolbarjspluginsjquery.js" type="text/javascript" crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js" crossorigin="anonymous"></script><script async="" src="%E8%87%AA%E5%8A%A9%E8%81%94%E7%9B%9F%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D%E8%87%AA%E7%94%B1%E8%A1%8C_files/BrowserState.js" crossorigin="anonymous"></script></head>
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


<div class="container">
    <div class="wrapper">
        <h2>欢迎加入蜜蜂窝全球旅行商城：</h2>

        <ul class="form">
            <form action="/saler?type=resgister" method="post" enctype="multipart/form-data" id="message-form">
            <p class="section-head">公司基础信息</p>
            <li class="clearfix">
                <span class="label"><span style="color:red">*</span>公司全称：</span>

                <input class="inp-txt inp-w1" id="name" maxlength="100" name="name" placeholder="" type="text">
                <span class="tip tip-newline J-mainland-feature">(请填写您用于申请入驻蜜蜂窝的公司全称，请注意，该公司全称需与您的营业执照上公司注册名称完全一致，名称中如有“（）”请用中文格式填写)</span>
                <span class="tip tip-newline J-taiwan-feature hide">(请填写您用于申请入驻蜜蜂窝的公司全称（英文），请注意，该公司全称需与您的商业登记证上公司注册名称完全一致)</span>
                <span class="tip tip-newline J-gangao-feature J-other-feature hide">(请填写您用于申请入驻蜜蜂窝的公司全称（英文），请注意，该公司全称需与您的商业登记证上公司注册名称完全一致)</span>
            </li>

            <li class="clearfix">
                <span class="label"><span style="color:red">*</span>备注</span>

                <input class="inp-txt inp-w1" maxlength="50" id="translate_name" name="translate_name" placeholder="" type="text">
                <span class="tip tip-newline">(您可以增加您的公司备注（中文），此备注名称仅作后台记录使用，不会对外公示)</span>
            </li>
            <li class="clearfix">
                <span class="label"><span style="color:red">*</span>您的蜜蜂窝店铺名称：</span>
                <input class="inp-txt inp-w1" id="short_name" name="short_name" placeholder="" type="text">
                <span class="tip tip-newline">(请为您的蜜蜂窝店铺命名，最多不超过12个字符（即6个汉字），<a target="_blank" href="http://www.mafengwo.cn/sales/alliance.php?action=name-conventions">点此查看命名规范</a>)</span>
            </li>
            <li class="clearfix">
                <span class="label"><span style="color:red">*</span>公司有效电话：</span>
                <input class="inp-txt inp-w2" id="agentTelAreaNO" value="0086" name="agentTelAreaNO" placeholder="国际区号" type="text">
                <input class="inp-txt inp-w3" id="tel" name="tel" placeholder="座机号码" type="text">
                <span class="tip tip-newline">(请填写您公司的有效座机电话；请在国际区号前加上00，在座机号码前加上0，例如中国大陆的座机电话应依次填写为0086和01088888888；座机号码如带分机号的，请填写01088888888转1234)</span>
            </li>
            <li class="clearfix item" data-type="yyzz" data-required="true">
                <span class="label"><span style="color:red">*</span>营业执照: </span>
                <span class="s-upload" style="position: relative;"><a href="javascript:;" id="pickfiles-yyzz" style="position: relative; z-index: 1;">上传文件</a>&nbsp;清晰彩色扫描件(不超过5M)<div id="html5_1cjb859b53i7ajgbrcrpj1neg4_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 0px; left: 0px; width: 48px; height: 14px; overflow: hidden; z-index: 0;">
                    <input id="mes-file" name="message" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept="" type="file" onchange="selcetPic(this)"></div></span>
                <a id="uploadfiles-yyzz" href="javascript:;" style="display:none">开始上传</a>
                <span id="preview-yyzz">
                                                </span>
                <input name="yyzz" id="yyzz" value="" type="hidden">
                <span class="tip tip-newline">(请在您的营业执照（正本或副本）的复印件上加盖企业公章后，正向扫描上传，请确保扫描上传图片清晰无任何遮挡。<a href="/static/images/resource/alliance.png" target="_blank">点此查看标准样式</a>)</span>
                <br>
                <img id="view-pic" src="" style="width: 100%">
            </li>
            </form>
        </ul>
        <script>
            function selcetPic(temp) {
                // 文件选择后触发次函数
                var file = temp.files[0];
                var reader = new FileReader();
                // show表示<div id='show'></div>，用来展示图片预览的
                if (!/image\/\w+/.test(file.type)) {
                    alert("请确保文件为图像类型");
                    return false;
                }
                reader.onload = function () {
                    $("#view-pic").attr("src", reader.result);
                };

                reader.readAsDataURL(file);
            }
            $(document).ready(function () {

                $('#pickfiles-yyzz').click(function () {
                    $('#mes-file').click();
                });

            });
        </script>
        <hr>


        <div class="agreement form">
            <p class="section-head">蜜蜂窝平台合作协议</p>
            <div class="row">
                <a target="_blank" href="http://www.mafengwo.cn/sales/alliance.php?action=2018-renewal-agreement">点击查看《蜜蜂窝平台服务合作协议2018年度》</a>
            </div>

            <div class="row text-center" style="text-align: center;">
                <label style="padding-left: 0;">
                    <span><input id="agree" name="agree" value="1" type="checkbox"></span>
                    <span class="lbl">我已阅读并同意遵守</span>
                </label>
            </div>
        </div>

        <div class="action">
            <input name="act" value="step2record" type="hidden">
            <input id="have_corporate_account" name="have_corporate_account" value="1" type="hidden">
            <a href="javascript:;" id="form-submit">提交审核</a>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
       $('#form-submit').click(function () {
           $('#message-form').submit();
       }); 
    });
</script>
<style>

    .side-service{position:fixed;bottom:180px;right:50%;margin-right: -633px;width:120px;font-family: '微软雅黑';}
    .side-service .s-chat{display:block;padding:5px;background-color:#ffbc39;text-align:center;color:#fff;width: 130px}
    .side-service .s-chat strong{margin-top:7px;display:block;height:24px;line-height:24px;background-color:#ffa900;}
    .side-service .tel {margin-top: 5px;}
    .side-service .btn {
        display: inline-block;
        margin-left: 5px;
        width: 84px;
        height: 20px;
        background: url(https://css.mafengwo.net/images/sales/detail-v4-sprites11.png) no-repeat -80px -190px;
        color: #fff;
        font-size: 12px;
        text-indent: 28px;
        line-height: 22px;
        overflow: hidden;
        vertical-align: -3px;
    }
    .webim-dialog-min{
        display:none;
    }
    .consult {
        padding: 0;
        background-color: inherit;
        box-shadow: none;
        margin-left: 502px;
        top: auto;
        bottom: 143px;
    }
    .consult .btn-online{
        width: 66px;
        height: 194px;
    }

</style>
<div class="consult" style="">
    <a href="javascript:;" class="btn-online" data-japp="client" data-jappconf="webim" data-webim-type="35"></a>
</div>
<!--检查用户是否绑定了手机号,邮箱 -->
<input id="J-isNeedBind" value="0" type="hidden">

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
    $(document).ready(function(){
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



</body></html>
