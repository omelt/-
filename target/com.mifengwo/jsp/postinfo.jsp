<%@ page import="java.util.Date" %><%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-26
  Time: 上午9:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html><head>
    <script type="text/javascript" async="" charset="utf-8" src="/static/js/c.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <script type="text/javascript">
        window.Env = {"mddid":10182,"curr_page":1,"music_url":null,"author_uid":"10569551","author_name":"\u8d29\u6696","logo_120":"http:\/\/p3-q.mafengwo.net\/s10\/M00\/8F\/51\/wKgBZ1iMr-uAIr2rAC4tBmSmnYw44.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90","is_new_note":true,"iid":9680697,"new_iid":"283451043","showToolbarQrcode":true,"has_more":true,"pv_workkey":"5b568076-cdea-c250-b6e0-9733f59b2bff-5b59257773053-9680697","pv_worktask":"68783730,c394,94eb,444e,d51e,ad3b,7c70,7f84","WWW_HOST":"www.mafengwo.cn","IMG_HOST":"images.mafengwo.net","P_HOST":"passport.mafengwo.cn","P_HTTP":"https:\/\/passport.mafengwo.cn","PAGELET_HTTP":"http:\/\/pagelet.mafengwo.cn","JS_HOST":"js.mafengwo.net","UID":72891861,"CSTK":"f4ce619a733790f2360105fd667ec8d1_527288e304e902087b8e9f801b8ef737","GOOGLE_MAP_KEY":"AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ","TONGJI_HOST":"tongji.mafengwo.cn"};
    </script>

    <link href="/static/css/cssbasecssjquery.css" rel="stylesheet" type="text/css">

    <link href="/static/css/cssjquery-ui-1.css" rel="stylesheet" type="text/css">

    <script language="javascript" src="/static/js/jsjquery-1.js" type="text/javascript" crossorigin="anonymous"></script>

    <script async="" src="/static/js/jsDropdownjspageletcommonpageHeadUserInfoWWWNormaljsjquery.js" crossorigin="anonymous"></script><style type="text/css">._j_fix_block_fix_1{position:fixed;top:70px;bottom:0px}</style><style type="text/css">._j_fix_block_abs_2{position:absolute;bottom:0px;height:833px}</style><script async="" src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/hls.js" crossorigin="anonymous"></script><script async="" src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/jsjquery.js" crossorigin="anonymous"></script><link rel="stylesheet" href="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/smart_guide_u120.css"><script async="" src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/jsjquery_002.js" crossorigin="anonymous"></script></head>
<body style="position: relative;">

<div id="header" xmlns="http://www.w3.org/1999/html">
    <div class="mfw-header">
        <div class="header-wrap clearfix">
            <div class="head-logo"><a class="mfw-logo" title="马蜂窝自由行" href=""
                                      style="background-image: url(/static/images/resource/logo.png);text-decoration:none">
                <span style="margin-left: 46px;font-size:24px;color:grey;">蜜蜂窝</span></a></div>
            <ul class="head-nav" data-cs-t="headnav" id="_j_head_nav">
                <li class="head-nav-index head-nav-active" data-cs-p="index"><a href="/jsp/index.jsp">首页</a>
                </li>
                <li class="head-nav-place" data-cs-p="mdd"><a href="" title="目的地">目的地</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="" title="旅行游记">旅行游记</a>
                </li>
                <li class="head-nav-gonglve" data-cs-p="gonglve"><a href="" title="旅行商城">旅行商城</a>
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
                                   title="${requestScope.passage.user.nickname}的窝"
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
                                <li><a href="javascript:" target="_blank" title="我的问答" rel="nofollow" data-cs-p="wenda"><i
                                        class="icon-wenda"></i>我的评论</a></li>
                                <li><a href="javascript:" title="我的路线" target="_blank" rel="nofollow" data-cs-p="route"><i
                                        class="icon-route"></i>我的路线</a></li>
                                <li><a href="/jsp/myload.jsp" title="我的订单" target="_blank" rel="nofollow" data-cs-p="order"><i
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


