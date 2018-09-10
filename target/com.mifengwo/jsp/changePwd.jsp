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

            <div class="login-box" id="_j_login_box">
                <div class="inner inner_v2 clearfix">
                    <div class="inner_v2">
                        <form action="/user?type=changePwd" method="post" id="_j_change_form">
                            <div class="form-field">
                                <input id="chaPassword" name="chaPassword" placeholder="您的新密码" autocomplete="off"
                                       data-verification-name="密码"
                                       class="verification[required,minSize[4],maxSize[50]]" type="password">
                                <c:choose>
                                    <c:when test="${not empty cha_error}">
                                        <div class="err-tip" style="display: block">${cha_error}</div>
                                    </c:when>
                                    <c:otherwise>
                                        <div class="err-tip"></div>
                                    </c:otherwise>
                                </c:choose>
                            </div>
                            <div class="form-field">
                                <input id="chaRepassword" name="chaRepassword" placeholder="确认密码" autocomplete="off"
                                       data-verification-name="确认密码"
                                       class="verification[required,minSize[4],maxSize[50]]" type="password">

                                <div class="err-tip"></div>
                            </div>
                            <div class="form-field">
                                <div class="clearfix">
                                    <input id="chaCheckcode" name="chaCheckcode" placeholder="验证码" autocomplete="off"
                                           data-verification-name="验证码"
                                           class="vcode-input  pull-left" type="text"
                                           style="background-position:right;background-repeat:no-repeat;">
                                    <img src="/DrawImage" onclick="this.src='/DrawImage?'+ Math.random()"
                                         style="padding-left:10px">
                                    <div class="err-tip"></div>

                                </div>
                                <div class="err-tip clearfix"></div>
                            </div>

                            <div class="submit-btn">
                                <button id="cha-submit" type="button">提交修改</button>
                            </div>
                            <hr style="padding-bottom: 40px">

                        </form>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
<div class="photoby"></div>
<div class="fullscreen-bg"
     style="background-image: url('/static/images/signup/<%=(int)(Math.random()*(10)+1)%>.jpg');"></div>

<script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script language="javascript" src="../static/js/jsmfw.js" type="text/javascript" crossorigin="anonymous"></script>
<script src="/static/js/md5.js"></script>
<script type="text/javascript">

    $(document).ready(function () {
        chaflag = [false,false];
        $('#cha-submit').click(function () {

            if (chaflag.indexOf(false) ==-1){
                var temp = $("#chaPassword").val();
                var temp2 = $("#chaRepassword").val();
                var after = hex_md5(temp.toString());
                var after2 = hex_md5(temp2.toString());
                $("#chaPassword").val(after.toString());
                $("#chaRepassword").val(after2.toString());

                $('#_j_change_form').submit();

            }else{
                $('#chaPassword').next().html("请完成表单信息");
                $('#chaPassword').next().css("display","block");
            }
        });
        function chaPwdCheck() {

            if($("#chaPassword").val().length<4){
                $('#chaPassword').next().html("密码长度不正确,至少大于4位");
                $('#chaPassword').next().css("display","block");
                chaflag[0]=false;
            }else if ($("#chaPassword").val()!=$("#chaRepassword").val()){
                $('#chaPassword').next().html("两次密码不同");
                $('#chaPassword').next().css("display","block");
                chaflag[0]=false;
            }else{
                $('#chaPassword').next().html("");
                $('#chaPassword').next().css("display","none");
                chaflag[0]=true;
            }
        }

        $('#chaPassword').change(function () {
           chaPwdCheck();
        });
        $('#chaRepassword').change(function () {
            chaPwdCheck();
        });

        $('#chaCheckcode').change(function () {
            var tar=$('#chaCheckcode');

            if($(tar).val().length!=4){
                $(tar).next().next().html("验证码长度应为4位");
                $(tar).next().next().css("display","block");

                chaflag[1]=false;
            }else{
                $.post('/user?type=check_checkcode', {
                    data: $(tar).val()
                }).done(function (result) {

                    if ("true" == result.flag) {
                        $(tar).next().next().html("");
                        $(tar).next().next().css("display","none");
                        chaflag[1]=true;
                    } else {
                        $(tar).next().next().html("验证码出错");
                        $(tar).next().next().css("display","block");
                        chaflag[1]=false;
                    }
                }).error(function () {
                    chaflag[1]=false;
                });
            }
        });


    })
</script>
</body>
</html>
