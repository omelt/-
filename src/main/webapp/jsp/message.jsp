<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 下午4:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>我的信息</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">

    <script type="text/javascript">
        window.Env = {
            "WWW_HOST": "www.mafengwo.cn",
            "IMG_HOST": "images.mafengwo.net",
            "P_HOST": "passport.mafengwo.cn",
            "P_HTTP": "https:\/\/passport.mafengwo.cn",
            "PAGELET_HTTP": "https:\/\/pagelet.mafengwo.cn",
            "JS_HOST": "js.mafengwo.net",
            "UID": 72891861,
            "CSTK": "0ae261aab83c63dfce3596c020a86add_633dd6b2ff9474be737dd852a49cd08b",
            "GOOGLE_MAP_KEY": "AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ",
            "TONGJI_HOST": "tongji.mafengwo.cn"
        };
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">

    <link href="/static/css/cropper.css" rel="stylesheet">

    <link href="/static/css/isettings.css" rel="stylesheet" type="text/css">


    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript"
            crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js"
            crossorigin="anonymous"></script>

    <style>
        .cropper-view-box,
        .cropper-face {
            border-radius: 50%;
        }
    </style>
</head>
<body>


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
                                    <div class="user-image"><img id="nav-head"
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

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="min-width:600px;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
                <div id="box" class="container" style="min-width: 400px;width: 80%">

                    <img id="image" src="" style="min-width: 400px;width: 90%">

                </div>
            </div>
            <div class="modal-footer">
                <button id="close-head" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button id="save-head" type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

<div class="wrapper clearfix">


    <div class="content" style="width: 900px">
        <div class="hd">
            <strong>我的信息</strong>
        </div>

        <div class="userinfo">

            <div id="_j_form">
                <div class="alert alert-danger"
                     style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;display:none"></div>
                <dl class="clearfix">
                    <dt></dt>
                    <dd><img id="show-head" src="${current_user.avater}" width="120" height="120" border="0"
                             onclick="fileSelect();"></dd>
                    <input type="file" name="fileToUpload" id="fileToUpload" data-toggle="modal"
                           data-target="#myModal" onchange="fileSelected(this);"
                           style="display:none;">
                </dl>
                <dl class="clearfix">
                    <dt>名号：</dt>
                    <dd><input name="name" value="${current_user.nickname}" maxlength="16" autocomplete="off"
                               data-verification-name="名号" class="verification[required,funcCall[checkNickname]]"
                               type="text"></dd>
                </dl>
                <dl class="clearfix">
                    <dt>性别：</dt>
                    <dd>
                        <label><span class="cssradio"><input name="gender" value="1" type="radio"><span></span></span>男</label>
                        <label><span class="cssradio"><input name="gender" value="0" type="radio"><span></span></span>女</label>
                        <label><span class="cssradio"><input name="gender" value="2" type="radio"><span></span></span>保密</label>
                    </dd>
                </dl>

                <dl class="clearfix">
                    <dt>电话号码：</dt>
                    <dd>
                        <input name="phone" data-verification-name="电话号码" class="" autocomplete="off" type="text"
                               value="${current_user.phone}">
                    </dd>
                </dl>
                <dl class="clearfix">
                    <dt>个人简介：</dt>
                    <dd><textarea name="intro" data-verification-name="个人简介" placeholder="例：摄影师/旅居澳洲/潜水爱好者"
                                  class="verification[maxSize[100]]" maxlength="100">${current_user.about_me}</textarea>
                    </dd>
                </dl>


                <div class="btn-sub">
                    <button id="save-button">保存</button>
                </div>
                <dl class="clearfix">
                    <dt></dt>
                    <dd><a href="/user?type=changePwd" id="set-pw-btn">修改密码</a></dd>
                </dl>
            </div>
            <script type="text/javascript">
                $(document).ready(function () {
                    var changed = {};

                    var sex = ['女', '男', '保密'];

                    $("input[name='gender']").change(function () {
                        changed['sex'] = sex[Number($(this).val())];
                    });
                    $("input[name='phone']").change(function () {
                        changed['phone'] = $(this).val()
                    });
                    $("textarea[name='intro']").change(function () {
                        changed['about_me'] = $(this).val()
                    });
                    $("input[name='name']").change(function () {
                        changed['nickname'] = $(this).val()
                    });

                    $("#save-button").click(function () {
                        if (!changed.empty) {
                            $.post('/user?type=changeInfo', {data: JSON.stringify(changed)}).done(
                                function (result) {
                                    if (result == "success") {
                                        alert("修改成功");
                                        changed = {};
                                    } else alert("修改失败")
                                }).error(function () {
                                alert('保存失败')
                            });
                        }

                    });

                    $("input[value='" + sex.indexOf('${current_user.sex}') + "']").attr("checked", "true")

                });
            </script>

        </div>

    </div>
</div>


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


<script type="text/javascript">
    $(function () {
        $('.aside a').not('.on').on('click', function (e) {
            var left, top;
            $('.aside .ripple').removeClass('animate');
            0 === $(this).children('.ripple').size() && $(this).prepend('<span class="ripple"></span>');
            var ripple = $(this).children('.ripple');
            left = e.pageX - $(this).offset().left - ripple.width() / 2,
                top = e.pageY - $(this).offset().top - ripple.height() / 2,
                ripple.css({
                    top: top,
                    left: left
                }).addClass('animate');
        });
        $('.content .alert .close').on('click', function () {
            $(this).closest('.alert').fadeOut(500, function () {
                $(this).remove();
            });
        });
    });