<div class="main">
    <div class="set_index" id="_j_cover_box" style="height: 635.333px;">
        <div class="set_bg _j_load_cover" style="z-index: 1; background-image: url(${passage.picture}); opacity: 1;">
            <img src="${passage.picture}">
        </div>

        <div class="fully_loading" style="display: none;">
            <p vtip="头图加载中...">头图加载中...</p>
            <img src="${passage.picture}" alt="loading">
        </div>

        <div class="_j_titlebg">
            <div class="title_bg"></div>
            <div class="view_info" data-length="10">
                <div class="vi_con">
                    <h1 data-length="10" class="headtext lh80" style="white-space: nowrap; overflow-wrap: normal;">
                        <span>${passage.title}</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <script>$('#_j_cover_box').height($(window).width()/3);</script>


    <div class="view_title clearfix">
        <div id="pagelet-block-cbd519165d088407e708201e17ea1afa" class="pagelet-block" data-api=":note:pagelet:headOperateApi" data-params="{&quot;iid&quot;:&quot;9680697&quot;}" data-async="1" data-controller="/js/note/ControllerHead"><div class="vt_center">

            <div class="person" data-cs-t="ginfo_person_operate">
                <a href="/user?type=userInfo&nickname=${passage.user.nickname}" target="_blank" class="per_pic"><img src="${passage.user.avater}" alt="" width="120" height="120"><H></H></a>
               <a target="_blank" class="i-fengshou><img src="${passage.user.avater}"></a>
                <strong><a href="/user?type=userInfo&nickname=${passage.user.nickname}" target="_blank" class="per_name" >${requestScope.passage.user.nickname}</a></strong>
              <div class="vc_time">
                    <span class="time"><%=new Date()%></span>
                </div>
            </div>

            <div class="bar_share _j_share_father _j_top_share_group">
                <div class="bs_share">
                    <a href="javascript:void(0);" rel="nofollow" title="分享" class="bs_btn"><i></i><span>172</span><strong>分享</strong></a>
                    <div class="bs_pop clearfix" style="display: none;">
                        <a title="分享到新浪微博" rel="nofollow" role="button" class="sina" data-japp="sns_share" data-jappfedata="" data-key="wb" data-title="精彩游记---《宝贝，妈妈带你去印度》" data-content="#一场未知的旅行#[哈哈]我发现了一篇关于【印度】的#马蜂窝游记#----《宝贝，妈妈带你去印度》，5616人【喜欢】。" data-pic="http://p2-q.mafengwo.net/s11/M00/98/BF/wKgBEFs0Ta2AMEADAAmHAgUx4qs31.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/64/2E/wKgBEFtT5qKALgQrAAmOqqmBR7486.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://p4-q.mafengwo.net/s11/M00/64/3E/wKgBEFtT5r6AAjBBAAxb3R4S6Xo62.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/7A/03/wKgBEFsrVOiABODZAAv3OWAe5sU18.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" data-url="http://m.mafengwo.cn/i/9680697.html"></a>
                        <a title="分享到QQ空间" rel="nofollow" role="button" class="zone" data-japp="sns_share" data-jappfedata="" data-key="qz" data-title="精彩游记---《宝贝，妈妈带你去印度》" data-content="5616人【喜欢】，" data-pic="http://p2-q.mafengwo.net/s11/M00/98/BF/wKgBEFs0Ta2AMEADAAmHAgUx4qs31.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/64/2E/wKgBEFtT5qKALgQrAAmOqqmBR7486.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://p4-q.mafengwo.net/s11/M00/64/3E/wKgBEFtT5r6AAjBBAAxb3R4S6Xo62.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/7A/03/wKgBEFsrVOiABODZAAv3OWAe5sU18.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" data-url="http://m.mafengwo.cn/i/9680697.html"></a>
                        <a title="分享到微信" rel="nofollow" role="button" class="weixin" data-japp="weixin_dialog_share" data-jappfedata="" data-wx_qr="http://www.mafengwo.cn/qrcode.php?text=http%3A%2F%2Fm.mafengwo.cn%2Fi%2F9680697.html&amp;size=150&amp;eclevel=H&amp;logo=&amp;__stk__=f4ce619a733790f2360105fd667ec8d1_527288e304e902087b8e9f801b8ef737" data-detail="9680697"></a>
                    </div>
                </div>

            </div>
            <div class="_j_music_father">
                <div class=" music_botton">
                    <div class="hd_audio" data-music="http://mp3file1.mafengwo.net/201807270935/df3ccfa9e58908d9be33d3713c8a6d68/s5/M00/EA/5C/wKgB3FCjljSAPWC9AEXD_prQvIE523.mp3" id="jp_jplayer_0" style="width: 0px; height: 0px;"><img id="jp_poster_0" style="width: 0px; height: 0px; display: none;"><audio id="jp_audio_0" preload="metadata" src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgB3FCjljSAPWC9AEXD_prQvIE523.mp3"></audio></div>
                    <a href="javascript:void(0);" rel="nofollow" title="播放" class="control _j_m_control play">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <img src="${passage.user.avater}" alt="">
                    </a>
                </div>

            </div>

        </div>
        </div>
    </div>
    <div class="view clearfix" style="position:relative;">
        <div class="view_con">

            <div class="activity_style_notes aNotice aNoticeM hide">
                <i class="asn_ico"></i>
                <strong class="noticeDes"></strong>
                <a href="" title="去看看" class="noticeUrl" target="_blank">去看看&gt;</a>
                <a href="javascript:;" class="close noticeClose" title="不再显示">不再显示</a>
            </div>
            <div class="travel_directory _j_exscheduleinfo">
                <div class="tarvel_dir_list clearfix">
                    <ul>
                        <li class="time">出发时间<span>/</span>2017-10-12<i></i></li>
                        <li class="day">出行天数<span>/</span>60 天</li>
                        <li class="people">人物<span>/</span>...</li>
                    </ul>
                </div>
            </div>
            <div class="vc_article">
                <div class="va_con _j_master_content" data-cs-t="ginfo_kw_hotel">
                    <div class="block-loading loading_backward"></div>
                    <div class="_j_content_box">
                        <p class="_j_note_content _j_seqitem" data-seq="287619076">
                            &nbsp;&nbsp;&nbsp;&nbsp;${requestScope.passage.content}
                        </p>
                    </div>
                </div>
            </div>
            <a name="replylist"></a>

            <div id="note-reply-bottomReplyApi" data-api=":note:pagelet:bottomReplyApi" data-controller="/js/note/ControllerReply" data-params="{&quot;iid&quot;:9680697,&quot;page&quot;:1}"></div>
        </div>
        <div class="view_side">
            <div class="relations _j_stas_content">

                <div id="pagelet-block-3ad1e1040b8fee458657d4d7386837ff" class="pagelet-block" data-api=":note:pagelet:rightMddApi" data-params="{&quot;iid&quot;:&quot;9680697&quot;}" data-async="1" data-controller="">    <div class="relation_mdd">相关目的地：
                </div>
                    <div class="its_others">
                        <div class="mdd_info">
                            <!--_j_mdd_sta为目的地点击统计，修改注意-->
                            <a href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10182.html" title="印度" class="_j_mdd_stas" target="_blank">
                                <img src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgBs1ZAZWeAcsIOAARB-hfz4iY86.jpeg" alt="印度" width="240px">
                                <i></i>
                                <strong>印度</strong>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="pagelet-block-321c6a7a300f7146290ef406f5ea71de" class="pagelet-block" data-api=":note:pagelet:focusCommemorateApi" data-params="{&quot;iid&quot;:&quot;9680697&quot;,&quot;mddid&quot;:10182}" data-async="1" data-controller="">    <div class="article_index">
                    <dl>
                        <dt>
                            <img src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgBEFtR_vyALehfAAQMu84anLs16.jpeg" alt="2018-07"><i class="ai_ico"></i>
                            <div class="ai_date">
                                <span><i class="t-fs"></i></span>
                                <strong>07/23</strong>
                            </div>
                        </dt>
                        <dd>2018年7月23日 蜂首纪念</dd>
                    </dl>
                </div>
                </div>
                <div id="pagelet-block-fbd399a0b1ddf06696252906ba308fd4" class="pagelet-block" data-api=":note:pagelet:topCommemorateApi" data-params="{&quot;iid&quot;:&quot;9680697&quot;,&quot;mddid&quot;:10182,&quot;mdd_name&quot;:&quot;\u5370\u5ea6&quot;}" data-async="1" data-controller=""></div>
            </div>
            <div class="side_sticky _j_sticky_block">

                <div class="relation_mdd opacity_on special_mdd" id="_j_sticky_relmdd">相关目的地：<a href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10182.html" target="_blank" title="印度" class="_j_mdd_stas">印度</a><a href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10182.html" target="_blank" title="印度" class="_j_mdd_stas special_mdd_ico"></a></div>

                <div id="pagelet-block-230310bb0f1de63cde54fa3b6aff4716" class="pagelet-block" data-api=":note:pagelet:relateNoteApi" data-params="{&quot;iid&quot;:&quot;9680697&quot;,&quot;mddid&quot;:10182}" data-async="1" data-controller="/js/note/ControllerRelate">    <div class="mainmdd_rel_notes _j_topblock" id="_j_mainmdd_rel_gls">
                    <div class="notes_gonglve">
                        <div class="side_title">相关攻略</div>
                        <div class="gonglve_slide gs1" id="_j_gl_slide_container">
                            <ul class="gs_content" style="left:0px">
                                <li>
                                    <a href="http://www.mafengwo.cn/gonglve/ziyouxing/124154.html?cid=1010608" target="_blank" class="_j_mddrel_gl_item" data-id="124154" title="最强火车攻略，玩印度都能溜到飞起"><img src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgBEFs-SUiAb6ZVABUqbkX8stQ49.jpeg"><div class="bg"></div><span><i></i>11381</span><h3>最强火车攻略，玩印度都能溜到飞起</h3></a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/gonglve/ziyouxing/88362.html?cid=1010608" target="_blank" class="_j_mddrel_gl_item" data-id="88362" title="探索印度教最最神圣的城市瓦拉纳西前你必须知道这些事"><img src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgBEFrj2HuAAHsmAAVqee0WPWA56.jpeg"><div class="bg"></div><span><i></i>14327</span><h3>探索印度教最最神圣的城市瓦拉纳西前你必须知道这些事</h3></a>
                                </li>
                                <li>
                                    <a href="http://www.mafengwo.cn/gonglve/ziyouxing/69810.html?cid=1010608" target="_blank" class="_j_mddrel_gl_item" data-id="69810" title="毒！西藏以西：从拉达克到印度喜马拉雅"><img src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/wKgBEFqvMamAY7n4AAMaMpHrvd004.jpeg"><div class="bg"></div><span><i></i>6502</span><h3>毒！西藏以西：从拉达克到印度喜马拉雅</h3></a>
                                </li>
                            </ul>
                            <ul id="slider-bar" class="gs_nav gs_nav3">
                                <li class="gs_nav_item1 _j_gl_item_switch on" data-index="0"></li>
                                <li class="gs_nav_item2  _j_gl_item_switch" data-index="1"></li>
                                <li class="gs_nav_item3  _j_gl_item_switch" data-index="2"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div class="float-bar hide">
        <div class="content">
            <div class="bar-main" data-cs-t="ginfo_nav">
                <div class="bread-nav" data-cs-t="schedule">
                    <a data-cs-p="index" href="http://www.mafengwo.cn/" class="circle_bar _support_canvas" title="首页">
                        <i id="_js_circle_forLowBrowser" class="circle_per0"></i>
                        <canvas id="canvas_circle1" width="36" height="36"></canvas>
                        <canvas id="canvas_circle2" width="36" height="36"></canvas>
                    </a>
                    <div class="bread-con">
                        <a data-cs-p="mdd" href="http://www.mafengwo.cn/travel-scenic-spot/mafengwo/10182.html">印度旅游攻略</a>&nbsp;/&nbsp;
                        <a href="http://www.mafengwo.cn/i/9680697.html">宝贝，妈妈带你去印度</a>
                    </div>
                </div>
                <div class="activity_style_notes aNotice aNoticeH hide">
                    <i class="asn_ico"></i>
                    <strong class="noticeDes"></strong>
                    <a href="" title="去看看" class="noticeUrl" target="_blank">去看看&gt;</a>
                    <a href="javascript:;" class="close noticeClose" title="不再显示">不再显示</a>
                </div>
            </div>

            <div class="bar_share _j_float_right">
                <div class="bs_share">
                    <a href="javascript:void(0);" rel="nofollow" title="分享" class="bs_btn"><i></i><span>172</span><strong>分享</strong></a>
                    <div class="bs_pop clearfix" style="display: none;">
                        <a title="分享到新浪微博" rel="nofollow" role="button" class="sina" data-japp="sns_share" data-jappfedata="" data-key="wb" data-title="精彩游记---《宝贝，妈妈带你去印度》" data-content="#一场未知的旅行#[哈哈]我发现了一篇关于【印度】的#马蜂窝游记#----《宝贝，妈妈带你去印度》，5616人【喜欢】。" data-pic="http://p2-q.mafengwo.net/s11/M00/98/BF/wKgBEFs0Ta2AMEADAAmHAgUx4qs31.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/64/2E/wKgBEFtT5qKALgQrAAmOqqmBR7486.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://p4-q.mafengwo.net/s11/M00/64/3E/wKgBEFtT5r6AAjBBAAxb3R4S6Xo62.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/7A/03/wKgBEFsrVOiABODZAAv3OWAe5sU18.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" data-url="http://m.mafengwo.cn/i/9680697.html"></a>
                        <a title="分享到QQ空间" rel="nofollow" role="button" class="zone" data-japp="sns_share" data-jappfedata="" data-key="qz" data-title="精彩游记---《宝贝，妈妈带你去印度》" data-content="5616人【喜欢】，" data-pic="http://p2-q.mafengwo.net/s11/M00/98/BF/wKgBEFs0Ta2AMEADAAmHAgUx4qs31.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/64/2E/wKgBEFtT5qKALgQrAAmOqqmBR7486.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://p4-q.mafengwo.net/s11/M00/64/3E/wKgBEFtT5r6AAjBBAAxb3R4S6Xo62.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90|http://n1-q.mafengwo.net/s11/M00/7A/03/wKgBEFsrVOiABODZAAv3OWAe5sU18.jpeg?imageView2%2F2%2Fw%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90" data-url="http://m.mafengwo.cn/i/9680697.html"></a>
                        <a title="分享到微信" rel="nofollow" role="button" class="weixin" data-japp="weixin_dialog_share" data-jappfedata="" data-wx_qr="http://www.mafengwo.cn/qrcode.php?text=http%3A%2F%2Fm.mafengwo.cn%2Fi%2F9680697.html&amp;size=150&amp;eclevel=H&amp;logo=&amp;__stk__=f4ce619a733790f2360105fd667ec8d1_527288e304e902087b8e9f801b8ef737" data-detail="9680697"></a>
                    </div>
                </div><div class="bs_collect ">
                <a href="javascript:void(0);" rel="nofollow" title="收藏" class="bs_btn _j_do_fav" data-ctime="2018-07-01 20:44:35"><i></i><span>3375</span><strong>收藏</strong></a>
            </div><div class="quick_reply">
                <a href="javascript:void(0);" title="快速回复" class="bs_btn _j_quick_reply">
                    <i></i>
                    <span>827</span>
                    <strong>回复</strong>
                </a>

            </div><div class="music_botton quick_music">

                <a href="javascript:void(0);" rel="nofollow" title="播放" class="control _j_m_control play">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <img src="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/music.gif" alt="">
                </a>
            </div>
                <div class="post-up"><a role="button" data-japp="articleding" rel="nofollow" data-iid="9680697" data-vote="5616" class="up_act " title="顶">顶</a><div class="num _j_up_num topvote9680697">5616</div></div>
            </div>
            <div class="clear"></div>

            <div class="quick_reply_box _j_qr_box hide" style="display: none;">
                <div class="vc_reply">
                    <div class="reply_con _j_article_mode _j_editor" id="_j_editor_quick" data-flag="0" data-objid="0" data-link="" data-ajax="1" data-quick="1" data-quote="">
                        <dl>
                            <dt>
                                <!--已选择的举牌-->
                                <i class="show-selected-give-sign" id="_js_quickSelectedGiveSign">
                                    <!--显示选择的牌子-->
                                    <!--<i class="selected-give-sign"></i>-->
                                    <span class="close-selected-give-sign" id="_js_quickDeleteShowGiveSign"></span>
                                </i>
                                <div class="art_title reply_choice">
                                    <a href="javascript:void(0);" class="expression _j_show_expression" title="选择表情"></a>
                                    <a href="javascript:void(0);" class="at _j_show_at" title="@他/她"></a>
                                    <a href="javascript:void(0);" class="give_sign_btn _quick_give_sign_btn" style="display: none;" title="举牌"></a>

                                    <div class="clear"></div>
                                    <div class="art_pop hide">
                                        <div class="art_pop_title"></div>
                                        <a href="#" class="exp_close">×</a>
                                        <i class="art_arrow"></i>
                                    </div>

                                    <div class="art_pop _j_face_pop hide">
                                        <div class="art_pop_box art_face">
                                            <ul class="clearfix">

                                            </ul>
                                        </div>
                                    </div>

                                    <div class="art_pop mark_tags _j_tags_pop _j_quick_card_ch give-sign-details small-sign hide" id="_js_QuickGiveSign">
                                        <p class="give-sign-details-title-section">
                                            <span class="title">举牌子</span>
                                            <span class="about-amount">
                                <label>金币 : </label>
                                <span class="amount"></span>
                                <span class="need-amount"></span>
                            </span>
                                        </p>
                                        <ul class="give-sign-details-list-section small-sign">
                                            <!--<li class="give-sign-single small-sign limit-time">
                                                <a class="give-sign-single-icon small-sign give-sign-icon-propid-20"></a>
                                            </li>
                                            <li class="give-sign-single small-sign limit-time disabled">
                                                <a class="give-sign-single-icon small-sign give-sign-icon-propid-23"></a>
                                            </li>-->
                                        </ul>
                                    </div>

                                    <div class="art_pop _j_at_pop at_pop hide">
                                        <div class="at_someone _j_at_pop_box">
                                            <div class="art_search at_input _j_at_inner">

                                                <input placeholder="请输入用户名号" class="_j_at_txt" type="text">
                                                <ul class="result hide">

                                                </ul>
                                            </div>
                                            <div class="art_opt">
                                                <a href="javascript:void(0);" class="art_submit" title="确定">确定</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="clear"></div>
                            </dt>
                            <dd>
                                <div class="reply_text">
                                    <textarea class="_j_replyarea" name="reply_content" cols="30" rows="10"></textarea>
                                </div>
                            </dd>
                        </dl>
                        <div class="publish_reply">
                            <a href="javascript:void(0);" class="btn_big _j_publish_reply" title="发表回复">发表回复</a>
                        </div>
                    </div>

                </div>
            </div>

            <div class="clear"></div>
        </div>
    </div>


    <div id="pnl_pop_reply"></div>
    <script id="_j_pnl_pop_reply" type="text/x-jquery-tmpl">
    <div>
        <div class="_j_comment_layer">
                <div class="quoteWrap">
                    <p class="tit">${title}</p>
                    <div class="quoteInfo" style="display: ${display};">${word}</div>
                    <div class="quick_reply_box">
                        <div class="vc_reply">
                            <div class="reply_con _j_article_mode _j_editor" id="_j_editor_quote" data-flag="${flag}" data-objid="0" data-link="${link}" data-ajax="1" data-quick="0" data-quote="${word}">
                                <dl>
                                    <dt>
                                        <!--已选择的举牌-->
                                        <i class="show-selected-give-sign" id="_js_quoteSelectedGiveSign">
                                            <span class="close-selected-give-sign" id="_js_quoteDeleteShowGiveSign"></span>
                                        </i>
                                    <div class="art_title reply_choice">
                                        <a href="javascript:void(0);" class="expression _j_show_expression" title="选择表情"></a>
                                        <a href="javascript:void(0);" class="at _j_show_at" title="@他/她"></a>
                                        <a href="javascript:void(0);" class="give_sign_btn _j_show_tags give_sign_btn _quote_give_sign_btn" title="举牌" style="display: none;"></a>
                                        <!--<a href="javascript:void(0);" class="tags l17 on" title="举牌">举牌<i></i><span>经验值<strong>+5</strong></span></a>-->
                                        <div class="clear"></div>
                                        <div class="art_pop hide">
                                            <div class="art_pop_title"></div>
                                            <a href="#" class="exp_close">×</a>
                                            <i class="art_arrow"></i>
                                        </div>
                                        <!--表情弹窗-->
                                        <div class="art_pop _j_face_pop hide" data-cid="124">
                                            <div class="art_pop_box art_face">
                                                <ul class="clearfix">
                                                </ul>
                                            </div>
                                        </div>
                                        <!--@弹层-->
                                        <div class="art_pop _j_at_pop at_pop hide">
                                            <div class="at_someone _j_at_pop_box">
                                                <div class="art_search at_input _j_at_inner">
                                                    <input type="text" placeholder="请输入用户名号" class="_j_at_txt" value="">
                                                    <ul class="result hide">
                                                    </ul>
                                                </div>
                                                <div class="art_opt">
                                                    <a href="javascript:void(0);" class="art_submit" title="确定">确定</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!--举牌-->
                                        <div class="art_pop mark_tags _j_tags_pop _j_quick_card_ch give-sign-details small-sign hide" id="_js_quoteGiveSign">
                                            <p class="give-sign-details-title-section">
                                                <span class="title">举牌子</span>
                                                <span class="about-amount">
                                                    <label>金币 : </label>
                                                    <span class="amount"></span>
                                                    <span class="need-amount"></span>
                                                </span>
                                            </p>
                                            <ul class="give-sign-details-list-section small-sign">
                                            </ul>
                                        </div>
                                </div>
                                <div class="clear"></div>
                                </dt>
                                <dd>
                                    <div class="reply_text">
                                        <textarea class="_j_replyarea" name="reply_content" cols="30" rows="10"></textarea>
                                    </div>
                                </dd>
                            </dl>
                            <div class="publish_reply">
                                <a href="javascript:void(0);" class="btn_big _j_publish_reply" title="回复">回复</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</script>


