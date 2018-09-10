<%--
  Created by IntelliJ IDEA.
  User: lc
  Date: 18-7-24
  Time: 下午8:06
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>蜜蜂窝</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <%--其他css--%>
    <link href="../static/css/cssloginlogin_v2mobilecssomclogin-omclogin-omcZlY1526627473.css" rel="stylesheet">

</head>
<body>

<div class="wrapper">
    <div class="container container-login">
        <a id="logo" href="javascript:void(0)" class="logo">
            <img id="show-head" class="center-block img-circle " src=""
                 alt="头像"
                 style="width: 60px;height:60px;margin-bottom: 20px;display: none;" />
        </a>


        <div class="signup-forms flip">
            <div class="signup-box" id="_j_signup_box">
                <div class="inner inner_v2 clearfix">
                    <div class="inner_v2">
                        <form action="/user?type=register" method="post" id="_j_signup_form">
                            <input name="token" value="5a1f85c346a948f18b6a0b1cec79608f" type="hidden">
                            <div class="form-field">
                                <input name="regnickname" placeholder="您的昵称" autocomplete="off" data-type="mobile"
                                       data-verification-name="昵称"
                                       type="text" class="verification[required,maxSize[20]]">

                            </div>
                            <div class="form-field">
                                <input name="regusername" placeholder="您的用户名" autocomplete="off" data-type="mobile"
                                       data-verification-name="用户名"
                                       type="text" class="verification[required,maxSize[20]]">
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field">
                                <input id="regpassword" name="regpassword" placeholder="您的密码" autocomplete="off"
                                       data-type="mobile"
                                       data-verification-name="密码"
                                       type="password" class="verification[required,maxSize[50]]">
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field">
                                <input id="regrepeatpassword" name="regrepeatpassword" placeholder="请再输入一次密码"
                                       autocomplete="off" data-type="mobile"
                                       data-verification-name="确认密码"
                                       type="password" class="verification[required,maxSize[50]]">
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field">
                                <input name="regphone" placeholder="您的手机号码" autocomplete="off" data-type="mobile"
                                       data-verification-name="手机号码"
                                       class="verification[required,maxSize[50],custom[mobile]]" type="text">
                                <div class="err-tip"></div>
                            </div>
                            <div class="agreement">
                                注册视为同意<a target="_blank" href="http://www.mafengwo.cn/s/agreement.html">《密蜂窝用户使用协议》</a>
                            </div>
                            <div class="submit-btn">
                                <button id="reg-submit">立即注册</button>
                            </div>
                        </form>

                    </div>
                    <hr style="padding-bottom: 40px">

                </div>
                <div class="bottom-link">
                    已经注册?<a href="#">马上登录</a>
                </div>
            </div>
            <div class="login-box" id="_j_login_box">
                <div class="inner inner_v2 clearfix">
                    <div class="inner_v2">
                        <form action="/user?type=login" method="post" id="_j_login_form">

                            <div class="form-field">
                                <input id="logUsername" name="logUsername" placeholder="帐号" autocomplete="off"
                                       data-verification-name="帐号"
                                       required type="text">
                                <c:choose>
                                    <c:when test="${not empty login_error}">
                                        <div class="err-tip" style="display: block">${login_error}</div>
                                    </c:when>
                                    <c:otherwise>
                                        <div class="err-tip"></div>
                                    </c:otherwise>
                                </c:choose>

                            </div>
                            <div class="form-field">
                                <input id="logPassowrd" name="logPassowrd" placeholder="您的密码" autocomplete="off"
                                       data-verification-name="密码"
                                       class="verification[required,minSize[4],maxSize[50]]" type="password">
                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field">
                                <div class="clearfix">
                                    <input id="logCheckcode" name="logCheckcode" placeholder="验证码" autocomplete="off"
                                           data-verification-name="验证码"
                                           class="vcode-input  pull-left" type="text" style="background-position:right;background-repeat:no-repeat;">
                                    <img src="/DrawImage" onclick="this.src='/DrawImage?'+ Math.random()"
                                         style="padding-left:10px">
                                    <div class="err-tip"></div>

                                </div>
                                <div class="err-tip clearfix"></div>
                            </div>
                            <div class="form-link"><a href="https://passport.mafengwo.cn/forget">忘记密码</a></div>
                            <div class="submit-btn">
                                <button id="log-submit" type="button">登 录</button>
                            </div>
                            <hr style="padding-bottom: 40px">

                        </form>

                    </div>

                </div>
                <div class="bottom-link">
                    还没有帐号?<a href="#" id="open-res">马上注册</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="photoby"></div>