</script>

<script language="javascript" src="/static/js/jspluginsjquery.js" type="text/javascript"
        crossorigin="anonymous"></script>

<script type="text/javascript">
    $(function () {
        var timer = 0, citySuggestXHR = null;
        var eventName = ($.browser.msie && parseInt($.browser.version, 10) < 9) ? 'keyup' : 'input';
        var success = function (field) {
            field.closest('dl').removeClass('error');
            $(".alert-danger").html("");
            $(".alert-danger").hide();
            console.log('show succ');
            console.log(field);
        };
        var failed = function (field, message) {
            field.closest('dl').addClass('error');
            $(".alert-danger").html(message);
            $(".alert-danger").show();
            console.log('show failed');
            console.log(field);
        };
        $('#_j_form')
            .delegate('[name="city"]', eventName, function () {
                var self = $(this),
                    parentGroup = self.closest('.input-group'),
                    oldWord = self.data('city'),
                    word = $.trim(self.val()),
                    suggest = parentGroup.find('.input-suggest');

                if (oldWord != word) {
                    clearTimeout(timer);
                    citySuggestXHR && citySuggestXHR.abort();
                    parentGroup.find('input[name="citymddid"]').val('');
                    if (!word) {
                        suggest.empty().hide();
                    } else {
                        timer = setTimeout(function () {
                            citySuggestXHR = $.getJSON('/home/setting.php/citySuggest?word=' + encodeURIComponent(word), function (data) {
                                self.data('city', word);
                                suggest.empty();
                                if (data.length > 0) {
                                    for (var i in data) {
                                        $('<li><a href="#" data-mddid="' + data[i].mddid + '"><i class="place"></i><span class="mddname">' + data[i].name + '</span>' + (data[i].parent ? '(' + data[i].parent.name + ')' : '') + '</a></li>').appendTo(suggest);
                                    }
                                    suggest.show();
                                }
                            });
                        }, 200);
                    }
                }
            })
            .delegate('.input-group .input-suggest a', 'click', function (e) {
                e.preventDefault();
                var self = $(this);
                var group = self.closest('.input-group');
                group.find('input[name="city"]').val(self.find('.mddname').text());
                group.find('input[name="citymddid"]').val(self.data('mddid'));
                group.find('.input-suggest').empty().hide();
                $('#_j_form').verification('verifyField', group.find(':text'));
            })
            .verification({
                customFuncs: {
                    checkNickname: function (field) {
                        var value = $.trim(field.val());
                        var len = 0;
                        for (var i = 0; i < value.length; i++) {
                            if (value.charAt(i).match(/[^\x4e00-\x9fa5]/ig)) {
                                len += 2;
                            } else {
                                len++;
                            }
                        }
                        if (len > 16) {
                            failed(field, '名号不能长于8个汉字长度（或16个英文字符）');
                            $.verification.verifyFailed(field);
                        } else {
                            success(field);
                            $.verification.verifySuccess(field);
                        }
                    },
                    checkCity: function (field) {
                        $.get('/home/setting.php/checkCity', {
                            city: $.trim(field.val())
                        }, function (data) {
                            if (data) {
                                failed(field, '居住城市填写不正确');
                                $.verification.verifyFailed(field);
                            } else {
                                success(field);
                                $.verification.verifySuccess(field);
                            }
                        });
                    }
                },
                success: function (field) {
                    success(field);
                },
                failed: function (field, message) {
                    failed(field, message);
                }
            });

        $('[name="birthday"]', '#_j_form').datepicker({
            endDate: new Date()
        }).on('changeDate', function () {
            $('#_j_form').verification('verifyField', $(this));
            $(this).datepicker('hide');
        });
    });
</script>

<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("https://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+FrequencyVerifyControl:js+M+module+FrequencySystemVerify:js+ALogin:js+ACnzzGaLog:js+ARecruit^Z1VQ^1531130229.js");
    }
</script>

<script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="/static/js/cropper.js"></script>
<script src="/static/js/jquery-cropper.js"></script>

<script>
    function create_pick() {
        var $image = $('#image');

        $image.cropper({
            aspectRatio: 1 / 1,
            viewMode: 1,
            dragMode: "none",
            zoomOnWheel: false,
            zoomOnTouch: false,
            zoomable: false,
            crop: function (event) {

            }
        });

        // Get the Cropper.js instance after initialized
        var cropper = $image.data('cropper');
    }

    $(create_pick());


    function fileSelect() {
        document.getElementById("fileToUpload").click();
    }

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
            $("#tar").attr("src", reader.result);
            // $("#image").attr("src",reader.result);
            // create_pick()
            $('#image').cropper('reset').cropper('replace', reader.result);
        }
        reader.readAsDataURL(file);
    }

    //上传头像
    $(document).ready(function () {
        $('#save-head').click(function () {
            var cas = $('#image').cropper('getCroppedCanvas');
            var base64url = cas.toDataURL('image/jpeg');

            $.post('/user?type=upload_head', {
                data: base64url,
            }).done(function () {
                $('#show-head').attr('src', base64url);
                $('#nav-head').attr('src', base64url);
                $('#close-head').click()
            }).error(function () {
                alert('头像上传出错')
            });

        });
    })
</script>
</body>
</html>