</div>

<div id="pagelet-block-c3a130ba89d863d27d6adb271a0e109e" class="pagelet-block" data-api=":note:pagelet:ExpandApi" data-params="{&quot;iid&quot;:&quot;9680697&quot;}" data-async="1" data-controller="/js/note/ControllerExpand"></div>

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

<link href="%E5%AE%9D%E8%B4%9D%EF%BC%8C%E5%A6%88%E5%A6%88%E5%B8%A6%E4%BD%A0%E5%8E%BB%E5%8D%B0%E5%BA%A6,%E5%8D%B0%E5%BA%A6%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5%20-%20%E9%A9%AC%E8%9C%82%E7%AA%9D_files/mfw-toolbar.css" rel="stylesheet" type="text/css">



<script language="javascript" type="text/javascript">
    if (typeof M !== "undefined" && typeof M.loadResource === "function") {
        M.loadResource("http://js.mafengwo.net/js/cv/js+Dropdown:js+pageletcommon+pageHeadUserInfoWWWNormal:js+jquery.tmpl:js+M+module+InputListener:js+M+module+SuggestionXHR:js+M+module+DropList:js+M+module+Suggestion:js+M+module+MesSearchEvent:js+SiteSearch:js+AHeader:js+jquery.jplayer:js+M+module+TopTip:js+M+module+dialog+Layer:js+M+module+dialog+DialogBase:js+M+module+dialog+Dialog:js+M+module+dialog+alert:js+M+module+dialog+confirm:js+M+module+ScrollObserver:js+note+PagesCommunication:js+note+ControllerHead:js+M+module+Slider:js+note+ControllerRelate:js+note+ControllerCatalog:js+jquery.mousewheel.min:js+M+module+ScrollBar:js+M+module+StickyAndStayBlock:js+note+ASideSticky:js+note+ControllerExpand:js+M+module+Storage:js+M+module+ClickToggle:js+EmotionsHd:js+module+app+Page:js+M+module+FrequencyVerifyControl:js+M+module+FrequencyAppVerify:js+Selection:js+EmotionFastDelete:js+note+GiveSign:js+note+GinfoReply:js+M+module+Caret:js+M+module+HoverTip:js+note+ControllerReply:js+purl:js+M+module+Movearound:js+note+ADetail:js+note+ADetailContent:js+jquery.upnum:js+note+ADetailImageBar:js+jquery.easing.1.3:js+M+module+Toggle:js+M+module+CopyrightProtecte:js+jquery.lazyload:js+common+TextSelectionTip:js+note+ACommon:js+note+anotice:js+note+poiofnote:js+M+module+RollNumbers:js+note+initHlsVideo:js+note+play.video:js+note+ALoadGoods:js+M+module+PowWorker:js+note+NotePoW:js+M+module+PageAdmin:js+M+module+Cookie:js+M+module+ResourceKeeper:js+jquery.jgrowl.min:js+AMessage:js+M+module+FrequencySystemVerify:js+ALogin:js+M+module+QRCode:js+AToolbar:js+ACnzzGaLog:js+ARecruit:js+ALazyLoad^YlBXRw^1531967048.js");
    }
    function changePic() {
        var now = $("#slider-bar").children(".on");
        if ($(now).next().length == 0) {
            now = $("#slider-bar li:first-child");
        } else {
            now = $(now).next();
        }
        $('#slider-bar').children().removeClass("on");
        $(now).addClass("on");
        $(".gs_content").css("left", Number($(now).attr("data-index")) * (-240) + "px")
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
        var ref = setInterval(function () {
            changePic();
        }, 10000);
        $('#slider-bar').children().click(function(){
            $('#slider-bar').children().removeClass("on");
            $(this).addClass("on");
            $(".gs_content").css("left", Number($(this).attr("data-index")) * (-240) + "px")
        });
    })
</script>




<div id="smartGuideFeng" style="display: block;">
    <div class="xiaofeng-hide"></div>
    <div class="sg-xiaofeng-hide-eye-l-v3" style="bottom: 87px; left: 11.1511px;"></div>
    <div class="sg-xiaofeng-hide-eye-r-v3" style="bottom: 43px; left: 11.1511px;"></div>
    <div class="sg-xiaofeng-hide-notice"></div>
</div>
<div id="smartGuide" style="display: block; left: -580px;">
    <ul class="menu"><li class="active"><a id="sgmdd_0">印度</a></li></ul>

    <div id="smartGuideIm">
    </div>
</div>




</body></html>