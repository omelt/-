<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 上午8:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class=" hasFontSmoothing-true">
<head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>添加文字 - 写游记</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <script type="text/javascript">
        window.Env = {
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "http:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "dbe86fa6f979a1e1df3b39bf82bcdc11_0831ddf0600fee16f8a79e2b2cf408da",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">


    <link href="/static/css/cssmfweditormfweditorcsspostaddpostcssjquery-ui-1.css" rel="stylesheet" type="text/css">


    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript"
            crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>
    <script async="" src="/static/js/BrowserState.js" crossorigin="anonymous"></script>
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


<div class="wrapper">
    <div class="ap-head">
        <h1>发表新话题/文章</h1>
        <dl d-data="1" class="on" >
            <dt style="padding-top: 10px">游记</dt>
        </dl>

        <div class="clearfix"></div>
    </div>
    <div class="ap-wrap">
        <div class="ap-main" style="width: 905px">
            <form id="post-form" class="forms" action="/user?type=publish_passage" method="post" enctype="multipart/form-data">
                <dl style="width: 900px;height:480px">
                    <div id="show-pic" style="background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100%;background-image: url(

                    <c:choose>
                    <c:when test="${empty post}">
                            /static/images/resource/page_bg.jpg
                    </c:when>
                    <c:otherwise>
                        ${post.picture}
                    </c:otherwise>
                    </c:choose>
                    );width: 900px;height:480px;text-align: center">
                            <div style="padding-top: 150px">
                            <center>
                                <a id="upload-pic"  role="button" style="background: url(/static/images/resource/nn_sprite_v29.png) -10px 0 no-repeat;;width: 67px;height: 67px;display: block"
                               id="_j_upload_toppic">

                                </a>
                                <p style="font-size: 24px;font-weight: bold">添加游记头图</p>
                            <span>(我们建议选择分辨率高的图片,如摄像机原图)</span>
                            </center>
                            </div>
                        <input type="file" style="display: none" id="file-field" name="headimage" onchange="fileSelected(this);">

                    </div>
                </dl>

                <br>

                <dl class="title cf">
                    <dd>

                        <span class="char-limit hide _j_char_limit">可输入<strong>48</strong>字</span>
                        <input id="title" name="title" maxlength="48" type="text" placeholder="请在这里输入标题" value="${post.title}">
                    </dd>
                </dl>

                <textarea style="display: none" id="post-body" name="postbody" form="post-form"></textarea>
                <textarea style="display: none" id="post-view" name="postview" form="post-form"></textarea>
                <style>
                    .text {
                        border: 1px solid #ccc;
                        height: 800px;
                    }
                    .text img{
                        max-width:100%;
                    }
                </style>
                <dl class="body cf">
                    <dd name="content_div" id="content_div" style="width: 905px;">
                        <div id="editor-toolbar">
                        </div>
                        <div id="editor-main" class="text">
                            ${post.content}
                        </div>
                    </dd>
                </dl>
                <script type="text/javascript" src="/tools/wangEditor-master/release/wangEditor.js"></script>
                <script type="text/javascript">
                    $(document).ready(function () {
                        var E = window.wangEditor
                        var editor = new E('#editor-toolbar', '#editor-main');
                        // 或者 var editor = new E( document.getElementById('editor') )
                        editor.customConfig.uploadImgShowBase64 = true;

                        editor.create();

                        $("#pulish-btn").click(function () {
                            $("#post-body").val(editor.txt.html());
                            $("#post-view").val(editor.txt.text().toString().substr(0,60));
                            alert($("#post-view").val());
                            $("#post-form").submit();
                        });
                    });

                </script>

                <div class="btns">
                    <div class="accept_pact">
                        <input checked="checked" type="checkbox">
                        我已阅读并同意<a href="http://www.mafengwo.cn/s/rules.html" title="《密蜂窝游记协议》"
                                  target="_blank">《马蜂窝游记协议》</a>
                    </div>
                    <input id="pulish-btn" class="btn_submit" value="发表" type="button">

                </div>
            </form>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!--PopupBox 设置目的地-->
<div id="popup-box-tag" class="hide tagpopup">
    <div class="viewer-layer"></div>
    <div class="popup-box popup-setmdd" style="margin:-215px 0 0 -285px;">
        <a class="close-btn" href="javascript:void(0);"><i></i></a>
        <div class="pop-ico">
            <i class="i3"></i>
        </div>
        <div class="pop-ctn">
            <p class="hd">发表成功！</p>
            <div class="bd">
                <p>感谢您发帖！系统检测到您的大作中提及了以下目的地</p>
                <p>请选择一个和您大作最有关联的目的地：</p>
                <p id="popup-box-tag-taglist"></p>
                <p>如果都不理想，那就为您的大作添加一个目的地： <label><input class="othertag" name="infotag" value="" type="radio"><input
                        class="mdd" type="text"></label></p>
                <p>如果都不选，您的大作就只会显示在“我的马蜂窝”</p>
            </div>
        </div>
        <div class="pop-btn">
            <input id="" class="btn-sub" value="确定" type="submit">
        </div>
    </div>