<div class="fullscreen-bg"
     style="background-image: url(/static/images/signup/<%=(int)(Math.random()*(10)+1)%>.jpg);"></div>

<script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script language="javascript" src="../static/js/jsmfw.js" type="text/javascript" crossorigin="anonymous"></script>
<script src="/static/js/md5.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        <c:if test="${resflag}">
        $('#open-res').click();

        <c:if test="${not empty register_error}">
        $('#regpassword').next().css("display", "block");
        $('#regpassword').next().html("${register_error}");
        </c:if>
        </c:if>
        logflag = [false,false,false];

        $('#log-submit').click(function () {
//            $('#logo').attr("class", "logo");
//                $('#logo').attr("class", "center-block");
//                $('#show-head').attr("src", result.avater);

            if (logflag.indexOf(false) ==-1){
                var temp = $("#logPassowrd").val();
                var after = hex_md5(temp.toString());
                $("#logPassowrd").val(after.toString());
                $('#_j_login_form').submit();

            }else{
                $('#logUsername').next().html("请完成登录信息");
                $('#logUsername').next().css("display","block");
            }
        });



        $('#logUsername').change(function () {
            var tar=$('#logUsername');
            if($(tar).val().length<8 ||$(tar).val().length>16){
                $('#logo').attr("class", "logo");
                $('#show-head').fadeOut(1000);

                $(tar).next().html("用户不符合要求(8-16位字符)");
                $(tar).next().css("display","block");
                logflag[0]=false;
            }else {
                $.post('/user?type=check_username',
                    {data:$(tar).val()}
                    ).done(function (result) {

                    if ("true" == result.flag) {

                        $('#logo').attr("class", "center-block");
                        $('#show-head').attr("src", result.avater);
                        $('#show-head').fadeIn(1000);

                        $(tar).next().html("");
                        $(tar).next().css("display","none");
                        logflag[0]=true;
                    } else {
                        $('#logo').attr("class", "logo");
                        $('#show-head').fadeOut(1000);


                        $(tar).next().html("用户名不存在");
                        $(tar).next().css("display","block");
                        logflag[0]=false;
                    }
                }).error(function () {
                    alert("数据收发有误");
                });
            }
        });
        $('#logPassowrd').change(function () {
            if($('#logPassowrd').val().length>=4){
                logflag[1]=true;
            }else {
                logflag[1]=false;
            }
        });

        $('#logCheckcode').change(function () {
            var tar=$('#logCheckcode');

            if($(tar).val().length!=4){
                $(tar).next().next().html("验证码长度应为4位");
                $(tar).next().next().css("display","block");

                logflag[2]=false;
            }else{
                $.post('/user?type=check_checkcode', {
                    data: $(tar).val()
                }).done(function (result) {

                    if ("true" == result.flag) {
                        $(tar).next().next().html("");
                        $(tar).next().next().css("display","none");
                        logflag[2]=true;
                    } else {
                        $(tar).next().next().html("验证码出错");
                        $(tar).next().next().css("display","block");
                        logflag[2]=false;
                    }
                }).error(function () {
                    logflag[2]=false;
                });
            }
        });

        $('#reg-submit').click(function () {
            $('#_j_signup_form').submit(function () {
                var temp = $("#regpassword").val();
                var temp2 = $("#regrepeatpassword").val();
                var after = hex_md5(temp.toString());
                var after2 = hex_md5(temp2.toString());
                $("#regpassword").val(after.toString());
                $("#regrepeatpassword").val(after2.toString());
            });
        });

    })
</script>
</body>
</html>
