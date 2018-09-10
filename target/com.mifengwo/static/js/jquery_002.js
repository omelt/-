
(function($){
	$.fn.mailAutoComplete = function(options){
		var defaults = {
			boxClass: "mailListBox", //外部box样式
			listClass: "mailListDefault", //默认的列表样式
			focusClass: "mailListFocus", //列表选样式中
			markCalss: "mailListHlignt", //高亮样式
			zIndex: 5,
			autoClass: true, //是否使用插件自带class样式
			mailArr: ["qq.com","163.com","126.com","yeah.net","sina.com","sina.cn","sohu.com","139.com","yahoo.com"], //邮件数组
			textHint: false, //文字提示的自动显示与隐藏
			hintText: "",
			focusColor: "#333",
			blurColor: "#333",
			v: ''
		};
		var settings = $.extend({}, defaults, options || {});
		//页面装载CSS样式
		if(settings.autoClass && $("#mailListAppendCss").size() === 0){
			$('<style id="mailListAppendCss" type="text/css">.mailListBox{border:1px solid #369; background:#fff; font:12px/20px Arial;}.mailListDefault{padding:0 5px;cursor:pointer;white-space:nowrap;}.mailListFocus{padding:0 5px;cursor:pointer;white-space:nowrap;background:#369;color:white;}.mailListHlignt{color:red;}.mailListFocus .mailListHlignt{color:#fff;}</style>').appendTo($("head"));	
		}
		var cb = settings.boxClass, cl = settings.listClass, cf = settings.focusClass, cm = settings.markCalss; //插件的class变量
		var z = settings.zIndex, newArr = mailArr = settings.mailArr, hint = settings.textHint, text = settings.hintText, fc = settings.focusColor, bc = settings.blurColor;
		//创建邮件内部列表内容
		$.createHtml = function(str, arr, cur){
			var mailHtml = "";
			if($.isArray(arr)){
				$.each(arr, function(i, n){
					if(i === cur){
						mailHtml += '<div class="mailHover '+cf+'" id="mailList_'+i+'"><span class="'+cm+'">'+str+'</span>@'+arr[i]+'</div>';	
					}else{
						mailHtml += '<div class="mailHover '+cl+'" id="mailList_'+i+'"><span class="'+cm+'">'+str+'</span>@'+arr[i]+'</div>';	
					}
				});
			}
			return mailHtml;
		};
		//一些全局变量
		var index = -1, s,v;
		$(this).each(function(){
			var that = $(this), i = $(".justForJs").size();	
			if(i > 0){ //只绑定一个文本框
			 	return;	
			}
			var w = that.outerWidth(), h = that.outerHeight(); //获取当前对象（即文本框）的宽高
			//样式的初始化
			that.wrap('')
				.before('<div id="mailListBox_'+i+'" class="justForJs '+cb+'" style="min-width:'+w+'px;_width:'+w+'px;position:absolute;left:-6000px;top:'+h+'px;z-index:'+z+';"></div>');
			var x = $("#mailListBox_" + i), liveValue; //列表框对象
			that.focus(function(){
				//父标签的层级
				// $(this).parent().css("z-index", 10);
				//提示文字的显示与隐藏
				if(hint && text){
					var focus_v = $.trim($(this).val());
					if(focus_v === text){
						$(this).val("");
					}
				}



				//键盘事件
				$(this).keyup(function(e){
					$(this).on('input',function () {
						s = settings.v = $.trim($(this).val());
					});
						
					if(/@/.test(settings.v)){
						s = settings.v.replace(/@.*/, "");
					}
					if(settings.v.length > 0){
						//如果按键是上下键
						if(e.keyCode === 38){
							//向上
							if(index <= 0){
								index = newArr.length;	
							}
							index--;
							$(this).val($("#mailList_"+index).text());
						}else if(e.keyCode === 40){
							//向下
							if(index >= newArr.length - 1){
								index = -1;
							}
							index++;
							$(this).val($("#mailList_"+index).text());
						}else if(e.keyCode === 13){
							//回车
							if(index > -1 && index < newArr.length){
								//如果当前有激活列表
								$(this).val($("#mailList_"+index).text());
								 
							}
						}else{
							if(/@/.test(settings.v)){
								index = -1;
								//获得@后面的值
								//s = v.replace(/@.*/, "");
								//创建新匹配数组
								var site = settings.v.replace(/.*@/, "");
								newArr = $.map(mailArr, function(n){
									var reg = new RegExp(site);	
									if(reg.test(n)){
										return n;	
									}
								});
							}else{
								newArr = mailArr;
							}
						}
						x.html($.createHtml(s, newArr, index)).css("left", 0);
						if(e.keyCode === 13){
							//回车
							if(index > -1 && index < newArr.length){
								//如果当前有激活列表
								x.css("left", "-6000px");
								index = -1;
							}
						}
					}else{
						x.css("left", "-6000px");	
					}
				}).blur(function(){
					if(hint && text){
						var blur_v = $.trim($(this).val());
						if(blur_v === ""){
							$(this).val(text);
						}
					}
					$(this).css("color", bc).unbind("keyup").parent().css("z-index",0);
					x.css("left", "-6000px");	
					
				});	
				//鼠标经过列表项事件
				//鼠标经过
				if(os.isPc){
					$(".mailHover").live("mouseover", function(){
						index = Number($(this).attr("id").split("_")[1]);
						liveValue = $("#mailList_"+index).text();
						$(that).val(liveValue);
						x.children("." + cf).removeClass(cf).addClass(cl);
						$(this).addClass(cf).removeClass(cl);

					});
				}
					
				
			});
			//
			x.on("click mousedown",'.mailHover', function(){
				index = $(this).index();
				liveValue = $("#mailList_"+index).text();
				that.val(liveValue);
			});
		});
	};
	var os = function() {
		var ua = navigator.userAgent,
			isWindowsPhone = /(?:Windows Phone)/.test(ua),
			isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
			isAndroid = /(?:Android)/.test(ua),
			isFireFox = /(?:Firefox)/.test(ua),
			isChrome = /(?:Chrome|CriOS)/.test(ua),
			isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
			isPhone = /(?:iPhone)/.test(ua) && !isTablet,
			isPc = !isPhone && !isAndroid && !isSymbian;
		return {
			isTablet: isTablet,
			isPhone: isPhone,
			isAndroid : isAndroid,
			isPc : isPc
		};
	}();


})(jQuery);