</div>
<!--PopupBox End-->
<!--PopupBox-->
<div id="popup-box-notag" class="hide tagpopup">
    <div class="viewer-layer"></div>
    <div class="popup-box popup-setmdd" style="margin:-215px 0 0 -285px;">
        <a class="close-btn" href="javascript:void(0);"><i></i></a>
        <div class="pop-ico">
            <i class="i3"></i>
        </div>
        <div class="pop-ctn">
            <p class="hd">发表成功！</p>
            <div class="bd">
                <p>感谢您发帖！马蜂窝的系统中没有您大作中提及的目的地</p>
                <p>请为马蜂窝创建一个和您文章最有关联的目的地吧： <input class="mdd" type="text"></p>
                <p>如果都不选，您的大作就只会显示在“我的马蜂窝”</p>
            </div>
        </div>
        <div class="pop-btn">
            <input id="" class="btn-sub" value="确定" type="submit">
        </div>
    </div>
</div>
<!--PopupBox End-->
<!--PopupBox-->
<div id="popup-box-posting" class="pop-loading hide" style="z-index:1000;position:fixed;">
    <i></i>
    <p>发表中</p>
</div>
<!--PopupBox End-->


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


<link href="../static/css/mfw-toolbar.css" rel="stylesheet" type="text/css">

<div class="mfw-toolbar" id="_j_mfwtoolbar" style="display: block;">
    <div class="toolbar-item-top">
        <a id="back-to-top" role="button" class="btn _j_gotop">
            <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        </a>
    </div>

</div>


<script language="javascript" type="text/javascript">

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


<script type="text/javascript">
    var can_video = true;
    var rough_id = parseInt('');
</script>

<script type="text/javascript">
    function infoadd_error(error) {
        $('#popup-box-posting').hide();
        $.alerts._overlay('hide');
        K.fire('resetsubmit');
        mAlert(error);
    }

    function infoadd_showtag(showtag, taghtml, url, iid, feedid) {
        $('#popup-box-posting').hide();
        $.alerts._overlay('hide');
        if (showtag) {
            if (taghtml.length) {
                $('#popup-box-tag').data('url', url);
                $('#popup-box-tag').data('iid', iid);
                $('#popup-box-tag').data('feedid', feedid);
                $('#popup-box-tag-taglist').html(taghtml);
                $('#popup-box-tag').show();
            } else {
                $('#popup-box-notag').data('url', url);
                $('#popup-box-notag').data('iid', iid);
                $('#popup-box-notag').data('feedid', feedid);
                $('#popup-box-notag').show();
            }
        } else {
            window.location.href = url;
        }
    }

    $(document).ready(function () {
        function settag(iid, tags, feedid, url) {
            $.post('/ginfo/create.php/tag', {'iid': iid, 'tags': tags, 'feedid': feedid}, function (data, status) {
                if (url.length) {
                    window.location.href = url;
                }
            }, 'json');
        }

        $('body').delegate('.tagpopup .close-btn', 'click', function (e) {
            var url = $(this).closest('.tagpopup').data('url');
            if (url.length) {
                window.location.href = url;
            }
        });
        $('body').delegate('#popup-box-tag .othertag', 'click', function (e) {
            $('#popup-box-tag .mdd').focus();
        });
        $('body').delegate('#popup-box-tag .mdd', 'focus', function (e) {
            $('#popup-box-tag .othertag').attr('checked', true);
        });
        $('body').delegate('.tagpopup .btn-sub', 'click', function (e) {
            var popup = $(this).closest('.tagpopup');
            var radios = popup.find('[type="radio"]');
            var tag = '';
            for (var i = 0; i < radios.length; ++i) {
                if (radios.eq(i).attr('checked')) {
                    tag = radios.eq(i).val();
                    break;
                }
            }
            if (!tag.length) {
                tag = popup.find('.mdd').val();
            }
            if (!tag.length) {
                alert('请选择关联的目的地');
            } else {
                var iid = popup.data('iid');
                var feedid = popup.data('feedid');
                var url = popup.data('url');
                settag(iid, tag, feedid, url);
            }
        });

        $("#upload-pic").click(function () {
            $("#file-field").click();
        });
    });
    function fileSelected(temp) {

        // 文件选择后触发次函数
        var file = temp.files[0];
        var reader = new FileReader();
        // show表示<div id='show'></div>，用来展示图片预览的
        if (!/image\/\w+/.test(file.type)) {
            alert("请确保文件为图像类型");
            return false;
        }
        // onload是异步操作
        reader.onload = function () {
            $("#show-pic").css("background-image","url('"+reader.result+"')");
        };
        reader.readAsDataURL(file);
    }
</script>
<script language="javascript"
        src="/static/js/jscommonjquery.js"
        type="text/javascript" crossorigin="anonymous"></script>


<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+M+module+PageAdmin:js+M+module+Storage:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+ScrollObserver:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^ZlxW^1531130229.js");
    }
</script>


</body>
</html>