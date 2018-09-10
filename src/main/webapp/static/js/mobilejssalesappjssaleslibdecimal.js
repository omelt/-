/**
 * 特价APP相关js.
 * @namespace
 * @author yanan3
 */
var SalesApp = {

	/**
	 * 网站根目录
	 * @default http://m.mafengwo.cn
	 */
	root : 'https://m.mafengwo.cn',

	/**
	 * 判断是否在特价App中
	 * @param {String|String[]} [want] 判断是不是指定的平台，可以传数组
	 * @return {Boolean|String} 如果是app返回平台
	 */
	isApp : function(want) {
		if(!("_isApp" in SalesApp.isApp)) {
			if(navigator.userAgent.indexOf('com.mafengwo.mfwios')>=0
                || navigator.userAgent.indexOf('com.mafengwo.MFWIOS')>=0) {
				SalesApp.isApp._isApp = 'ios';
			} else if (navigator.userAgent.indexOf('com.mfw.mfwapp')>=0) {
				SalesApp.isApp._isApp = 'android';
			} else if (navigator.userAgent.indexOf('cn.mafengwo.www')>=0
					||navigator.userAgent.indexOf('cn.mafengwo.tgminhouse')>=0) {
				SalesApp.isApp._isApp = 'guide_ios';
			} else if (navigator.userAgent.indexOf('com.mfw.roadbook')>=0) {
				SalesApp.isApp._isApp = 'guide_android';
			} else {
				SalesApp.isApp._isApp = false;
			}
		}
		if(arguments.length) {
			var checkList = [],
				i;
			if((typeof want) === 'string') {
				if(want){
					want = [want];
				}
			}
            if (want instanceof Array) {
                for (i = 0; i < want.length; i++) {
                	var w = want[i];
                    if (w == 'shop') {
                        checkList.push('ios', 'android');
                    } else if (w == 'guide') {
                        checkList.push('guide_ios', 'guide_android');
                    } else {
                        checkList.push(want);
                    }
                }
            }
			if(checkList.length) {
				for(i=0;i<checkList.length;i++) {
					if(checkList[i]==SalesApp.isApp._isApp) {
						return true;
					}
				}
			}
            return false;
		}
		return SalesApp.isApp._isApp;
	},

	/**
	 * 获取当前APP版本
	 * @return {Number} 版本号，格式为30304，即3.3.4
	 */
	appVersion : function() {
		var callee = SalesApp.appVersion;
		if(!('_v' in callee)) {
			callee._v = 0;
			var ver,vl;
			switch(SalesApp.isApp()) {
				case 'ios' :
				case 'guide_ios' :
				case 'guide_android' :
					ver = /mfwappver\/([\d\.]+)/.exec(navigator.userAgent);
					vl = ver.length;
					if(vl) {
						ver = ver[1].split('.');
						vl = ver.length;
						callee._v = ver[0]*10000;
						if(vl>1)
							callee._v += ver[1]*100;
						if(vl>2)
							callee._v += parseInt(ver[2],10);
					}
					break;
				case 'android':
					ver = /mfwappver\/(\d+)/.exec(navigator.userAgent);
					vl = ver.length;
					if(ver&&vl) {
						ver = ver[1];
						vl = ver.length;
						if(ver[0]>=3) {//v3以下不考虑，目前只是简单处理，假定版本号永远为3位
							callee._v = ver[0]*10000;
							if(vl>1)
								callee._v += ver[1]*100;
							if(vl>2)
								callee._v += parseInt(ver[2],10);
						}
					}
					break;
				default:
					break;
			}
		}
		return callee._v;
	},

    /**
	 * 支持写法：
	 * SalesApp.check('guide', 70700);//攻略7.7.0
	 * SalesApp.check('guide_ios', 70700);//攻略ios7.7.0
	 * SalesApp.check('shop', 30000);//商城3.0.0
	 * SalesApp.check('ios', 30000);//商城ios3.0.0
	 * SalesApp.check({'guide_ios':070400,'guide_android':070601,'shop':0});//攻略ios7.4.0、攻略android7.6.1、商城全版本
	 * SalesApp.check({'guide_ios':{version:070400,value:'aaa'},'guide_android':{version:070601,value='bbb'},'test');//攻略ios7.4.0返回aaa、攻略android7.6.1返回bbb，其它返回test，类似switch case的需求
     * @param {Object|String} config
     * @param {*} [defaultValue=false]
     * @returns {boolean|*}
     */
	check: function(config,defaultValue) {
        var configs = {};
        if(arguments.length>0) {
			if(arguments.length>1) {
				if(typeof config=='string') {
                    configs[config] = {
                        version: arguments[1]
                    };
                    defaultValue = false;
                }
            } else {
                configs = config;
                defaultValue = false;
            }
            for (var app in configs) {
                if (configs.hasOwnProperty(app)) {
                    var conf = configs[app];
                    if (SalesApp.isApp(app)) {
                        var version = 0;
                        if (typeof conf === 'number') {
                            version = conf;
                        } else if (typeof conf === 'string') {
                            version = conf | 0;
                        } else if (typeof conf === 'object') {
                            version = conf.version | 0;
                        }
                        if (version == 0 || SalesApp.appVersion() >= version) {
                            if('value' in conf) {
                            	if(typeof conf.value=='function') {
                            		return conf.value();
								} else {
                            		return conf.value;
								}
							} else {
                                return true;
                            }
                        }
                    }
                }
            }
            return defaultValue;
		} else {
        	return !!SalesApp.isApp();
		}
    },

	/**
	 * 判断是否在微信
	 */
	isWechat : function() {
		return navigator.userAgent.indexOf('MicroMessenger')>=0;
	},
	/**
	 * 判断是否在QQ中
	 * @returns {boolean}
	 */
	isQq : function() {
		return /QQ[^B]/.test(navigator.userAgent);
	},
	isIos : function() {
		return /iPhone\sOS/.test(navigator.userAgent);
	},
	isAndroid : function() {
		return /Android/i.test(navigator.userAgent);
	},
	//------------------ GOTO ----------------
	/**
	 * @ignore
	 */
	_goto : function(name, args) {
		var url = SalesApp['url'+name].apply(this,args);
		if(url) {
			//为了解决app部分页面只监听了用户点击的事件
			var a = document.createElement('A');
			a.href = url;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
	},
	/**
	 * 页面跳转：登录页
	 */
	gotoLogin : function() {
		SalesApp._goto('Login',arguments);
	},
	/**
	 * 页面跳转：特价产品
	 * @param {Number} sales_id 必填，产品ID
	 */
	gotoSales : function(sales_id) {
		SalesApp._goto('Sales',arguments);
	},
	/**
	 * 页面跳转：订单列表页
	 * @param {String} [tab] 选填，订单状态（可选值：''-不限；'payed'-已支付；'unpay'-未支付）
	 */
	gotoOrder : function(tab) {
		SalesApp._goto('Order',arguments);
	},
	/**
	 * 页面跳转：订单详情页
	 * @param {String} order_id 必填，订单号
	 */
	gotoOrderDetail : function(order_id) {
		SalesApp._goto('OrderDetail',arguments);
	},
	/**
	 * 页面跳转：收藏夹 (H5暂不支持)
	 */
	gotoFav : function() {
		SalesApp._goto('Fav',arguments);
	},
	/**
	 * 页面跳转：通知
	 * @param {String} tab 选填，通知类型（可选值：''-不限；'sys'-系统通知；'private'-私信；'article'-文章消息）
	 */
	gotoNotify : function(tab) {
		SalesApp._goto('Notify',arguments);
	},
	/**
	 * 页面跳转：优惠券列表（H5暂不支持）
	 * @param {String} tab 选填，优惠券状态（可选值：''-不限；'available'-可用；'used'-已用；'expired'-过期）
	 */
	gotoCoupon : function(tab) {
		SalesApp._goto('Coupon',arguments);
	},

	//------------------ URL ----------------
    /**
     * 获取链接：登录页url
     * @param {string} [url]
     * @return {String}
     */
    urlLoginForAndroid : function(url) {
        if(SalesApp.isApp()=='android'&& SalesApp.appVersion()>=30400) {
            return 'mfwapp://page/login';
        } else if (SalesApp.isApp()=='guide_android') {
            return 'travelguide://page/login';
        }
        return 'https://passport.mafengwo.cn/?return_url='+encodeURIComponent(url||location.href);
    },
	/**
	 * 获取链接：登录页url
	 * @param {string} [url]
	 * @return {String}
	 */
	urlLogin : function(url) {
		return SalesApp.check({
			'shop':{
				version:30400,
				value:'mfwapp://page/login'
			},
			'guide':{
				value:'travelguide://page/login'
			}
		},'https://passport.mafengwo.cn/?return_url='+encodeURIComponent(url||location.href));
	},
	/**
	 * 获取链接：特价产品
	 * @param {Number} sales_id 必填，sales_id
	 * @return {String}
	 */
	urlSales : function(sales_id) {
		return SalesApp.root+"/sales/"+sales_id+".html";
	},
	/**
	 * 获取链接：订单列表页
	 * @param {String} tab 选填，订单状态（可选值：''-不限；'payed'-已支付；'unpay'-未支付）
	 * @return {String}
	 */
	urlOrder : function(tab) {
		var tabMap = {
			"payed":3,
			"unpay":1
		};
		var app = SalesApp.isApp();
		var version = SalesApp.appVersion();
		if ((app == 'guide_ios' && version > 70101) || (app == 'guide_android' && version > 60101)) {
			return 'http://m.mafengwo.cn/nb/public/sharejump.php?type=31';
		} else if ((app == 'ios' || app == 'android') && version >= 30400) {
			return "mfwapp://page/order" + (tab ? ("/" + tab) : "");
		} else {
			return SalesApp.root + "/order_center/" + (tab ? ("?status=" + tabMap[tab]) : "")
		}
	},
	/**
	 * 获取链接：订单详情页
	 * @param {String} order_id
	 * @return {String}
	 */
	urlOrderDetail : function(order_id) {
        if(SalesApp.isApp()=='ios'&&SalesApp.appVersion()>=30400||
            SalesApp.isApp()=='android') {
			return "mfwapp://page/order/detail/id=" + order_id;
		} else if (SalesApp.isApp()=='guide_ios'&&SalesApp.appVersion()<=70403){
            //fyn 2016-04-23 ios 7.4.3及以下版本不支持https
            return "http://m.mafengwo.cn/nb/public/sharejump.php?type=1008&tradeid="+order_id;
        } else if(SalesApp.isApp()=='guide_ios'&&SalesApp.appVersion()>=70000||
            SalesApp.isApp()=='guide_android'&&SalesApp.appVersion()>=60000) {
            return "https://m.mafengwo.cn/nb/public/sharejump.php?type=1008&tradeid="+order_id;
        }else {
        	return SalesApp.root + "/sales/order_detail?id=" + order_id;
		}
	},
	urlOrderPay : function(order_id) {
		if(SalesApp.check('ios',30400)||SalesApp.check('android',40000) ){
			return "mfwapp://page/product/pay?id="+order_id;
		} else if (SalesApp.isApp()=='guide_ios'&&SalesApp.appVersion()<=70403){
			//fyn 2016-04-23 ios 7.4.3及以下版本不支持https
			return "http://m.mafengwo.cn/nb/public/sharejump.php?type=1004&tradeid="+order_id;
		} else if(SalesApp.check('guide_ios',70000)|| SalesApp.check('guide_android',60000)) {
			return "https://m.mafengwo.cn/nb/public/sharejump.php?type=1004&tradeid="+order_id;
		}
	},
	/**
	 * 获取链接：收藏夹 (H5暂不支持)
	 * @return {String}
	 */
	urlFav : function() {
		if(SalesApp.isApp()&&SalesApp.appVersion()>=30400) {
			return "mfwapp://page/fav/";
		} else {
			return "";
		}
	},
	/**
	 * 获取链接：通知
	 * @param {String} tab 选填，通知类型（可选值：''-不限；'sys'-系统通知；'private'-私信；'article'-文章消息）
	 * @return {String}
	 */
	urlNotify : function(tab) {
		var notifyMap = {
			"sys":"",
			"private":"private",
			"article":"article"
		};
		if(SalesApp.isApp()&&SalesApp.appVersion()>=30400) {
			return "mfwapp://page/mynotify"+(tab?("/"+tab):"");
		} else {
			return SalesApp.root+"/user/msg.php"+(tab?("?type="+notifyMap[tab]):"");
		}
	},
	/**
	 * 获取链接：优惠券列表 (H5暂不支持)
	 * @param {String} [tab] 选填，优惠券状态（可选值：''-不限；'available'-可用；'used'-已用；'expired'-过期）
	 * @return {String}
	 */
	urlCoupon : function(tab) {
		return SalesApp.check({
			'shop':{
				'version':30304,
				'value':"mfwapp://page/coupon"+(tab?("/"+tab):"")
			},
			'guide':{
				'value':'http://m.mafengwo.cn/nb/public/sharejump.php?type=34'
			}
		}, SalesApp.root+"/sales/coupon.php");
	},

	/**
	 * 分享
	 * @param {String} title 必填，分享标题
	 * @param {String} [content] 可选，
	 * @param {String} [pic] 可选，图片
 	 * @param {String} [url] 可选，分享链接
	 */
	share : function(title,content,pic,url) {
		if(!title) {
			return;
		}
		if(!content) {
			content = title;
		}
		if(!url) {
			url = location.href;
		}
		var link;
		if(SalesApp.isApp()&&SalesApp.appVersion()>=30304) {
			link = "mfwapp://share?url="+encodeURIComponent(url);
		} else {
			link = "http://www.mafengwo.cn/connect_share.php?title="+encodeURIComponent(title);
			link += "&content="+encodeURIComponent(content);
			if(pic) {
				link += "&pic="+encodeURIComponent(pic);
			}
			link += "&url="+encodeURIComponent(url)+"&key=wb";
		}
		location.href = link;
	},

	/**
	 * APP分享成功事件 (暂不支持)
	 * @param {Function} handler 处理分享的函数
	 */
	onShare : function(handler) {
		document.addEventListener("mfwshare", function(e) {
			handler.call(this,e,e.mfwShareChannel);
		}, false);
	},

	/**
	 * 微信首次显示页面的遮罩层
	 * @param {String} type 遮罩类型，目前只支持'fav'
	 * @param {String} [key] 唯一标示，区分不同的活动
	 * @param {Boolean} [forceShow] 强制显示，忽略标示
	 */
	wechatMask : function(type,key,forceShow, showInAllAgent) {
		if(SalesApp.isWechat() || showInAllAgent) {
			type = type || "fav";
			key = '_wxmsk_'+(key || type);
			if(!localStorage[key]||forceShow) {
				var mask = document.getElementsByClassName('wx-mask')[0],
					know;
				if(!mask) {
					mask = document.createElement('div');
					know = document.createElement('span');
					know.className = 'know';
					mask.appendChild(know);
					document.body.appendChild(mask);
				} else {
					know = mask.getElementsByClassName('know')[0];
				}
				mask.className = 'wx-mask wx-mask-'+type;
				mask.style.display = 'block';
				know.addEventListener('click',function() {
					if(!forceShow)
						localStorage[key] = 1;
					mask.style.display = 'none';
				},false);
			}
		}
	},

	/**
	 * 给A标签绑定点击后弹出QQ的事件
	 * @param {HTMLElement|jQuery} el 绑定事件的元素
	 * @param {String} [qq] QQ号
	 * @param {String} [key] 非必填项，当地游营销号需要用
	 */
	bindConactQQ : function(el, qq, key) {
		if(arguments.length == 1) {
			for(var i=0;i<el.length;i++) {
				SalesApp.bindConactQQ(el[i],el[i].getAttribute('data-account'), el[i].getAttribute('data-qq'));
			}
		}
		try{
			if(!qq) {
				return;
			}
			if(el && !(el instanceof HTMLElement)){
				if(!el.length) {
					return;
				}
				el = el.get(0);
			}
			if(el) {
				var app = SalesApp.isApp(),
					ver = SalesApp.appVersion();
				if( app == 'android' || (app=='guide_android' && ver >= 60000)) {
					el.setAttribute('href','mqqwpa://im/chat?chat_type=wpa&uin='+qq);
				} else if (app == 'ios' || (app=='guide_ios' && ver >= 70000)) {
					el.setAttribute('href','mqq://im/chat?chat_type=wpa&uin=' + qq + '&version=1&src_type=web');
				} else {
					if(key) {
						var o = document.createElement('SCRIPT');
						o.src = 'http://wpa.b.qq.com/cgi/wpa.php';//+'?key='+key;
						o.charset = 'utf-8';
						o.onload = function () {
							document.body.removeChild(o);
							BizQQWPA.addCustom({
								aty: '0',
								a: '0',
								nameAccount: qq,
								selector: '',
								node: el
							});
						};
						document.body.appendChild(o);
					} else {
						el.setAttribute('href','http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes');
					}
				}
			}
		} catch (e) {

		}
	}

};

if(window.M && window.M.define){

	M.define('/mobile/js/salesapp', function (require, exports, module) {
		module.exports = SalesApp;
	});

};
/* decimal.js v7.1.1 https://github.com/MikeMcl/decimal.js/LICENCE */
!function(n){"use strict";function e(n){var e,i,t,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,e=1;r>e;e++)t=n[e]+"",i=Rn-t.length,i&&(s+=d(i)),s+=t;o=n[e],t=o+"",i=Rn-t.length,i&&(s+=d(i))}else if(0===o)return"0";for(;o%10===0;)o/=10;return s+o}function i(n,e,i){if(n!==~~n||e>n||n>i)throw Error(En+n)}function t(n,e,i,t){var r,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=Rn,r=0):(r=Math.ceil((e+1)/Rn),e%=Rn),s=On(10,Rn-e),u=n[r]%s|0,null==t?3>e?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=4>i&&99999==u||i>3&&49999==u||5e4==u||0==u):o=(4>i&&u+1==s||i>3&&u+1==s/2)&&(n[r+1]/s/100|0)==On(10,e-2)-1||(u==s/2||0==u)&&0==(n[r+1]/s/100|0):4>e?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(t||4>i)&&9999==u||!t&&i>3&&4999==u):o=((t||4>i)&&u+1==s||!t&&i>3&&u+1==s/2)&&(n[r+1]/s/1e3|0)==On(10,e-3)-1,o}function r(n,e,i){for(var t,r,s=[0],o=0,u=n.length;u>o;){for(r=s.length;r--;)s[r]*=e;for(s[0]+=wn.indexOf(n.charAt(o++)),t=0;t<s.length;t++)s[t]>i-1&&(void 0===s[t+1]&&(s[t+1]=0),s[t+1]+=s[t]/i|0,s[t]%=i)}return s.reverse()}function s(n,e){var i,t,r=e.d.length;32>r?(i=Math.ceil(r/3),t=Math.pow(4,-i).toString()):(i=16,t="2.3283064365386962890625e-10"),n.precision+=i,e=E(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}function o(n,e,i,t){var r,s,o,u,c,f,a,h,d,l=n.constructor;n:if(null!=e){if(h=n.d,!h)return n;for(r=1,u=h[0];u>=10;u/=10)r++;if(s=e-r,0>s)s+=Rn,o=e,a=h[d=0],c=a/On(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/Rn),u=h.length,d>=u){if(!t)break n;for(;u++<=d;)h.push(0);a=c=0,r=1,s%=Rn,o=s-Rn+1}else{for(a=u=h[d],r=1;u>=10;u/=10)r++;s%=Rn,o=s-Rn+r,c=0>o?0:a/On(10,r-o-1)%10|0}if(t=t||0>e||void 0!==h[d+1]||(0>o?a:a%On(10,r-o-1)),f=4>i?(c||t)&&(0==i||i==(n.s<0?3:2)):c>5||5==c&&(4==i||t||6==i&&(s>0?o>0?a/On(10,r-o):0:h[d-1])%10&1||i==(n.s<0?8:7)),1>e||!h[0])return h.length=0,f?(e-=n.e+1,h[0]=On(10,(Rn-e%Rn)%Rn),n.e=-e||0):h[0]=n.e=0,n;if(0==s?(h.length=d,u=1,d--):(h.length=d+1,u=On(10,Rn-s),h[d]=o>0?(a/On(10,r-o)%On(10,o)|0)*u:0),f)for(;;){if(0==d){for(s=1,o=h[0];o>=10;o/=10)s++;for(o=h[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,h[0]==Pn&&(h[0]=1));break}if(h[d]+=u,h[d]!=Pn)break;h[d--]=0,u=1}for(s=h.length;0===h[--s];)h.pop()}return bn&&(n.e>l.maxE?(n.d=null,n.e=NaN):n.e<l.minE&&(n.e=0,n.d=[0])),n}function u(n,i,t){if(!n.isFinite())return v(n);var r,s=n.e,o=e(n.d),u=o.length;return i?(t&&(r=t-u)>0?o=o.charAt(0)+"."+o.slice(1)+d(r):u>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(n.e<0?"e":"e+")+n.e):0>s?(o="0."+d(-s-1)+o,t&&(r=t-u)>0&&(o+=d(r))):s>=u?(o+=d(s+1-u),t&&(r=t-s-1)>0&&(o=o+"."+d(r))):((r=s+1)<u&&(o=o.slice(0,r)+"."+o.slice(r)),t&&(r=t-u)>0&&(s+1===u&&(o+="."),o+=d(r))),o}function c(n,e){var i=n[0];for(e*=Rn;i>=10;i/=10)e++;return e}function f(n,e,i){if(e>Un)throw bn=!0,i&&(n.precision=i),Error(Mn);return o(new n(mn),e,1,!0)}function a(n,e,i){if(e>_n)throw Error(Mn);return o(new n(vn),e,i,!0)}function h(n){var e=n.length-1,i=e*Rn+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function d(n){for(var e="";n--;)e+="0";return e}function l(n,e,i,t){var r,s=new n(1),o=Math.ceil(t/Rn+4);for(bn=!1;;){if(i%2&&(s=s.times(e),q(s.d,o)&&(r=!0)),i=qn(i/2),0===i){i=s.d.length-1,r&&0===s.d[i]&&++s.d[i];break}e=e.times(e),q(e.d,o)}return bn=!0,s}function p(n){return 1&n.d[n.d.length-1]}function g(n,e,i){for(var t,r=new n(e[0]),s=0;++s<e.length;){if(t=new n(e[s]),!t.s){r=t;break}r[i](t)&&(r=t)}return r}function w(n,i){var r,s,u,c,f,a,h,d=0,l=0,p=0,g=n.constructor,w=g.rounding,m=g.precision;if(!n.d||!n.d[0]||n.e>17)return new g(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==i?(bn=!1,h=m):h=i,a=new g(.03125);n.e>-2;)n=n.times(a),p+=5;for(s=Math.log(On(2,p))/Math.LN10*2+5|0,h+=s,r=c=f=new g(1),g.precision=h;;){if(c=o(c.times(n),h,1),r=r.times(++l),a=f.plus(Sn(c,r,h,1)),e(a.d).slice(0,h)===e(f.d).slice(0,h)){for(u=p;u--;)f=o(f.times(f),h,1);if(null!=i)return g.precision=m,f;if(!(3>d&&t(f.d,h-s,w,d)))return o(f,g.precision=m,w,bn=!0);g.precision=h+=10,r=c=a=new g(1),l=0,d++}f=a}}function m(n,i){var r,s,u,c,a,h,d,l,p,g,w,v=1,N=10,b=n,x=b.d,E=b.constructor,M=E.rounding,y=E.precision;if(b.s<0||!x||!x[0]||!b.e&&1==x[0]&&1==x.length)return new E(x&&!x[0]?-1/0:1!=b.s?NaN:x?0:b);if(null==i?(bn=!1,p=y):p=i,E.precision=p+=N,r=e(x),s=r.charAt(0),!(Math.abs(c=b.e)<15e14))return l=f(E,p+2,y).times(c+""),b=m(new E(s+"."+r.slice(1)),p-N).plus(l),E.precision=y,null==i?o(b,y,M,bn=!0):b;for(;7>s&&1!=s||1==s&&r.charAt(1)>3;)b=b.times(n),r=e(b.d),s=r.charAt(0),v++;for(c=b.e,s>1?(b=new E("0."+r),c++):b=new E(s+"."+r.slice(1)),g=b,d=a=b=Sn(b.minus(1),b.plus(1),p,1),w=o(b.times(b),p,1),u=3;;){if(a=o(a.times(w),p,1),l=d.plus(Sn(a,new E(u),p,1)),e(l.d).slice(0,p)===e(d.d).slice(0,p)){if(d=d.times(2),0!==c&&(d=d.plus(f(E,p+2,y).times(c+""))),d=Sn(d,new E(v),p,1),null!=i)return E.precision=y,d;if(!t(d.d,p-N,M,h))return o(d,E.precision=y,M,bn=!0);E.precision=p+=N,l=a=b=Sn(g.minus(1),g.plus(1),p,1),w=o(b.times(b),p,1),u=h=1}d=l,u+=2}}function v(n){return String(n.s*n.s/0)}function N(n,e){var i,t,r;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(t=e.search(/e/i))>0?(0>i&&(i=t),i+=+e.slice(t+1),e=e.substring(0,t)):0>i&&(i=e.length),t=0;48===e.charCodeAt(t);t++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(t,r)){if(r-=t,n.e=i=i-t-1,n.d=[],t=(i+1)%Rn,0>i&&(t+=Rn),r>t){for(t&&n.d.push(+e.slice(0,t)),r-=Rn;r>t;)n.d.push(+e.slice(t,t+=Rn));e=e.slice(t),t=Rn-e.length}else t-=r;for(;t--;)e+="0";n.d.push(+e),bn&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function b(n,e){var i,t,s,o,u,f,a,h,d;if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(An.test(e))i=16,e=e.toLowerCase();else if(Fn.test(e))i=2;else{if(!Dn.test(e))throw Error(En+e);i=8}for(o=e.search(/p/i),o>0?(a=+e.slice(o+1),e=e.substring(2,o)):e=e.slice(2),o=e.indexOf("."),u=o>=0,t=n.constructor,u&&(e=e.replace(".",""),f=e.length,o=f-o,s=l(t,new t(i),o,2*o)),h=r(e,i,Pn),d=h.length-1,o=d;0===h[o];--o)h.pop();return 0>o?new t(0*n.s):(n.e=c(h,d),n.d=h,bn=!1,u&&(n=Sn(n,s,4*f)),a&&(n=n.times(Math.abs(a)<54?Math.pow(2,a):Nn.pow(2,a))),bn=!0,n)}function x(n,e){var i,t=e.d.length;if(3>t)return E(n,2,e,e);i=1.4*Math.sqrt(t),i=i>16?16:0|i,e=e.times(Math.pow(5,-i)),e=E(n,2,e,e);for(var r,s=new n(5),o=new n(16),u=new n(20);i--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}function E(n,e,i,t,r){var s,o,u,c,f=1,a=n.precision,h=Math.ceil(a/Rn);for(bn=!1,c=i.times(i),u=new n(t);;){if(o=Sn(u.times(c),new n(e++*e++),a,1),u=r?t.plus(o):t.minus(o),t=Sn(o.times(c),new n(e++*e++),a,1),o=u.plus(t),void 0!==o.d[h]){for(s=h;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=t,t=o,o=s,f++}return bn=!0,o.d.length=h+1,o}function M(n,e){var i,t=e.s<0,r=a(n,n.precision,1),s=r.times(.5);if(e=e.abs(),e.lte(s))return ln=t?4:1,e;if(i=e.divToInt(r),i.isZero())ln=t?3:2;else{if(e=e.minus(i.times(r)),e.lte(s))return ln=p(i)?t?2:3:t?4:1,e;ln=p(i)?t?1:4:t?3:2}return e.minus(r).abs()}function y(n,e,t,s){var o,c,f,a,h,d,l,p,g,w=n.constructor,m=void 0!==t;if(m?(i(t,1,gn),void 0===s?s=w.rounding:i(s,0,8)):(t=w.precision,s=w.rounding),n.isFinite()){for(l=u(n),f=l.indexOf("."),m?(o=2,16==e?t=4*t-3:8==e&&(t=3*t-2)):o=e,f>=0&&(l=l.replace(".",""),g=new w(1),g.e=l.length-f,g.d=r(u(g),10,o),g.e=g.d.length),p=r(l,10,o),c=h=p.length;0==p[--h];)p.pop();if(p[0]){if(0>f?c--:(n=new w(n),n.d=p,n.e=c,n=Sn(n,g,t,s,0,o),p=n.d,c=n.e,d=hn),f=p[t],a=o/2,d=d||void 0!==p[t+1],d=4>s?(void 0!==f||d)&&(0===s||s===(n.s<0?3:2)):f>a||f===a&&(4===s||d||6===s&&1&p[t-1]||s===(n.s<0?8:7)),p.length=t,d)for(;++p[--t]>o-1;)p[t]=0,t||(++c,p.unshift(1));for(h=p.length;!p[h-1];--h);for(f=0,l="";h>f;f++)l+=wn.charAt(p[f]);if(m){if(h>1)if(16==e||8==e){for(f=16==e?4:3,--h;h%f;h++)l+="0";for(p=r(l,o,e),h=p.length;!p[h-1];--h);for(f=1,l="1.";h>f;f++)l+=wn.charAt(p[f])}else l=l.charAt(0)+"."+l.slice(1);l=l+(0>c?"p":"p+")+c}else if(0>c){for(;++c;)l="0"+l;l="0."+l}else if(++c>h)for(c-=h;c--;)l+="0";else h>c&&(l=l.slice(0,c)+"."+l.slice(c))}else l=m?"0p+0":"0";l=(16==e?"0x":2==e?"0b":8==e?"0o":"")+l}else l=v(n);return n.s<0?"-"+l:l}function q(n,e){return n.length>e?(n.length=e,!0):void 0}function O(n){return new this(n).abs()}function F(n){return new this(n).acos()}function A(n){return new this(n).acosh()}function D(n,e){return new this(n).plus(e)}function Z(n){return new this(n).asin()}function P(n){return new this(n).asinh()}function R(n){return new this(n).atan()}function L(n){return new this(n).atanh()}function U(n,e){n=new this(n),e=new this(e);var i,t=this.precision,r=this.rounding,s=t+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?a(this,t,r):new this(0),i.s=n.s):!n.d||e.isZero()?(i=a(this,s,1).times(.5),i.s=n.s):e.s<0?(this.precision=s,this.rounding=1,i=this.atan(Sn(n,e,s,1)),e=a(this,s,1),this.precision=t,this.rounding=r,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(Sn(n,e,s,1)):(i=a(this,s,1).times(e.s>0?.25:.75),i.s=n.s):i=new this(NaN),i}function _(n){return new this(n).cbrt()}function k(n){return o(n=new this(n),n.e+1,2)}function S(n){if(!n||"object"!=typeof n)throw Error(xn+"Object expected");var e,i,t,r=["precision",1,gn,"rounding",0,8,"toExpNeg",-pn,0,"toExpPos",0,pn,"maxE",0,pn,"minE",-pn,0,"modulo",0,9];for(e=0;e<r.length;e+=3)if(void 0!==(t=n[i=r[e]])){if(!(qn(t)===t&&t>=r[e+1]&&t<=r[e+2]))throw Error(En+i+": "+t);this[i]=t}if(void 0!==(t=n[i="crypto"])){if(t!==!0&&t!==!1&&0!==t&&1!==t)throw Error(En+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(yn);this[i]=!0}else this[i]=!1}return this}function T(n){return new this(n).cos()}function C(n){return new this(n).cosh()}function I(n){function e(n){var i,t,r,s=this;if(!(s instanceof e))return new e(n);if(s.constructor=e,n instanceof e)return s.s=n.s,s.e=n.e,void(s.d=(n=n.d)?n.slice():n);if(r=typeof n,"number"===r){if(0===n)return s.s=0>1/n?-1:1,s.e=0,void(s.d=[0]);if(0>n?(n=-n,s.s=-1):s.s=1,n===~~n&&1e7>n){for(i=0,t=n;t>=10;t/=10)i++;return s.e=i,void(s.d=[n])}return 0*n!==0?(n||(s.s=NaN),s.e=NaN,void(s.d=null)):N(s,n.toString())}if("string"!==r)throw Error(En+n);return 45===n.charCodeAt(0)?(n=n.slice(1),s.s=-1):s.s=1,Zn.test(n)?N(s,n):b(s,n)}var i,t,r;if(e.prototype=kn,e.ROUND_UP=0,e.ROUND_DOWN=1,e.ROUND_CEIL=2,e.ROUND_FLOOR=3,e.ROUND_HALF_UP=4,e.ROUND_HALF_DOWN=5,e.ROUND_HALF_EVEN=6,e.ROUND_HALF_CEIL=7,e.ROUND_HALF_FLOOR=8,e.EUCLID=9,e.config=e.set=S,e.clone=I,e.abs=O,e.acos=F,e.acosh=A,e.add=D,e.asin=Z,e.asinh=P,e.atan=R,e.atanh=L,e.atan2=U,e.cbrt=_,e.ceil=k,e.cos=T,e.cosh=C,e.div=H,e.exp=B,e.floor=V,e.hypot=$,e.ln=j,e.log=W,e.log10=z,e.log2=J,e.max=G,e.min=K,e.mod=Q,e.mul=X,e.pow=Y,e.random=nn,e.round=en,e.sign=tn,e.sin=rn,e.sinh=sn,e.sqrt=on,e.sub=un,e.tan=cn,e.tanh=fn,e.trunc=an,void 0===n&&(n={}),n)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<r.length;)n.hasOwnProperty(t=r[i++])||(n[t]=this[t]);return e.config(n),e}function H(n,e){return new this(n).div(e)}function B(n){return new this(n).exp()}function V(n){return o(n=new this(n),n.e+1,3)}function $(){var n,e,i=new this(0);for(bn=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return bn=!0,new this(1/0);i=e}return bn=!0,i.sqrt()}function j(n){return new this(n).ln()}function W(n,e){return new this(n).log(e)}function J(n){return new this(n).log(2)}function z(n){return new this(n).log(10)}function G(){return g(this,arguments,"lt")}function K(){return g(this,arguments,"gt")}function Q(n,e){return new this(n).mod(e)}function X(n,e){return new this(n).mul(e)}function Y(n,e){return new this(n).pow(e)}function nn(n){var e,t,r,s,o=0,u=new this(1),c=[];if(void 0===n?n=this.precision:i(n,1,gn),r=Math.ceil(n/Rn),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));r>o;)s=e[o],s>=429e7?e[o]=crypto.getRandomValues(new Uint32Array(1))[0]:c[o++]=s%1e7;else{if(!crypto.randomBytes)throw Error(yn);for(e=crypto.randomBytes(r*=4);r>o;)s=e[o]+(e[o+1]<<8)+(e[o+2]<<16)+((127&e[o+3])<<24),s>=214e7?crypto.randomBytes(4).copy(e,o):(c.push(s%1e7),o+=4);o=r/4}else for(;r>o;)c[o++]=1e7*Math.random()|0;for(r=c[--o],n%=Rn,r&&n&&(s=On(10,Rn-n),c[o]=(r/s|0)*s);0===c[o];o--)c.pop();if(0>o)t=0,c=[0];else{for(t=-1;0===c[0];t-=Rn)c.shift();for(r=1,s=c[0];s>=10;s/=10)r++;Rn>r&&(t-=Rn-r)}return u.e=t,u.d=c,u}function en(n){return o(n=new this(n),n.e+1,this.rounding)}function tn(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function rn(n){return new this(n).sin()}function sn(n){return new this(n).sinh()}function on(n){return new this(n).sqrt()}function un(n,e){return new this(n).sub(e)}function cn(n){return new this(n).tan()}function fn(n){return new this(n).tanh()}function an(n){return o(n=new this(n),n.e+1,1)}var hn,dn,ln,pn=9e15,gn=1e9,wn="0123456789abcdef",mn="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",vn="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Nn={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-pn,maxE:pn,crypto:!1},bn=!0,xn="[DecimalError] ",En=xn+"Invalid argument: ",Mn=xn+"Precision limit exceeded",yn=xn+"crypto unavailable",qn=Math.floor,On=Math.pow,Fn=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,An=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Dn=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Zn=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Pn=1e7,Rn=7,Ln=9007199254740991,Un=mn.length-1,_n=vn.length-1,kn={};kn.absoluteValue=kn.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),o(n)},kn.ceil=function(){return o(new this.constructor(this),this.e+1,2)},kn.comparedTo=kn.cmp=function(n){var e,i,t,r,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^0>c?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^0>c?1:-1;for(t=o.length,r=u.length,e=0,i=r>t?t:r;i>e;++e)if(o[e]!==u[e])return o[e]>u[e]^0>c?1:-1;return t===r?0:t>r^0>c?1:-1},kn.cosine=kn.cos=function(){var n,e,i=this,t=i.constructor;return i.d?i.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+Rn,t.rounding=1,i=s(t,M(t,i)),t.precision=n,t.rounding=e,o(2==ln||3==ln?i.neg():i,n,e,!0)):new t(1):new t(NaN)},kn.cubeRoot=kn.cbrt=function(){var n,i,t,r,s,u,c,f,a,h,d=this,l=d.constructor;if(!d.isFinite()||d.isZero())return new l(d);for(bn=!1,u=d.s*Math.pow(d.s*d,1/3),u&&Math.abs(u)!=1/0?r=new l(u.toString()):(t=e(d.d),n=d.e,(u=(n-t.length+1)%3)&&(t+=1==u||-2==u?"0":"00"),u=Math.pow(t,1/3),n=qn((n+1)/3)-(n%3==(0>n?-1:2)),u==1/0?t="5e"+n:(t=u.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),r=new l(t),r.s=d.s),c=(n=l.precision)+3;;)if(f=r,a=f.times(f).times(f),h=a.plus(d),r=Sn(h.plus(d).times(f),h.plus(a),c+2,1),e(f.d).slice(0,c)===(t=e(r.d)).slice(0,c)){if(t=t.slice(c-3,c+1),"9999"!=t&&(s||"4999"!=t)){(!+t||!+t.slice(1)&&"5"==t.charAt(0))&&(o(r,n+1,1),i=!r.times(r).times(r).eq(d));break}if(!s&&(o(f,n+1,0),f.times(f).times(f).eq(d))){r=f;break}c+=4,s=1}return bn=!0,o(r,n,l.rounding,i)},kn.decimalPlaces=kn.dp=function(){var n,e=this.d,i=NaN;if(e){if(n=e.length-1,i=(n-qn(this.e/Rn))*Rn,n=e[n])for(;n%10==0;n/=10)i--;0>i&&(i=0)}return i},kn.dividedBy=kn.div=function(n){return Sn(this,new this.constructor(n))},kn.dividedToIntegerBy=kn.divToInt=function(n){var e=this,i=e.constructor;return o(Sn(e,new i(n),0,1,1),i.precision,i.rounding)},kn.equals=kn.eq=function(n){return 0===this.cmp(n)},kn.floor=function(){return o(new this.constructor(this),this.e+1,3)},kn.greaterThan=kn.gt=function(n){return this.cmp(n)>0},kn.greaterThanOrEqualTo=kn.gte=function(n){var e=this.cmp(n);return 1==e||0===e},kn.hyperbolicCosine=kn.cosh=function(){var n,e,i,t,r,s=this,u=s.constructor,c=new u(1);if(!s.isFinite())return new u(s.s?1/0:NaN);if(s.isZero())return c;i=u.precision,t=u.rounding,u.precision=i+Math.max(s.e,s.sd())+4,u.rounding=1,r=s.d.length,32>r?(n=Math.ceil(r/3),e=Math.pow(4,-n).toString()):(n=16,e="2.3283064365386962890625e-10"),s=E(u,1,s.times(e),new u(1),!0);for(var f,a=n,h=new u(8);a--;)f=s.times(s),s=c.minus(f.times(h.minus(f.times(h))));return o(s,u.precision=i,u.rounding=t,!0)},kn.hyperbolicSine=kn.sinh=function(){var n,e,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,t=r.d.length,3>t)r=E(s,2,r,r,!0);else{n=1.4*Math.sqrt(t),n=n>16?16:0|n,r=r.times(Math.pow(5,-n)),r=E(s,2,r,r,!0);for(var u,c=new s(5),f=new s(16),a=new s(20);n--;)u=r.times(r),r=r.times(c.plus(u.times(f.times(u).plus(a))))}return s.precision=e,s.rounding=i,o(r,e,i,!0)},kn.hyperbolicTangent=kn.tanh=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,Sn(i.sinh(),i.cosh(),t.precision=n,t.rounding=e)):new t(i.s)},kn.inverseCosine=kn.acos=function(){var n,e=this,i=e.constructor,t=e.abs().cmp(1),r=i.precision,s=i.rounding;return-1!==t?0===t?e.isNeg()?a(i,r,s):new i(0):new i(NaN):e.isZero()?a(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,e=e.asin(),n=a(i,r+4,s).times(.5),i.precision=r,i.rounding=s,n.minus(e))},kn.inverseHyperbolicCosine=kn.acosh=function(){var n,e,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(n=t.precision,e=t.rounding,t.precision=n+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,bn=!1,i=i.times(i).minus(1).sqrt().plus(i),bn=!0,t.precision=n,t.rounding=e,i.ln()):new t(i)},kn.inverseHyperbolicSine=kn.asinh=function(){var n,e,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,bn=!1,i=i.times(i).plus(1).sqrt().plus(i),bn=!0,t.precision=n,t.rounding=e,i.ln())},kn.inverseHyperbolicTangent=kn.atanh=function(){var n,e,i,t,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,t=r.sd(),Math.max(t,n)<2*-r.e-1?o(new s(r),n,e,!0):(s.precision=i=t-r.e,r=Sn(r.plus(1),new s(1).minus(r),i+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5))):new s(NaN)},kn.inverseSine=kn.asin=function(){var n,e,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),i=s.precision,t=s.rounding,-1!==e?0===e?(n=a(s,i+4,t).times(.5),n.s=r.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))},kn.inverseTangent=kn.atan=function(){var n,e,i,t,r,s,u,c,f,h=this,d=h.constructor,l=d.precision,p=d.rounding;if(h.isFinite()){if(h.isZero())return new d(h);if(h.abs().eq(1)&&_n>=l+4)return u=a(d,l+4,p).times(.25),u.s=h.s,u}else{if(!h.s)return new d(NaN);if(_n>=l+4)return u=a(d,l+4,p).times(.5),u.s=h.s,u}for(d.precision=c=l+10,d.rounding=1,i=Math.min(28,c/Rn+2|0),n=i;n;--n)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(bn=!1,e=Math.ceil(c/Rn),t=1,f=h.times(h),u=new d(h),r=h;-1!==n;)if(r=r.times(f),s=u.minus(r.div(t+=2)),r=r.times(f),u=s.plus(r.div(t+=2)),void 0!==u.d[e])for(n=e;u.d[n]===s.d[n]&&n--;);return i&&(u=u.times(2<<i-1)),bn=!0,o(u,d.precision=l,d.rounding=p,!0)},kn.isFinite=function(){return!!this.d},kn.isInteger=kn.isInt=function(){return!!this.d&&qn(this.e/Rn)>this.d.length-2},kn.isNaN=function(){return!this.s},kn.isNegative=kn.isNeg=function(){return this.s<0},kn.isPositive=kn.isPos=function(){return this.s>0},kn.isZero=function(){return!!this.d&&0===this.d[0]},kn.lessThan=kn.lt=function(n){return this.cmp(n)<0},kn.lessThanOrEqualTo=kn.lte=function(n){return this.cmp(n)<1},kn.logarithm=kn.log=function(n){var i,r,s,u,c,a,h,d,l=this,p=l.constructor,g=p.precision,w=p.rounding,v=5;if(null==n)n=new p(10),i=!0;else{if(n=new p(n),r=n.d,n.s<0||!r||!r[0]||n.eq(1))return new p(NaN);i=n.eq(10)}if(r=l.d,l.s<0||!r||!r[0]||l.eq(1))return new p(r&&!r[0]?-1/0:1!=l.s?NaN:r?0:1/0);if(i)if(r.length>1)c=!0;else{for(u=r[0];u%10===0;)u/=10;c=1!==u}if(bn=!1,h=g+v,a=m(l,h),s=i?f(p,h+10):m(n,h),d=Sn(a,s,h,1),t(d.d,u=g,w))do if(h+=10,a=m(l,h),s=i?f(p,h+10):m(n,h),d=Sn(a,s,h,1),!c){+e(d.d).slice(u+1,u+15)+1==1e14&&(d=o(d,g+1,0));break}while(t(d.d,u+=10,w));return bn=!0,o(d,g,w)},kn.minus=kn.sub=function(n){var e,i,t,r,s,u,f,a,h,d,l,p,g=this,w=g.constructor;if(n=new w(n),!g.d||!n.d)return g.s&&n.s?g.d?n.s=-n.s:n=new w(n.d||g.s!==n.s?g:NaN):n=new w(NaN),n;if(g.s!=n.s)return n.s=-n.s,g.plus(n);if(h=g.d,p=n.d,f=w.precision,a=w.rounding,!h[0]||!p[0]){if(p[0])n.s=-n.s;else{if(!h[0])return new w(3===a?-0:0);n=new w(g)}return bn?o(n,f,a):n}if(i=qn(n.e/Rn),d=qn(g.e/Rn),h=h.slice(),s=d-i){for(l=0>s,l?(e=h,s=-s,u=p.length):(e=p,i=d,u=h.length),t=Math.max(Math.ceil(f/Rn),u)+2,s>t&&(s=t,e.length=1),e.reverse(),t=s;t--;)e.push(0);e.reverse()}else{for(t=h.length,u=p.length,l=u>t,l&&(u=t),t=0;u>t;t++)if(h[t]!=p[t]){l=h[t]<p[t];break}s=0}for(l&&(e=h,h=p,p=e,n.s=-n.s),u=h.length,t=p.length-u;t>0;--t)h[u++]=0;for(t=p.length;t>s;){if(h[--t]<p[t]){for(r=t;r&&0===h[--r];)h[r]=Pn-1;--h[r],h[t]+=Pn}h[t]-=p[t]}for(;0===h[--u];)h.pop();for(;0===h[0];h.shift())--i;return h[0]?(n.d=h,n.e=c(h,i),bn?o(n,f,a):n):new w(3===a?-0:0)},kn.modulo=kn.mod=function(n){var e,i=this,t=i.constructor;return n=new t(n),!i.d||!n.s||n.d&&!n.d[0]?new t(NaN):!n.d||i.d&&!i.d[0]?o(new t(i),t.precision,t.rounding):(bn=!1,9==t.modulo?(e=Sn(i,n.abs(),0,3,1),e.s*=n.s):e=Sn(i,n,0,t.modulo,1),e=e.times(n),bn=!0,i.minus(e))},kn.naturalExponential=kn.exp=function(){return w(this)},kn.naturalLogarithm=kn.ln=function(){return m(this)},kn.negated=kn.neg=function(){var n=new this.constructor(this);return n.s=-n.s,o(n)},kn.plus=kn.add=function(n){var e,i,t,r,s,u,f,a,h,d,l=this,p=l.constructor;if(n=new p(n),!l.d||!n.d)return l.s&&n.s?l.d||(n=new p(n.d||l.s===n.s?l:NaN)):n=new p(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(h=l.d,d=n.d,f=p.precision,a=p.rounding,!h[0]||!d[0])return d[0]||(n=new p(l)),bn?o(n,f,a):n;if(s=qn(l.e/Rn),t=qn(n.e/Rn),h=h.slice(),r=s-t){for(0>r?(i=h,r=-r,u=d.length):(i=d,t=s,u=h.length),s=Math.ceil(f/Rn),u=s>u?s+1:u+1,r>u&&(r=u,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for(u=h.length,r=d.length,0>u-r&&(r=u,i=d,d=h,h=i),e=0;r;)e=(h[--r]=h[r]+d[r]+e)/Pn|0,h[r]%=Pn;for(e&&(h.unshift(e),++t),u=h.length;0==h[--u];)h.pop();return n.d=h,n.e=c(h,t),bn?o(n,f,a):n},kn.precision=kn.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(En+n);return i.d?(e=h(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},kn.round=function(){var n=this,e=n.constructor;return o(new e(n),n.e+1,e.rounding)},kn.sine=kn.sin=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+Rn,t.rounding=1,i=x(t,M(t,i)),t.precision=n,t.rounding=e,o(ln>2?i.neg():i,n,e,!0)):new t(NaN)},kn.squareRoot=kn.sqrt=function(){var n,i,t,r,s,u,c=this,f=c.d,a=c.e,h=c.s,d=c.constructor;if(1!==h||!f||!f[0])return new d(!h||0>h&&(!f||f[0])?NaN:f?c:1/0);for(bn=!1,h=Math.sqrt(+c),0==h||h==1/0?(i=e(f),(i.length+a)%2==0&&(i+="0"),h=Math.sqrt(i),a=qn((a+1)/2)-(0>a||a%2),h==1/0?i="1e"+a:(i=h.toExponential(),i=i.slice(0,i.indexOf("e")+1)+a),r=new d(i)):r=new d(h.toString()),t=(a=d.precision)+3;;)if(u=r,r=u.plus(Sn(c,u,t+2,1)).times(.5),e(u.d).slice(0,t)===(i=e(r.d)).slice(0,t)){if(i=i.slice(t-3,t+1),"9999"!=i&&(s||"4999"!=i)){(!+i||!+i.slice(1)&&"5"==i.charAt(0))&&(o(r,a+1,1),n=!r.times(r).eq(c));break}if(!s&&(o(u,a+1,0),u.times(u).eq(c))){r=u;break}t+=4,s=1}return bn=!0,o(r,a,d.rounding,n)},kn.tangent=kn.tan=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,i=i.sin(),i.s=1,i=Sn(i,new t(1).minus(i.times(i)).sqrt(),n+10,0),t.precision=n,t.rounding=e,o(2==ln||4==ln?i.neg():i,n,e,!0)):new t(NaN)},kn.times=kn.mul=function(n){var e,i,t,r,s,u,f,a,h,d=this,l=d.constructor,p=d.d,g=(n=new l(n)).d;if(n.s*=d.s,!(p&&p[0]&&g&&g[0]))return new l(!n.s||p&&!p[0]&&!g||g&&!g[0]&&!p?NaN:p&&g?0*n.s:n.s/0);for(i=qn(d.e/Rn)+qn(n.e/Rn),a=p.length,h=g.length,h>a&&(s=p,p=g,g=s,u=a,a=h,h=u),s=[],u=a+h,t=u;t--;)s.push(0);for(t=h;--t>=0;){for(e=0,r=a+t;r>t;)f=s[r]+g[t]*p[r-t-1]+e,s[r--]=f%Pn|0,e=f/Pn|0;s[r]=(s[r]+e)%Pn|0}for(;!s[--u];)s.pop();return e?++i:s.shift(),n.d=s,n.e=c(s,i),bn?o(n,l.precision,l.rounding):n},kn.toBinary=function(n,e){return y(this,2,n,e)},kn.toDecimalPlaces=kn.toDP=function(n,e){var t=this,r=t.constructor;return t=new r(t),void 0===n?t:(i(n,0,gn),void 0===e?e=r.rounding:i(e,0,8),o(t,n+t.e+1,e))},kn.toExponential=function(n,e){var t,r=this,s=r.constructor;return void 0===n?t=u(r,!0):(i(n,0,gn),void 0===e?e=s.rounding:i(e,0,8),r=o(new s(r),n+1,e),t=u(r,!0,n+1)),r.isNeg()&&!r.isZero()?"-"+t:t},kn.toFixed=function(n,e){var t,r,s=this,c=s.constructor;return void 0===n?t=u(s):(i(n,0,gn),void 0===e?e=c.rounding:i(e,0,8),r=o(new c(s),n+s.e+1,e),t=u(r,!1,n+r.e+1)),s.isNeg()&&!s.isZero()?"-"+t:t},kn.toFraction=function(n){var i,t,r,s,o,u,c,f,a,d,l,p,g=this,w=g.d,m=g.constructor;if(!w)return new m(g);if(a=t=new m(1),r=f=new m(0),i=new m(r),o=i.e=h(w)-g.e-1,u=o%Rn,i.d[0]=On(10,0>u?Rn+u:u),null==n)n=o>0?i:a;else{if(c=new m(n),!c.isInt()||c.lt(a))throw Error(En+c);n=c.gt(i)?o>0?i:a:c}for(bn=!1,c=new m(e(w)),d=m.precision,m.precision=o=w.length*Rn*2;l=Sn(c,i,0,1,1),s=t.plus(l.times(r)),1!=s.cmp(n);)t=r,r=s,s=a,a=f.plus(l.times(s)),f=s,s=i,i=c.minus(l.times(s)),c=s;return s=Sn(n.minus(t),r,0,1,1),f=f.plus(s.times(a)),t=t.plus(s.times(r)),f.s=a.s=g.s,p=Sn(a,r,o,1).minus(g).abs().cmp(Sn(f,t,o,1).minus(g).abs())<1?[a,r]:[f,t],m.precision=d,bn=!0,p},kn.toHexadecimal=kn.toHex=function(n,e){return y(this,16,n,e)},kn.toNearest=function(n,e){var t=this,r=t.constructor;if(t=new r(t),null==n){if(!t.d)return t;n=new r(1),e=r.rounding}else{if(n=new r(n),void 0!==e&&i(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(bn=!1,4>e&&(e=[4,5,7,8][e]),t=Sn(t,n,0,e,1).times(n),bn=!0,o(t)):(n.s=t.s,t=n),t},kn.toNumber=function(){return+this},kn.toOctal=function(n,e){return y(this,8,n,e)},kn.toPower=kn.pow=function(n){var i,r,s,u,c,f,a,h=this,d=h.constructor,p=+(n=new d(n));if(!(h.d&&n.d&&h.d[0]&&n.d[0]))return new d(On(+h,p));if(h=new d(h),h.eq(1))return h;if(s=d.precision,c=d.rounding,n.eq(1))return o(h,s,c);if(i=qn(n.e/Rn),r=n.d.length-1,a=i>=r,f=h.s,a){if((r=0>p?-p:p)<=Ln)return u=l(d,h,r,s),n.s<0?new d(1).div(u):o(u,s,c)}else if(0>f)return new d(NaN);return f=0>f&&1&n.d[Math.max(i,r)]?-1:1,r=On(+h,p),i=0!=r&&isFinite(r)?new d(r+"").e:qn(p*(Math.log("0."+e(h.d))/Math.LN10+h.e+1)),i>d.maxE+1||i<d.minE-1?new d(i>0?f/0:0):(bn=!1,d.rounding=h.s=1,r=Math.min(12,(i+"").length),u=w(n.times(m(h,s+r)),s),u=o(u,s+5,1),t(u.d,s,c)&&(i=s+10,u=o(w(n.times(m(h,i+r)),i),i+5,1),+e(u.d).slice(s+1,s+15)+1==1e14&&(u=o(u,s+1,0))),u.s=f,bn=!0,d.rounding=c,o(u,s,c))},kn.toPrecision=function(n,e){var t,r=this,s=r.constructor;return void 0===n?t=u(r,r.e<=s.toExpNeg||r.e>=s.toExpPos):(i(n,1,gn),void 0===e?e=s.rounding:i(e,0,8),r=o(new s(r),n,e),t=u(r,n<=r.e||r.e<=s.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+t:t},kn.toSignificantDigits=kn.toSD=function(n,e){var t=this,r=t.constructor;return void 0===n?(n=r.precision,e=r.rounding):(i(n,1,gn),void 0===e?e=r.rounding:i(e,0,8)),o(new r(t),n,e)},kn.toString=function(){var n=this,e=n.constructor,i=u(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},kn.truncated=kn.trunc=function(){return o(new this.constructor(this),this.e+1,1)},kn.valueOf=kn.toJSON=function(){var n=this,e=n.constructor,i=u(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var Sn=function(){function n(n,e,i){var t,r=0,s=n.length;for(n=n.slice();s--;)t=n[s]*e+r,n[s]=t%i|0,r=t/i|0;return r&&n.unshift(r),n}function e(n,e,i,t){var r,s;if(i!=t)s=i>t?1:-1;else for(r=s=0;i>r;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function i(n,e,i,t){for(var r=0;i--;)n[i]-=r,r=n[i]<e[i]?1:0,n[i]=r*t+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(t,r,s,u,c,f){var a,h,d,l,p,g,w,m,v,N,b,x,E,M,y,q,O,F,A,D,Z=t.constructor,P=t.s==r.s?1:-1,R=t.d,L=r.d;if(!(R&&R[0]&&L&&L[0]))return new Z(t.s&&r.s&&(R?!L||R[0]!=L[0]:L)?R&&0==R[0]||!L?0*P:P/0:NaN);for(f?(p=1,h=t.e-r.e):(f=Pn,p=Rn,h=qn(t.e/p)-qn(r.e/p)),A=L.length,O=R.length,v=new Z(P),N=v.d=[],d=0;L[d]==(R[d]||0);d++);if(L[d]>(R[d]||0)&&h--,null==s?(M=s=Z.precision,u=Z.rounding):M=c?s+(t.e-r.e)+1:s,0>M)N.push(1),g=!0;else{if(M=M/p+2|0,d=0,1==A){for(l=0,L=L[0],M++;(O>d||l)&&M--;d++)y=l*f+(R[d]||0),N[d]=y/L|0,l=y%L|0;g=l||O>d}else{for(l=f/(L[0]+1)|0,l>1&&(L=n(L,l,f),R=n(R,l,f),A=L.length,O=R.length),q=A,b=R.slice(0,A),x=b.length;A>x;)b[x++]=0;D=L.slice(),D.unshift(0),F=L[0],L[1]>=f/2&&++F;do l=0,a=e(L,b,A,x),0>a?(E=b[0],A!=x&&(E=E*f+(b[1]||0)),l=E/F|0,l>1?(l>=f&&(l=f-1),w=n(L,l,f),m=w.length,x=b.length,a=e(w,b,m,x),1==a&&(l--,i(w,m>A?D:L,m,f))):(0==l&&(a=l=1),w=L.slice()),m=w.length,x>m&&w.unshift(0),i(b,w,x,f),-1==a&&(x=b.length,a=e(L,b,A,x),1>a&&(l++,i(b,x>A?D:L,x,f))),x=b.length):0===a&&(l++,b=[0]),N[d++]=l,a&&b[0]?b[x++]=R[q]||0:(b=[R[q]],x=1);while((q++<O||void 0!==b[0])&&M--);g=void 0!==b[0]}N[0]||N.shift()}if(1==p)v.e=h,hn=g;else{for(d=1,l=N[0];l>=10;l/=10)d++;v.e=d+h*p-1,o(v,c?s+v.e+1:s,u,g)}return v}}();Nn=I(Nn),mn=new Nn(mn),vn=new Nn(vn),"function"==typeof define&&define.amd?define(function(){return Nn}):"undefined"!=typeof module&&module.exports?module.exports=Nn["default"]=Nn.Decimal=Nn:(n||(n="undefined"!=typeof self&&self&&self.self==self?self:Function("return this")()),dn=n.Decimal,Nn.noConflict=function(){return n.Decimal=dn,Nn},n.Decimal=Nn)}(this);
//# sourceMappingURL=doc/decimal.js.map;
/**
 @license
 Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
 *****************************************************************************/
(function(t,k){"object"===typeof exports&&"undefined"!==typeof module?k(exports):"function"===typeof define&&define.amd?define(["exports"],k):k(t.Rx=t.Rx||{})})(this,function(t){function k(b,a){function c(){this.constructor=b}ob(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}function N(b){return"function"===typeof b}function pb(){try{return la.apply(this,arguments)}catch(b){return m.e=b,m}}function r(b){la=b;return pb}function ma(b){return b.reduce(function(a,c){return a.concat(c instanceof
O?c.errors:c)},[])}function na(b){var a=b.subject;a.next(b.value);a.complete()}function qb(b){b.subject.error(b.err)}function rb(b){var a=this,c=b.source,e=b.subscriber;b=b.context;var d=c.callbackFunc,f=c.args,h=c.scheduler,g=c.subject;if(!g){var g=c.subject=new L,k=function sb(){for(var c=[],b=0;b<arguments.length;b++)c[b-0]=arguments[b];var e=sb.source,b=e.selector,e=e.subject,d=c.shift();d?a.add(h.schedule(da,0,{err:d,subject:e})):b?(c=r(b).apply(this,c),c===m?a.add(h.schedule(da,0,{err:m.e,subject:e})):
    a.add(h.schedule(oa,0,{value:c,subject:e}))):a.add(h.schedule(oa,0,{value:1>=c.length?c[0]:c,subject:e}))};k.source=c;r(d).apply(b,f.concat(k))===m&&a.add(h.schedule(da,0,{err:m.e,subject:g}))}a.add(g.subscribe(e))}function oa(b){var a=b.subject;a.next(b.value);a.complete()}function da(b){b.subject.error(b.err)}function z(b){return b&&"function"===typeof b.schedule}function pa(b){return b&&"function"!==typeof b.subscribe&&"function"===typeof b.then}function p(b,a,c,e){var d=new qa(b,c,e);if(d.closed)return null;
    if(a instanceof g)if(a._isScalar)d.next(a.value),d.complete();else return a.subscribe(d);else if(a&&"number"===typeof a.length){b=0;for(c=a.length;b<c&&!d.closed;b++)d.next(a[b]);d.closed||d.complete()}else{if(pa(a))return a.then(function(c){d.closed||(d.next(c),d.complete())},function(c){return d.error(c)}).then(null,function(c){n.setTimeout(function(){throw c;})}),d;if(a&&"function"===typeof a[A]){a=a[A]();do{b=a.next();if(b.done){d.complete();break}d.next(b.value);if(d.closed)break}while(1)}else if(a&&
        "function"===typeof a[I])if(a=a[I](),"function"!==typeof a.subscribe)d.error(new TypeError("Provided object does not correctly implement Symbol.observable"));else return a.subscribe(new qa(b,c,e));else d.error(new TypeError("You provided "+(null!=a&&"object"===typeof a?"an invalid object":"'"+a+"'")+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."))}return null}function P(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];a=null;z(b[b.length-1])&&
(a=b.pop());return null===a&&1===b.length&&b[0]instanceof g?b[0]:(new E(b,a)).lift(new W(1))}function ra(b){var a=b.value;b=b.subscriber;b.closed||(b.next(a),b.complete())}function ub(b){var a=b.err;b=b.subscriber;b.closed||b.error(a)}function Q(b){return!D(b)&&0<=b-parseFloat(b)+1}function sa(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];var a=Number.POSITIVE_INFINITY,c=null,e=b[b.length-1];z(e)?(c=b.pop(),1<b.length&&"number"===typeof b[b.length-1]&&(a=b.pop())):"number"===typeof e&&
    (a=b.pop());return null===c&&1===b.length&&b[0]instanceof g?b[0]:(new E(b,c)).lift(new W(a))}function ta(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];if(1===b.length)if(D(b[0]))b=b[0];else return b[0];return(new E(b)).lift(new vb)}function wb(b){var a=b.obj,c=b.keys,e=b.index,d=b.subscriber;e===b.length?d.complete():(c=c[e],d.next([c,a[c]]),b.index=e+1,this.schedule(b))}function X(b){return b instanceof Date&&!isNaN(+b)}function ua(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=
    arguments[a];a=b[b.length-1];"function"===typeof a&&b.pop();return(new E(b)).lift(new va(a))}function wa(b,a){if("function"!==typeof b)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return this.lift(new xa(b,a))}function xb(b,a){void 0===a&&(a=null);return new J({method:"GET",url:b,headers:a})}function yb(b,a,c){return new J({method:"POST",url:b,body:a,headers:c})}function zb(b,a){return new J({method:"DELETE",url:b,headers:a})}function Ab(b,a,c){return new J({method:"PUT",
    url:b,body:a,headers:c})}function Bb(b,a,c){return new J({method:"PATCH",url:b,body:a,headers:c})}function Cb(b,a){return(new J({method:"GET",url:b,responseType:"json",headers:a})).lift(new xa(function(c,a){return c.response},null))}function Db(b){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];for(var c=a.length,e=0;e<c;e++){var d=a[e],f;for(f in d)d.hasOwnProperty(f)&&(b[f]=d[f])}return b}function ya(b){var a=b.subscriber,c=b.context;c&&a.closeContext(c);a.closed||(b.context=a.openContext(),
    b.context.closeAction=this.schedule(b,b.bufferTimeSpan))}function Eb(b){var a=b.bufferCreationInterval,c=b.bufferTimeSpan,e=b.subscriber,d=b.scheduler,f=e.openContext();e.closed||(e.add(f.closeAction=d.schedule(za,c,{subscriber:e,context:f})),this.schedule(b,a))}function za(b){b.subscriber.closeContext(b.context)}function Aa(b){b=new Fb(b);var a=this.lift(b);return b.caught=a}function Ba(b,a,c){void 0===c&&(c=Number.POSITIVE_INFINITY);"number"===typeof a&&(c=a,a=null);return this.lift(new Ca(b,a,
    c))}function Da(b,a,c){void 0===c&&(c=Number.POSITIVE_INFINITY);"number"===typeof a&&(c=a,a=null);return this.lift(new Ea(b,a,c))}function Gb(b){b.debouncedNext()}function Hb(){return function(){function b(){this._values=[]}b.prototype.add=function(a){this.has(a)||this._values.push(a)};b.prototype.has=function(a){return-1!==this._values.indexOf(a)};Object.defineProperty(b.prototype,"size",{get:function(){return this._values.length},enumerable:!0,configurable:!0});b.prototype.clear=function(){this._values.length=
    0};return b}()}function Fa(b,a){return this.lift(new Ib(b,a))}function Ga(b,a,c){return this.lift(new Jb(b,a,c))}function ea(b,a){return this.lift(new Kb(b,a))}function Ha(b){return this.lift(new Lb(b))}function Mb(b){b.clearThrottle()}function Ia(b){return b(this)}function G(b,a){var c;c="function"===typeof b?b:function(){return b};if("function"===typeof a)return this.lift(new Nb(c,a));a=Object.create(this,Ob);a.source=this;a.subjectFactory=c;return a}function Pb(b,a){function c(){return!c.pred.apply(c.thisArg,
    arguments)}c.pred=b;c.thisArg=a;return c}function Qb(b,a){return function(c){var e=c;for(c=0;c<a;c++)if(e=e[b[c]],"undefined"===typeof e)return;return e}}function Rb(b){var a=b.period;b.subscriber.notifyNext();this.schedule(b,a)}function Sb(){return new v}function Ja(){return this.lift(new Tb)}function Ub(b){b.subscriber.clearThrottle()}function Vb(b){var a=b.subscriber,c=b.windowTimeSpan,e=b.window;e&&a.closeWindow(e);b.window=a.openWindow();this.schedule(b,c)}function Wb(b){var a=b.windowTimeSpan,
    c=b.subscriber,e=b.scheduler,d=b.windowCreationInterval,f=c.openWindow(),h={action:this,subscription:null};h.subscription=e.schedule(Ka,a,{subscriber:c,window:f,context:h});this.add(h.subscription);this.schedule(b,d)}function Ka(b){var a=b.subscriber,c=b.window;(b=b.context)&&b.action&&b.subscription&&b.action.remove(b.subscription);a.closeWindow(c)}function La(b,a){for(var c=0,e=a.length;c<e;c++)for(var d=a[c],f=Object.getOwnPropertyNames(d.prototype),h=0,g=f.length;h<g;h++){var k=f[h];b.prototype[k]=
    d.prototype[k]}}var ob=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])},Xb="undefined"!==typeof self&&"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Yb="undefined"!==typeof global&&global,n="undefined"!==typeof window&&window||Yb||Xb;if(!n)throw Error("RxJS could not find any global context (window, self, global)");var D=Array.isArray||function(b){return b&&"number"===
        typeof b.length},m={e:{}},la,O=function(b){function a(c){b.call(this);this.errors=c;c=Error.call(this,c?c.length+" errors occurred during unsubscription:\n  "+c.map(function(c,a){return a+1+") "+c.toString()}).join("\n  "):"");this.name=c.name="UnsubscriptionError";this.stack=c.stack;this.message=c.message}k(a,b);return a}(Error),u=function(){function b(a){this.closed=!1;this._subscriptions=this._parents=this._parent=null;a&&(this._unsubscribe=a)}b.prototype.unsubscribe=function(){var a=!1,c;if(!this.closed){var b=
    this._parent,d=this._parents,f=this._unsubscribe,h=this._subscriptions;this.closed=!0;this._subscriptions=this._parents=this._parent=null;for(var g=-1,k=d?d.length:0;b;)b.remove(this),b=++g<k&&d[g]||null;N(f)&&(b=r(f).call(this),b===m&&(a=!0,c=c||(m.e instanceof O?ma(m.e.errors):[m.e])));if(D(h))for(g=-1,k=h.length;++g<k;)b=h[g],null!=b&&"object"===typeof b&&(b=r(b.unsubscribe).call(b),b===m&&(a=!0,c=c||[],b=m.e,b instanceof O?c=c.concat(ma(b.errors)):c.push(b)));if(a)throw new O(c);}};b.prototype.add=
    function(a){if(!a||a===b.EMPTY)return b.EMPTY;if(a===this)return this;var c=a;switch(typeof a){case "function":c=new b(a);case "object":if(c.closed||"function"!==typeof c.unsubscribe)return c;if(this.closed)return c.unsubscribe(),c;"function"!==typeof c._addParent&&(a=c,c=new b,c._subscriptions=[a]);break;default:throw Error("unrecognized teardown "+a+" added to Subscription.");}(this._subscriptions||(this._subscriptions=[])).push(c);c._addParent(this);return c};b.prototype.remove=function(a){var c=
    this._subscriptions;c&&(a=c.indexOf(a),-1!==a&&c.splice(a,1))};b.prototype._addParent=function(a){var c=this._parent,b=this._parents;c&&c!==a?b?-1===b.indexOf(a)&&b.push(a):this._parents=[a]:this._parent=a};b.EMPTY=function(a){a.closed=!0;return a}(new b);return b}(),Y={closed:!0,next:function(b){},error:function(b){throw b;},complete:function(){}},fa=n.Symbol,R="function"===typeof fa&&"function"===typeof fa.for?fa.for("rxSubscriber"):"@@rxSubscriber",l=function(b){function a(c,e,d){b.call(this);
    this.syncErrorValue=null;this.isStopped=this.syncErrorThrowable=this.syncErrorThrown=!1;switch(arguments.length){case 0:this.destination=Y;break;case 1:if(!c){this.destination=Y;break}if("object"===typeof c){c instanceof a?(this.destination=c,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new Ma(this,c));break}default:this.syncErrorThrowable=!0,this.destination=new Ma(this,c,e,d)}}k(a,b);a.prototype[R]=function(){return this};a.create=function(c,b,d){c=new a(c,b,d);c.syncErrorThrowable=
    !1;return c};a.prototype.next=function(c){this.isStopped||this._next(c)};a.prototype.error=function(c){this.isStopped||(this.isStopped=!0,this._error(c))};a.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())};a.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,b.prototype.unsubscribe.call(this))};a.prototype._next=function(c){this.destination.next(c)};a.prototype._error=function(c){this.destination.error(c);this.unsubscribe()};a.prototype._complete=function(){this.destination.complete();
    this.unsubscribe()};a.prototype._unsubscribeAndRecycle=function(){var c=this._parent,a=this._parents;this._parents=this._parent=null;this.unsubscribe();this.isStopped=this.closed=!1;this._parent=c;this._parents=a;return this};return a}(u),Ma=function(b){function a(c,a,d,f){b.call(this);this._parentSubscriber=c;var e;c=this;N(a)?e=a:a&&(e=a.next,d=a.error,f=a.complete,a!==Y&&(c=Object.create(a),N(c.unsubscribe)&&this.add(c.unsubscribe.bind(c)),c.unsubscribe=this.unsubscribe.bind(this)));this._context=
    c;this._next=e;this._error=d;this._complete=f}k(a,b);a.prototype.next=function(c){if(!this.isStopped&&this._next){var a=this._parentSubscriber;a.syncErrorThrowable?this.__tryOrSetError(a,this._next,c)&&this.unsubscribe():this.__tryOrUnsub(this._next,c)}};a.prototype.error=function(c){if(!this.isStopped){var a=this._parentSubscriber;if(this._error)a.syncErrorThrowable?this.__tryOrSetError(a,this._error,c):this.__tryOrUnsub(this._error,c),this.unsubscribe();else if(a.syncErrorThrowable)a.syncErrorValue=
    c,a.syncErrorThrown=!0,this.unsubscribe();else throw this.unsubscribe(),c;}};a.prototype.complete=function(){var c=this;if(!this.isStopped){var a=this._parentSubscriber;if(this._complete){var b=function(){return c._complete.call(c._context)};a.syncErrorThrowable?this.__tryOrSetError(a,b):this.__tryOrUnsub(b)}this.unsubscribe()}};a.prototype.__tryOrUnsub=function(c,a){try{c.call(this._context,a)}catch(d){throw this.unsubscribe(),d;}};a.prototype.__tryOrSetError=function(c,a,b){try{a.call(this._context,
    b)}catch(f){return c.syncErrorValue=f,c.syncErrorThrown=!0}return!1};a.prototype._unsubscribe=function(){var c=this._parentSubscriber;this._parentSubscriber=this._context=null;c.unsubscribe()};return a}(l),I=function(b){var a=b.Symbol;"function"===typeof a?a.observable?b=a.observable:(b=a("observable"),a.observable=b):b="@@observable";return b}(n),g=function(){function b(a){this._isScalar=!1;a&&(this._subscribe=a)}b.prototype.lift=function(a){var c=new b;c.source=this;c.operator=a;return c};b.prototype.subscribe=
    function(a,c,b){var e=this.operator;a:{if(a){if(a instanceof l)break a;if(a[R]){a=a[R]();break a}}a=a||c||b?new l(a,c,b):new l(Y)}e?e.call(a,this.source):a.add(this._trySubscribe(a));if(a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a};b.prototype._trySubscribe=function(a){try{return this._subscribe(a)}catch(c){a.syncErrorThrown=!0,a.syncErrorValue=c,a.error(c)}};b.prototype.forEach=function(a,c){var b=this;c||(n.Rx&&n.Rx.config&&n.Rx.config.Promise?
    c=n.Rx.config.Promise:n.Promise&&(c=n.Promise));if(!c)throw Error("no Promise impl found");return new c(function(c,e){var d;d=b.subscribe(function(c){if(d)try{a(c)}catch(C){e(C),d.unsubscribe()}else a(c)},e,c)})};b.prototype._subscribe=function(a){return this.source.subscribe(a)};b.prototype[I]=function(){return this};b.create=function(a){return new b(a)};return b}(),H=function(b){function a(){var c=b.call(this,"object unsubscribed");this.name=c.name="ObjectUnsubscribedError";this.stack=c.stack;this.message=
    c.message}k(a,b);return a}(Error),Na=function(b){function a(c,a){b.call(this);this.subject=c;this.subscriber=a;this.closed=!1}k(a,b);a.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var c=this.subject,a=c.observers;this.subject=null;!a||0===a.length||c.isStopped||c.closed||(c=a.indexOf(this.subscriber),-1!==c&&a.splice(c,1))}};return a}(u),Oa=function(b){function a(c){b.call(this,c);this.destination=c}k(a,b);return a}(l),v=function(b){function a(){b.call(this);this.observers=[];
    this.hasError=this.isStopped=this.closed=!1;this.thrownError=null}k(a,b);a.prototype[R]=function(){return new Oa(this)};a.prototype.lift=function(c){var a=new Z(this,this);a.operator=c;return a};a.prototype.next=function(c){if(this.closed)throw new H;if(!this.isStopped)for(var a=this.observers,b=a.length,a=a.slice(),f=0;f<b;f++)a[f].next(c)};a.prototype.error=function(c){if(this.closed)throw new H;this.hasError=!0;this.thrownError=c;this.isStopped=!0;for(var a=this.observers,b=a.length,a=a.slice(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   f=0;f<b;f++)a[f].error(c);this.observers.length=0};a.prototype.complete=function(){if(this.closed)throw new H;this.isStopped=!0;for(var c=this.observers,a=c.length,c=c.slice(),b=0;b<a;b++)c[b].complete();this.observers.length=0};a.prototype.unsubscribe=function(){this.closed=this.isStopped=!0;this.observers=null};a.prototype._trySubscribe=function(c){if(this.closed)throw new H;return b.prototype._trySubscribe.call(this,c)};a.prototype._subscribe=function(c){if(this.closed)throw new H;if(this.hasError)return c.error(this.thrownError),
    u.EMPTY;if(this.isStopped)return c.complete(),u.EMPTY;this.observers.push(c);return new Na(this,c)};a.prototype.asObservable=function(){var c=new g;c.source=this;return c};a.create=function(c,a){return new Z(c,a)};return a}(g),Z=function(b){function a(c,a){b.call(this);this.destination=c;this.source=a}k(a,b);a.prototype.next=function(c){var a=this.destination;a&&a.next&&a.next(c)};a.prototype.error=function(c){var a=this.destination;a&&a.error&&this.destination.error(c)};a.prototype.complete=function(){var c=
    this.destination;c&&c.complete&&this.destination.complete()};a.prototype._subscribe=function(c){return this.source?this.source.subscribe(c):u.EMPTY};return a}(v),L=function(b){function a(){b.apply(this,arguments);this.value=null;this.hasCompleted=this.hasNext=!1}k(a,b);a.prototype._subscribe=function(c){return this.hasError?(c.error(this.thrownError),u.EMPTY):this.hasCompleted&&this.hasNext?(c.next(this.value),c.complete(),u.EMPTY):b.prototype._subscribe.call(this,c)};a.prototype.next=function(c){this.hasCompleted||
(this.value=c,this.hasNext=!0)};a.prototype.error=function(c){this.hasCompleted||b.prototype.error.call(this,c)};a.prototype.complete=function(){this.hasCompleted=!0;this.hasNext&&b.prototype.next.call(this,this.value);b.prototype.complete.call(this)};return a}(v),Zb=function(b){function a(c,a,d,f,h){b.call(this);this.callbackFunc=c;this.selector=a;this.args=d;this.context=f;this.scheduler=h}k(a,b);a.create=function(c,b,d){void 0===b&&(b=void 0);return function(){for(var e=[],h=0;h<arguments.length;h++)e[h-
0]=arguments[h];return new a(c,b,e,this,d)}};a.prototype._subscribe=function(c){var b=this.callbackFunc,d=this.args,f=this.scheduler,h=this.subject;if(f)return f.schedule(a.dispatch,0,{source:this,subscriber:c,context:this.context});h||(h=this.subject=new L,f=function C(){for(var c=[],a=0;a<arguments.length;a++)c[a-0]=arguments[a];var b=C.source,a=b.selector,b=b.subject;a?(c=r(a).apply(this,c),c===m?b.error(m.e):(b.next(c),b.complete())):(b.next(1>=c.length?c[0]:c),b.complete())},f.source=this,r(b).apply(this.context,
    d.concat(f))===m&&h.error(m.e));return h.subscribe(c)};a.dispatch=function(c){var a=this,b=c.source,f=c.subscriber;c=c.context;var h=b.callbackFunc,g=b.args,k=b.scheduler,B=b.subject;if(!B){var B=b.subject=new L,l=function tb(){for(var c=[],b=0;b<arguments.length;b++)c[b-0]=arguments[b];var e=tb.source,b=e.selector,e=e.subject;b?(c=r(b).apply(this,c),c===m?a.add(k.schedule(qb,0,{err:m.e,subject:e})):a.add(k.schedule(na,0,{value:c,subject:e}))):a.add(k.schedule(na,0,{value:1>=c.length?c[0]:c,subject:e}))};
    l.source=b;r(h).apply(c,g.concat(l))===m&&B.error(m.e)}a.add(B.subscribe(f))};return a}(g).create;g.bindCallback=Zb;var $b=function(b){function a(c,a,d,f,h){b.call(this);this.callbackFunc=c;this.selector=a;this.args=d;this.context=f;this.scheduler=h}k(a,b);a.create=function(c,b,d){void 0===b&&(b=void 0);return function(){for(var e=[],h=0;h<arguments.length;h++)e[h-0]=arguments[h];return new a(c,b,e,this,d)}};a.prototype._subscribe=function(c){var a=this.callbackFunc,b=this.args,f=this.scheduler,h=
    this.subject;if(f)return f.schedule(rb,0,{source:this,subscriber:c,context:this.context});h||(h=this.subject=new L,f=function C(){for(var c=[],a=0;a<arguments.length;a++)c[a-0]=arguments[a];var b=C.source,a=b.selector,b=b.subject,e=c.shift();e?b.error(e):a?(c=r(a).apply(this,c),c===m?b.error(m.e):(b.next(c),b.complete())):(b.next(1>=c.length?c[0]:c),b.complete())},f.source=this,r(a).apply(this.context,b.concat(f))===m&&h.error(m.e));return h.subscribe(c)};return a}(g).create;g.bindNodeCallback=$b;
    var ga=function(b){function a(c,a){b.call(this);this.value=c;this.scheduler=a;this._isScalar=!0;a&&(this._isScalar=!1)}k(a,b);a.create=function(c,b){return new a(c,b)};a.dispatch=function(c){var a=c.value,b=c.subscriber;c.done?b.complete():(b.next(a),b.closed||(c.done=!0,this.schedule(c)))};a.prototype._subscribe=function(c){var b=this.value,d=this.scheduler;if(d)return d.schedule(a.dispatch,0,{done:!1,value:b,subscriber:c});c.next(b);c.closed||c.complete()};return a}(g),F=function(b){function a(c){b.call(this);
            this.scheduler=c}k(a,b);a.create=function(c){return new a(c)};a.dispatch=function(c){c.subscriber.complete()};a.prototype._subscribe=function(c){var b=this.scheduler;if(b)return b.schedule(a.dispatch,0,{subscriber:c});c.complete()};return a}(g),E=function(b){function a(c,a){b.call(this);this.array=c;this.scheduler=a;a||1!==c.length||(this._isScalar=!0,this.value=c[0])}k(a,b);a.create=function(c,b){return new a(c,b)};a.of=function(){for(var c=[],b=0;b<arguments.length;b++)c[b-0]=arguments[b];b=c[c.length-
        1];z(b)?c.pop():b=null;var d=c.length;return 1<d?new a(c,b):1===d?new ga(c[0],b):new F(b)};a.dispatch=function(c){var a=c.array,b=c.index,f=c.subscriber;b>=c.count?f.complete():(f.next(a[b]),f.closed||(c.index=b+1,this.schedule(c)))};a.prototype._subscribe=function(c){var b=this.array,d=b.length,f=this.scheduler;if(f)return f.schedule(a.dispatch,0,{array:b,index:0,count:d,subscriber:c});for(f=0;f<d&&!c.closed;f++)c.next(b[f]);c.complete()};return a}(g),q=function(b){function a(){b.apply(this,arguments)}
            k(a,b);a.prototype.notifyNext=function(c,a,b,f,h){this.destination.next(a)};a.prototype.notifyError=function(c,a){this.destination.error(c)};a.prototype.notifyComplete=function(c){this.destination.complete()};return a}(l),A=function(b){var a=b.Symbol;if("function"===typeof a)return a.iterator||(a.iterator=a("iterator polyfill")),a.iterator;if((a=b.Set)&&"function"===typeof(new a)["@@iterator"])return"@@iterator";if(b=b.Map)for(var a=Object.getOwnPropertyNames(b.prototype),c=0;c<a.length;++c){var e=
            a[c];if("entries"!==e&&"size"!==e&&b.prototype[e]===b.prototype.entries)return e}return"@@iterator"}(n),qa=function(b){function a(c,a,d){b.call(this);this.parent=c;this.outerValue=a;this.outerIndex=d;this.index=0}k(a,b);a.prototype._next=function(c){this.parent.notifyNext(this.outerValue,c,this.outerIndex,this.index++,this)};a.prototype._error=function(c){this.parent.notifyError(c,this);this.unsubscribe()};a.prototype._complete=function(){this.parent.notifyComplete(this);this.unsubscribe()};return a}(l),
        Pa={},ha=function(){function b(a){this.project=a}b.prototype.call=function(a,c){return c.subscribe(new ac(a,this.project))};return b}(),ac=function(b){function a(c,a){b.call(this,c);this.project=a;this.active=0;this.values=[];this.observables=[]}k(a,b);a.prototype._next=function(c){this.values.push(Pa);this.observables.push(c)};a.prototype._complete=function(){var c=this.observables,a=c.length;if(0===a)this.destination.complete();else{this.toRespond=this.active=a;for(var b=0;b<a;b++){var f=c[b];this.add(p(this,
        f,f,b))}}};a.prototype.notifyComplete=function(c){0===--this.active&&this.destination.complete()};a.prototype.notifyNext=function(c,a,b,f,h){c=this.values;f=c[b];f=this.toRespond?f===Pa?--this.toRespond:this.toRespond:0;c[b]=a;0===f&&(this.project?this._tryProject(c):this.destination.next(c.slice()))};a.prototype._tryProject=function(c){var a;try{a=this.project.apply(this,c)}catch(d){this.destination.error(d);return}this.destination.next(a)};return a}(q);g.combineLatest=function(){for(var b=[],a=
        0;a<arguments.length;a++)b[a-0]=arguments[a];var c=a=null;z(b[b.length-1])&&(c=b.pop());"function"===typeof b[b.length-1]&&(a=b.pop());1===b.length&&D(b[0])&&(b=b[0]);return(new E(b,c)).lift(new ha(a))};var W=function(){function b(a){this.concurrent=a}b.prototype.call=function(a,c){return c.subscribe(new bc(a,this.concurrent))};return b}(),bc=function(b){function a(c,a){b.call(this,c);this.concurrent=a;this.hasCompleted=!1;this.buffer=[];this.active=0}k(a,b);a.prototype._next=function(c){this.active<
    this.concurrent?(this.active++,this.add(p(this,c))):this.buffer.push(c)};a.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&this.destination.complete()};a.prototype.notifyComplete=function(c){var a=this.buffer;this.remove(c);this.active--;0<a.length?this._next(a.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()};return a}(q);g.concat=P;var dc=function(b){function a(c){b.call(this);this.observableFactory=c}k(a,b);a.create=function(c){return new a(c)};
        a.prototype._subscribe=function(c){return new cc(c,this.observableFactory)};return a}(g),cc=function(b){function a(c,a){b.call(this,c);this.factory=a;this.tryDefer()}k(a,b);a.prototype.tryDefer=function(){try{this._callFactory()}catch(c){this._error(c)}};a.prototype._callFactory=function(){var c=this.factory();c&&this.add(p(this,c))};return a}(q);g.defer=dc.create;g.empty=F.create;var fc=function(b){function a(c,a){b.call(this);this.sources=c;this.resultSelector=a}k(a,b);a.create=function(){for(var c=
        [],b=0;b<arguments.length;b++)c[b-0]=arguments[b];if(null===c||0===arguments.length)return new F;b=null;"function"===typeof c[c.length-1]&&(b=c.pop());1===c.length&&D(c[0])&&(c=c[0]);return 0===c.length?new F:new a(c,b)};a.prototype._subscribe=function(c){return new ec(c,this.sources,this.resultSelector)};return a}(g),ec=function(b){function a(c,a,d){b.call(this,c);this.sources=a;this.resultSelector=d;this.haveValues=this.completed=0;this.total=c=a.length;this.values=Array(c);for(d=0;d<c;d++){var e=
        p(this,a[d],null,d);e&&(e.outerIndex=d,this.add(e))}}k(a,b);a.prototype.notifyNext=function(c,a,b,f,h){this.values[b]=a;h._hasValue||(h._hasValue=!0,this.haveValues++)};a.prototype.notifyComplete=function(c){var a=this.destination,b=this.haveValues,f=this.resultSelector,h=this.values,g=h.length;c._hasValue?(this.completed++,this.completed===g&&(b===g&&(c=f?f.apply(this,h):h,a.next(c)),a.complete())):a.complete()};return a}(q);g.forkJoin=fc.create;var Qa=function(b){function a(c,a){b.call(this);this.promise=
        c;this.scheduler=a}k(a,b);a.create=function(c,b){return new a(c,b)};a.prototype._subscribe=function(c){var a=this,b=this.promise,f=this.scheduler;if(null==f)this._isScalar?c.closed||(c.next(this.value),c.complete()):b.then(function(b){a.value=b;a._isScalar=!0;c.closed||(c.next(b),c.complete())},function(a){c.closed||c.error(a)}).then(null,function(c){n.setTimeout(function(){throw c;})});else if(this._isScalar){if(!c.closed)return f.schedule(ra,0,{value:this.value,subscriber:c})}else b.then(function(b){a.value=
        b;a._isScalar=!0;c.closed||c.add(f.schedule(ra,0,{value:b,subscriber:c}))},function(a){c.closed||c.add(f.schedule(ub,0,{err:a,subscriber:c}))}).then(null,function(c){n.setTimeout(function(){throw c;})})};return a}(g),ic=function(b){function a(c,a){b.call(this);this.scheduler=a;if(null==c)throw Error("iterator cannot be null.");if((a=c[A])||"string"!==typeof c)if(a||void 0===c.length){if(!a)throw new TypeError("object is not iterable");c=c[A]()}else c=new gc(c);else c=new hc(c);this.iterator=c}k(a,
        b);a.create=function(c,b){return new a(c,b)};a.dispatch=function(c){var a=c.index,b=c.iterator,f=c.subscriber;if(c.hasError)f.error(c.error);else{var h=b.next();h.done?f.complete():(f.next(h.value),c.index=a+1,f.closed?"function"===typeof b.return&&b.return():this.schedule(c))}};a.prototype._subscribe=function(c){var b=this.iterator,d=this.scheduler;if(d)return d.schedule(a.dispatch,0,{index:0,iterator:b,subscriber:c});do{d=b.next();if(d.done){c.complete();break}else c.next(d.value);if(c.closed){"function"===
    typeof b.return&&b.return();break}}while(1)};return a}(g),hc=function(){function b(a,c,b){void 0===c&&(c=0);void 0===b&&(b=a.length);this.str=a;this.idx=c;this.len=b}b.prototype[A]=function(){return this};b.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.str.charAt(this.idx++)}:{done:!0,value:void 0}};return b}(),gc=function(){function b(a,c,b){void 0===c&&(c=0);if(void 0===b)if(b=+a.length,isNaN(b))b=0;else if(0!==b&&"number"===typeof b&&n.isFinite(b)){var e;e=+b;e=0===e?e:
        isNaN(e)?e:0>e?-1:1;b=e*Math.floor(Math.abs(b));b=0>=b?0:b>Ra?Ra:b}this.arr=a;this.idx=c;this.len=b}b.prototype[A]=function(){return this};b.prototype.next=function(){return this.idx<this.len?{done:!1,value:this.arr[this.idx++]}:{done:!0,value:void 0}};return b}(),Ra=Math.pow(2,53)-1,jc=function(b){function a(c,a){b.call(this);this.arrayLike=c;this.scheduler=a;a||1!==c.length||(this._isScalar=!0,this.value=c[0])}k(a,b);a.create=function(c,b){var e=c.length;return 0===e?new F:1===e?new ga(c[0],b):
        new a(c,b)};a.dispatch=function(c){var a=c.arrayLike,b=c.index,f=c.subscriber;f.closed||(b>=c.length?f.complete():(f.next(a[b]),c.index=b+1,this.schedule(c)))};a.prototype._subscribe=function(c){var b=this.arrayLike,d=this.scheduler,f=b.length;if(d)return d.schedule(a.dispatch,0,{arrayLike:b,index:0,length:f,subscriber:c});for(d=0;d<f&&!c.closed;d++)c.next(b[d]);c.complete()};return a}(g),w=function(){function b(a,c,b){this.kind=a;this.value=c;this.error=b;this.hasValue="N"===a}b.prototype.observe=
        function(a){switch(this.kind){case "N":return a.next&&a.next(this.value);case "E":return a.error&&a.error(this.error);case "C":return a.complete&&a.complete()}};b.prototype.do=function(a,c,b){switch(this.kind){case "N":return a&&a(this.value);case "E":return c&&c(this.error);case "C":return b&&b()}};b.prototype.accept=function(a,c,b){return a&&"function"===typeof a.next?this.observe(a):this.do(a,c,b)};b.prototype.toObservable=function(){switch(this.kind){case "N":return g.of(this.value);case "E":return g.throw(this.error);
        case "C":return g.empty()}throw Error("unexpected notification kind value");};b.createNext=function(a){return"undefined"!==typeof a?new b("N",a):this.undefinedValueNotification};b.createError=function(a){return new b("E",void 0,a)};b.createComplete=function(){return this.completeNotification};b.completeNotification=new b("C");b.undefinedValueNotification=new b("N",void 0);return b}(),kc=function(){function b(a,c){void 0===c&&(c=0);this.scheduler=a;this.delay=c}b.prototype.call=function(a,c){return c.subscribe(new ia(a,
        this.scheduler,this.delay))};return b}(),ia=function(b){function a(c,a,d){void 0===d&&(d=0);b.call(this,c);this.scheduler=a;this.delay=d}k(a,b);a.dispatch=function(c){c.notification.observe(c.destination);this.unsubscribe()};a.prototype.scheduleMessage=function(c){this.add(this.scheduler.schedule(a.dispatch,this.delay,new lc(c,this.destination)))};a.prototype._next=function(c){this.scheduleMessage(w.createNext(c))};a.prototype._error=function(c){this.scheduleMessage(w.createError(c))};a.prototype._complete=
        function(){this.scheduleMessage(w.createComplete())};return a}(l),lc=function(){return function(b,a){this.notification=b;this.destination=a}}(),Sa=function(b){function a(c,a){b.call(this,null);this.ish=c;this.scheduler=a}k(a,b);a.create=function(c,b){if(null!=c){if("function"===typeof c[I])return c instanceof g&&!b?c:new a(c,b);if(D(c))return new E(c,b);if(pa(c))return new Qa(c,b);if("function"===typeof c[A]||"string"===typeof c)return new ic(c,b);if(c&&"number"===typeof c.length)return new jc(c,
        b)}throw new TypeError((null!==c&&typeof c||c)+" is not observable");};a.prototype._subscribe=function(c){var a=this.ish,b=this.scheduler;return null==b?a[I]().subscribe(c):a[I]().subscribe(new ia(c,b,0))};return a}(g);g.from=Sa.create;var Ta=Object.prototype.toString,mc=function(b){function a(c,a,d,f){b.call(this);this.sourceObj=c;this.eventName=a;this.selector=d;this.options=f}k(a,b);a.create=function(c,b,d,f){N(d)&&(f=d,d=void 0);return new a(c,b,f,d)};a.setupSubscription=function(c,b,d,f,h){var e;
        if(c&&"[object NodeList]"===Ta.call(c)||c&&"[object HTMLCollection]"===Ta.call(c))for(var g=0,k=c.length;g<k;g++)a.setupSubscription(c[g],b,d,f,h);else if(c&&"function"===typeof c.addEventListener&&"function"===typeof c.removeEventListener)c.addEventListener(b,d,h),e=function(){return c.removeEventListener(b,d)};else if(c&&"function"===typeof c.on&&"function"===typeof c.off)c.on(b,d),e=function(){return c.off(b,d)};else if(c&&"function"===typeof c.addListener&&"function"===typeof c.removeListener)c.addListener(b,
            d),e=function(){return c.removeListener(b,d)};else throw new TypeError("Invalid event target");f.add(new u(e))};a.prototype._subscribe=function(c){var b=this.selector;a.setupSubscription(this.sourceObj,this.eventName,b?function(){for(var a=[],e=0;e<arguments.length;e++)a[e-0]=arguments[e];a=r(b).apply(void 0,a);a===m?c.error(m.e):c.next(a)}:function(a){return c.next(a)},c,this.options)};return a}(g).create;g.fromEvent=mc;var nc=function(b){function a(c,a,d){b.call(this);this.addHandler=c;this.removeHandler=
        a;this.selector=d}k(a,b);a.create=function(c,b,d){return new a(c,b,d)};a.prototype._subscribe=function(c){var a=this,b=this.removeHandler,f=this.selector?function(){for(var b=[],e=0;e<arguments.length;e++)b[e-0]=arguments[e];a._callSelector(c,b)}:function(a){c.next(a)},h=this._callAddHandler(f,c);N(b)&&c.add(new u(function(){b(f,h)}))};a.prototype._callSelector=function(c,a){try{var b=this.selector.apply(this,a);c.next(b)}catch(f){c.error(f)}};a.prototype._callAddHandler=function(c,a){try{return this.addHandler(c)||
        null}catch(d){a.error(d)}};return a}(g).create;g.fromEventPattern=nc;g.fromPromise=Qa.create;var Ua=function(b){return b},oc=function(b){function a(c,a,d,f,h){b.call(this);this.initialState=c;this.condition=a;this.iterate=d;this.resultSelector=f;this.scheduler=h}k(a,b);a.create=function(c,b,d,f,h){return 1==arguments.length?new a(c.initialState,c.condition,c.iterate,c.resultSelector||Ua,c.scheduler):void 0===f||z(f)?new a(c,b,d,Ua,f):new a(c,b,d,f,h)};a.prototype._subscribe=function(c){var b=this.initialState;
        if(this.scheduler)return this.scheduler.schedule(a.dispatch,0,{subscriber:c,iterate:this.iterate,condition:this.condition,resultSelector:this.resultSelector,state:b});var d=this.condition,f=this.resultSelector,h=this.iterate;do{if(d){var g=void 0;try{g=d(b)}catch(C){c.error(C);break}if(!g){c.complete();break}}g=void 0;try{g=f(b)}catch(C){c.error(C);break}c.next(g);if(c.closed)break;try{b=h(b)}catch(C){c.error(C);break}}while(1)};a.dispatch=function(c){var a=c.subscriber,b=c.condition;if(!a.closed){if(c.needIterate)try{c.state=
        c.iterate(c.state)}catch(y){a.error(y);return}else c.needIterate=!0;if(b){var f=void 0;try{f=b(c.state)}catch(y){a.error(y);return}if(!f){a.complete();return}if(a.closed)return}var h;try{h=c.resultSelector(c.state)}catch(y){a.error(y);return}if(!a.closed&&(a.next(h),!a.closed))return this.schedule(c)}};return a}(g);g.generate=oc.create;var qc=function(b){function a(c,a,d){b.call(this);this.condition=c;this.thenSource=a;this.elseSource=d}k(a,b);a.create=function(c,b,d){return new a(c,b,d)};a.prototype._subscribe=
        function(c){return new pc(c,this.condition,this.thenSource,this.elseSource)};return a}(g),pc=function(b){function a(c,a,d,f){b.call(this,c);this.condition=a;this.thenSource=d;this.elseSource=f;this.tryIf()}k(a,b);a.prototype.tryIf=function(){var c=this.condition,a=this.thenSource,b=this.elseSource,f;try{(c=(f=c())?a:b)?this.add(p(this,c)):this._complete()}catch(h){this._error(h)}};return a}(q);g.if=qc.create;var S=function(b){function a(c,a){b.call(this,c,a);this.scheduler=c;this.work=a;this.pending=
        !1}k(a,b);a.prototype.schedule=function(c,a){void 0===a&&(a=0);if(this.closed)return this;this.state=c;this.pending=!0;c=this.id;var b=this.scheduler;null!=c&&(this.id=this.recycleAsyncId(b,c,a));this.delay=a;this.id=this.id||this.requestAsyncId(b,this.id,a);return this};a.prototype.requestAsyncId=function(c,a,b){void 0===b&&(b=0);return n.setInterval(c.flush.bind(c,this),b)};a.prototype.recycleAsyncId=function(c,a,b){void 0===b&&(b=0);return null!==b&&this.delay===b&&!1===this.pending?a:(n.clearInterval(a),
        void 0)};a.prototype.execute=function(c,a){if(this.closed)return Error("executing a cancelled action");this.pending=!1;if(c=this._execute(c,a))return c;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))};a.prototype._execute=function(c,a){a=!1;var b=void 0;try{this.work(c)}catch(f){a=!0,b=!!f&&f||Error(f)}if(a)return this.unsubscribe(),b};a.prototype._unsubscribe=function(){var c=this.id,a=this.scheduler,b=a.actions,f=b.indexOf(this);this.state=this.delay=
        this.work=null;this.pending=!1;this.scheduler=null;-1!==f&&b.splice(f,1);null!=c&&(this.id=this.recycleAsyncId(a,c,null))};return a}(function(b){function a(c,a){b.call(this)}k(a,b);a.prototype.schedule=function(c,a){return this};return a}(u)),T=function(b){function a(){b.apply(this,arguments);this.actions=[];this.active=!1;this.scheduled=void 0}k(a,b);a.prototype.flush=function(c){var a=this.actions;if(this.active)a.push(c);else{var b;this.active=!0;do if(b=c.execute(c.state,c.delay))break;while(c=
        a.shift());this.active=!1;if(b){for(;c=a.shift();)c.unsubscribe();throw b;}}};return a}(function(){function b(a,c){void 0===c&&(c=b.now);this.SchedulerAction=a;this.now=c}b.prototype.schedule=function(a,c,b){void 0===c&&(c=0);return(new this.SchedulerAction(this,a)).schedule(b,c)};b.now=Date.now?Date.now:function(){return+new Date};return b}()),x=new T(S),rc=function(b){function a(c,a){void 0===c&&(c=0);void 0===a&&(a=x);b.call(this);this.period=c;this.scheduler=a;if(!Q(c)||0>c)this.period=0;a&&"function"===
    typeof a.schedule||(this.scheduler=x)}k(a,b);a.create=function(c,b){void 0===c&&(c=0);void 0===b&&(b=x);return new a(c,b)};a.dispatch=function(c){var a=c.subscriber,b=c.period;a.next(c.index);a.closed||(c.index+=1,this.schedule(c,b))};a.prototype._subscribe=function(c){var b=this.period;c.add(this.scheduler.schedule(a.dispatch,b,{index:0,subscriber:c,period:b}))};return a}(g).create;g.interval=rc;g.merge=sa;var vb=function(){function b(){}b.prototype.call=function(a,c){return c.subscribe(new sc(a))};
        return b}(),sc=function(b){function a(c){b.call(this,c);this.hasFirst=!1;this.observables=[];this.subscriptions=[]}k(a,b);a.prototype._next=function(c){this.observables.push(c)};a.prototype._complete=function(){var c=this.observables,a=c.length;if(0===a)this.destination.complete();else{for(var b=0;b<a&&!this.hasFirst;b++){var f=c[b],f=p(this,f,f,b);this.subscriptions&&this.subscriptions.push(f);this.add(f)}this.observables=null}};a.prototype.notifyNext=function(c,a,b,f,h){if(!this.hasFirst){this.hasFirst=
        !0;for(c=0;c<this.subscriptions.length;c++)c!==b&&(f=this.subscriptions[c],f.unsubscribe(),this.remove(f));this.subscriptions=null}this.destination.next(a)};return a}(q);g.race=ta;var tc=function(b){function a(){b.call(this)}k(a,b);a.create=function(){return new a};a.prototype._subscribe=function(c){};return a}(g).create;g.never=tc;g.of=E.of;var Va=function(){function b(a){this.nextSources=a}b.prototype.call=function(a,c){return c.subscribe(new uc(a,this.nextSources))};return b}(),uc=function(b){function a(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a){b.call(this,c);this.destination=c;this.nextSources=a}k(a,b);a.prototype.notifyError=function(c,a){this.subscribeToNextSource()};a.prototype.notifyComplete=function(c){this.subscribeToNextSource()};a.prototype._error=function(c){this.subscribeToNextSource()};a.prototype._complete=function(){this.subscribeToNextSource()};a.prototype.subscribeToNextSource=function(){var c=this.nextSources.shift();c?this.add(p(this,c)):this.destination.complete()};return a}(q);g.onErrorResumeNext=function(){for(var b=
        [],a=0;a<arguments.length;a++)b[a-0]=arguments[a];1===b.length&&D(b[0])&&(b=b[0]);a=b.shift();return(new Sa(a,null)).lift(new Va(b))};var vc=function(b){function a(c,a){b.call(this);this.obj=c;this.scheduler=a;this.keys=Object.keys(c)}k(a,b);a.create=function(c,b){return new a(c,b)};a.prototype._subscribe=function(c){var a=this.keys,b=this.scheduler,f=a.length;if(b)return b.schedule(wb,0,{obj:this.obj,keys:a,length:f,index:0,subscriber:c});for(b=0;b<f;b++){var h=a[b];c.next([h,this.obj[h]])}c.complete()};
        return a}(g).create;g.pairs=vc;var wc=function(b){function a(c,a,d){b.call(this);this.start=c;this._count=a;this.scheduler=d}k(a,b);a.create=function(c,b,d){void 0===c&&(c=0);void 0===b&&(b=0);return new a(c,b,d)};a.dispatch=function(c){var a=c.start,b=c.index,f=c.subscriber;b>=c.count?f.complete():(f.next(a),f.closed||(c.index=b+1,c.start=a+1,this.schedule(c)))};a.prototype._subscribe=function(c){var b=0,d=this.start,f=this._count,h=this.scheduler;if(h)return h.schedule(a.dispatch,0,{index:b,count:f,
        start:d,subscriber:c});do{if(b++>=f){c.complete();break}c.next(d++);if(c.closed)break}while(1)};return a}(g).create;g.range=wc;var yc=function(b){function a(c,a){b.call(this);this.resourceFactory=c;this.observableFactory=a}k(a,b);a.create=function(c,b){return new a(c,b)};a.prototype._subscribe=function(c){var a=this.resourceFactory,b=this.observableFactory,f;try{return f=a(),new xc(c,f,b)}catch(h){c.error(h)}};return a}(g),xc=function(b){function a(c,a,d){b.call(this,c);this.resource=a;this.observableFactory=
        d;c.add(a);this.tryUse()}k(a,b);a.prototype.tryUse=function(){try{var c=this.observableFactory.call(this,this.resource);c&&this.add(p(this,c))}catch(e){this._error(e)}};return a}(q);g.using=yc.create;var zc=function(b){function a(c,a){b.call(this);this.error=c;this.scheduler=a}k(a,b);a.create=function(c,b){return new a(c,b)};a.dispatch=function(c){c.subscriber.error(c.error)};a.prototype._subscribe=function(c){var b=this.error,d=this.scheduler;if(d)return d.schedule(a.dispatch,0,{error:b,subscriber:c});
        c.error(b)};return a}(g).create;g.throw=zc;var Ac=function(b){function a(c,a,d){void 0===c&&(c=0);b.call(this);this.period=-1;this.dueTime=0;Q(a)?this.period=1>Number(a)&&1||Number(a):z(a)&&(d=a);z(d)||(d=x);this.scheduler=d;this.dueTime=X(c)?+c-this.scheduler.now():c}k(a,b);a.create=function(c,b,d){void 0===c&&(c=0);return new a(c,b,d)};a.dispatch=function(c){var a=c.index,b=c.period,f=c.subscriber;f.next(a);if(!f.closed){if(-1===b)return f.complete();c.index=a+1;this.schedule(c,b)}};a.prototype._subscribe=
        function(c){return this.scheduler.schedule(a.dispatch,this.dueTime,{index:0,period:this.period,subscriber:c})};return a}(g).create;g.timer=Ac;var va=function(){function b(a){this.project=a}b.prototype.call=function(a,c){return c.subscribe(new Bc(a,this.project))};return b}(),Bc=function(b){function a(c,a,d){void 0===d&&(d=Object.create(null));b.call(this,c);this.iterators=[];this.active=0;this.project="function"===typeof a?a:null;this.values=d}k(a,b);a.prototype._next=function(c){var a=this.iterators;
        D(c)?a.push(new Cc(c)):"function"===typeof c[A]?a.push(new Dc(c[A]())):a.push(new Ec(this.destination,this,c))};a.prototype._complete=function(){var c=this.iterators,a=c.length;if(0===a)this.destination.complete();else{this.active=a;for(var b=0;b<a;b++){var f=c[b];f.stillUnsubscribed?this.add(f.subscribe(f,b)):this.active--}}};a.prototype.notifyInactive=function(){this.active--;0===this.active&&this.destination.complete()};a.prototype.checkIterators=function(){for(var c=this.iterators,a=c.length,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b=this.destination,f=0;f<a;f++){var h=c[f];if("function"===typeof h.hasValue&&!h.hasValue())return}for(var g=!1,k=[],f=0;f<a;f++){var h=c[f],l=h.next();h.hasCompleted()&&(g=!0);if(l.done){b.complete();return}k.push(l.value)}this.project?this._tryProject(k):b.next(k);g&&b.complete()};a.prototype._tryProject=function(c){var a;try{a=this.project.apply(this,c)}catch(d){this.destination.error(d);return}this.destination.next(a)};return a}(l),Dc=function(){function b(a){this.iterator=a;this.nextResult=a.next()}
        b.prototype.hasValue=function(){return!0};b.prototype.next=function(){var a=this.nextResult;this.nextResult=this.iterator.next();return a};b.prototype.hasCompleted=function(){var a=this.nextResult;return a&&a.done};return b}(),Cc=function(){function b(a){this.array=a;this.length=this.index=0;this.length=a.length}b.prototype[A]=function(){return this};b.prototype.next=function(a){a=this.index++;var c=this.array;return a<this.length?{value:c[a],done:!1}:{value:null,done:!0}};b.prototype.hasValue=function(){return this.array.length>
        this.index};b.prototype.hasCompleted=function(){return this.array.length===this.index};return b}(),Ec=function(b){function a(c,a,d){b.call(this,c);this.parent=a;this.observable=d;this.stillUnsubscribed=!0;this.buffer=[];this.isComplete=!1}k(a,b);a.prototype[A]=function(){return this};a.prototype.next=function(){var c=this.buffer;return 0===c.length&&this.isComplete?{value:null,done:!0}:{value:c.shift(),done:!1}};a.prototype.hasValue=function(){return 0<this.buffer.length};a.prototype.hasCompleted=
        function(){return 0===this.buffer.length&&this.isComplete};a.prototype.notifyComplete=function(){0<this.buffer.length?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()};a.prototype.notifyNext=function(c,a,b,f,h){this.buffer.push(a);this.parent.checkIterators()};a.prototype.subscribe=function(c,a){return p(this,this.observable,this,a)};return a}(q);g.zip=ua;var xa=function(){function b(a,c){this.project=a;this.thisArg=c}b.prototype.call=function(a,c){return c.subscribe(new Fc(a,
        this.project,this.thisArg))};return b}(),Fc=function(b){function a(c,a,d){b.call(this,c);this.project=a;this.count=0;this.thisArg=d||this}k(a,b);a.prototype._next=function(c){var a;try{a=this.project.call(this.thisArg,c,this.count++)}catch(d){this.destination.error(d);return}this.destination.next(a)};return a}(l),J=function(b){function a(c){b.call(this);var a={async:!0,createXHR:function(){var c;if(this.crossDomain)if(n.XMLHttpRequest)c=new n.XMLHttpRequest;else if(n.XDomainRequest)c=new n.XDomainRequest;
    else throw Error("CORS is not supported by your browser");else if(n.XMLHttpRequest)c=new n.XMLHttpRequest;else{var a=void 0;try{for(var b=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],e=0;3>e;e++)try{a=b[e];new n.ActiveXObject(a);break}catch(B){}c=new n.ActiveXObject(a)}catch(B){throw Error("XMLHttpRequest is not supported by your browser");}}return c},crossDomain:!1,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"===typeof c)a.url=c;else for(var d in c)c.hasOwnProperty(d)&&
    (a[d]=c[d]);this.request=a}k(a,b);a.prototype._subscribe=function(c){return new Gc(c,this.request)};a.create=function(){var c=function(c){return new a(c)};c.get=xb;c.post=yb;c.delete=zb;c.put=Ab;c.patch=Bb;c.getJSON=Cb;return c}();return a}(g),Gc=function(b){function a(c,a){b.call(this,c);this.request=a;this.done=!1;c=a.headers=a.headers||{};a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");"Content-Type"in c||n.FormData&&a.body instanceof n.FormData||"undefined"===typeof a.body||
    (c["Content-Type"]="application/x-www-form-urlencoded; charset\x3dUTF-8");a.body=this.serializeBody(a.body,a.headers["Content-Type"]);this.send()}k(a,b);a.prototype.next=function(c){this.done=!0;var a=this.destination;c=new Wa(c,this.xhr,this.request);a.next(c)};a.prototype.send=function(){var c=this.request,a=this.request,b=a.user,f=a.method,h=a.url,g=a.async,k=a.password,l=a.headers,a=a.body,n=r(c.createXHR).call(c);if(n===m)this.error(m.e);else{this.xhr=n;this.setupEvents(n,c);b=b?r(n.open).call(n,
        f,h,g,b,k):r(n.open).call(n,f,h,g);if(b===m)return this.error(m.e),null;n.timeout=c.timeout;n.responseType=c.responseType;"withCredentials"in n&&(n.withCredentials=!!c.withCredentials);this.setHeaders(n,l);b=a?r(n.send).call(n,a):r(n.send).call(n);if(b===m)return this.error(m.e),null}return n};a.prototype.serializeBody=function(c,a){if(!c||"string"===typeof c||n.FormData&&c instanceof n.FormData)return c;if(a){var b=a.indexOf(";");-1!==b&&(a=a.substring(0,b))}switch(a){case "application/x-www-form-urlencoded":return Object.keys(c).map(function(a){return encodeURI(a)+
        "\x3d"+encodeURI(c[a])}).join("\x26");case "application/json":return JSON.stringify(c);default:return c}};a.prototype.setHeaders=function(c,a){for(var b in a)a.hasOwnProperty(b)&&c.setRequestHeader(b,a[b])};a.prototype.setupEvents=function(c,a){function b(c){var a=b.subscriber,e=b.progressSubscriber,d=b.request;e&&e.error(c);a.error(new Xa(this,d))}function e(c){var a=e.subscriber,b=e.progressSubscriber,d=e.request;if(4===this.readyState){var f=1223===this.status?204:this.status,h="text"===this.responseType?
        this.response||this.responseText:this.response;0===f&&(f=h?200:0);200<=f&&300>f?(b&&b.complete(),a.next(c),a.complete()):(b&&b.error(c),a.error(new aa("ajax error "+f,this,d)))}}var h=a.progressSubscriber;c.ontimeout=b;b.request=a;b.subscriber=this;b.progressSubscriber=h;if(c.upload&&"withCredentials"in c){if(h){var g;g=function(c){g.progressSubscriber.next(c)};n.XDomainRequest?c.onprogress=g:c.upload.onprogress=g;g.progressSubscriber=h}var k;k=function(c){var a=k.progressSubscriber,b=k.subscriber,
        e=k.request;a&&a.error(c);b.error(new aa("ajax error",this,e))};c.onerror=k;k.request=a;k.subscriber=this;k.progressSubscriber=h}c.onreadystatechange=e;e.subscriber=this;e.progressSubscriber=h;e.request=a};a.prototype.unsubscribe=function(){var c=this.xhr;!this.done&&c&&4!==c.readyState&&"function"===typeof c.abort&&c.abort();b.prototype.unsubscribe.call(this)};return a}(l),Wa=function(){return function(b,a,c){this.originalEvent=b;this.xhr=a;this.request=c;this.status=a.status;this.responseType=a.responseType||
        c.responseType;switch(this.responseType){case "json":this.response="response"in a?a.responseType?a.response:JSON.parse(a.response||a.responseText||"null"):JSON.parse(a.responseText||"null");break;case "xml":this.response=a.responseXML;break;default:this.response="response"in a?a.response:a.responseText}}}(),aa=function(b){function a(c,a,d){b.call(this,c);this.message=c;this.xhr=a;this.request=d;this.status=a.status}k(a,b);return a}(Error),Xa=function(b){function a(c,a){b.call(this,"ajax timeout",
        c,a)}k(a,b);return a}(aa);g.ajax=J.create;var Hc=function(b){function a(c,a){b.call(this,c,a);this.scheduler=c;this.work=a}k(a,b);a.prototype.schedule=function(c,a){void 0===a&&(a=0);if(0<a)return b.prototype.schedule.call(this,c,a);this.delay=a;this.state=c;this.scheduler.flush(this);return this};a.prototype.execute=function(c,a){return 0<a||this.closed?b.prototype.execute.call(this,c,a):this._execute(c,a)};a.prototype.requestAsyncId=function(c,a,d){void 0===d&&(d=0);return null!==d&&0<d||null===
    d&&0<this.delay?b.prototype.requestAsyncId.call(this,c,a,d):c.flush(this)};return a}(S),Ya=new (function(b){function a(){b.apply(this,arguments)}k(a,b);return a}(T))(Hc),K=function(b){function a(c,a,d){void 0===c&&(c=Number.POSITIVE_INFINITY);void 0===a&&(a=Number.POSITIVE_INFINITY);b.call(this);this.scheduler=d;this._events=[];this._bufferSize=1>c?1:c;this._windowTime=1>a?1:a}k(a,b);a.prototype.next=function(c){var a=this._getNow();this._events.push(new Ic(a,c));this._trimBufferThenGetEvents();b.prototype.next.call(this,
        c)};a.prototype._subscribe=function(c){var a=this._trimBufferThenGetEvents(),b=this.scheduler,f;if(this.closed)throw new H;this.hasError?f=u.EMPTY:this.isStopped?f=u.EMPTY:(this.observers.push(c),f=new Na(this,c));b&&c.add(c=new ia(c,b));for(var b=a.length,h=0;h<b&&!c.closed;h++)c.next(a[h].value);this.hasError?c.error(this.thrownError):this.isStopped&&c.complete();return f};a.prototype._getNow=function(){return(this.scheduler||Ya).now()};a.prototype._trimBufferThenGetEvents=function(){for(var c=
        this._getNow(),a=this._bufferSize,b=this._windowTime,f=this._events,h=f.length,g=0;g<h&&!(c-f[g].time<b);)g++;h>a&&(g=Math.max(g,h-a));0<g&&f.splice(0,g);return f};return a}(v),Ic=function(){return function(b,a){this.time=b;this.value=a}}(),Jc=n.Object.assign||Db,Kc=function(b){function a(c,a){if(c instanceof g)b.call(this,a,c);else{b.call(this);this.WebSocketCtor=n.WebSocket;this._output=new v;"string"===typeof c?this.url=c:Jc(this,c);if(!this.WebSocketCtor)throw Error("no WebSocket constructor can be found");
        this.destination=new K}}k(a,b);a.prototype.resultSelector=function(c){return JSON.parse(c.data)};a.create=function(c){return new a(c)};a.prototype.lift=function(c){var b=new a(this,this.destination);b.operator=c;return b};a.prototype._resetState=function(){this.socket=null;this.source||(this.destination=new K);this._output=new v};a.prototype.multiplex=function(c,a,b){var e=this;return new g(function(d){var f=r(c)();f===m?d.error(m.e):e.next(f);var h=e.subscribe(function(c){var a=r(b)(c);a===m?d.error(m.e):
        a&&d.next(c)},function(c){return d.error(c)},function(){return d.complete()});return function(){var c=r(a)();c===m?d.error(m.e):e.next(c);h.unsubscribe()}})};a.prototype._connectSocket=function(){var c=this,a=this.WebSocketCtor,b=this._output,f=null;try{this.socket=f=this.protocol?new a(this.url,this.protocol):new a(this.url),this.binaryType&&(this.socket.binaryType=this.binaryType)}catch(y){b.error(y);return}var h=new u(function(){c.socket=null;f&&1===f.readyState&&f.close()});f.onopen=function(a){var e=
        c.openObserver;e&&e.next(a);a=c.destination;c.destination=l.create(function(c){return 1===f.readyState&&f.send(c)},function(a){var e=c.closingObserver;e&&e.next(void 0);a&&a.code?f.close(a.code,a.reason):b.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"));c._resetState()},function(){var a=c.closingObserver;a&&a.next(void 0);f.close();c._resetState()});a&&a instanceof K&&h.add(a.subscribe(c.destination))};
        f.onerror=function(a){c._resetState();b.error(a)};f.onclose=function(a){c._resetState();var e=c.closeObserver;e&&e.next(a);a.wasClean?b.complete():b.error(a)};f.onmessage=function(a){a=r(c.resultSelector)(a);a===m?b.error(m.e):b.next(a)}};a.prototype._subscribe=function(c){var a=this,b=this.source;if(b)return b.subscribe(c);this.socket||this._connectSocket();b=new u;b.add(this._output.subscribe(c));b.add(function(){var c=a.socket;0===a._output.observers.length&&(c&&1===c.readyState&&c.close(),a._resetState())});
        return b};a.prototype.unsubscribe=function(){var c=this.source,a=this.socket;a&&1===a.readyState&&(a.close(),this._resetState());b.prototype.unsubscribe.call(this);c||(this.destination=new K)};return a}(Z).create;g.webSocket=Kc;var Mc=function(){function b(a){this.closingNotifier=a}b.prototype.call=function(a,c){return c.subscribe(new Lc(a,this.closingNotifier))};return b}(),Lc=function(b){function a(c,a){b.call(this,c);this.buffer=[];this.add(p(this,a))}k(a,b);a.prototype._next=function(c){this.buffer.push(c)};
        a.prototype.notifyNext=function(c,a,b,f,h){c=this.buffer;this.buffer=[];this.destination.next(c)};return a}(q);g.prototype.buffer=function(b){return this.lift(new Mc(b))};var Pc=function(){function b(a,c){this.bufferSize=a;this.subscriberClass=(this.startBufferEvery=c)&&a!==c?Nc:Oc}b.prototype.call=function(a,c){return c.subscribe(new this.subscriberClass(a,this.bufferSize,this.startBufferEvery))};return b}(),Oc=function(b){function a(c,a){b.call(this,c);this.bufferSize=a;this.buffer=[]}k(a,b);a.prototype._next=
        function(c){var a=this.buffer;a.push(c);a.length==this.bufferSize&&(this.destination.next(a),this.buffer=[])};a.prototype._complete=function(){var c=this.buffer;0<c.length&&this.destination.next(c);b.prototype._complete.call(this)};return a}(l),Nc=function(b){function a(c,a,d){b.call(this,c);this.bufferSize=a;this.startBufferEvery=d;this.buffers=[];this.count=0}k(a,b);a.prototype._next=function(c){var a=this.bufferSize,b=this.startBufferEvery,f=this.buffers,h=this.count;this.count++;0===h%b&&f.push([]);
        for(b=f.length;b--;)h=f[b],h.push(c),h.length===a&&(f.splice(b,1),this.destination.next(h))};a.prototype._complete=function(){for(var c=this.buffers,a=this.destination;0<c.length;){var d=c.shift();0<d.length&&a.next(d)}b.prototype._complete.call(this)};return a}(l);g.prototype.bufferCount=function(b,a){void 0===a&&(a=null);return this.lift(new Pc(b,a))};var Rc=function(){function b(a,c,b,d){this.bufferTimeSpan=a;this.bufferCreationInterval=c;this.maxBufferSize=b;this.scheduler=d}b.prototype.call=
        function(a,c){return c.subscribe(new Qc(a,this.bufferTimeSpan,this.bufferCreationInterval,this.maxBufferSize,this.scheduler))};return b}(),Sc=function(){return function(){this.buffer=[]}}(),Qc=function(b){function a(c,a,d,f,h){b.call(this,c);this.bufferTimeSpan=a;this.bufferCreationInterval=d;this.maxBufferSize=f;this.scheduler=h;this.contexts=[];c=this.openContext();(this.timespanOnly=null==d||0>d)?this.add(c.closeAction=h.schedule(ya,a,{subscriber:this,context:c,bufferTimeSpan:a})):(f={bufferTimeSpan:a,
        bufferCreationInterval:d,subscriber:this,scheduler:h},this.add(c.closeAction=h.schedule(za,a,{subscriber:this,context:c})),this.add(h.schedule(Eb,d,f)))}k(a,b);a.prototype._next=function(a){for(var c=this.contexts,b=c.length,f,h=0;h<b;h++){var g=c[h],k=g.buffer;k.push(a);k.length==this.maxBufferSize&&(f=g)}if(f)this.onBufferFull(f)};a.prototype._error=function(a){this.contexts.length=0;b.prototype._error.call(this,a)};a.prototype._complete=function(){for(var a=this.contexts,e=this.destination;0<a.length;){var d=
        a.shift();e.next(d.buffer)}b.prototype._complete.call(this)};a.prototype._unsubscribe=function(){this.contexts=null};a.prototype.onBufferFull=function(a){this.closeContext(a);a=a.closeAction;a.unsubscribe();this.remove(a);if(!this.closed&&this.timespanOnly){a=this.openContext();var c=this.bufferTimeSpan;this.add(a.closeAction=this.scheduler.schedule(ya,c,{subscriber:this,context:a,bufferTimeSpan:c}))}};a.prototype.openContext=function(){var a=new Sc;this.contexts.push(a);return a};a.prototype.closeContext=
        function(a){this.destination.next(a.buffer);var c=this.contexts;0<=(c?c.indexOf(a):-1)&&c.splice(c.indexOf(a),1)};return a}(l);g.prototype.bufferTime=function(b){var a=arguments.length,c=x;z(arguments[arguments.length-1])&&(c=arguments[arguments.length-1],a--);var e=null;2<=a&&(e=arguments[1]);var d=Number.POSITIVE_INFINITY;3<=a&&(d=arguments[2]);return this.lift(new Rc(b,e,d,c))};var Uc=function(){function b(a,c){this.openings=a;this.closingSelector=c}b.prototype.call=function(a,c){return c.subscribe(new Tc(a,
        this.openings,this.closingSelector))};return b}(),Tc=function(b){function a(a,e,d){b.call(this,a);this.openings=e;this.closingSelector=d;this.contexts=[];this.add(p(this,e))}k(a,b);a.prototype._next=function(a){for(var c=this.contexts,b=c.length,f=0;f<b;f++)c[f].buffer.push(a)};a.prototype._error=function(a){for(var c=this.contexts;0<c.length;){var d=c.shift();d.subscription.unsubscribe();d.buffer=null;d.subscription=null}this.contexts=null;b.prototype._error.call(this,a)};a.prototype._complete=function(){for(var a=
        this.contexts;0<a.length;){var e=a.shift();this.destination.next(e.buffer);e.subscription.unsubscribe();e.buffer=null;e.subscription=null}this.contexts=null;b.prototype._complete.call(this)};a.prototype.notifyNext=function(a,b,d,f,h){a?this.closeBuffer(a):this.openBuffer(b)};a.prototype.notifyComplete=function(a){this.closeBuffer(a.context)};a.prototype.openBuffer=function(a){try{var c=this.closingSelector.call(this,a);c&&this.trySubscribe(c)}catch(d){this._error(d)}};a.prototype.closeBuffer=function(a){var c=
        this.contexts;if(c&&a){var b=a.subscription;this.destination.next(a.buffer);c.splice(c.indexOf(a),1);this.remove(b);b.unsubscribe()}};a.prototype.trySubscribe=function(a){var c=this.contexts,b=new u,f={buffer:[],subscription:b};c.push(f);a=p(this,a,f);!a||a.closed?this.closeBuffer(f):(a.context=f,this.add(a),b.add(a))};return a}(q);g.prototype.bufferToggle=function(b,a){return this.lift(new Uc(b,a))};var Wc=function(){function b(a){this.closingSelector=a}b.prototype.call=function(a,c){return c.subscribe(new Vc(a,
        this.closingSelector))};return b}(),Vc=function(b){function a(a,e){b.call(this,a);this.closingSelector=e;this.subscribing=!1;this.openBuffer()}k(a,b);a.prototype._next=function(a){this.buffer.push(a)};a.prototype._complete=function(){var a=this.buffer;a&&this.destination.next(a);b.prototype._complete.call(this)};a.prototype._unsubscribe=function(){this.buffer=null;this.subscribing=!1};a.prototype.notifyNext=function(a,b,d,f,h){this.openBuffer()};a.prototype.notifyComplete=function(){this.subscribing?
        this.complete():this.openBuffer()};a.prototype.openBuffer=function(){var a=this.closingSubscription;a&&(this.remove(a),a.unsubscribe());(a=this.buffer)&&this.destination.next(a);this.buffer=[];var b=r(this.closingSelector)();b===m?this.error(m.e):(this.closingSubscription=a=new u,this.add(a),this.subscribing=!0,a.add(p(this,b)),this.subscribing=!1)};return a}(q);g.prototype.bufferWhen=function(b){return this.lift(new Wc(b))};var Fb=function(){function b(a){this.selector=a}b.prototype.call=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               c){return c.subscribe(new Xc(a,this.selector,this.caught))};return b}(),Xc=function(b){function a(a,e,d){b.call(this,a);this.selector=e;this.caught=d}k(a,b);a.prototype.error=function(a){if(!this.isStopped){var c=void 0;try{c=this.selector(a,this.caught)}catch(d){b.prototype.error.call(this,d);return}this._unsubscribeAndRecycle();this.add(p(this,c))}};return a}(q);g.prototype.catch=Aa;g.prototype._catch=Aa;g.prototype.combineAll=function(b){return this.lift(new ha(b))};g.prototype.combineLatest=function(){for(var b=
        [],a=0;a<arguments.length;a++)b[a-0]=arguments[a];a=null;"function"===typeof b[b.length-1]&&(a=b.pop());1===b.length&&D(b[0])&&(b=b[0].slice());b.unshift(this);return this.lift.call(new E(b),new ha(a))};g.prototype.concat=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];return this.lift.call(P.apply(void 0,[this].concat(b)))};g.prototype.concatAll=function(){return this.lift(new W(1))};var Ca=function(){function b(a,c,b){void 0===b&&(b=Number.POSITIVE_INFINITY);this.project=
        a;this.resultSelector=c;this.concurrent=b}b.prototype.call=function(a,c){return c.subscribe(new Yc(a,this.project,this.resultSelector,this.concurrent))};return b}(),Yc=function(b){function a(a,e,d,f){void 0===f&&(f=Number.POSITIVE_INFINITY);b.call(this,a);this.project=e;this.resultSelector=d;this.concurrent=f;this.hasCompleted=!1;this.buffer=[];this.index=this.active=0}k(a,b);a.prototype._next=function(a){this.active<this.concurrent?this._tryNext(a):this.buffer.push(a)};a.prototype._tryNext=function(a){var c,
        b=this.index++;try{c=this.project(a,b)}catch(f){this.destination.error(f);return}this.active++;this._innerSub(c,a,b)};a.prototype._innerSub=function(a,b,d){this.add(p(this,a,b,d))};a.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&this.destination.complete()};a.prototype.notifyNext=function(a,b,d,f,h){this.resultSelector?this._notifyResultSelector(a,b,d,f):this.destination.next(b)};a.prototype._notifyResultSelector=function(a,b,d,f){var c;try{c=this.resultSelector(a,
        b,d,f)}catch(y){this.destination.error(y);return}this.destination.next(c)};a.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()};return a}(q);g.prototype.concatMap=function(b,a){return this.lift(new Ca(b,a,1))};var Ea=function(){function b(a,c,b){void 0===b&&(b=Number.POSITIVE_INFINITY);this.ish=a;this.resultSelector=c;this.concurrent=b}b.prototype.call=function(a,c){return c.subscribe(new Zc(a,
        this.ish,this.resultSelector,this.concurrent))};return b}(),Zc=function(b){function a(a,e,d,f){void 0===f&&(f=Number.POSITIVE_INFINITY);b.call(this,a);this.ish=e;this.resultSelector=d;this.concurrent=f;this.hasCompleted=!1;this.buffer=[];this.index=this.active=0}k(a,b);a.prototype._next=function(a){if(this.active<this.concurrent){var c=this.resultSelector,b=this.index++,f=this.ish,h=this.destination;this.active++;this._innerSub(f,h,c,a,b)}else this.buffer.push(a)};a.prototype._innerSub=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,d,f,h){this.add(p(this,a,f,h))};a.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&0===this.buffer.length&&this.destination.complete()};a.prototype.notifyNext=function(a,b,d,f,h){h=this.destination;this.resultSelector?this.trySelectResult(a,b,d,f):h.next(b)};a.prototype.trySelectResult=function(a,b,d,f){var c=this.resultSelector,e=this.destination,g;try{g=c(a,b,d,f)}catch(B){e.error(B);return}e.next(g)};a.prototype.notifyError=function(a){this.destination.error(a)};a.prototype.notifyComplete=
        function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()};return a}(q);g.prototype.concatMapTo=function(b,a){return this.lift(new Ea(b,a,1))};var ad=function(){function b(a,c){this.predicate=a;this.source=c}b.prototype.call=function(a,c){return c.subscribe(new $c(a,this.predicate,this.source))};return b}(),$c=function(b){function a(a,e,d){b.call(this,a);this.predicate=e;this.source=d;this.index=this.count=
        0}k(a,b);a.prototype._next=function(a){this.predicate?this._tryPredicate(a):this.count++};a.prototype._tryPredicate=function(a){var c;try{c=this.predicate(a,this.index++,this.source)}catch(d){this.destination.error(d);return}c&&this.count++};a.prototype._complete=function(){this.destination.next(this.count);this.destination.complete()};return a}(l);g.prototype.count=function(b){return this.lift(new ad(b,this))};var cd=function(){function b(){}b.prototype.call=function(a,c){return c.subscribe(new bd(a))};
        return b}(),bd=function(b){function a(a){b.call(this,a)}k(a,b);a.prototype._next=function(a){a.observe(this.destination)};return a}(l);g.prototype.dematerialize=function(){return this.lift(new cd)};var ed=function(){function b(a){this.durationSelector=a}b.prototype.call=function(a,c){return c.subscribe(new dd(a,this.durationSelector))};return b}(),dd=function(b){function a(a,e){b.call(this,a);this.durationSelector=e;this.hasValue=!1;this.durationSubscription=null}k(a,b);a.prototype._next=function(a){try{var c=
        this.durationSelector.call(this,a);c&&this._tryNext(a,c)}catch(d){this.destination.error(d)}};a.prototype._complete=function(){this.emitValue();this.destination.complete()};a.prototype._tryNext=function(a,b){var c=this.durationSubscription;this.value=a;this.hasValue=!0;c&&(c.unsubscribe(),this.remove(c));c=p(this,b);c.closed||this.add(this.durationSubscription=c)};a.prototype.notifyNext=function(a,b,d,f,h){this.emitValue()};a.prototype.notifyComplete=function(){this.emitValue()};a.prototype.emitValue=
        function(){if(this.hasValue){var a=this.value,e=this.durationSubscription;e&&(this.durationSubscription=null,e.unsubscribe(),this.remove(e));this.value=null;this.hasValue=!1;b.prototype._next.call(this,a)}};return a}(q);g.prototype.debounce=function(b){return this.lift(new ed(b))};var gd=function(){function b(a,c){this.dueTime=a;this.scheduler=c}b.prototype.call=function(a,c){return c.subscribe(new fd(a,this.dueTime,this.scheduler))};return b}(),fd=function(b){function a(a,e,d){b.call(this,a);this.dueTime=
        e;this.scheduler=d;this.lastValue=this.debouncedSubscription=null;this.hasValue=!1}k(a,b);a.prototype._next=function(a){this.clearDebounce();this.lastValue=a;this.hasValue=!0;this.add(this.debouncedSubscription=this.scheduler.schedule(Gb,this.dueTime,this))};a.prototype._complete=function(){this.debouncedNext();this.destination.complete()};a.prototype.debouncedNext=function(){this.clearDebounce();this.hasValue&&(this.destination.next(this.lastValue),this.lastValue=null,this.hasValue=!1)};a.prototype.clearDebounce=
        function(){var a=this.debouncedSubscription;null!==a&&(this.remove(a),a.unsubscribe(),this.debouncedSubscription=null)};return a}(l);g.prototype.debounceTime=function(b,a){void 0===a&&(a=x);return this.lift(new gd(b,a))};var id=function(){function b(a){this.defaultValue=a}b.prototype.call=function(a,c){return c.subscribe(new hd(a,this.defaultValue))};return b}(),hd=function(b){function a(a,e){b.call(this,a);this.defaultValue=e;this.isEmpty=!0}k(a,b);a.prototype._next=function(a){this.isEmpty=!1;this.destination.next(a)};
        a.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue);this.destination.complete()};return a}(l);g.prototype.defaultIfEmpty=function(b){void 0===b&&(b=null);return this.lift(new id(b))};var kd=function(){function b(a,c){this.delay=a;this.scheduler=c}b.prototype.call=function(a,c){return c.subscribe(new jd(a,this.delay,this.scheduler))};return b}(),jd=function(b){function a(a,e,d){b.call(this,a);this.delay=e;this.scheduler=d;this.queue=[];this.errored=this.active=!1}
        k(a,b);a.dispatch=function(a){for(var c=a.source,b=c.queue,f=a.scheduler,h=a.destination;0<b.length&&0>=b[0].time-f.now();)b.shift().notification.observe(h);0<b.length?(c=Math.max(0,b[0].time-f.now()),this.schedule(a,c)):c.active=!1};a.prototype._schedule=function(c){this.active=!0;this.add(c.schedule(a.dispatch,this.delay,{source:this,destination:this.destination,scheduler:c}))};a.prototype.scheduleNotification=function(a){if(!0!==this.errored){var c=this.scheduler;a=new ld(c.now()+this.delay,a);
            this.queue.push(a);!1===this.active&&this._schedule(c)}};a.prototype._next=function(a){this.scheduleNotification(w.createNext(a))};a.prototype._error=function(a){this.errored=!0;this.queue=[];this.destination.error(a)};a.prototype._complete=function(){this.scheduleNotification(w.createComplete())};return a}(l),ld=function(){return function(b,a){this.time=b;this.notification=a}}();g.prototype.delay=function(b,a){void 0===a&&(a=x);b=X(b)?+b-a.now():Math.abs(b);return this.lift(new kd(b,a))};var Za=
        function(){function b(a){this.delayDurationSelector=a}b.prototype.call=function(a,c){return c.subscribe(new md(a,this.delayDurationSelector))};return b}(),md=function(b){function a(a,e){b.call(this,a);this.delayDurationSelector=e;this.completed=!1;this.delayNotifierSubscriptions=[];this.values=[]}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.destination.next(a);this.removeSubscription(h);this.tryComplete()};a.prototype.notifyError=function(a,b){this._error(a)};a.prototype.notifyComplete=
        function(a){(a=this.removeSubscription(a))&&this.destination.next(a);this.tryComplete()};a.prototype._next=function(a){try{var c=this.delayDurationSelector(a);c&&this.tryDelay(c,a)}catch(d){this.destination.error(d)}};a.prototype._complete=function(){this.completed=!0;this.tryComplete()};a.prototype.removeSubscription=function(a){a.unsubscribe();a=this.delayNotifierSubscriptions.indexOf(a);var c=null;-1!==a&&(c=this.values[a],this.delayNotifierSubscriptions.splice(a,1),this.values.splice(a,1));return c};
        a.prototype.tryDelay=function(a,b){(a=p(this,a,b))&&!a.closed&&(this.add(a),this.delayNotifierSubscriptions.push(a));this.values.push(b)};a.prototype.tryComplete=function(){this.completed&&0===this.delayNotifierSubscriptions.length&&this.destination.complete()};return a}(q),od=function(b){function a(a,e){b.call(this);this.source=a;this.subscriptionDelay=e}k(a,b);a.prototype._subscribe=function(a){this.subscriptionDelay.subscribe(new nd(a,this.source))};return a}(g),nd=function(b){function a(a,e){b.call(this);
        this.parent=a;this.source=e;this.sourceSubscribed=!1}k(a,b);a.prototype._next=function(a){this.subscribeToSource()};a.prototype._error=function(a){this.unsubscribe();this.parent.error(a)};a.prototype._complete=function(){this.subscribeToSource()};a.prototype.subscribeToSource=function(){this.sourceSubscribed||(this.sourceSubscribed=!0,this.unsubscribe(),this.source.subscribe(this.parent))};return a}(l);g.prototype.delayWhen=function(b,a){return a?(new od(this,a)).lift(new Za(b)):this.lift(new Za(b))};
    var pd=n.Set||Hb(),rd=function(){function b(a,c){this.keySelector=a;this.flushes=c}b.prototype.call=function(a,c){return c.subscribe(new qd(a,this.keySelector,this.flushes))};return b}(),qd=function(b){function a(a,e,d){b.call(this,a);this.keySelector=e;this.values=new pd;d&&this.add(p(this,d))}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.values.clear()};a.prototype.notifyError=function(a,b){this._error(a)};a.prototype._next=function(a){this.keySelector?this._useKeySelector(a):this._finalizeNext(a,
        a)};a.prototype._useKeySelector=function(a){var c,b=this.destination;try{c=this.keySelector(a)}catch(f){b.error(f);return}this._finalizeNext(c,a)};a.prototype._finalizeNext=function(a,b){var c=this.values;c.has(a)||(c.add(a),this.destination.next(b))};return a}(q);g.prototype.distinct=function(b,a){return this.lift(new rd(b,a))};var Ib=function(){function b(a,c){this.compare=a;this.keySelector=c}b.prototype.call=function(a,c){return c.subscribe(new sd(a,this.compare,this.keySelector))};return b}(),
        sd=function(b){function a(a,e,d){b.call(this,a);this.keySelector=d;this.hasKey=!1;"function"===typeof e&&(this.compare=e)}k(a,b);a.prototype.compare=function(a,b){return a===b};a.prototype._next=function(a){var c=a;if(this.keySelector&&(c=r(this.keySelector)(a),c===m))return this.destination.error(m.e);var b=!1;if(this.hasKey){if(b=r(this.compare)(this.key,c),b===m)return this.destination.error(m.e)}else this.hasKey=!0;!1===!!b&&(this.key=c,this.destination.next(a))};return a}(l);g.prototype.distinctUntilChanged=
        Fa;g.prototype.distinctUntilKeyChanged=function(b,a){return Fa.call(this,function(c,e){return a?a(c[b],e[b]):c[b]===e[b]})};var Jb=function(){function b(a,c,b){this.nextOrObserver=a;this.error=c;this.complete=b}b.prototype.call=function(a,c){return c.subscribe(new td(a,this.nextOrObserver,this.error,this.complete))};return b}(),td=function(b){function a(a,e,d,f){b.call(this,a);a=new l(e,d,f);a.syncErrorThrowable=!0;this.add(a);this.safeSubscriber=a}k(a,b);a.prototype._next=function(a){var c=this.safeSubscriber;
        c.next(a);c.syncErrorThrown?this.destination.error(c.syncErrorValue):this.destination.next(a)};a.prototype._error=function(a){var c=this.safeSubscriber;c.error(a);c.syncErrorThrown?this.destination.error(c.syncErrorValue):this.destination.error(a)};a.prototype._complete=function(){var a=this.safeSubscriber;a.complete();a.syncErrorThrown?this.destination.error(a.syncErrorValue):this.destination.complete()};return a}(l);g.prototype.do=Ga;g.prototype._do=Ga;var vd=function(){function b(){}b.prototype.call=
        function(a,c){return c.subscribe(new ud(a))};return b}(),ud=function(b){function a(a){b.call(this,a);this.hasSubscription=this.hasCompleted=!1}k(a,b);a.prototype._next=function(a){this.hasSubscription||(this.hasSubscription=!0,this.add(p(this,a)))};a.prototype._complete=function(){this.hasCompleted=!0;this.hasSubscription||this.destination.complete()};a.prototype.notifyComplete=function(a){this.remove(a);this.hasSubscription=!1;this.hasCompleted&&this.destination.complete()};return a}(q);g.prototype.exhaust=
        function(){return this.lift(new vd)};var xd=function(){function b(a,c){this.project=a;this.resultSelector=c}b.prototype.call=function(a,c){return c.subscribe(new wd(a,this.project,this.resultSelector))};return b}(),wd=function(b){function a(a,e,d){b.call(this,a);this.project=e;this.resultSelector=d;this.hasCompleted=this.hasSubscription=!1;this.index=0}k(a,b);a.prototype._next=function(a){this.hasSubscription||this.tryNext(a)};a.prototype.tryNext=function(a){var c=this.index++,b=this.destination;
        try{var f=this.project(a,c);this.hasSubscription=!0;this.add(p(this,f,a,c))}catch(h){b.error(h)}};a.prototype._complete=function(){this.hasCompleted=!0;this.hasSubscription||this.destination.complete()};a.prototype.notifyNext=function(a,b,d,f,h){h=this.destination;this.resultSelector?this.trySelectResult(a,b,d,f):h.next(b)};a.prototype.trySelectResult=function(a,b,d,f){var c=this.resultSelector,e=this.destination;try{var g=c(a,b,d,f);e.next(g)}catch(B){e.error(B)}};a.prototype.notifyError=function(a){this.destination.error(a)};
        a.prototype.notifyComplete=function(a){this.remove(a);this.hasSubscription=!1;this.hasCompleted&&this.destination.complete()};return a}(q);g.prototype.exhaustMap=function(b,a){return this.lift(new xd(b,a))};var zd=function(){function b(a,c,b){this.project=a;this.concurrent=c;this.scheduler=b}b.prototype.call=function(a,c){return c.subscribe(new yd(a,this.project,this.concurrent,this.scheduler))};return b}(),yd=function(b){function a(a,e,d,f){b.call(this,a);this.project=e;this.concurrent=d;this.scheduler=
        f;this.active=this.index=0;this.hasCompleted=!1;d<Number.POSITIVE_INFINITY&&(this.buffer=[])}k(a,b);a.dispatch=function(a){a.subscriber.subscribeToProjection(a.result,a.value,a.index)};a.prototype._next=function(c){var b=this.destination;if(b.closed)this._complete();else{var d=this.index++;if(this.active<this.concurrent){b.next(c);var f=r(this.project)(c,d);f===m?b.error(m.e):this.scheduler?this.add(this.scheduler.schedule(a.dispatch,0,{subscriber:this,result:f,value:c,index:d})):this.subscribeToProjection(f,
        c,d)}else this.buffer.push(c)}};a.prototype.subscribeToProjection=function(a,b,d){this.active++;this.add(p(this,a,b,d))};a.prototype._complete=function(){(this.hasCompleted=!0,0===this.active)&&this.destination.complete()};a.prototype.notifyNext=function(a,b,d,f,h){this._next(b)};a.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;c&&0<c.length&&this._next(c.shift());this.hasCompleted&&0===this.active&&this.destination.complete()};return a}(q);g.prototype.expand=
        function(b,a,c){void 0===a&&(a=Number.POSITIVE_INFINITY);void 0===c&&(c=void 0);a=1>(a||0)?Number.POSITIVE_INFINITY:a;return this.lift(new zd(b,a,c))};var M=function(b){function a(){var a=b.call(this,"argument out of range");this.name=a.name="ArgumentOutOfRangeError";this.stack=a.stack;this.message=a.message}k(a,b);return a}(Error),Bd=function(){function b(a,c){this.index=a;this.defaultValue=c;if(0>a)throw new M;}b.prototype.call=function(a,c){return c.subscribe(new Ad(a,this.index,this.defaultValue))};
        return b}(),Ad=function(b){function a(a,e,d){b.call(this,a);this.index=e;this.defaultValue=d}k(a,b);a.prototype._next=function(a){0===this.index--&&(this.destination.next(a),this.destination.complete())};a.prototype._complete=function(){var a=this.destination;0<=this.index&&("undefined"!==typeof this.defaultValue?a.next(this.defaultValue):a.error(new M));a.complete()};return a}(l);g.prototype.elementAt=function(b,a){return this.lift(new Bd(b,a))};var Kb=function(){function b(a,c){this.predicate=a;
        this.thisArg=c}b.prototype.call=function(a,c){return c.subscribe(new Cd(a,this.predicate,this.thisArg))};return b}(),Cd=function(b){function a(a,e,d){b.call(this,a);this.predicate=e;this.thisArg=d;this.count=0;this.predicate=e}k(a,b);a.prototype._next=function(a){var c;try{c=this.predicate.call(this.thisArg,a,this.count++)}catch(d){this.destination.error(d);return}c&&this.destination.next(a)};return a}(l);g.prototype.filter=ea;var Lb=function(){function b(a){this.callback=a}b.prototype.call=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c){return c.subscribe(new Dd(a,this.callback))};return b}(),Dd=function(b){function a(a,e){b.call(this,a);this.add(new u(e))}k(a,b);return a}(l);g.prototype.finally=Ha;g.prototype._finally=Ha;var $a=function(){function b(a,c,b,d){this.predicate=a;this.source=c;this.yieldIndex=b;this.thisArg=d}b.prototype.call=function(a,c){return c.subscribe(new Ed(a,this.predicate,this.source,this.yieldIndex,this.thisArg))};return b}(),Ed=function(b){function a(a,e,d,f,h){b.call(this,a);this.predicate=e;this.source=
        d;this.yieldIndex=f;this.thisArg=h;this.index=0}k(a,b);a.prototype.notifyComplete=function(a){var c=this.destination;c.next(a);c.complete()};a.prototype._next=function(a){var c=this.predicate,b=this.thisArg,f=this.index++;try{c.call(b||this,a,f,this.source)&&this.notifyComplete(this.yieldIndex?f:a)}catch(h){this.destination.error(h)}};a.prototype._complete=function(){this.notifyComplete(this.yieldIndex?-1:void 0)};return a}(l);g.prototype.find=function(b,a){if("function"!==typeof b)throw new TypeError("predicate is not a function");
        return this.lift(new $a(b,this,!1,a))};g.prototype.findIndex=function(b,a){return this.lift(new $a(b,this,!0,a))};var ba=function(b){function a(){var a=b.call(this,"no elements in sequence");this.name=a.name="EmptyError";this.stack=a.stack;this.message=a.message}k(a,b);return a}(Error),Gd=function(){function b(a,c,b,d){this.predicate=a;this.resultSelector=c;this.defaultValue=b;this.source=d}b.prototype.call=function(a,c){return c.subscribe(new Fd(a,this.predicate,this.resultSelector,this.defaultValue,
        this.source))};return b}(),Fd=function(b){function a(a,e,d,f,h){b.call(this,a);this.predicate=e;this.resultSelector=d;this.defaultValue=f;this.source=h;this.index=0;this._emitted=this.hasCompleted=!1}k(a,b);a.prototype._next=function(a){var c=this.index++;this.predicate?this._tryPredicate(a,c):this._emit(a,c)};a.prototype._tryPredicate=function(a,b){var c;try{c=this.predicate(a,b,this.source)}catch(f){this.destination.error(f);return}c&&this._emit(a,b)};a.prototype._emit=function(a,b){this.resultSelector?
        this._tryResultSelector(a,b):this._emitFinal(a)};a.prototype._tryResultSelector=function(a,b){var c;try{c=this.resultSelector(a,b)}catch(f){this.destination.error(f);return}this._emitFinal(c)};a.prototype._emitFinal=function(a){var c=this.destination;this._emitted||(this._emitted=!0,c.next(a),c.complete(),this.hasCompleted=!0)};a.prototype._complete=function(){var a=this.destination;this.hasCompleted||"undefined"===typeof this.defaultValue?this.hasCompleted||a.error(new ba):(a.next(this.defaultValue),
        a.complete())};return a}(l);g.prototype.first=function(b,a,c){return this.lift(new Gd(b,a,c,this))};var Hd=function(){function b(){this.size=0;this._values=[];this._keys=[]}b.prototype.get=function(a){a=this._keys.indexOf(a);return-1===a?void 0:this._values[a]};b.prototype.set=function(a,c){var b=this._keys.indexOf(a);-1===b?(this._keys.push(a),this._values.push(c),this.size++):this._values[b]=c;return this};b.prototype.delete=function(a){a=this._keys.indexOf(a);if(-1===a)return!1;this._values.splice(a,
        1);this._keys.splice(a,1);this.size--;return!0};b.prototype.clear=function(){this._keys.length=0;this.size=this._values.length=0};b.prototype.forEach=function(a,c){for(var b=0;b<this.size;b++)a.call(c,this._values[b],this._keys[b])};return b}(),Id=n.Map||Hd,Jd=function(){function b(){this.values={}}b.prototype.delete=function(a){this.values[a]=null;return!0};b.prototype.set=function(a,c){this.values[a]=c;return this};b.prototype.get=function(a){return this.values[a]};b.prototype.forEach=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             c){var b=this.values,d;for(d in b)b.hasOwnProperty(d)&&null!==b[d]&&a.call(c,b[d],d)};b.prototype.clear=function(){this.values={}};return b}(),Ld=function(){function b(a,c,b,d){this.keySelector=a;this.elementSelector=c;this.durationSelector=b;this.subjectSelector=d}b.prototype.call=function(a,c){return c.subscribe(new Kd(a,this.keySelector,this.elementSelector,this.durationSelector,this.subjectSelector))};return b}(),Kd=function(b){function a(a,e,d,f,h){b.call(this,a);this.keySelector=e;this.elementSelector=
            d;this.durationSelector=f;this.subjectSelector=h;this.groups=null;this.attemptedToUnsubscribe=!1;this.count=0}k(a,b);a.prototype._next=function(a){var c;try{c=this.keySelector(a)}catch(d){this.error(d);return}this._group(a,c)};a.prototype._group=function(a,b){var c=this.groups;c||(c=this.groups="string"===typeof b?new Jd:new Id);var e=c.get(b),h;if(this.elementSelector)try{h=this.elementSelector(a)}catch(y){this.error(y)}else h=a;if(!e&&(e=this.subjectSelector?this.subjectSelector():new v,c.set(b,
            e),a=new ab(b,e,this),this.destination.next(a),this.durationSelector)){a=void 0;try{a=this.durationSelector(new ab(b,e))}catch(y){this.error(y);return}this.add(a.subscribe(new Md(b,e,this)))}e.closed||e.next(h)};a.prototype._error=function(a){var c=this.groups;c&&(c.forEach(function(c,b){c.error(a)}),c.clear());this.destination.error(a)};a.prototype._complete=function(){var a=this.groups;a&&(a.forEach(function(a,c){a.complete()}),a.clear());this.destination.complete()};a.prototype.removeGroup=function(a){this.groups.delete(a)};
            a.prototype.unsubscribe=function(){this.closed||(this.attemptedToUnsubscribe=!0,0===this.count&&b.prototype.unsubscribe.call(this))};return a}(l),Md=function(b){function a(a,e,d){b.call(this);this.key=a;this.group=e;this.parent=d}k(a,b);a.prototype._next=function(a){this._complete()};a.prototype._error=function(a){var c=this.group;c.closed||c.error(a);this.parent.removeGroup(this.key)};a.prototype._complete=function(){var a=this.group;a.closed||a.complete();this.parent.removeGroup(this.key)};return a}(l),
        ab=function(b){function a(a,e,d){b.call(this);this.key=a;this.groupSubject=e;this.refCountSubscription=d}k(a,b);a.prototype._subscribe=function(a){var c=new u,b=this.refCountSubscription,f=this.groupSubject;b&&!b.closed&&c.add(new Nd(b));c.add(f.subscribe(a));return c};return a}(g),Nd=function(b){function a(a){b.call(this);this.parent=a;a.count++}k(a,b);a.prototype.unsubscribe=function(){var a=this.parent;a.closed||this.closed||(b.prototype.unsubscribe.call(this),--a.count,0===a.count&&a.attemptedToUnsubscribe&&
        a.unsubscribe())};return a}(u);g.prototype.groupBy=function(b,a,c,e){return this.lift(new Ld(b,a,c,e))};var Pd=function(){function b(){}b.prototype.call=function(a,c){return c.subscribe(new Od(a))};return b}(),Od=function(b){function a(){b.apply(this,arguments)}k(a,b);a.prototype._next=function(a){};return a}(l);g.prototype.ignoreElements=function(){return this.lift(new Pd)};var Rd=function(){function b(){}b.prototype.call=function(a,c){return c.subscribe(new Qd(a))};return b}(),Qd=function(b){function a(a){b.call(this,
        a)}k(a,b);a.prototype.notifyComplete=function(a){var c=this.destination;c.next(a);c.complete()};a.prototype._next=function(a){this.notifyComplete(!1)};a.prototype._complete=function(){this.notifyComplete(!0)};return a}(l);g.prototype.isEmpty=function(){return this.lift(new Rd)};var Td=function(){function b(a){this.durationSelector=a}b.prototype.call=function(a,c){return c.subscribe(new Sd(a,this.durationSelector))};return b}(),Sd=function(b){function a(a,e){b.call(this,a);this.durationSelector=e;
        this.hasValue=!1}k(a,b);a.prototype._next=function(a){this.value=a;this.hasValue=!0;this.throttled||(a=r(this.durationSelector)(a),a===m?this.destination.error(m.e):this.add(this.throttled=p(this,a)))};a.prototype.clearThrottle=function(){var a=this.value,b=this.hasValue,d=this.throttled;d&&(this.remove(d),this.throttled=null,d.unsubscribe());b&&(this.value=null,this.hasValue=!1,this.destination.next(a))};a.prototype.notifyNext=function(a,b,d,f){this.clearThrottle()};a.prototype.notifyComplete=function(){this.clearThrottle()};
        return a}(q);g.prototype.audit=function(b){return this.lift(new Td(b))};var Vd=function(){function b(a,c){this.duration=a;this.scheduler=c}b.prototype.call=function(a,c){return c.subscribe(new Ud(a,this.duration,this.scheduler))};return b}(),Ud=function(b){function a(a,e,d){b.call(this,a);this.duration=e;this.scheduler=d;this.hasValue=!1}k(a,b);a.prototype._next=function(a){this.value=a;this.hasValue=!0;this.throttled||this.add(this.throttled=this.scheduler.schedule(Mb,this.duration,this))};a.prototype.clearThrottle=
        function(){var a=this.value,b=this.hasValue,d=this.throttled;d&&(this.remove(d),this.throttled=null,d.unsubscribe());b&&(this.value=null,this.hasValue=!1,this.destination.next(a))};return a}(l);g.prototype.auditTime=function(b,a){void 0===a&&(a=x);return this.lift(new Vd(b,a))};var Xd=function(){function b(a,c,b,d){this.predicate=a;this.resultSelector=c;this.defaultValue=b;this.source=d}b.prototype.call=function(a,c){return c.subscribe(new Wd(a,this.predicate,this.resultSelector,this.defaultValue,
        this.source))};return b}(),Wd=function(b){function a(a,e,d,f,h){b.call(this,a);this.predicate=e;this.resultSelector=d;this.defaultValue=f;this.source=h;this.hasValue=!1;this.index=0;"undefined"!==typeof f&&(this.lastValue=f,this.hasValue=!0)}k(a,b);a.prototype._next=function(a){var c=this.index++;this.predicate?this._tryPredicate(a,c):this.resultSelector?this._tryResultSelector(a,c):(this.lastValue=a,this.hasValue=!0)};a.prototype._tryPredicate=function(a,b){var c;try{c=this.predicate(a,b,this.source)}catch(f){this.destination.error(f);
        return}c&&(this.resultSelector?this._tryResultSelector(a,b):(this.lastValue=a,this.hasValue=!0))};a.prototype._tryResultSelector=function(a,b){var c;try{c=this.resultSelector(a,b)}catch(f){this.destination.error(f);return}this.lastValue=c;this.hasValue=!0};a.prototype._complete=function(){var a=this.destination;this.hasValue?(a.next(this.lastValue),a.complete()):a.error(new ba)};return a}(l);g.prototype.last=function(b,a,c){return this.lift(new Xd(b,a,c,this))};g.prototype.let=Ia;g.prototype.letBind=
        Ia;var Zd=function(){function b(a,c,b){this.predicate=a;this.thisArg=c;this.source=b}b.prototype.call=function(a,c){return c.subscribe(new Yd(a,this.predicate,this.thisArg,this.source))};return b}(),Yd=function(b){function a(a,e,d,f){b.call(this,a);this.predicate=e;this.thisArg=d;this.source=f;this.index=0;this.thisArg=d||this}k(a,b);a.prototype.notifyComplete=function(a){this.destination.next(a);this.destination.complete()};a.prototype._next=function(a){var c=!1;try{c=this.predicate.call(this.thisArg,
        a,this.index++,this.source)}catch(d){this.destination.error(d);return}c||this.notifyComplete(!1)};a.prototype._complete=function(){this.notifyComplete(!0)};return a}(l);g.prototype.every=function(b,a){return this.lift(new Zd(b,a,this))};g.prototype.map=wa;var ae=function(){function b(a){this.value=a}b.prototype.call=function(a,c){return c.subscribe(new $d(a,this.value))};return b}(),$d=function(b){function a(a,e){b.call(this,a);this.value=e}k(a,b);a.prototype._next=function(a){this.destination.next(this.value)};
        return a}(l);g.prototype.mapTo=function(b){return this.lift(new ae(b))};var ce=function(){function b(){}b.prototype.call=function(a,c){return c.subscribe(new be(a))};return b}(),be=function(b){function a(a){b.call(this,a)}k(a,b);a.prototype._next=function(a){this.destination.next(w.createNext(a))};a.prototype._error=function(a){var c=this.destination;c.next(w.createError(a));c.complete()};a.prototype._complete=function(){var a=this.destination;a.next(w.createComplete());a.complete()};return a}(l);
    g.prototype.materialize=function(){return this.lift(new ce)};var ja=function(){function b(a,c,b){void 0===b&&(b=!1);this.accumulator=a;this.seed=c;this.hasSeed=b}b.prototype.call=function(a,c){return c.subscribe(new de(a,this.accumulator,this.seed,this.hasSeed))};return b}(),de=function(b){function a(a,e,d,f){b.call(this,a);this.accumulator=e;this.hasSeed=f;this.index=0;this.hasValue=!1;this.acc=d;this.hasSeed||this.index++}k(a,b);a.prototype._next=function(a){this.hasValue||(this.hasValue=this.hasSeed)?
        this._tryReduce(a):(this.acc=a,this.hasValue=!0)};a.prototype._tryReduce=function(a){var c;try{c=this.accumulator(this.acc,a,this.index++)}catch(d){this.destination.error(d);return}this.acc=c};a.prototype._complete=function(){(this.hasValue||this.hasSeed)&&this.destination.next(this.acc);this.destination.complete()};return a}(l);g.prototype.max=function(b){return this.lift(new ja("function"===typeof b?function(a,c){return 0<b(a,c)?a:c}:function(a,c){return a>c?a:c}))};g.prototype.merge=function(){for(var b=
        [],a=0;a<arguments.length;a++)b[a-0]=arguments[a];return this.lift.call(sa.apply(void 0,[this].concat(b)))};g.prototype.mergeAll=function(b){void 0===b&&(b=Number.POSITIVE_INFINITY);return this.lift(new W(b))};g.prototype.mergeMap=Ba;g.prototype.flatMap=Ba;g.prototype.flatMapTo=Da;g.prototype.mergeMapTo=Da;var fe=function(){function b(a,c,b){this.accumulator=a;this.seed=c;this.concurrent=b}b.prototype.call=function(a,c){return c.subscribe(new ee(a,this.accumulator,this.seed,this.concurrent))};return b}(),
        ee=function(b){function a(a,e,d,f){b.call(this,a);this.accumulator=e;this.acc=d;this.concurrent=f;this.hasCompleted=this.hasValue=!1;this.buffer=[];this.index=this.active=0}k(a,b);a.prototype._next=function(a){if(this.active<this.concurrent){var c=this.index++,b=r(this.accumulator)(this.acc,a),f=this.destination;b===m?f.error(m.e):(this.active++,this._innerSub(b,a,c))}else this.buffer.push(a)};a.prototype._innerSub=function(a,b,d){this.add(p(this,a,b,d))};a.prototype._complete=function(){this.hasCompleted=
            !0;0===this.active&&0===this.buffer.length&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())};a.prototype.notifyNext=function(a,b,d,f,h){a=this.destination;this.acc=b;this.hasValue=!0;a.next(b)};a.prototype.notifyComplete=function(a){var c=this.buffer;this.remove(a);this.active--;0<c.length?this._next(c.shift()):0===this.active&&this.hasCompleted&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())};return a}(q);g.prototype.mergeScan=
        function(b,a,c){void 0===c&&(c=Number.POSITIVE_INFINITY);return this.lift(new fe(b,a,c))};g.prototype.min=function(b){return this.lift(new ja("function"===typeof b?function(a,c){return 0>b(a,c)?a:c}:function(a,c){return a<c?a:c}))};var bb=function(b){function a(a,e){b.call(this);this.source=a;this.subjectFactory=e;this._refCount=0;this._isComplete=!1}k(a,b);a.prototype._subscribe=function(a){return this.getSubject().subscribe(a)};a.prototype.getSubject=function(){var a=this._subject;if(!a||a.isStopped)this._subject=
        this.subjectFactory();return this._subject};a.prototype.connect=function(){var a=this._connection;a||(this._isComplete=!1,a=this._connection=new u,a.add(this.source.subscribe(new ge(this.getSubject(),this))),a.closed?(this._connection=null,a=u.EMPTY):this._connection=a);return a};a.prototype.refCount=function(){return this.lift(new he(this))};return a}(g),U=bb.prototype,Ob={operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},
        _subscribe:{value:U._subscribe},_isComplete:{value:U._isComplete,writable:!0},getSubject:{value:U.getSubject},connect:{value:U.connect},refCount:{value:U.refCount}},ge=function(b){function a(a,e){b.call(this,a);this.connectable=e}k(a,b);a.prototype._error=function(a){this._unsubscribe();b.prototype._error.call(this,a)};a.prototype._complete=function(){this.connectable._isComplete=!0;this._unsubscribe();b.prototype._complete.call(this)};a.prototype._unsubscribe=function(){var a=this.connectable;if(a){this.connectable=
        null;var b=a._connection;a._refCount=0;a._subject=null;a._connection=null;b&&b.unsubscribe()}};return a}(Oa),he=function(){function b(a){this.connectable=a}b.prototype.call=function(a,c){var b=this.connectable;b._refCount++;a=new ie(a,b);c=c.subscribe(a);a.closed||(a.connection=b.connect());return c};return b}(),ie=function(b){function a(a,e){b.call(this,a);this.connectable=e}k(a,b);a.prototype._unsubscribe=function(){var a=this.connectable;if(a){this.connectable=null;var b=a._refCount;0>=b?this.connection=
        null:(a._refCount=b-1,1<b?this.connection=null:(b=this.connection,a=a._connection,this.connection=null,!a||b&&a!==b||a.unsubscribe()))}else this.connection=null};return a}(l),Nb=function(){function b(a,c){this.subjectFactory=a;this.selector=c}b.prototype.call=function(a,c){var b=this.selector,d=this.subjectFactory();a=b(d).subscribe(a);a.add(c.subscribe(d));return a};return b}();g.prototype.multicast=G;g.prototype.observeOn=function(b,a){void 0===a&&(a=0);return this.lift(new kc(b,a))};g.prototype.onErrorResumeNext=
        function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];1===b.length&&D(b[0])&&(b=b[0]);return this.lift(new Va(b))};var ke=function(){function b(){}b.prototype.call=function(a,c){return c.subscribe(new je(a))};return b}(),je=function(b){function a(a){b.call(this,a);this.hasPrev=!1}k(a,b);a.prototype._next=function(a){this.hasPrev?this.destination.next([this.prev,a]):this.hasPrev=!0;this.prev=a};return a}(l);g.prototype.pairwise=function(){return this.lift(new ke)};g.prototype.partition=
        function(b,a){return[ea.call(this,b,a),ea.call(this,Pb(b,a))]};g.prototype.pluck=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];a=b.length;if(0===a)throw Error("list of properties cannot be empty.");return wa.call(this,Qb(b,a))};g.prototype.publish=function(b){return b?G.call(this,function(){return new v},b):G.call(this,new v)};var cb=function(b){function a(a){b.call(this);this._value=a}k(a,b);Object.defineProperty(a.prototype,"value",{get:function(){return this.getValue()},
        enumerable:!0,configurable:!0});a.prototype._subscribe=function(a){var c=b.prototype._subscribe.call(this,a);c&&!c.closed&&a.next(this._value);return c};a.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new H;return this._value};a.prototype.next=function(a){b.prototype.next.call(this,this._value=a)};return a}(v);g.prototype.publishBehavior=function(b){return G.call(this,new cb(b))};g.prototype.publishReplay=function(b,a,c){void 0===b&&(b=Number.POSITIVE_INFINITY);
        void 0===a&&(a=Number.POSITIVE_INFINITY);return G.call(this,new K(b,a,c))};g.prototype.publishLast=function(){return G.call(this,new L)};g.prototype.race=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];1===b.length&&D(b[0])&&(b=b[0]);return this.lift.call(ta.apply(void 0,[this].concat(b)))};g.prototype.reduce=function(b,a){var c=!1;2<=arguments.length&&(c=!0);return this.lift(new ja(b,a,c))};var db=function(){function b(a,c){this.count=a;this.source=c}b.prototype.call=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c){return c.subscribe(new le(a,this.count,this.source))};return b}(),le=function(b){function a(a,e,d){b.call(this,a);this.count=e;this.source=d}k(a,b);a.prototype.complete=function(){if(!this.isStopped){var a=this.source,e=this.count;if(0===e)return b.prototype.complete.call(this);-1<e&&(this.count=e-1);a.subscribe(this._unsubscribeAndRecycle())}};return a}(l);g.prototype.repeat=function(b){void 0===b&&(b=-1);return 0===b?new F:0>b?this.lift(new db(-1,this)):this.lift(new db(b-1,this))};var ne=function(){function b(a){this.notifier=
        a}b.prototype.call=function(a,c){return c.subscribe(new me(a,this.notifier,c))};return b}(),me=function(b){function a(a,e,d){b.call(this,a);this.notifier=e;this.source=d;this.sourceIsBeingSubscribedTo=!0}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.sourceIsBeingSubscribedTo=!0;this.source.subscribe(this)};a.prototype.notifyComplete=function(a){if(!1===this.sourceIsBeingSubscribedTo)return b.prototype.complete.call(this)};a.prototype.complete=function(){this.sourceIsBeingSubscribedTo=!1;
        if(!this.isStopped){if(!this.retries)this.subscribeToRetries();else if(this.retriesSubscription.closed)return b.prototype.complete.call(this);this._unsubscribeAndRecycle();this.notifications.next()}};a.prototype._unsubscribe=function(){var a=this.notifications,b=this.retriesSubscription;a&&(a.unsubscribe(),this.notifications=null);b&&(b.unsubscribe(),this.retriesSubscription=null);this.retries=null};a.prototype._unsubscribeAndRecycle=function(){var a=this.notifications,e=this.retries,d=this.retriesSubscription;
        this.retriesSubscription=this.retries=this.notifications=null;b.prototype._unsubscribeAndRecycle.call(this);this.notifications=a;this.retries=e;this.retriesSubscription=d;return this};a.prototype.subscribeToRetries=function(){this.notifications=new v;var a=r(this.notifier)(this.notifications);if(a===m)return b.prototype.complete.call(this);this.retries=a;this.retriesSubscription=p(this,a)};return a}(q);g.prototype.repeatWhen=function(b){return this.lift(new ne(b))};var pe=function(){function b(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           c){this.count=a;this.source=c}b.prototype.call=function(a,c){return c.subscribe(new oe(a,this.count,this.source))};return b}(),oe=function(b){function a(a,e,d){b.call(this,a);this.count=e;this.source=d}k(a,b);a.prototype.error=function(a){if(!this.isStopped){var c=this.source,d=this.count;if(0===d)return b.prototype.error.call(this,a);-1<d&&(this.count=d-1);c.subscribe(this._unsubscribeAndRecycle())}};return a}(l);g.prototype.retry=function(b){void 0===b&&(b=-1);return this.lift(new pe(b,this))};
    var re=function(){function b(a,c){this.notifier=a;this.source=c}b.prototype.call=function(a,c){return c.subscribe(new qe(a,this.notifier,this.source))};return b}(),qe=function(b){function a(a,e,d){b.call(this,a);this.notifier=e;this.source=d}k(a,b);a.prototype.error=function(a){if(!this.isStopped){var c=this.errors,d=this.retries,f=this.retriesSubscription;if(d)this.retriesSubscription=this.errors=null;else{c=new v;d=r(this.notifier)(c);if(d===m)return b.prototype.error.call(this,m.e);f=p(this,d)}this._unsubscribeAndRecycle();
        this.errors=c;this.retries=d;this.retriesSubscription=f;c.next(a)}};a.prototype._unsubscribe=function(){var a=this.errors,b=this.retriesSubscription;a&&(a.unsubscribe(),this.errors=null);b&&(b.unsubscribe(),this.retriesSubscription=null);this.retries=null};a.prototype.notifyNext=function(a,b,d,f,h){a=this.errors;b=this.retries;d=this.retriesSubscription;this.retriesSubscription=this.retries=this.errors=null;this._unsubscribeAndRecycle();this.errors=a;this.retries=b;this.retriesSubscription=d;this.source.subscribe(this)};
        return a}(q);g.prototype.retryWhen=function(b){return this.lift(new re(b,this))};var te=function(){function b(a){this.notifier=a}b.prototype.call=function(a,c){a=new se(a);c=c.subscribe(a);c.add(p(a,this.notifier));return c};return b}(),se=function(b){function a(){b.apply(this,arguments);this.hasValue=!1}k(a,b);a.prototype._next=function(a){this.value=a;this.hasValue=!0};a.prototype.notifyNext=function(a,b,d,f,h){this.emitValue()};a.prototype.notifyComplete=function(){this.emitValue()};a.prototype.emitValue=
        function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.value))};return a}(q);g.prototype.sample=function(b){return this.lift(new te(b))};var ve=function(){function b(a,c){this.period=a;this.scheduler=c}b.prototype.call=function(a,c){return c.subscribe(new ue(a,this.period,this.scheduler))};return b}(),ue=function(b){function a(a,e,d){b.call(this,a);this.period=e;this.scheduler=d;this.hasValue=!1;this.add(d.schedule(Rb,e,{subscriber:this,period:e}))}k(a,b);a.prototype._next=function(a){this.lastValue=
        a;this.hasValue=!0};a.prototype.notifyNext=function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))};return a}(l);g.prototype.sampleTime=function(b,a){void 0===a&&(a=x);return this.lift(new ve(b,a))};var xe=function(){function b(a,c,b){void 0===b&&(b=!1);this.accumulator=a;this.seed=c;this.hasSeed=b}b.prototype.call=function(a,c){return c.subscribe(new we(a,this.accumulator,this.seed,this.hasSeed))};return b}(),we=function(b){function a(a,e,d,f){b.call(this,a);this.accumulator=
        e;this._seed=d;this.hasSeed=f;this.index=0}k(a,b);Object.defineProperty(a.prototype,"seed",{get:function(){return this._seed},set:function(a){this.hasSeed=!0;this._seed=a},enumerable:!0,configurable:!0});a.prototype._next=function(a){if(this.hasSeed)return this._tryNext(a);this.seed=a;this.destination.next(a)};a.prototype._tryNext=function(a){var c=this.index++,b;try{b=this.accumulator(this.seed,a,c)}catch(f){this.destination.error(f)}this.seed=b;this.destination.next(b)};return a}(l);g.prototype.scan=
        function(b,a){var c=!1;2<=arguments.length&&(c=!0);return this.lift(new xe(b,a,c))};var ze=function(){function b(a,c){this.compareTo=a;this.comparor=c}b.prototype.call=function(a,c){return c.subscribe(new ye(a,this.compareTo,this.comparor))};return b}(),ye=function(b){function a(a,e,d){b.call(this,a);this.compareTo=e;this.comparor=d;this._a=[];this._b=[];this._oneComplete=!1;this.add(e.subscribe(new Ae(a,this)))}k(a,b);a.prototype._next=function(a){this._oneComplete&&0===this._b.length?this.emit(!1):
        (this._a.push(a),this.checkValues())};a.prototype._complete=function(){this._oneComplete?this.emit(0===this._a.length&&0===this._b.length):this._oneComplete=!0};a.prototype.checkValues=function(){for(var a=this._a,b=this._b,d=this.comparor;0<a.length&&0<b.length;){var f=a.shift(),h=b.shift();d?(f=r(d)(f,h),f===m&&this.destination.error(m.e)):f=f===h;f||this.emit(!1)}};a.prototype.emit=function(a){var c=this.destination;c.next(a);c.complete()};a.prototype.nextB=function(a){this._oneComplete&&0===this._a.length?
        this.emit(!1):(this._b.push(a),this.checkValues())};return a}(l),Ae=function(b){function a(a,e){b.call(this,a);this.parent=e}k(a,b);a.prototype._next=function(a){this.parent.nextB(a)};a.prototype._error=function(a){this.parent.error(a)};a.prototype._complete=function(){this.parent._complete()};return a}(l);g.prototype.sequenceEqual=function(b,a){return this.lift(new ze(b,a))};g.prototype.share=function(){return G.call(this,Sb).refCount()};g.prototype.shareReplay=function(b,a,c){var e;return G.call(this,
        function(){return this._isComplete?e:e=new K(b,a,c)}).refCount()};var Ce=function(){function b(a,c){this.predicate=a;this.source=c}b.prototype.call=function(a,c){return c.subscribe(new Be(a,this.predicate,this.source))};return b}(),Be=function(b){function a(a,e,d){b.call(this,a);this.predicate=e;this.source=d;this.seenValue=!1;this.index=0}k(a,b);a.prototype.applySingleValue=function(a){this.seenValue?this.destination.error("Sequence contains more than one element"):(this.seenValue=!0,this.singleValue=
        a)};a.prototype._next=function(a){var c=this.index++;this.predicate?this.tryNext(a,c):this.applySingleValue(a)};a.prototype.tryNext=function(a,b){try{this.predicate(a,b,this.source)&&this.applySingleValue(a)}catch(d){this.destination.error(d)}};a.prototype._complete=function(){var a=this.destination;0<this.index?(a.next(this.seenValue?this.singleValue:void 0),a.complete()):a.error(new ba)};return a}(l);g.prototype.single=function(b){return this.lift(new Ce(b,this))};var Ee=function(){function b(a){this.total=
        a}b.prototype.call=function(a,c){return c.subscribe(new De(a,this.total))};return b}(),De=function(b){function a(a,e){b.call(this,a);this.total=e;this.count=0}k(a,b);a.prototype._next=function(a){++this.count>this.total&&this.destination.next(a)};return a}(l);g.prototype.skip=function(b){return this.lift(new Ee(b))};var Ge=function(){function b(a){this._skipCount=a;if(0>this._skipCount)throw new M;}b.prototype.call=function(a,c){return 0===this._skipCount?c.subscribe(new l(a)):c.subscribe(new Fe(a,
        this._skipCount))};return b}(),Fe=function(b){function a(a,e){b.call(this,a);this._skipCount=e;this._count=0;this._ring=Array(e)}k(a,b);a.prototype._next=function(a){var c=this._skipCount,b=this._count++;if(b<c)this._ring[b]=a;else{var c=b%c,b=this._ring,f=b[c];b[c]=a;this.destination.next(f)}};return a}(l);g.prototype.skipLast=function(b){return this.lift(new Ge(b))};var Ie=function(){function b(a){this.notifier=a}b.prototype.call=function(a,c){return c.subscribe(new He(a,this.notifier))};return b}(),
        He=function(b){function a(a,e){b.call(this,a);this.isInnerStopped=this.hasValue=!1;this.add(p(this,e))}k(a,b);a.prototype._next=function(a){this.hasValue&&b.prototype._next.call(this,a)};a.prototype._complete=function(){this.isInnerStopped?b.prototype._complete.call(this):this.unsubscribe()};a.prototype.notifyNext=function(a,b,d,f,h){this.hasValue=!0};a.prototype.notifyComplete=function(){this.isInnerStopped=!0;this.isStopped&&b.prototype._complete.call(this)};return a}(q);g.prototype.skipUntil=function(b){return this.lift(new Ie(b))};
    var Ke=function(){function b(a){this.predicate=a}b.prototype.call=function(a,c){return c.subscribe(new Je(a,this.predicate))};return b}(),Je=function(b){function a(a,e){b.call(this,a);this.predicate=e;this.skipping=!0;this.index=0}k(a,b);a.prototype._next=function(a){var b=this.destination;this.skipping&&this.tryCallPredicate(a);this.skipping||b.next(a)};a.prototype.tryCallPredicate=function(a){try{this.skipping=!!this.predicate(a,this.index++)}catch(e){this.destination.error(e)}};return a}(l);g.prototype.skipWhile=
        function(b){return this.lift(new Ke(b))};g.prototype.startWith=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];a=b[b.length-1];z(a)?b.pop():a=null;var c=b.length;return 1===c?P(new ga(b[0],a),this):1<c?P(new E(b,a),this):P(new F(a),this)};var eb=new (function(){function b(a){this.root=a;a.setImmediate&&"function"===typeof a.setImmediate?(this.setImmediate=a.setImmediate.bind(a),this.clearImmediate=a.clearImmediate.bind(a)):(this.nextHandle=1,this.tasksByHandle={},this.currentlyRunningATask=
        !1,this.canUseProcessNextTick()?this.setImmediate=this.createProcessNextTickSetImmediate():this.canUsePostMessage()?this.setImmediate=this.createPostMessageSetImmediate():this.canUseMessageChannel()?this.setImmediate=this.createMessageChannelSetImmediate():this.canUseReadyStateChange()?this.setImmediate=this.createReadyStateChangeSetImmediate():this.setImmediate=this.createSetTimeoutSetImmediate(),a=function e(a){delete e.instance.tasksByHandle[a]},a.instance=this,this.clearImmediate=a)}b.prototype.identify=
        function(a){return this.root.Object.prototype.toString.call(a)};b.prototype.canUseProcessNextTick=function(){return"[object process]"===this.identify(this.root.process)};b.prototype.canUseMessageChannel=function(){return!!this.root.MessageChannel};b.prototype.canUseReadyStateChange=function(){var a=this.root.document;return!!(a&&"onreadystatechange"in a.createElement("script"))};b.prototype.canUsePostMessage=function(){var a=this.root;if(a.postMessage&&!a.importScripts){var b=!0,e=a.onmessage;a.onmessage=
        function(){b=!1};a.postMessage("","*");a.onmessage=e;return b}return!1};b.prototype.partiallyApplied=function(a){for(var b=[],e=1;e<arguments.length;e++)b[e-1]=arguments[e];e=function f(){var a=f.handler,b=f.args;"function"===typeof a?a.apply(void 0,b):(new Function(""+a))()};e.handler=a;e.args=b;return e};b.prototype.addFromSetImmediateArguments=function(a){this.tasksByHandle[this.nextHandle]=this.partiallyApplied.apply(void 0,a);return this.nextHandle++};b.prototype.createProcessNextTickSetImmediate=
        function(){var a=function e(){var a=e.instance,b=a.addFromSetImmediateArguments(arguments);a.root.process.nextTick(a.partiallyApplied(a.runIfPresent,b));return b};a.instance=this;return a};b.prototype.createPostMessageSetImmediate=function(){var a=this.root,b="setImmediate$"+a.Math.random()+"$",e=function f(c){var e=f.instance;c.source===a&&"string"===typeof c.data&&0===c.data.indexOf(b)&&e.runIfPresent(+c.data.slice(b.length))};e.instance=this;a.addEventListener("message",e,!1);e=function h(){var a=
        h,b=a.messagePrefix,a=a.instance,c=a.addFromSetImmediateArguments(arguments);a.root.postMessage(b+c,"*");return c};e.instance=this;e.messagePrefix=b;return e};b.prototype.runIfPresent=function(a){if(this.currentlyRunningATask)this.root.setTimeout(this.partiallyApplied(this.runIfPresent,a),0);else{var b=this.tasksByHandle[a];if(b){this.currentlyRunningATask=!0;try{b()}finally{this.clearImmediate(a),this.currentlyRunningATask=!1}}}};b.prototype.createMessageChannelSetImmediate=function(){var a=this,
        b=new this.root.MessageChannel;b.port1.onmessage=function(b){a.runIfPresent(b.data)};var e=function f(){var a=f,b=a.channel,a=a.instance.addFromSetImmediateArguments(arguments);b.port2.postMessage(a);return a};e.channel=b;e.instance=this;return e};b.prototype.createReadyStateChangeSetImmediate=function(){var a=function e(){var a=e.instance,b=a.root.document,h=b.documentElement,g=a.addFromSetImmediateArguments(arguments),k=b.createElement("script");k.onreadystatechange=function(){a.runIfPresent(g);
        k.onreadystatechange=null;h.removeChild(k);k=null};h.appendChild(k);return g};a.instance=this;return a};b.prototype.createSetTimeoutSetImmediate=function(){var a=function e(){var a=e.instance,b=a.addFromSetImmediateArguments(arguments);a.root.setTimeout(a.partiallyApplied(a.runIfPresent,b),0);return b};a.instance=this;return a};return b}())(n),Le=function(b){function a(a,e){b.call(this,a,e);this.scheduler=a;this.work=e}k(a,b);a.prototype.requestAsyncId=function(a,e,d){void 0===d&&(d=0);if(null!==
        d&&0<d)return b.prototype.requestAsyncId.call(this,a,e,d);a.actions.push(this);return a.scheduled||(a.scheduled=eb.setImmediate(a.flush.bind(a,null)))};a.prototype.recycleAsyncId=function(a,e,d){void 0===d&&(d=0);if(null!==d&&0<d||null===d&&0<this.delay)return b.prototype.recycleAsyncId.call(this,a,e,d);0===a.actions.length&&(eb.clearImmediate(e),a.scheduled=void 0)};return a}(S),ca=new (function(b){function a(){b.apply(this,arguments)}k(a,b);a.prototype.flush=function(a){this.active=!0;this.scheduled=
        void 0;var b=this.actions,c,f=-1,h=b.length;a=a||b.shift();do if(c=a.execute(a.state,a.delay))break;while(++f<h&&(a=b.shift()));this.active=!1;if(c){for(;++f<h&&(a=b.shift());)a.unsubscribe();throw c;}};return a}(T))(Le),Me=function(b){function a(a,e,d){void 0===e&&(e=0);void 0===d&&(d=ca);b.call(this);this.source=a;this.delayTime=e;this.scheduler=d;if(!Q(e)||0>e)this.delayTime=0;d&&"function"===typeof d.schedule||(this.scheduler=ca)}k(a,b);a.create=function(b,e,d){void 0===e&&(e=0);void 0===d&&(d=
        ca);return new a(b,e,d)};a.dispatch=function(a){return this.add(a.source.subscribe(a.subscriber))};a.prototype._subscribe=function(b){return this.scheduler.schedule(a.dispatch,this.delayTime,{source:this.source,subscriber:b})};return a}(g),Ne=function(){function b(a,b){this.scheduler=a;this.delay=b}b.prototype.call=function(a,b){return(new Me(b,this.delay,this.scheduler)).subscribe(a)};return b}();g.prototype.subscribeOn=function(b,a){void 0===a&&(a=0);return this.lift(new Ne(b,a))};var Tb=function(){function b(){}
        b.prototype.call=function(a,b){return b.subscribe(new Oe(a))};return b}(),Oe=function(b){function a(a){b.call(this,a);this.active=0;this.hasCompleted=!1}k(a,b);a.prototype._next=function(a){this.unsubscribeInner();this.active++;this.add(this.innerSubscription=p(this,a))};a.prototype._complete=function(){this.hasCompleted=!0;0===this.active&&this.destination.complete()};a.prototype.unsubscribeInner=function(){this.active=0<this.active?this.active-1:0;var a=this.innerSubscription;a&&(a.unsubscribe(),
        this.remove(a))};a.prototype.notifyNext=function(a,b,d,f,h){this.destination.next(b)};a.prototype.notifyError=function(a){this.destination.error(a)};a.prototype.notifyComplete=function(){this.unsubscribeInner();this.hasCompleted&&0===this.active&&this.destination.complete()};return a}(q);g.prototype.switch=Ja;g.prototype._switch=Ja;var Qe=function(){function b(a,b){this.project=a;this.resultSelector=b}b.prototype.call=function(a,b){return b.subscribe(new Pe(a,this.project,this.resultSelector))};return b}(),
        Pe=function(b){function a(a,e,d){b.call(this,a);this.project=e;this.resultSelector=d;this.index=0}k(a,b);a.prototype._next=function(a){var b,c=this.index++;try{b=this.project(a,c)}catch(f){this.destination.error(f);return}this._innerSub(b,a,c)};a.prototype._innerSub=function(a,b,d){var c=this.innerSubscription;c&&c.unsubscribe();this.add(this.innerSubscription=p(this,a,b,d))};a.prototype._complete=function(){var a=this.innerSubscription;a&&!a.closed||b.prototype._complete.call(this)};a.prototype._unsubscribe=
            function(){this.innerSubscription=null};a.prototype.notifyComplete=function(a){this.remove(a);this.innerSubscription=null;this.isStopped&&b.prototype._complete.call(this)};a.prototype.notifyNext=function(a,b,d,f,h){this.resultSelector?this._tryNotifyNext(a,b,d,f):this.destination.next(b)};a.prototype._tryNotifyNext=function(a,b,d,f){var c;try{c=this.resultSelector(a,b,d,f)}catch(y){this.destination.error(y);return}this.destination.next(c)};return a}(q);g.prototype.switchMap=function(b,a){return this.lift(new Qe(b,
        a))};var Se=function(){function b(a,b){this.observable=a;this.resultSelector=b}b.prototype.call=function(a,b){return b.subscribe(new Re(a,this.observable,this.resultSelector))};return b}(),Re=function(b){function a(a,e,d){b.call(this,a);this.inner=e;this.resultSelector=d;this.index=0}k(a,b);a.prototype._next=function(a){var b=this.innerSubscription;b&&b.unsubscribe();this.add(this.innerSubscription=p(this,this.inner,a,this.index++))};a.prototype._complete=function(){var a=this.innerSubscription;a&&
    !a.closed||b.prototype._complete.call(this)};a.prototype._unsubscribe=function(){this.innerSubscription=null};a.prototype.notifyComplete=function(a){this.remove(a);this.innerSubscription=null;this.isStopped&&b.prototype._complete.call(this)};a.prototype.notifyNext=function(a,b,d,f,h){h=this.destination;this.resultSelector?this.tryResultSelector(a,b,d,f):h.next(b)};a.prototype.tryResultSelector=function(a,b,d,f){var c=this.resultSelector,e=this.destination,g;try{g=c(a,b,d,f)}catch(B){e.error(B);return}e.next(g)};
        return a}(q);g.prototype.switchMapTo=function(b,a){return this.lift(new Se(b,a))};var Ue=function(){function b(a){this.total=a;if(0>this.total)throw new M;}b.prototype.call=function(a,b){return b.subscribe(new Te(a,this.total))};return b}(),Te=function(b){function a(a,e){b.call(this,a);this.total=e;this.count=0}k(a,b);a.prototype._next=function(a){var b=this.total,c=++this.count;c<=b&&(this.destination.next(a),c===b&&(this.destination.complete(),this.unsubscribe()))};return a}(l);g.prototype.take=
        function(b){return 0===b?new F:this.lift(new Ue(b))};var We=function(){function b(a){this.total=a;if(0>this.total)throw new M;}b.prototype.call=function(a,b){return b.subscribe(new Ve(a,this.total))};return b}(),Ve=function(b){function a(a,e){b.call(this,a);this.total=e;this.ring=[];this.count=0}k(a,b);a.prototype._next=function(a){var b=this.ring,c=this.total,f=this.count++;b.length<c?b.push(a):b[f%c]=a};a.prototype._complete=function(){var a=this.destination,b=this.count;if(0<b)for(var d=this.count>=
    this.total?this.total:this.count,f=this.ring,h=0;h<d;h++){var g=b++%d;a.next(f[g])}a.complete()};return a}(l);g.prototype.takeLast=function(b){return 0===b?new F:this.lift(new We(b))};var Ye=function(){function b(a){this.notifier=a}b.prototype.call=function(a,b){return b.subscribe(new Xe(a,this.notifier))};return b}(),Xe=function(b){function a(a,e){b.call(this,a);this.notifier=e;this.add(p(this,e))}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.complete()};a.prototype.notifyComplete=function(){};
        return a}(q);g.prototype.takeUntil=function(b){return this.lift(new Ye(b))};var $e=function(){function b(a){this.predicate=a}b.prototype.call=function(a,b){return b.subscribe(new Ze(a,this.predicate))};return b}(),Ze=function(b){function a(a,e){b.call(this,a);this.predicate=e;this.index=0}k(a,b);a.prototype._next=function(a){var b=this.destination,c;try{c=this.predicate(a,this.index++)}catch(f){b.error(f);return}this.nextOrComplete(a,c)};a.prototype.nextOrComplete=function(a,b){var c=this.destination;
        b?c.next(a):c.complete()};return a}(l);g.prototype.takeWhile=function(b){return this.lift(new $e(b))};var fb={leading:!0,trailing:!1},bf=function(){function b(a,b,e){this.durationSelector=a;this.leading=b;this.trailing=e}b.prototype.call=function(a,b){return b.subscribe(new af(a,this.durationSelector,this.leading,this.trailing))};return b}(),af=function(b){function a(a,e,d,f){b.call(this,a);this.destination=a;this.durationSelector=e;this._leading=d;this._trailing=f;this._hasTrailingValue=!1}k(a,b);
        a.prototype._next=function(a){if(this.throttled)this._trailing&&(this._hasTrailingValue=!0,this._trailingValue=a);else{var b=this.tryDurationSelector(a);b&&this.add(this.throttled=p(this,b));this._leading&&(this.destination.next(a),this._trailing&&(this._hasTrailingValue=!0,this._trailingValue=a))}};a.prototype.tryDurationSelector=function(a){try{return this.durationSelector(a)}catch(e){return this.destination.error(e),null}};a.prototype._unsubscribe=function(){var a=this.throttled;this._trailingValue=
            null;this._hasTrailingValue=!1;a&&(this.remove(a),this.throttled=null,a.unsubscribe())};a.prototype._sendTrailing=function(){var a=this.destination,b=this._trailing,d=this._trailingValue,f=this._hasTrailingValue;this.throttled&&b&&f&&(a.next(d),this._trailingValue=null,this._hasTrailingValue=!1)};a.prototype.notifyNext=function(a,b,d,f,h){this._sendTrailing();this._unsubscribe()};a.prototype.notifyComplete=function(){this._sendTrailing();this._unsubscribe()};return a}(q);g.prototype.throttle=function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      a){void 0===a&&(a=fb);return this.lift(new bf(b,a.leading,a.trailing))};var df=function(){function b(a,b,e,d){this.duration=a;this.scheduler=b;this.leading=e;this.trailing=d}b.prototype.call=function(a,b){return b.subscribe(new cf(a,this.duration,this.scheduler,this.leading,this.trailing))};return b}(),cf=function(b){function a(a,e,d,f,h){b.call(this,a);this.duration=e;this.scheduler=d;this.leading=f;this.trailing=h;this._hasTrailingValue=!1;this._trailingValue=null}k(a,b);a.prototype._next=function(a){this.throttled?
        this.trailing&&(this._trailingValue=a,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(Ub,this.duration,{subscriber:this})),this.leading&&this.destination.next(a))};a.prototype.clearThrottle=function(){var a=this.throttled;a&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),a.unsubscribe(),this.remove(a),this.throttled=null)};return a}(l);g.prototype.throttleTime=function(b,a,c){void 0===
    a&&(a=x);void 0===c&&(c=fb);return this.lift(new df(b,a,c.leading,c.trailing))};var gb=function(){return function(b,a){this.value=b;this.interval=a}}(),ff=function(){function b(a){this.scheduler=a}b.prototype.call=function(a,b){return b.subscribe(new ef(a,this.scheduler))};return b}(),ef=function(b){function a(a,e){b.call(this,a);this.scheduler=e;this.lastTime=0;this.lastTime=e.now()}k(a,b);a.prototype._next=function(a){var b=this.scheduler.now(),c=b-this.lastTime;this.lastTime=b;this.destination.next(new gb(a,
        c))};return a}(l);g.prototype.timeInterval=function(b){void 0===b&&(b=x);return this.lift(new ff(b))};var hb=function(b){function a(){var a=b.call(this,"Timeout has occurred");this.name=a.name="TimeoutError";this.stack=a.stack;this.message=a.message}k(a,b);return a}(Error),hf=function(){function b(a,b,e,d){this.waitFor=a;this.absoluteTimeout=b;this.scheduler=e;this.errorInstance=d}b.prototype.call=function(a,b){return b.subscribe(new gf(a,this.absoluteTimeout,this.waitFor,this.scheduler,this.errorInstance))};
        return b}(),gf=function(b){function a(a,e,d,f,h){b.call(this,a);this.absoluteTimeout=e;this.waitFor=d;this.scheduler=f;this.errorInstance=h;this.action=null;this.scheduleTimeout()}k(a,b);a.dispatchTimeout=function(a){a.error(a.errorInstance)};a.prototype.scheduleTimeout=function(){var b=this.action;b?this.action=b.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(a.dispatchTimeout,this.waitFor,this))};a.prototype._next=function(a){this.absoluteTimeout||this.scheduleTimeout();
        b.prototype._next.call(this,a)};a.prototype._unsubscribe=function(){this.errorInstance=this.scheduler=this.action=null};return a}(l);g.prototype.timeout=function(b,a){void 0===a&&(a=x);var c=X(b);b=c?+b-a.now():Math.abs(b);return this.lift(new hf(b,c,a,new hb))};var kf=function(){function b(a,b,e,d){this.waitFor=a;this.absoluteTimeout=b;this.withObservable=e;this.scheduler=d}b.prototype.call=function(a,b){return b.subscribe(new jf(a,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))};
        return b}(),jf=function(b){function a(a,e,d,f,h){b.call(this,a);this.absoluteTimeout=e;this.waitFor=d;this.withObservable=f;this.scheduler=h;this.action=null;this.scheduleTimeout()}k(a,b);a.dispatchTimeout=function(a){var b=a.withObservable;a._unsubscribeAndRecycle();a.add(p(a,b))};a.prototype.scheduleTimeout=function(){var b=this.action;b?this.action=b.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(a.dispatchTimeout,this.waitFor,this))};a.prototype._next=function(a){this.absoluteTimeout||
    this.scheduleTimeout();b.prototype._next.call(this,a)};a.prototype._unsubscribe=function(){this.withObservable=this.scheduler=this.action=null};return a}(q);g.prototype.timeoutWith=function(b,a,c){void 0===c&&(c=x);var e=X(b);b=e?+b-c.now():Math.abs(b);return this.lift(new kf(b,e,a,c))};var ib=function(){return function(b,a){this.value=b;this.timestamp=a}}(),mf=function(){function b(a){this.scheduler=a}b.prototype.call=function(a,b){return b.subscribe(new lf(a,this.scheduler))};return b}(),lf=function(b){function a(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e){b.call(this,a);this.scheduler=e}k(a,b);a.prototype._next=function(a){var b=this.scheduler.now();this.destination.next(new ib(a,b))};return a}(l);g.prototype.timestamp=function(b){void 0===b&&(b=x);return this.lift(new mf(b))};var of=function(){function b(){}b.prototype.call=function(a,b){return b.subscribe(new nf(a))};return b}(),nf=function(b){function a(a){b.call(this,a);this.array=[]}k(a,b);a.prototype._next=function(a){this.array.push(a)};a.prototype._complete=function(){this.destination.next(this.array);
        this.destination.complete()};return a}(l);g.prototype.toArray=function(){return this.lift(new of)};g.prototype.toPromise=function(b){var a=this;b||(n.Rx&&n.Rx.config&&n.Rx.config.Promise?b=n.Rx.config.Promise:n.Promise&&(b=n.Promise));if(!b)throw Error("no Promise impl found");return new b(function(b,e){var c;a.subscribe(function(a){return c=a},function(a){return e(a)},function(){return b(c)})})};var qf=function(){function b(a){this.windowBoundaries=a}b.prototype.call=function(a,b){a=new pf(a);b=
        b.subscribe(a);b.closed||a.add(p(a,this.windowBoundaries));return b};return b}(),pf=function(b){function a(a){b.call(this,a);this.window=new v;a.next(this.window)}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.openWindow()};a.prototype.notifyError=function(a,b){this._error(a)};a.prototype.notifyComplete=function(a){this._complete()};a.prototype._next=function(a){this.window.next(a)};a.prototype._error=function(a){this.window.error(a);this.destination.error(a)};a.prototype._complete=function(){this.window.complete();
        this.destination.complete()};a.prototype._unsubscribe=function(){this.window=null};a.prototype.openWindow=function(){var a=this.window;a&&a.complete();var a=this.destination,b=this.window=new v;a.next(b)};return a}(q);g.prototype.window=function(b){return this.lift(new qf(b))};var sf=function(){function b(a,b){this.windowSize=a;this.startWindowEvery=b}b.prototype.call=function(a,b){return b.subscribe(new rf(a,this.windowSize,this.startWindowEvery))};return b}(),rf=function(b){function a(a,e,d){b.call(this,
        a);this.destination=a;this.windowSize=e;this.startWindowEvery=d;this.windows=[new v];this.count=0;a.next(this.windows[0])}k(a,b);a.prototype._next=function(a){for(var b=0<this.startWindowEvery?this.startWindowEvery:this.windowSize,c=this.destination,f=this.windowSize,h=this.windows,g=h.length,k=0;k<g&&!this.closed;k++)h[k].next(a);a=this.count-f+1;0<=a&&0===a%b&&!this.closed&&h.shift().complete();0!==++this.count%b||this.closed||(b=new v,h.push(b),c.next(b))};a.prototype._error=function(a){var b=
        this.windows;if(b)for(;0<b.length&&!this.closed;)b.shift().error(a);this.destination.error(a)};a.prototype._complete=function(){var a=this.windows;if(a)for(;0<a.length&&!this.closed;)a.shift().complete();this.destination.complete()};a.prototype._unsubscribe=function(){this.count=0;this.windows=null};return a}(l);g.prototype.windowCount=function(b,a){void 0===a&&(a=0);return this.lift(new sf(b,a))};var uf=function(){function b(a,b,e,d){this.windowTimeSpan=a;this.windowCreationInterval=b;this.maxWindowSize=
            e;this.scheduler=d}b.prototype.call=function(a,b){return b.subscribe(new tf(a,this.windowTimeSpan,this.windowCreationInterval,this.maxWindowSize,this.scheduler))};return b}(),vf=function(b){function a(){b.apply(this,arguments);this._numberOfNextedValues=0}k(a,b);a.prototype.next=function(a){this._numberOfNextedValues++;b.prototype.next.call(this,a)};Object.defineProperty(a.prototype,"numberOfNextedValues",{get:function(){return this._numberOfNextedValues},enumerable:!0,configurable:!0});return a}(v),
        tf=function(b){function a(a,e,d,f,h){b.call(this,a);this.destination=a;this.windowTimeSpan=e;this.windowCreationInterval=d;this.maxWindowSize=f;this.scheduler=h;this.windows=[];a=this.openWindow();null!==d&&0<=d?(f={windowTimeSpan:e,windowCreationInterval:d,subscriber:this,scheduler:h},this.add(h.schedule(Ka,e,{subscriber:this,window:a,context:null})),this.add(h.schedule(Wb,d,f))):this.add(h.schedule(Vb,e,{subscriber:this,window:a,windowTimeSpan:e}))}k(a,b);a.prototype._next=function(a){for(var b=
            this.windows,c=b.length,f=0;f<c;f++){var h=b[f];h.closed||(h.next(a),h.numberOfNextedValues>=this.maxWindowSize&&this.closeWindow(h))}};a.prototype._error=function(a){for(var b=this.windows;0<b.length;)b.shift().error(a);this.destination.error(a)};a.prototype._complete=function(){for(var a=this.windows;0<a.length;){var b=a.shift();b.closed||b.complete()}this.destination.complete()};a.prototype.openWindow=function(){var a=new vf;this.windows.push(a);this.destination.next(a);return a};a.prototype.closeWindow=
            function(a){a.complete();var b=this.windows;b.splice(b.indexOf(a),1)};return a}(l);g.prototype.windowTime=function(b,a,c,e){var d=x,f=null,h=Number.POSITIVE_INFINITY;z(e)&&(d=e);z(c)?d=c:Q(c)&&(h=c);z(a)?d=a:Q(a)&&(f=a);return this.lift(new uf(b,f,h,d))};var xf=function(){function b(a,b){this.openings=a;this.closingSelector=b}b.prototype.call=function(a,b){return b.subscribe(new wf(a,this.openings,this.closingSelector))};return b}(),wf=function(b){function a(a,e,d){b.call(this,a);this.openings=e;
        this.closingSelector=d;this.contexts=[];this.add(this.openSubscription=p(this,e,e))}k(a,b);a.prototype._next=function(a){var b=this.contexts;if(b)for(var c=b.length,f=0;f<c;f++)b[f].window.next(a)};a.prototype._error=function(a){var c=this.contexts;this.contexts=null;if(c)for(var d=c.length,f=-1;++f<d;){var h=c[f];h.window.error(a);h.subscription.unsubscribe()}b.prototype._error.call(this,a)};a.prototype._complete=function(){var a=this.contexts;this.contexts=null;if(a)for(var e=a.length,d=-1;++d<
    e;){var f=a[d];f.window.complete();f.subscription.unsubscribe()}b.prototype._complete.call(this)};a.prototype._unsubscribe=function(){var a=this.contexts;this.contexts=null;if(a)for(var b=a.length,d=-1;++d<b;){var f=a[d];f.window.unsubscribe();f.subscription.unsubscribe()}};a.prototype.notifyNext=function(a,b,d,f,h){if(a===this.openings){f=r(this.closingSelector)(b);if(f===m)return this.error(m.e);a=new v;b=new u;d={window:a,subscription:b};this.contexts.push(d);f=p(this,f,d);f.closed?this.closeWindow(this.contexts.length-
        1):(f.context=d,b.add(f));this.destination.next(a)}else this.closeWindow(this.contexts.indexOf(a))};a.prototype.notifyError=function(a){this.error(a)};a.prototype.notifyComplete=function(a){a!==this.openSubscription&&this.closeWindow(this.contexts.indexOf(a.context))};a.prototype.closeWindow=function(a){if(-1!==a){var b=this.contexts,c=b[a],f=c.window,c=c.subscription;b.splice(a,1);f.complete();c.unsubscribe()}};return a}(q);g.prototype.windowToggle=function(b,a){return this.lift(new xf(b,a))};var zf=
        function(){function b(a){this.closingSelector=a}b.prototype.call=function(a,b){return b.subscribe(new yf(a,this.closingSelector))};return b}(),yf=function(b){function a(a,e){b.call(this,a);this.destination=a;this.closingSelector=e;this.openWindow()}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.openWindow(h)};a.prototype.notifyError=function(a,b){this._error(a)};a.prototype.notifyComplete=function(a){this.openWindow(a)};a.prototype._next=function(a){this.window.next(a)};a.prototype._error=
        function(a){this.window.error(a);this.destination.error(a);this.unsubscribeClosingNotification()};a.prototype._complete=function(){this.window.complete();this.destination.complete();this.unsubscribeClosingNotification()};a.prototype.unsubscribeClosingNotification=function(){this.closingNotification&&this.closingNotification.unsubscribe()};a.prototype.openWindow=function(a){void 0===a&&(a=null);a&&(this.remove(a),a.unsubscribe());(a=this.window)&&a.complete();a=this.window=new v;this.destination.next(a);
        a=r(this.closingSelector)();a===m?(a=m.e,this.destination.error(a),this.window.error(a)):this.add(this.closingNotification=p(this,a))};return a}(q);g.prototype.windowWhen=function(b){return this.lift(new zf(b))};var Bf=function(){function b(a,b){this.observables=a;this.project=b}b.prototype.call=function(a,b){return b.subscribe(new Af(a,this.observables,this.project))};return b}(),Af=function(b){function a(a,e,d){b.call(this,a);this.observables=e;this.project=d;this.toRespond=[];a=e.length;this.values=
        Array(a);for(d=0;d<a;d++)this.toRespond.push(d);for(d=0;d<a;d++){var c=e[d];this.add(p(this,c,c,d))}}k(a,b);a.prototype.notifyNext=function(a,b,d,f,h){this.values[d]=b;a=this.toRespond;0<a.length&&(d=a.indexOf(d),-1!==d&&a.splice(d,1))};a.prototype.notifyComplete=function(){};a.prototype._next=function(a){0===this.toRespond.length&&(a=[a].concat(this.values),this.project?this._tryProject(a):this.destination.next(a))};a.prototype._tryProject=function(a){var b;try{b=this.project.apply(this,a)}catch(d){this.destination.error(d);
        return}this.destination.next(b)};return a}(q);g.prototype.withLatestFrom=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];var c;"function"===typeof b[b.length-1]&&(c=b.pop());return this.lift(new Bf(b,c))};g.prototype.zip=function(){for(var b=[],a=0;a<arguments.length;a++)b[a-0]=arguments[a];return this.lift.call(ua.apply(void 0,[this].concat(b)))};g.prototype.zipAll=function(b){return this.lift(new va(b))};var V=function(){return function(b,a){void 0===a&&(a=Number.POSITIVE_INFINITY);
        this.subscribedFrame=b;this.unsubscribedFrame=a}}(),jb=function(){function b(){this.subscriptions=[]}b.prototype.logSubscribedFrame=function(){this.subscriptions.push(new V(this.scheduler.now()));return this.subscriptions.length-1};b.prototype.logUnsubscribedFrame=function(a){var b=this.subscriptions;b[a]=new V(b[a].subscribedFrame,this.scheduler.now())};return b}(),ka=function(b){function a(a,e){b.call(this,function(a){var b=this,c=b.logSubscribedFrame();a.add(new u(function(){b.logUnsubscribedFrame(c)}));
        b.scheduleMessages(a);return a});this.messages=a;this.subscriptions=[];this.scheduler=e}k(a,b);a.prototype.scheduleMessages=function(a){for(var b=this.messages.length,c=0;c<b;c++){var f=this.messages[c];a.add(this.scheduler.schedule(function(a){a.message.notification.observe(a.subscriber)},f.frame,{message:f,subscriber:a}))}};return a}(g);La(ka,[jb]);var kb=function(b){function a(a,e){b.call(this);this.messages=a;this.subscriptions=[];this.scheduler=e}k(a,b);a.prototype._subscribe=function(a){var c=
        this,d=c.logSubscribedFrame();a.add(new u(function(){c.logUnsubscribedFrame(d)}));return b.prototype._subscribe.call(this,a)};a.prototype.setup=function(){for(var a=this,b=a.messages.length,d=0;d<b;d++)(function(){var b=a.messages[d];a.scheduler.schedule(function(){b.notification.observe(a)},b.frame)})()};return a}(v);La(kb,[jb]);var mb=function(b){function a(a,e){var c=this;void 0===a&&(a=lb);void 0===e&&(e=Number.POSITIVE_INFINITY);b.call(this,a,function(){return c.frame});this.maxFrames=e;this.frame=
            0;this.index=-1}k(a,b);a.prototype.flush=function(){for(var a=this.actions,b=this.maxFrames,d,f;(f=a.shift())&&(this.frame=f.delay)<=b&&!(d=f.execute(f.state,f.delay)););if(d){for(;f=a.shift();)f.unsubscribe();throw d;}};a.frameTimeFactor=10;return a}(T),lb=function(b){function a(a,e,d){void 0===d&&(d=a.index+=1);b.call(this,a,e);this.scheduler=a;this.work=e;this.index=d;this.active=!0;this.index=a.index=d}k(a,b);a.prototype.schedule=function(c,e){void 0===e&&(e=0);if(!this.id)return b.prototype.schedule.call(this,
        c,e);this.active=!1;var d=new a(this.scheduler,this.work);this.add(d);return d.schedule(c,e)};a.prototype.requestAsyncId=function(b,e,d){void 0===d&&(d=0);this.delay=b.frame+d;b=b.actions;b.push(this);b.sort(a.sortActions);return!0};a.prototype.recycleAsyncId=function(a,b,d){};a.prototype._execute=function(a,e){if(!0===this.active)return b.prototype._execute.call(this,a,e)};a.sortActions=function(a,b){return a.delay===b.delay?a.index===b.index?0:a.index>b.index?1:-1:a.delay>b.delay?1:-1};return a}(S),
        Cf=function(b){function a(a){b.call(this,lb,750);this.assertDeepEqual=a;this.hotObservables=[];this.coldObservables=[];this.flushTests=[]}k(a,b);a.prototype.createTime=function(b){b=b.indexOf("|");if(-1===b)throw Error('marble diagram for time should have a completion marker "|"');return b*a.frameTimeFactor};a.prototype.createColdObservable=function(b,e,d){if(-1!==b.indexOf("^"))throw Error('cold observable cannot have subscription offset "^"');if(-1!==b.indexOf("!"))throw Error('cold observable cannot have unsubscription marker "!"');
            b=a.parseMarbles(b,e,d);b=new ka(b,this);this.coldObservables.push(b);return b};a.prototype.createHotObservable=function(b,e,d){if(-1!==b.indexOf("!"))throw Error('hot observable cannot have unsubscription marker "!"');b=a.parseMarbles(b,e,d);b=new kb(b,this);this.hotObservables.push(b);return b};a.prototype.materializeInnerObservable=function(a,b){var c=this,e=[];a.subscribe(function(a){e.push({frame:c.frame-b,notification:w.createNext(a)})},function(a){e.push({frame:c.frame-b,notification:w.createError(a)})},
            function(){e.push({frame:c.frame-b,notification:w.createComplete()})});return e};a.prototype.expectObservable=function(b,e){var c=this;void 0===e&&(e=null);var f=[],h={actual:f,ready:!1};e=a.parseMarblesAsSubscriptions(e).unsubscribedFrame;var k;this.schedule(function(){k=b.subscribe(function(a){var b=a;a instanceof g&&(b=c.materializeInnerObservable(b,c.frame));f.push({frame:c.frame,notification:w.createNext(b)})},function(a){f.push({frame:c.frame,notification:w.createError(a)})},function(){f.push({frame:c.frame,
            notification:w.createComplete()})})},0);e!==Number.POSITIVE_INFINITY&&this.schedule(function(){return k.unsubscribe()},e);this.flushTests.push(h);return{toBe:function(b,c,d){h.ready=!0;h.expected=a.parseMarbles(b,c,d,!0)}}};a.prototype.expectSubscriptions=function(b){var c={actual:b,ready:!1};this.flushTests.push(c);return{toBe:function(b){b="string"===typeof b?[b]:b;c.ready=!0;c.expected=b.map(function(b){return a.parseMarblesAsSubscriptions(b)})}}};a.prototype.flush=function(){for(var a=this.hotObservables;0<
        a.length;)a.shift().setup();b.prototype.flush.call(this);for(a=this.flushTests.filter(function(a){return a.ready});0<a.length;){var e=a.shift();this.assertDeepEqual(e.actual,e.expected)}};a.parseMarblesAsSubscriptions=function(a){if("string"!==typeof a)return new V(Number.POSITIVE_INFINITY);for(var b=a.length,c=-1,f=Number.POSITIVE_INFINITY,g=Number.POSITIVE_INFINITY,k=0;k<b;k++){var l=k*this.frameTimeFactor,m=a[k];switch(m){case "-":case " ":break;case "(":c=l;break;case ")":c=-1;break;case "^":if(f!==
            Number.POSITIVE_INFINITY)throw Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");f=-1<c?c:l;break;case "!":if(g!==Number.POSITIVE_INFINITY)throw Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");g=-1<c?c:l;break;default:throw Error("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '"+m+"'.");}}return 0>g?new V(f):new V(f,g)};a.parseMarbles=function(a,b,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            f){void 0===f&&(f=!1);if(-1!==a.indexOf("!"))throw Error('conventional marble diagrams cannot have the unsubscription marker "!"');for(var c=a.length,e=[],g=a.indexOf("^"),g=-1===g?0:g*-this.frameTimeFactor,k="object"!==typeof b?function(a){return a}:function(a){return f&&b[a]instanceof ka?b[a].messages:b[a]},l=-1,m=0;m<c;m++){var n=m*this.frameTimeFactor+g,p=void 0,q=a[m];switch(q){case "-":case " ":break;case "(":l=n;break;case ")":l=-1;break;case "|":p=w.createComplete();break;case "^":break;case "#":p=
            w.createError(d||"error");break;default:p=w.createNext(k(q))}p&&e.push({frame:-1<l?l:n,notification:p})}return e};return a}(mb),nb=new (function(){return function(b){b.requestAnimationFrame?(this.cancelAnimationFrame=b.cancelAnimationFrame.bind(b),this.requestAnimationFrame=b.requestAnimationFrame.bind(b)):b.mozRequestAnimationFrame?(this.cancelAnimationFrame=b.mozCancelAnimationFrame.bind(b),this.requestAnimationFrame=b.mozRequestAnimationFrame.bind(b)):b.webkitRequestAnimationFrame?(this.cancelAnimationFrame=
            b.webkitCancelAnimationFrame.bind(b),this.requestAnimationFrame=b.webkitRequestAnimationFrame.bind(b)):b.msRequestAnimationFrame?(this.cancelAnimationFrame=b.msCancelAnimationFrame.bind(b),this.requestAnimationFrame=b.msRequestAnimationFrame.bind(b)):b.oRequestAnimationFrame?(this.cancelAnimationFrame=b.oCancelAnimationFrame.bind(b),this.requestAnimationFrame=b.oRequestAnimationFrame.bind(b)):(this.cancelAnimationFrame=b.clearTimeout.bind(b),this.requestAnimationFrame=function(a){return b.setTimeout(a,
            1E3/60)})}}())(n),Df=function(b){function a(a,e){b.call(this,a,e);this.scheduler=a;this.work=e}k(a,b);a.prototype.requestAsyncId=function(a,e,d){void 0===d&&(d=0);if(null!==d&&0<d)return b.prototype.requestAsyncId.call(this,a,e,d);a.actions.push(this);return a.scheduled||(a.scheduled=nb.requestAnimationFrame(a.flush.bind(a,null)))};a.prototype.recycleAsyncId=function(a,e,d){void 0===d&&(d=0);if(null!==d&&0<d||null===d&&0<this.delay)return b.prototype.recycleAsyncId.call(this,a,e,d);0===a.actions.length&&
        (nb.cancelAnimationFrame(e),a.scheduled=void 0)};return a}(S),Ef=new (function(b){function a(){b.apply(this,arguments)}k(a,b);a.prototype.flush=function(a){this.active=!0;this.scheduled=void 0;var b=this.actions,c,f=-1,g=b.length;a=a||b.shift();do if(c=a.execute(a.state,a.delay))break;while(++f<g&&(a=b.shift()));this.active=!1;if(c){for(;++f<g&&(a=b.shift());)a.unsubscribe();throw c;}};return a}(T))(Df),Ff={rxSubscriber:R,observable:I,iterator:A};t.Scheduler={asap:ca,queue:Ya,animationFrame:Ef,async:x};
    t.Symbol=Ff;t.Subject=v;t.AnonymousSubject=Z;t.Observable=g;t.Subscription=u;t.Subscriber=l;t.AsyncSubject=L;t.ReplaySubject=K;t.BehaviorSubject=cb;t.ConnectableObservable=bb;t.Notification=w;t.EmptyError=ba;t.ArgumentOutOfRangeError=M;t.ObjectUnsubscribedError=H;t.TimeoutError=hb;t.UnsubscriptionError=O;t.TimeInterval=gb;t.Timestamp=ib;t.TestScheduler=Cf;t.VirtualTimeScheduler=mb;t.AjaxResponse=Wa;t.AjaxError=aa;t.AjaxTimeoutError=Xa;Object.defineProperty(t,"__esModule",{value:!0})});;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map;
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Hc.apply(null,arguments)}function b(a){Hc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Jc.length>0)for(c in Jc)d=Jc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Kc===!1&&(Kc=!0,a.updateOffset(this),Kc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Lc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ic._abbr,require("./locale/"+a),w(b)}catch(c){}return Lc[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Ic=c)),Ic._abbr}function x(a,b){return null!==b?(b.abbr=a,Lc[a]=Lc[a]||new s,Lc[a].set(b),w(a),Lc[a]):(delete Lc[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ic;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Mc[c]=Mc[c+"s"]=Mc[b]=a}function A(a){return"string"==typeof a?Mc[a]||Mc[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Qc[a]=e),b&&(Qc[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Qc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Nc);for(b=0,c=d.length;c>b;b++)Qc[d[b]]?d[b]=Qc[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Pc[b]=Pc[b]||J(b),Pc[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Oc.lastIndex=0;d>=0&&Oc.test(a);)a=a.replace(Oc,c),Oc.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){dd[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(dd,a)?dd[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)ed[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(ed,a)&&ed[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[gd]<0||c[gd]>11?gd:c[hd]<1||c[hd]>T(c[fd],c[gd])?hd:c[id]<0||c[id]>24||24===c[id]&&(0!==c[jd]||0!==c[kd]||0!==c[ld])?id:c[jd]<0||c[jd]>59?jd:c[kd]<0||c[kd]>59?kd:c[ld]<0||c[ld]>999?ld:-1,j(a)._overflowDayOfYear&&(fd>b||b>hd)&&(b=hd),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){od[a]||(_(b),od[a]=!0)}function ca(a){var b,c,d=a._i,e=pd.exec(d);if(e){for(j(a).iso=!0,b=0,c=qd.length;c>b;b++)if(qd[b][1].exec(d)){a._f=qd[b][0];break}for(b=0,c=rd.length;c>b;b++)if(rd[b][1].exec(d)){a._f+=(e[6]||" ")+rd[b][0];break}d.match(ad)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=sd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[hd]&&null==a._a[gd]&&ua(a),a._dayOfYear&&(e=ra(a._a[fd],d[fd]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[gd]=c.getUTCMonth(),a._a[hd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[id]&&0===a._a[jd]&&0===a._a[kd]&&0===a._a[ld]&&(a._nextDay=!0,a._a[id]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[id]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[fd],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[fd],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[fd]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Nc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Qc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[id]<=12&&b._a[id]>0&&(j(b).bigHour=void 0),b._a[id]=wa(b._locale,b._a[id],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(ad)||[],c=b[b.length-1]||[],d=(c+"").match(xd)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=yd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[hd])*c,h:q(h[id])*c,m:q(h[jd])*c,s:q(h[kd])*c,ms:q(h[ld])*c}):(h=zd.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[ld]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=Wd(this._milliseconds),this._days=Wd(this._days),this._months=Wd(this._months),a.milliseconds=Wd(a.milliseconds),a.seconds=Wd(a.seconds),a.minutes=Wd(a.minutes),a.hours=Wd(a.hours),a.months=Wd(a.months),a.years=Wd(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=ke(d.as("s")),f=ke(d.as("m")),g=ke(d.as("h")),h=ke(d.as("d")),i=ke(d.as("M")),j=ke(d.as("y")),k=e<le.s&&["s",e]||1===f&&["m"]||f<le.m&&["mm",f]||1===g&&["h"]||g<le.h&&["hh",g]||1===h&&["d"]||h<le.d&&["dd",h]||1===i&&["M"]||i<le.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===le[a]?!1:void 0===b?le[a]:(le[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=me(this._milliseconds)/1e3,e=me(this._days),f=me(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Hc,Ic,Jc=a.momentProperties=[],Kc=!1,Lc={},Mc={},Nc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Oc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pc={},Qc={},Rc=/\d/,Sc=/\d\d/,Tc=/\d{3}/,Uc=/\d{4}/,Vc=/[+-]?\d{6}/,Wc=/\d\d?/,Xc=/\d{1,3}/,Yc=/\d{1,4}/,Zc=/[+-]?\d{1,6}/,$c=/\d+/,_c=/[+-]?\d+/,ad=/Z|[+-]\d\d:?\d\d/gi,bd=/[+-]?\d+(\.\d{1,3})?/,cd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,dd={},ed={},fd=0,gd=1,hd=2,id=3,jd=4,kd=5,ld=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",Wc),N("MM",Wc,Sc),N("MMM",cd),N("MMMM",cd),Q(["M","MM"],function(a,b){b[gd]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[gd]=e:j(c).invalidMonth=a});var md="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),od={};a.suppressDeprecationWarnings=!1;var pd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",_c),N("YY",Wc,Sc),N("YYYY",Yc,Uc),N("YYYYY",Zc,Vc),N("YYYYYY",Zc,Vc),Q(["YYYYY","YYYYYY"],fd),Q("YYYY",function(b,c){c[fd]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[fd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var td=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",Wc),N("ww",Wc,Sc),N("W",Wc),N("WW",Wc,Sc),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ud={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",Xc),N("DDDD",Tc),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var vd=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),wd=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",ad),N("ZZ",ad),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var xd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var yd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Ad=ab(1,"add"),Bd=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Cd=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",_c),N("g",_c),N("GG",Wc,Sc),N("gg",Wc,Sc),N("GGGG",Yc,Uc),N("gggg",Yc,Uc),N("GGGGG",Zc,Vc),N("ggggg",Zc,Vc),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Rc),Q("Q",function(a,b){b[gd]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",Wc),N("DD",Wc,Sc),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],hd),Q("Do",function(a,b){b[hd]=q(a.match(Wc)[0],10)});var Dd=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",Wc),N("e",Wc),N("E",Wc),N("dd",cd),N("ddd",cd),N("dddd",cd),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Ed="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Fd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Gd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",Wc),N("h",Wc),N("HH",Wc,Sc),N("hh",Wc,Sc),Q(["H","HH"],id),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[id]=q(a),j(c).bigHour=!0});var Hd=/[ap]\.?m?\.?/i,Id=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",Wc),N("mm",Wc,Sc),Q(["m","mm"],jd);var Jd=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",Wc),N("ss",Wc,Sc),Q(["s","ss"],kd);var Kd=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",Xc,Rc),N("SS",Xc,Sc),N("SSS",Xc,Tc);var Ld;for(Ld="SSSS";Ld.length<=9;Ld+="S")N(Ld,$c);for(Ld="S";Ld.length<=9;Ld+="S")Q(Ld,Wb);var Md=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Nd=n.prototype;Nd.add=Ad,Nd.calendar=cb,Nd.clone=db,Nd.diff=ib,Nd.endOf=ub,Nd.format=mb,Nd.from=nb,Nd.fromNow=ob,Nd.to=pb,Nd.toNow=qb,Nd.get=F,Nd.invalidAt=Cb,Nd.isAfter=eb,Nd.isBefore=fb,Nd.isBetween=gb,Nd.isSame=hb,Nd.isValid=Ab,Nd.lang=Cd,Nd.locale=rb,Nd.localeData=sb,Nd.max=wd,Nd.min=vd,Nd.parsingFlags=Bb,Nd.set=F,Nd.startOf=tb,Nd.subtract=Bd,Nd.toArray=yb,Nd.toObject=zb,Nd.toDate=xb,Nd.toISOString=lb,Nd.toJSON=lb,Nd.toString=kb,Nd.unix=wb,Nd.valueOf=vb,Nd.year=td,Nd.isLeapYear=ia,Nd.weekYear=Fb,Nd.isoWeekYear=Gb,Nd.quarter=Nd.quarters=Jb,Nd.month=Y,Nd.daysInMonth=Z,Nd.week=Nd.weeks=na,Nd.isoWeek=Nd.isoWeeks=oa,Nd.weeksInYear=Ib,Nd.isoWeeksInYear=Hb,Nd.date=Dd,Nd.day=Nd.days=Pb,Nd.weekday=Qb,Nd.isoWeekday=Rb,Nd.dayOfYear=qa,Nd.hour=Nd.hours=Id,Nd.minute=Nd.minutes=Jd,Nd.second=Nd.seconds=Kd,
    Nd.millisecond=Nd.milliseconds=Md,Nd.utcOffset=Na,Nd.utc=Pa,Nd.local=Qa,Nd.parseZone=Ra,Nd.hasAlignedHourOffset=Sa,Nd.isDST=Ta,Nd.isDSTShifted=Ua,Nd.isLocal=Va,Nd.isUtcOffset=Wa,Nd.isUtc=Xa,Nd.isUTC=Xa,Nd.zoneAbbr=Xb,Nd.zoneName=Yb,Nd.dates=aa("dates accessor is deprecated. Use date instead.",Dd),Nd.months=aa("months accessor is deprecated. Use month instead",Y),Nd.years=aa("years accessor is deprecated. Use year instead",td),Nd.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Od=Nd,Pd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Qd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Rd="Invalid date",Sd="%d",Td=/\d{1,2}/,Ud={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vd=s.prototype;Vd._calendar=Pd,Vd.calendar=_b,Vd._longDateFormat=Qd,Vd.longDateFormat=ac,Vd._invalidDate=Rd,Vd.invalidDate=bc,Vd._ordinal=Sd,Vd.ordinal=cc,Vd._ordinalParse=Td,Vd.preparse=dc,Vd.postformat=dc,Vd._relativeTime=Ud,Vd.relativeTime=ec,Vd.pastFuture=fc,Vd.set=gc,Vd.months=U,Vd._months=md,Vd.monthsShort=V,Vd._monthsShort=nd,Vd.monthsParse=W,Vd.week=ka,Vd._week=ud,Vd.firstDayOfYear=ma,Vd.firstDayOfWeek=la,Vd.weekdays=Lb,Vd._weekdays=Ed,Vd.weekdaysMin=Nb,Vd._weekdaysMin=Gd,Vd.weekdaysShort=Mb,Vd._weekdaysShort=Fd,Vd.weekdaysParse=Ob,Vd.isPM=Ub,Vd._meridiemParse=Hd,Vd.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var Wd=Math.abs,Xd=yc("ms"),Yd=yc("s"),Zd=yc("m"),$d=yc("h"),_d=yc("d"),ae=yc("w"),be=yc("M"),ce=yc("y"),de=Ac("milliseconds"),ee=Ac("seconds"),fe=Ac("minutes"),ge=Ac("hours"),he=Ac("days"),ie=Ac("months"),je=Ac("years"),ke=Math.round,le={s:45,m:45,h:22,d:26,M:11},me=Math.abs,ne=Ha.prototype;ne.abs=oc,ne.add=qc,ne.subtract=rc,ne.as=wc,ne.asMilliseconds=Xd,ne.asSeconds=Yd,ne.asMinutes=Zd,ne.asHours=$d,ne.asDays=_d,ne.asWeeks=ae,ne.asMonths=be,ne.asYears=ce,ne.valueOf=xc,ne._bubble=tc,ne.get=zc,ne.milliseconds=de,ne.seconds=ee,ne.minutes=fe,ne.hours=ge,ne.days=he,ne.weeks=Bc,ne.months=ie,ne.years=je,ne.humanize=Fc,ne.toISOString=Gc,ne.toString=Gc,ne.toJSON=Gc,ne.locale=rb,ne.localeData=sb,ne.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),ne.lang=Cd,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",_c),N("X",bd),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),a.version="2.10.6",b(Da),a.fn=Od,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});;
/**
 * Created with JetBrains PhpStorm.
 * User: Loin
 * Date: 12-5-9
 * Time: 下午4:09
 * To change this template use File | Settings | File Templates.
 */
(function($) {
    var autoload = {
        css: function(files, options) {

            this.fetch(files, function(data) {
                if('css_list' in data) {
                    $.each(data['css_list'], function(index, value) {
                        var element;
                        if($.browser.msie) {
                            element = window.document.createStyleSheet(value);
                            $(element).attr({
                                'media': 'all'
                            });
                        } else {
                            element = $('<link/>').attr({
                                'href': value,
                                'media': 'all',
                                'rel': 'stylesheet',
                                'type': 'text/css'
                            }).appendTo('head');
                        }
                    });
                }
            });

            return true;
        },
        js: function(files, options) {

            this.fetch(files, function(data) {
                var resource = {};
                if('js_list' in data) {
                    resource = data['js_list'];
                    $.each(data['js_list'], function(index, value) {
                        $.ajax({
                            url: value,
                            dataType: 'script',
                            success: function() {
                                for(var i in resource) {
                                    if(value == resource[i]) {
                                        resource.splice(i, 1);
                                        i--;
                                    }
                                }
                                if(!resource.length && options.successCallback) {
                                    options.successCallback();
                                }
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown) {
                                if(console) {
                                    console.log(XMLHttpRequest, textStatus, errorThrown);
                                }
                            }
                        });
                    });
                }
            });

            return true;
        },
        findPath: function(baseFile) {
            baseFile = baseFile.replace(/\./g, "\\.");

            var collection = $('script'),
                reg = eval('/^(.*)' + baseFile + '$/'),
                i,
                p;

            for(i = 0; i < collection.length; i += 1) {
                p = reg.exec(collection[i].src);

                if(null !== p) {
                    return p[1];
                }
            }

            return null;
        },
        fetch: function(files, callback) {
            var cssList = [], jsList = [];

            if(!$.isArray(files)) {
                files = [files];
            }

            for(var i in files) {
                if(~files[i].indexOf('.css')) {
                    cssList.push(files[i]);
                } else {
                    jsList.push(files[i]);
                }
            }

            $.getJSON('/ajax/ajax_fetch_cssjs.php', {css_list: cssList, js_list: jsList}, function(data) {
                if(callback) {
                    callback(data);
                }
            });
        }
    };

    $.autoload = {
        css: function(names, options) {
            var cssPath = (undefined === options.cssPath) ? '/css/' : options.cssPath,
                i;

            options = {'cssPath': cssPath};

            if('string' === typeof names) {
                names = [names];
            }

            for(i = 0; i < names.length; i += 1) {
                names[i] = options.cssPath + names[i];
            }
            autoload.css(names, options);
        },
        js: function(names, options) {
            var i;

            options.jsPath = (undefined === options.jsPath) ? '/js/' : options.jsPath;

            if('string' === typeof names) {
                names = [names];
            }

            for (i = 0; i < names.length; i += 1) {
                names[i] = options.jsPath + names[i];
            }
            autoload.js(names, options);
        },
        fetch: function(files, callback) {
            autoload.fetch(files, callback);
        }
    };
})(jQuery);
;
/**
 * Created with JetBrains PhpStorm.
 * User: Loin
 * Date: 12-4-27
 * Time: 下午12:37
 * To change this template use File | Settings | File Templates.
 * test
 */

(function ($) {

	var console = window.console ? window.console : {
		log: $.noop,
		error: function (msg) {
			$.error(msg);
		}
	};

    function mfweditor() {
        this.controls = { //功能列表
            insertImage : {
                groupIndex: 0, //所在分组索引
                className: "t-image", //按钮CSS名称
                visible: true, //是否显示
                exec: function(object) { //处理方法
                    var self = this;
                    if($.mfweditor.controls && $.mfweditor.controls.image) {
                        $.mfweditor.controls.image.init(this, object);
                    } else if($.mfweditor.autoload) {
                        $.mfweditor.autoload.js('mfweditor.compress.js', function() {
                            self.controls.insertImage.exec.apply(self, [object]);
                        });
                    } else {
                        console.error('$.mfweditor.controls.image not defined. You need to include mfweditor.image.js file');
                    }
                },
                //hotkey: {"alt": 1, "key": 84},
                tags: ["img"],
                text: "图片", //按钮文字
                tooltip: "添加图片" //按钮tip
            },
            insertWengImage : {
                groupIndex: 0,
                className: "t-wengImage",
                visible: false,
                exec: function(object) {
                    var self = this;
                    if($.mfweditor.controls && $.mfweditor.controls.wengImage) {
                        $.mfweditor.controls.wengImage.init(this, object);
                    } else if($.mfweditor.autoload) {
                        $.mfweditor.autoload.js('mfweditor.weng.image.js', function() {
                            self.controls.insertWengImage.exec.apply(self, [object]);
                        });
                    } else {
                        console.error('$.mfweditor.controls.wengImage not defined. You need to include mfweditor.weng.image.js file');
                    }
                },
                tags: ["img"],
                text: "嗡嗡相册",
                tooltip: "添加嗡嗡相册图片"
            },
            insertVideo : {
                groupIndex: 0,
                className: "t-video",
                visible: true,
                exec: function(object) {
                    var self = this;
                    if($.mfweditor.controls && $.mfweditor.controls.video) { //插件已存在
                        $.mfweditor.controls.video.init(this, object);
                    } else if($.mfweditor.autoload) { //加载插件
                        $.mfweditor.autoload.js('mfweditor.video.js', function() {
                            self.controls.insertVideo.exec.apply(self, [object]);
                        });
                    } else {
                        console.error('$.mfweditor.controls.link not defined. You need to include mfweditor.link.js file');
                    }
                },
                //hotkey: {"alt": 1, "key": 86},
                text: "视频",
                tooltip: "添加视频"
            },
            insertLink : {
                groupIndex: 0,
                className: "t-link",
                visible: true,
                exec: function(object) {
                    var self = this;
                    if($.mfweditor.controls && $.mfweditor.controls.link) { //插件已存在
                        $.mfweditor.controls.link.init(this, object);
                    } else if($.mfweditor.autoload) { //加载插件
                        $.mfweditor.autoload.js('mfweditor.link.js', function() {
                            self.controls.insertLink.exec.apply(self, [object]);
                        });
                    } else {
                        console.error('$.mfweditor.controls.link not defined. You need to include mfweditor.link.js file');
                    }
                },
                //hotkey: {"alt": 1, "key": 76},
                tags: ["a"],
                text: "链接",
                tooltip: "添加链接"
            },
            insertEmotion : {
                groupIndex: 0,
                className: "t-emotion",
                visible: true,
                exec: function(object) {
                    var self = this;
                    if($.mfweditor.controls && $.mfweditor.controls.emotion) { //插件已存在
                        $.mfweditor.controls.emotion.init(this, object);
                    } else if($.mfweditor.autoload) { //加载插件
                        $.mfweditor.autoload.js('mfweditor.emotion.js', function() {
                            self.controls.insertEmotion.exec.apply(self, [object]);
                        });
                    } else {
                        console.error('$.mfweditor.controls.emotion not defined. You need to include mfweditor.link.js file');
                    }
                },
                //hotkey: {"alt": 1, "key": 69},
                text: "表情",
                tooltip: "添加表情"
            },
            callName : {
                groupIndex: 1,
                className: "t-callname",
                visible: true,
                exec: function(object) {
                    var self = this;
                    if($.mfweditor.controls && $.mfweditor.controls.callname) { //插件已存在
                        $.mfweditor.controls.callname.init(this, object);
                    } else if($.mfweditor.autoload) { //加载插件
                        $.mfweditor.autoload.js('mfweditor.callname.js', function() {
                            self.controls.callName.exec.apply(self, [object]);
                        });
                    } else {
                        console.error('$.mfweditor.controls.callname not defined. You need to include mfweditor.link.js file');
                    }
                },
                //hotkey: {"alt": 1, "key": 67},
                text: "点名",
                tooltip: "点名"
            },
            saveContent : {
                groupIndex: 2,
                className: "t-save",
                visible: true,
                exec: function() {
                    var self = this;
                    self.saveContent();
                },
                //hotkey: {"alt": 1, "key": 83},
                text: "保存草稿",
                tooltip: "保存草稿"
            },
            clearContent : {
                groupIndex: 2,
                className: "t-clear",
                visible: true,
                exec: function() {
                    var self = this;
                    self.clearSaveContent();
                },
                text: "清空草稿",
                tooltip: "清空草稿"
            }
        };

        this.defaults = {
            html: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head><body></body></html>',
            debug: false,
            controls: {},
            events: {},
            css: "",
            autoGrow: true, //自动随内容增加高度
            autoSave: true, //自动保存
            autoSaveTime: 30000, //自动保存时间
            formHeight: 270,
            formWidth: 440,
            initialContent: "", //编辑器初始内容，可以为function
            maxHeight: 530, //编辑器自动伸缩最大高度
            maxLength: 0, //编辑器内容最大字数
            toolbarHtml: '<div class="mfweditor-toolbar"></div>', //工具栏HTML
            toolbarTipHtml: '<div class="mfweditor-toolbar-tip"></div>', //工具栏TIP
            toolbarGroupHtml: '<ul class="mfweditor-toolbar-group"></ul>', //工具栏分组HTML
            replaceDivWithP: true, //将内容中的DIV转换成P
            removeUnwantedBr: true, //去掉BR
            removeUnusedControls: false, //删除未使用的功能
            initialMinHeight: null, //内容部分最小高度
            plugins: {
 //               version: versionCode,
                autoload: true,
                removeFormat: {
                    removeMsWordMarkup: true
                }
            }
        };

        //可用的功能属性定义，防止外部配置时出现错误的属性
        this.availableControlProperties = [
            'groupIndex',
            'className',
            'object',
            'visible',
            'exec',
            'hotkey',
            'command',
            'custom',
            'tags',
            'text',
            'tooltip'
        ];

        this.editor = null; //编辑器FRAME对象
        this.editorDoc = null; //编辑器FRAME文档操作对象
        this.editorDialog = null; //编辑器当前Dialog
        this.uploadImages = null;
        this.element = null;
        this.options = {}; //基础配置
        this.original = null; //原始TEXTAREA对象
        this.savedRange = null;
        this.timers = [];
        this.validKeyCodes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];

        this.isDestroyed = false;

        this.dom = {
            ie: {
                parent: null
            },
            w3c: {
                parent: null
            }
        };
        this.dom.parent = this;
        this.dom.ie.parent = this.dom;
        this.dom.w3c.parent = this.dom;

        this.ui = {};
        this.ui.self = this;
        this.ui.toolbar = null;
        this.ui.toolbarTip = null;
        this.ui.initialHeight = null;
        this.ui.dialogX = null;
        this.ui.dialogY = null;

        this.dom.getAncestor = function(element, filterTagName) {
            filterTagName = filterTagName.toLowerCase();

            while(element && typeof element.tagName != 'undefined' && 'body' !== element.tagName.toLowerCase()) {
                if(filterTagName === element.tagName.toLowerCase()) {
                    return element;
                }

                element = element.parentNode;
            }

            if(!element.tagName && (element.previousSibling || element.nextSibling)) {
                if(element.previousSibling) {
                    if(element.previousSibling.tagName.toLowerCase() == filterTagName) {
                        return element.previousSibling;
                    }
                }
                if(element.nextSibling) {
                    if(element.nextSibling.tagName.toLowerCase() == filterTagName) {
                        return element.nextSibling;
                    }
                }
            }

            return null;
        };

        this.dom.getElement = function(filterTagName) {
            var dom = this;

            filterTagName = filterTagName.toLowerCase();

            if(window.getSelection) {
                return dom.w3c.getElement(filterTagName);
            } else {
                return dom.ie.getElement(filterTagName);
            }
        };

        this.dom.ie.getElement = function(filterTagName) {
            var dom = this.parent,
                selection = dom.parent.getInternalSelection(),
                range = selection.createRange(),
                element;

            if("Control" === selection.type) {
                if(1 === range.length) {
                    element = range.item(0);
                } else {
                    return null;
                }
            } else {
                element = range.parentElement();
            }

            return dom.getAncestor(element, filterTagName);
        };

        this.dom.w3c.getElement = function(filterTagName) {
            var dom = this.parent,
                range = dom.parent.getInternalSelection(),
                element;

            if(!range) {
                return null;
            }

            element = range.commonAncestorContainer;

            if(3 === element.nodeType) {
                element = element.parentNode;
            }

            if(element === range.startContainer) {
                element = element.childNodes[range.startOffset];
            }

            if(!element.tagName && (element.previousSibling || element.nextSibling)) {
                if(element.previousSibling) {
                    if(element.previousSibling.tagName.toLowerCase() == filterTagName) {
                        return element.previousSibling;
                    }
                }
                if(element.nextSibling) {
                    if(element.nextSibling.tagName.toLowerCase() == filterTagName) {
                        return element.nextSibling;
                    }
                }
            }

            return dom.getAncestor(element, filterTagName);
        };

        //初始化外观部分
        this.ui.initFrame = function() {
            var self = this.self,
                stylesheet,
                growHandler,
                saveHandler;

            self.ui.appendControls();
            self.element.append(self.ui.toolbar)
                .append($('<div><!-- --></div>').css({
                    clear : 'both'
                }))
                .append($('<div class="mfweditor-wrap"></div>').append(self.editor));
            self.editorDoc = self.innerDocument();

            if(self.isDestroyed) {
                return null;
            }

            self.ui.designMode();
            self.editorDoc.open();
            self.editorDoc.write(self.wrapInitialContent());
            self.editorDoc.close();

            $.mfweditor.plugin.bind(self);

            $(self.editorDoc).trigger('initFrame.mfweditor');

            $(self.original).focus(function() {
                if($(this).filter(':visible').length === 0) {
                    return;
                }
                self.ui.focus();
            });

            $(self.editorDoc).keydown(function(event) {
                var emptyContentRegex;
                if(event.keyCode === 8) {
                    emptyContentRegex = /^<([\w]+)[^>]*>(<br\/?>)?<\/\1>$/;
                    if(emptyContentRegex.test(self.getContent())) {
                        event.stopPropagation();
                        return false;
                    }
                }

                self.editorDoc.rememberCommand = false;
                return true;
            });

            //格式化word排版
            if(self.options.plugins.removeFormat.removeMsWordMarkup) {
                $(self.editorDoc).bind('keyup', function(event) {
                    if(event.ctrlKey || event.metaKey) {
                        //Ctrl + V
                        if(86 === event.keyCode) {
                            if($.mfweditor.removeFormat) {
                                if('object' === typeof (self.options.plugins.removeFormat.removeMsWordMarkup)) {
                                    $.mfweditor.removeFormat.run(self, {rules: {msWordMarkup: self.options.plugins.removeFormat.removeMsWordMarkup}});
                                } else {
                                    $.mfweditor.removeFormat.run(self, {rules: {msWordMarkup: {enabled: true}}});
                                }
                            }
                        }
                    }
                });
            }

            //绑定快捷键
            /*if(!$.browser.msie) {
                $(self.editorDoc).keydown(function(event) {
                    var controlName, control;

                    if(event.altKey) {
                        for(controlName in self.options.controls) {
                            control = self.options.controls[controlName];
                            if(control.hotkey && control.hotkey.alt) {
                                if(event.keyCode === control.hotkey.key) {
                                    self.triggerControl.apply(self, [controlName, control]);

                                    return false;
                                }
                            }
                        }
                    }
                    return true;
                });
            }*/

            /*if(self.options.autoSave) {
                $(self.editorDoc).keydown(function() {
                    self.autoSaveFunc();
                }).keyup(function() {
                        self.autoSaveFunc();
                    }).mousedown(function() {
                        self.autoSaveFunc();
                    });
            }*/

            if(self.initialContent.length === 0) {
                if('function' === typeof(self.options.initialContent)) {
                    self.setContent(self.options.initialContent());
                } else {
                    self.setContent(self.options.initialContent);
                }
            }

            if(self.options.autoGrow) {
                if(self.options.initialMinHeight != null) {
                    self.ui.initialHeight = self.options.initialMinHeight;
                } else {
                    self.ui.initialHeight = $(self.editorDoc).height();
                }
                $(self.editorDoc.body).css('border', '1px solid white');

                growHandler = function() {
                    self.ui.grow();
                };

                $(self.editorDoc).keyup(growHandler).click(growHandler);
                $(self.editorDoc).bind('editorRefresh.mfweditor', growHandler);

                self.ui.grow();
            }

            if(self.options.css && String === self.options.css.constructor) {

                $.autoload.fetch(self.options.css, function(data) {
                    if('css_list' in data) {
                        $.each(data['css_list'], function(index, value) {
                            if($.browser.msie) {
                                stylesheet = self.editorDoc.createStyleSheet(value);
                                $(stylesheet).attr({
                                    'media': 'all'
                                });
                            } else {
                                stylesheet = $('<link/>').attr({
                                    'href': value,
                                    'media': 'all',
                                    'rel': 'stylesheet',
                                    'type': 'text/css'
                                });

                                $(self.editorDoc).find('head').append(stylesheet);
                            }
                        });
                    }
                });

            }

            if(self.options.maxLength > 0) {
                $(self.editorDoc).keydown(function(event) {
                    if($(self.editorDoc).text().length >= self.options.maxLength && $.inArray(event.which, self.validKeyCodes) === -1) {
                        event.preventDefault();
                    }
                });
            }

            $.each(self.options.events, function(key, handler) {
                $(self.editorDoc).bind(key + '.mfweditor', function(event) {
                    handler.apply(self.editorDoc, [event, self]);
                })
            });

            if($.browser.msie) {
                $(self.editorDoc).bind('beforedeactivate.mfweditor', function() {
                    self.savedRange = self.getInternalRange();
                });
            } else {
                $(self.editorDoc).bind('blur.mfweditor', function() {
                    self.savedRange = self.getInternalRange();
                });
            }

            $(self.editorDoc).bind('click.mfweditor', function() {
                if(self.editorDialog) {
                    self.editorDialog.close();
                    self.editorDialog = null;
                }
            });

            $(self.original).trigger('ready.mfweditor', [self.editorDoc, self]);
        };

        this.ui.designMode = function() {
            var attempts = 3,
                self = this.self,
                runner;

            runner = function(attempts) {
                if('on' === self.editorDoc.designMode) {
                    if(self.timers.designMode) {
                        window.clearTimeout(self.timers.designMode);
                    }

                    if(self.innerDocument() !== self.editorDoc) {
                        self.ui.initFrame();
                    }

                    return;
                }

                try {
                    self.editorDoc.designMode = 'on';
                } catch(e) {}

                attempts -=1;
                if(attempts > 0) {
                    self.timers.designMode = window.setTimeout(function() {
                        runner(attempts);
                    }, 100);
                }
            };

            runner(attempts);
        };

        this.ui.grow = function() {
            var self = this.self,
                innerBody = $(self.editorDoc.body),
                innerHeight = $.browser.msie ? innerBody[0].scrollHeight : innerBody.height() + 2,
                minHeight = self.ui.initialHeight,
                height = Math.max(innerHeight, minHeight);

            height = Math.min(height, self.options.maxHeight);

            self.editor.attr('scrolling', height < self.options.maxHeight ? 'no' : 'auto');
            innerBody.css('overflow', height < self.options.maxHeight ? 'hidden': '');

            self.editor.get(0).height = height;

            return self;
        };

        this.ui.appendControls = function() {
            var ui = this,
                self = this.self,
                controls = self.parseControls(),
                groups = [],
                controlsByGroup = {},
                toolbarGroup,
                i,
                iterateGroup = function(controlName, control) {

                    if(!control.visible) {
                        return;
                    }

                    ui.appendItem(controlName, control).appendTo(toolbarGroup);
                };

            $.each(controls, function(name, c) {
                var index = 'empty';

                if(undefined !== c.groupIndex) {
                    if('' === c.groupIndex) {
                        index = 'empty';
                    } else {
                        index = c.groupIndex;
                    }
                }

                if(undefined === controlsByGroup[index]) {
                    groups.push(index);
                    controlsByGroup[index] = {};
                }
                controlsByGroup[index][name] = c;
            });

            groups.sort(function(a, b) {
                if('number' === typeof(a) && typeof(a) === typeof(b)) {
                    return (a - b);
                } else {
                    a = a.toString();
                    b = b.toString();

                    if(a > b) {
                        return 1;
                    }

                    if(a === b) {
                        return 0;
                    }

                    return -1;
                }
            });

            self.ui.toolbarTip = $(self.options.toolbarTipHtml).appendTo(self.ui.toolbar);

            for(i = 0; i < groups.length; i += 1) {
                toolbarGroup = $(self.options.toolbarGroupHtml).appendTo(self.ui.toolbar);
                $.each(controlsByGroup[groups[i]], iterateGroup);
            }
        };

        this.ui.appendItem = function(name, control) {
            var self = this.self,
                className = control.className || control.command || name || "empty",
                tooltip = control.tooltip || control.command || name || "",
                text = control.text || "未知";

            return $('<li role="menuitem">' + (text) + '</li>')
                .addClass(className)
                .attr('title', tooltip)
                .hover(this.addHoverClass, this.removeHoverClass)
                .click(function(event) {
                    if($(this).hasClass('disabled')) {
                        return false;
                    }

                    var $target = $(event.target);

                    self.triggerControl.apply(self, [name, control, $target]);

                    this.blur();
                    self.ui.returnRange();
                    self.ui.focus();
                    return true;
                });
        };

        this.ui.withoutCss = function() {
            var self = this.self;

            if($.browser.mozilla) {
                try {
                    self.editorDoc.execCommand("styleWithCSS", false, false);
                } catch(e) {
                    try {
                        self.editorDoc.execCommand("useCss", false, true);
                    } catch(e2) {}
                }
            }

            return self;
        };

        this.ui.addHoverClass = function() {
            $(this).addClass('hover');
        };

        this.ui.removeHoverClass = function() {
            $(this).removeClass('hover');
        };

        this.ui.focus = function() {
            var self = this.self;

            self.editor.get(0).contentWindow.focus();
            return self;
        };

        this.ui.returnRange = function() {
            var self = this.self, sel;

            if(self.savedRange !== null) {
                if(window.getSelection) {
                    sel = window.getSelection();
                    if(sel.rangeCount > 0) {
                        sel.removeAllRanges();
                    }
                    try {
                        sel.addRange(self.savedRange);
                    } catch(e) {
                        console.error(e);
                    }
                } else if(window.document.createRange) {
                    window.getSelection().addRange(self.savedRange);
                } else if(window.document.selection) {
                    self.savedRange.select();
                }

                self.savedRange = null;
            }
        };

        this.init = function(element, options) {
            var self = this,
                mForm = $(element).closest('form'), //编辑器所属表单
                newX = ($(element).attr('width') || $(element).width() || 0), //编辑器初始宽度
                newY = ($(element).attr('height') || $(element).height() || 0); //编辑器初始高度

            //扩展基础配置
            this.options = this.extendOptions(options);
            this.original = element;
            this.ui.toolbar = $(this.options.toolbarHtml);

            //判断如果浏览器为IE并且版本小于8，则关闭自动随内容增加高度功能。
            if($.browser.msie && parseInt($.browser.version, 10) < 9) {
                this.options.autoGrow = false;
            }

            //判断如果浏览器无法获得TEXTAREA尺寸，则通过cols和rows属性初始尺寸
            if(newX === 0 && element.cols) {
                newX = (element.cols * 8) + 21;
            }
            if(newY === 0 && element.rows) {
                newY = (element.rows * 16) + 16;
            }

            this.editor = $("<iframe></iframe>").attr('frameborder', '0'); //初始化编辑器FRAME

            //设置编辑器FRAME样式

            this.editor.css({
                minHeight: (newY - 6).toString() + 'px',
                width: (newX > 50) ? (newX - 6).toString() + 'px' : ''
            });
            if($.browser.msie && parseInt($.browser.version, 10) < 7) {
                this.editor.css('height', newY.toString() + 'px');
            }

            //根据TEXTAREA的id设置编辑器FRAME的id
            if(element.id) {
                var proposedId = element.id + '-mfwediter-iframe';
                if(!document.getElementById(proposedId)) {
                    this.editor.attr('id', proposedId);
                }
            }

            //根据TEXTAREA的tabindex设置编辑器FRAME的tabindex
            this.editor.attr('tabindex', $(element).attr('tabindex'));

            this.element = $('<div/>').addClass("mfweditor");

            this.element.css({
                width: (newX > 0) ? newX.toString() + 'px' : '100%'
            });

            $(element).hide().before(this.element);

            this.initialContent = $(element).val();
            this.ui.initFrame();

            if(this.options.autoSave) {
                self.timers.autoSave = window.setInterval(function() {
                    self.autoSaveFunc();
                }, self.options.autoSaveTime);
                /*mForm.bind('submit.mfweditor', function() {
                    self.autoSaveFunc();
                });*/
            }

            $(self.editorDoc).keyup(function() { self.syncContent(); })
                .mousedown(function() {self.syncContent(); });

            mForm.bind('reset.mfweditor', function() {
                self.resetFunc();
            });
        };

        this.destroy = function() {
            this.isDestroyed = true;

            var i, mForm = this.element.closest('form');

            for(i = 0; i < this.timers.length; i += 1) {
                window.clearTimeout(this.timers[i]);
            }

            mForm.unbind('.mfweditor');
            this.element.remove();
            $.removeData(this.original, 'mfweditor');
            $(this.original).show();
            return this;
        };

        //初始化编辑器文档操作对象
        this.innerDocument = function() {
            var element = this.editor.get(0);

            if(element.nodeName.toLowerCase() === 'iframe') {
                if(element.contentDocument) {
                    return element.contentDocument;
                } else if(element.contentWindow) {
                    return element.contentWindow.document;
                }

                if(this.isDestroyed) {
                    return null;
                }
            }

            return element;
        };

        //处理编辑器初始内容
        this.wrapInitialContent = function() {
            var content = this.initialContent,
                found = content.match(/<\/?p>/gi);

            if(!found) {
                return '<p>' + content + '</p>';
            }
            return content;
        };

        //分析处理编辑器功能配置
        this.parseControls = function() {
            var self = this;

            $.each(this.options.controls, function(controlName, control) {
                $.each(control, function(propertyName) {
                    if(-1 === $.inArray(propertyName, self.availableControlProperties)) {
                        throw controlName + '["' + propertyName + '"]: property "' + propertyName + '" not exist in mfweditor.availableControlProperties';
                    }
                });
            });

            //用户定义的分析处理功能配置的方法
            if(this.options.parseControls) {
                return this.options.parseControls.call(this);
            }

            return this.options.controls;
        };

        //扩展基础配置
        this.extendOptions = function(options) {
            var controls = {};

            if("object" === typeof options.controls) {
                controls = options.controls;
                delete options.controls;
            }

            options = $.extend(true, {}, this.defaults, options);
            options.controls = $.extend(true, {}, controls, this.controls, controls);

            //删除未使用的功能
            if(options.removeUnusedControls) {
                $.each(options.controls, function(controlName) {
                    if(!controls[controlName]) {
                        delete options.controls[controlName];
                    }
                });
            }

            return options;
        };

        //设置编辑器内容
        this.setContent = function(newContent) {
            this.editorDoc.body.innerHTML = newContent;
            //this.saveContent();

            return this;
        };

        this.triggerControl = function(name, control, object) {
            var cmd = control.command || name,
                args = control["arguments"] || [];

            if(control.exec) {
                control.exec.apply(this, [object]);
            } else {
                this.ui.focus();
                this.ui.withoutCss();

                try {
                    this.editorDoc.execCommand(cmd, false, args);
                } catch(e) {
                    console.error(e);
                }
            }

            /*if(this.options.autoSave) {
                this.autoSaveFunc();
            }*/
        };

        //自动保存草稿
        this.autoSaveFunc = function() {
            this.saveContent();
        };

        //即时同步内容
        this.syncContent = function() {
            if(this.original) {
                var content, newContent;

                content = this.getContent();

                if(this.options.removeUnwantedBr) {
                    content = content.replace(/<br\/?>$/, '');
                }

                if(this.options.replaceDivWithP) {
                    newContent = $('<div/>').addClass('temp').append(content);

                    newContent.children('div').each(function() {
                        var element = $(this), p = element.find('p'), i;

                        if(0 === p.length) {
                            p = $('<p></p>');

                            if(this.attributes.length > 0) {
                                for(i = 0; i < this.attributes.length; i += 1) {
                                    p.attr(this.attributes[i].name, element.attr(this.attributes[i].name));
                                }
                            }

                            p.append(element.html());

                            element.replaceWith(p);
                        }
                    });

                    content = newContent.html();
                }

                $(this.original).val(content).text(content);

            }

            return this;
        };

        //重置编辑器内容
        this.resetFunc = function() {
            this.setContent(this.options.initialContent);
        };

        //清空保存内容
        this.clearSaveContent = function() {
            if(this.original) {
                if(this.options.events && this.options.events.clear) {
                    this.options.events.clear.call(this);
                }
            }
        };

        //保存编辑器内容
        this.saveContent = function() {
            if(this.original) {
                var content, newContent;

                content = this.getContent();

                if(this.options.removeUnwantedBr) {
                    content = content.replace(/<br\/?>$/, '');
                }

                if(this.options.replaceDivWithP) {
                    newContent = $('<div/>').addClass('temp').append(content);

                    newContent.children('div').each(function() {
                        var element = $(this), p = element.find('p'), i;

                        if(0 === p.length) {
                            p = $('<p></p>');

                            if(this.attributes.length > 0) {
                                for(i = 0; i < this.attributes.length; i += 1) {
                                    p.attr(this.attributes[i].name, element.attr(this.attributes[i].name));
                                }
                            }

                            p.append(element.html());

                            element.replaceWith(p);
                        }
                    });

                    content = newContent.html();
                }

                $(this.original).val(content).text(content);

                if(this.options.events && this.options.events.save) {
                    this.options.events.save.call(this);
                }
            }

            return this;
        };

        this.getInternalRange = function() {
            var selection = this.getInternalSelection();

            if(!selection) {
                return null;
            }

            if(selection.rangeCount && selection.rangeCount > 0) {
                return selection.getRangeAt(0);
            } else if(selection.createRange) {
                return selection.createRange();
            }

            return null;
        };

        this.getRange = function() {
            var selection = this.getSelection();

            if(!selection) {
                return null;
            }

            if(selection.rangeCount && selection.rangeCount > 0) {
                return selection.getRangeAt(0);
            } else if(selection.createRange) {
                return selection.createRange();
            }

            return null;
        };

        this.getRangeText = function() {
            var r = this.getInternalRange();

            if(r.toString) {
                r = r.toString();
            } else if(r.text) {
                r = r.text;
            }

            return r;
        },

        this.getInternalSelection = function() {
            if(this.editor.get(0).contentWindow) {
                if(this.editor.get(0).contentWindow.getSelection) {
                    return this.editor.get(0).contentWindow.getSelection();
                }
                if(this.editor.get(0).contentWindow.selection) {
                    return this.editor.get(0).contentWindow.selection;
                }
            }
            if(this.editorDoc.getSelection) {
                return this.editorDoc.getSelection();
            }
            if(this.editorDoc.selection) {
                return this.editorDoc.selection;
            }

            return null;
        };

        this.insertHtml = function(szHTML) {
            var self = this, img, range;

            if(!szHTML || szHTML.length === 0) {
                return this;
            }
            if (navigator.userAgent.match(/Trident\/7\./)) {
                $.browser.msie = true;
            }
            if($.browser.msie) {
                this.ui.focus();
                this.editorDoc.execCommand('insertImage', false, '#jmfweditor');
                img = this.getElementByAttributeValue('img', 'src', '#jmfweditor');
                if(img) {
                    $(img).replaceWith(szHTML);
                }
            } else {
                if($.browser.mozilla) {
                    var szStrObj = szHTML.replace(/\s/g, '&nbsp;');
                    szStrObj = szStrObj.replace("&", '');
                    szStrObj = szStrObj.replace("：", '');
                    if(1 === $(szStrObj).length) {
                        range = this.getInternalRange();
                        range.deleteContents();
                        range.insertNode($(szHTML).get(0));
                    } else {
                        this.editorDoc.execCommand('insertHTML', false, szHTML);
                    }
                } else {
                    if(!this.editorDoc.execCommand('insertHTML', false, szHTML)) {
                        this.editor.focus();
                        this.editorDoc.execCommand('insertHTML', false, szHTML);
                    }
                }
            }
            if(self.options.autoGrow) {
                self.ui.grow();
            }
        };



        this.getElementByAttributeValue = function(tagName, attributeName, attributeValue) {
            var i, value, elements = this.editorDoc.getElementsByTagName(tagName);

            for(i = 0; i < elements.length; i += 1) {
                value = elements[i].getAttribute(attributeName);

                if($.browser.msie) {
                    value = value.substr(value.length - attributeValue.length);
                }

                if(value === attributeValue) {
                    return elements[i];
                }
            }

            return false;
        }

        //获取编辑器内容
        this.getContent = function() {
            return this.events.filter('getContent', this.editorDoc.body.innerHTML);
        };

        this.events = {
            _events: {},
            bind: function(eventName, callback) {
                if(typeof(this._events.eventName) !== 'object') {
                    this._events[eventName] = [];
                }
                this._events[eventName].push(callback);
            },
            trigger: function(eventName, args) {
                if(typeof(this._events.eventName) === 'object') {
                    var editor = this.editor;
                    $.each(this._events[eventName], function(k, v) {
                        if(typeof(v) === 'function') {
                            v.apply(editor, args);
                        }
                    });
                }
            },
            filter: function(eventName, originalText) {
                if(typeof(this._events[eventName]) === 'object') {
                    var editor = this.editor,
                        args = Array.prototype.slice.call(arguments, 1);

                    $.each(this._events[eventName], function(k, v) {
                        if(typeof(v) === 'function') {
                            originalText = v.apply(editor, args);
                        }
                    });
                }
                return originalText;
            }
        };
    }

    $.mfweditor = {
        init: function(object, options) {
            return object.each(function() {
                var opts = $.extend(true, {}, options),
                    obj;

                if(("textarea" !== this.nodeName.toLowerCase()) || $(this).data("mfweditor")) {
                    return;
                }

                obj = new mfweditor();
                obj.init(this, opts);
                $.data(this, "mfweditor", obj);

            });
        },
        destroy: function(object) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor');

                if(!mfweditor) {
                    return this;
                }

                mfweditor.destroy();
            });
        },
        'document': function(object) {
            var mfweditor = object.data('mfweditor');

            if(!mfweditor) {
                return undefined;
            }

            return $(mfweditor.editorDoc);
        },
        getDialog: function(object) {
            var mfweditor = object.data('mfweditor');

            if(!mfweditor) {
                return undefined;
            }

            return $(mfweditor.editorDialog);
        },
        getFocus: function(object) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor');

                if(!mfweditor) {
                    return this;
                }
                mfweditor.ui.focus();
            });
        },
        addControl: function(object, name, settings) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor'),
                    customControl = {},
                    toolbar;

                if(!mfweditor) {
                    return this;
                }

                customControl[name] = $.extend(true, {visible: true, custom: true}, settings);
                $.extend(true, mfweditor.options.controls, customControl);

                toolbar = $(this.options.toolbarHtml);
                mfweditor.ui.toolbar.replaceWith(toolbar);
                mfweditor.ui.toolbar = toolbar;
                mfweditor.ui.appendControls();
            });
        },
        insertHtml: function(object, szHTML) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor');

                if(!mfweditor) {
                    return this;
                }
                mfweditor.insertHtml(szHTML);
            });
        },
        getContent: function(object) {
            var mfweditor = object.data('mfweditor');

            if(!mfweditor) {
                return undefined;
            }

            return mfweditor.getContent();
        },
        setContent: function(object, szHTML) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor');

                if(!mfweditor) {
                    return this;
                }
                mfweditor.setContent(szHTML);
            });
        },
        resetContent: function(object) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor');

                if(!mfweditor) {
                    return this;
                }
                mfweditor.resetFunc();
            });
        },
        getSelection: function(object) {
            var mfweditor = object.data('mfweditor');

            if(!mfweditor) {
                return undefined;
            }

            return mfweditor.getRangeText();
        },
        save: function(object) {
            return object.each(function() {
                var mfweditor = $(this).data('mfweditor');

                if(!mfweditor) {
                    return this;
                }

                mfweditor.saveContent();
            });
        },
        selectAll: function(object) {
            var mfweditor = object.data('mfweditor'), oBody, oRange, selection;

            if(!mfweditor) {
                return this;
            }

            oBody = mfweditor.editorDoc.body;
            if(window.getSelection) {
                selection = mfweditor.getInternalSelection();
                selection.selectAllChildren(oBody);
            } else {
                oRange = oBody.createTextRange();
                oRange.moveToElementText(oBody);
                oRange.select();
            }
        },
        plugin: {
            listeners: {},

            bind: function(mfweditor) {
                var self = this;

                $.each(this.listeners, function(action, handlers) {
                    var i, plugin;

                    for(i = 0; i < handlers.length; i += 1) {
                        plugin = self.parseName(handlers[i]);

                        $(mfweditor.editorDoc).bind(action + ".mfweditor", {plugin: plugin}, function(event) {
                            $.mfweditor[event.data.plugin.name][event.data.plugin.method].apply($.mfweditor[event.data.plugin.name], [mfweditor]);
                        });
                    }
                });
            },

            exists: function(name) {
                var plugin;

                if("string" !== typeof(name)) {
                    return false;
                }

                plugin = this.parseName(name);

                if(!$.mfweditor[plugin.name] || !$.mfweditor[plugin.name][plugin.method]) {
                    return false;
                }

                return true;
            },

            listen: function(action, handler) {
                var plugin;

                plugin = this.parseName(handler);

                if(!$.mfweditor[plugin.name] || !$.mfweditor[plugin.name][plugin.method]) {
                    return false;
                }

                if(!this.listeners[action]) {
                    this.listeners[action] = [];
                }

                this.listeners[action].push(handler);

                return true;
            },

            parseName: function(name) {
                var elements;

                if("string" !== typeof(name)) {
                    return false;
                }

                elements = name.split(".");

                if(2 > elements.length) {
                    return false;
                }

                return {name: elements[0], method: elements[1]};
            },

            register: function(data) {
                if(!data.name) {
                    console.error("Plugin name is missing");
                }

                $.each($.mfweditor, function(pluginName) {
                    if(pluginName === data.name) {
                        console.error("Plugin with name '" + data.name + "' was already registered");
                    }
                });

                $.mfweditor[data.name] = data;

                return true;
            }
        }
    };

    $.mfweditor.dialog = function(mfweditor, opts) {
        var theme = opts.theme ? opts.theme : 'default',
            obj = new $.mfweditor.dialog.createDialog(theme),
            that = this,
            $that = $(that);

        this.options = {
            'modal': false,
            'draggable': false,
            'content': '',
            'zIndex': 2000,
            'left': 0,
            'top': 0,
            'width': 600,
            'open': false,
            'close': false
        };

        this.isOpen = false;

        $.extend(this.options, opts);

        this.object = obj;
        this.popkey = null;

        this.open = function() {
            this.isOpen = true;

            obj.init.apply(that, []);
            var $dialog = obj.show.apply(that, []);

            $that.trigger('afterOpen', [$dialog]);
        };

        this.show = function() {
            this.isOpen = true;

            $that.trigger('beforeShow');

            var $dialog = obj.show.apply(that, []);

            $that.trigger('afterShow');
        };

        this.hide = function() {
            this.isOpen = false;

            $that.trigger('beforeHide');

            var $dialog = obj.hide.apply(that, []);

            $that.trigger('afterHide', [$dialog]);
        };

        this.close = function() {
            this.isOpen = false;

            var $dialog = obj.hide.apply(that, []);

            $that.trigger('beforeClose', [$dialog]);
            obj.destroy.apply(that, []);
            $that.trigger("afterClose", [$dialog]);
        };

        if(this.options.open) {
            $that.bind('afterOpen', this.options.open);
        }
        if(this.options.close) {
            $that.bind('afterClose', this.options.close);
        }

        return this;
    };

    $.extend(true, $.mfweditor.dialog, {
        _themes : {},
        _theme : '',

        register: function(name, obj) {
            $.mfweditor.dialog._themes[name] = obj;
        },

        deregister: function(name) {
            delete $.mfweditor.dialog._themes[name];
        },

        createDialog: function(name) {
            return new ($.mfweditor.dialog._themes[name]);
        },

        getDimensions: function() {
            var width = document.body.scrollWidth,
                height = document.body.scrollHeight;

            if($.browser.opera) {
                height = Math.max(
                    $(document).height(),
                    $(window).height(),
                    document.documentElement.clientHeight
                );
            }

            return [width, height];
        }
    });

    $(function() {
        $.mfweditor.dialog.register('default', function() {
            var that = this;

            this.$dialog = null;

            this.init = function() {
                var content = this.options.content;

                if(typeof content === 'object') {
                    if(typeof content.html === 'function') {
                        content = content.html();
                    } else if(typeof content.toString === 'function') {
                        content = content.toString();
                    }
                }

                that.$dialog = $('<div class="mfweditor-pop"></div>').css({
                    'z-index': this.options.zIndex,
                    'position': 'absolute'
                });

                var $container = $('<div class="d-cont">' + content + '</div>');

                that.$dialog.append($container).hide();

                $('body').append(that.$dialog);

                that.$dialog.css({
                    'left': this.options.left,
                    'top': this.options.top
                });

                return that.$dialog;
            };

            this.show = function() {
                if(this.options.modal) {
                    var dimensions = $.mfweditor.dialog.getDimensions(),
                        wrapper = $('<div class="mfweditor-shade"></div>')
                            .css({
                                'width': dimensions[0],
                                'height': dimensions[1],
                                'z-index': this.options.zIndex - 1
                            });
                    that.$dialog.after(wrapper);
                    $(window).bind('resize', function() {
                        var resize_dimensions = $.mfweditor.dialog.getDimensions();
                        wrapper.css({
                            'width': resize_dimensions[0],
                            'height': resize_dimensions[1]
                        });
                    });
                }

                that.$dialog.show();
                return that.$dialog;
            };

            this.hide = function() {
                that.$dialog.hide();
                return that.$dialog;
            };

            this.destroy = function() {
                if(this.options.modal) {
                    that.$dialog.next().remove();
                }

                $(window).unbind('resize');
                that.$dialog.remove();
                return that.$dialog;
            };
        });
        $.mfweditor.dialog.register('float', function() {
            var that = this;

            this.$dialog = null;

            this.init = function() {
                var content = this.options.content;

                if(typeof content === 'object') {
                    if(typeof content.html === 'function') {
                        content = content.html();
                    } else if(typeof content.toString === 'function') {
                        content = content.toString();
                    }
                }

                that.$dialog = $('<div class="mfweditor-pop"></div>').css({
                    'z-index': this.options.zIndex,
                    'position': 'fixed',
                    'width': this.options.width
                });

                if($.browser.msie && parseInt($.browser.version, 10) < 7) {
                    that.$dialog.css('position', 'absolute');
                    $(window).scroll(function() {

                    });
                }

                var $container = $('<div class="d-cont">' + content + '</div>');

                that.$dialog.append($container).hide();

                $('body').append(that.$dialog);

                that.$dialog.css({
                    'left': (($(window).width() - that.$dialog.width()) / 2),
                    'top': ($.browser.msie && parseInt($.browser.version, 10) < 7) ? ($('html').scrollTop() + (($(window).height() - that.$dialog.height()) / 3)) : (($(window).height() - that.$dialog.height()) / 3)
                });

                $(window).bind('resize', function() {
                    that.$dialog.css({
                        'left': (($(window).width() - that.$dialog.width()) / 2),
                        'top': ($.browser.msie && parseInt($.browser.version, 10) < 7) ? ($('html').scrollTop() + (($(window).height() - that.$dialog.height()) / 3)) : (($(window).height() - that.$dialog.height()) / 3)
                    });
                });

                if($.browser.msie && parseInt($.browser.version, 10) < 7) {
                    $(window).bind('scroll', function() {
                        that.$dialog.css({
                            'top': $('html').scrollTop() + (($(window).height() - that.$dialog.height()) / 3)
                        });
                    });
                }

                return that.$dialog;
            };

            this.show = function() {
                if(this.options.modal) {
                    $('body').css('overflow', 'hidden');
                    var dimensions = $.mfweditor.dialog.getDimensions(),
                        wrapper = $('<div class="mfweditor-shade"></div>')
                            .css({
                                'width': dimensions[0],
                                'height': dimensions[1],
                                'z-index': this.options.zIndex - 1
                            });
                    that.$dialog.after(wrapper);
                    $(window).bind('resize', function() {
                        var resize_dimensions = $.mfweditor.dialog.getDimensions();
                        wrapper.css({
                            'width': resize_dimensions[0],
                            'height': resize_dimensions[1]
                        });
                    });
                }

                that.$dialog.show();
                return that.$dialog;
            };

            this.hide = function() {
                that.$dialog.hide();
                return that.$dialog;
            };

            this.destroy = function() {
                if(this.options.modal) {
                    $('body').css('overflow', 'auto');
                    that.$dialog.next().remove();
                }

                $(window).unbind('resize');
                that.$dialog.remove();
                return that.$dialog;
            };
        });

        $.mfweditor.dialog.register('addp', function() {
            var that = this;

            this.$dialog = null;

            this.init = function() {
                // string format content
                var content = this.options.content;
                if(typeof content === 'object') {
                    if(typeof content.html === 'function') {
                        content = content.html();
                    } else if(typeof content.toString === 'function') {
                        content = content.toString();
                    }
                }

                // dialog dom
                that.$dialog = $('<div style="display:none">\
                                    <div class="viewer-layer" style="position:fixed; _position:absolute"></div>\
                                    <div class="popup-box pop-addp _j_popbox" style="margin:0">\
                                        <a class="close-btn _j_close" href="javascript:void(0);"><i></i></a>\
                                        <div class="pop-ctn"><p class="hd _j_title">添加照片</p><div class="_j_content" style="background:#fff">'+content+'</div></div>\
                                    </div>\
                                </div>');
                $('body').append(that.$dialog);

                // dialog position
                var dialogBox = that.$dialog.find("._j_popbox");
                dialogBox.css({
                    'left': (($(window).width() - dialogBox.width()) / 2),
                    'top': ($.browser.msie && parseInt($.browser.version, 10) < 7) ? ($('html').scrollTop() + (($(window).height() - 460) / 3)) : (($(window).height() - 460) / 3)
                });
                $(window).bind('resize', function() {
                    dialogBox.css({
                        'left': (($(window).width() - dialogBox.width()) / 2),
                        'top': ($.browser.msie && parseInt($.browser.version, 10) < 7) ? ($('html').scrollTop() + (($(window).height() - 460) / 3)) : (($(window).height() - 460) / 3)
                    });
                });
                if($.browser.msie && parseInt($.browser.version, 10) < 7) {
                    $(window).bind('scroll', function() {
                        dialogBox.css({
                            'top': $('html').scrollTop() + (($(window).height() - 460) / 3)
                        });
                    });
                }
                dialogBox.delegate("._j_close", "click", $.proxy(function(ev) {
                    ev.preventDefault();
                    that.destroy.call(this);
                }, this));

                return that.$dialog;
            };

            this.show = function() {
                that.$dialog.show();
                return that.$dialog;
            };

            this.hide = function() {
                that.$dialog.hide();
                return that.$dialog;
            };

            this.destroy = function() {
                if(this.options.modal) {
                    $('body').css('overflow', 'auto');
                }
                $(window).unbind('resize');
                if (that.$dialog) {
                    that.$dialog.remove();
                }
                return that.$dialog;
            };
        });
    });

    $.fn.mfweditor = function(method) {
        var args = arguments, plugin;
        if("undefined" !== typeof $.mfweditor[method]) {
            args = Array.prototype.concat.call([args[0]], [this], Array.prototype.slice.call(args, 1));
            return $.mfweditor[method].apply($.mfweditor, Array.prototype.slice.call(args, 1));
        } else if("object" === typeof method || !method) {
            Array.prototype.unshift.call(args, this);
            return $.mfweditor.init.apply($.mfweditor, args);
        } else if($.mfweditor.plugin.exists(method)) {
            plugin = $.mfweditor.plugin.parseName(method);
            args = Array.prototype.concat.call([args[0]], [this], Array.prototype.slice.call(args, 1));
            return $.mfweditor[plugin.name][plugin.method].apply($.mfweditor[plugin.name], Array.prototype.slice.call(args, 1));
        } else {
            console.error("Method '" + method + "' does not exist in mfweditor!");
        }
    };
})(jQuery);
;
/**
 * Created with JetBrains PhpStorm.
 * User: Loin
 * Date: 12-5-9
 * Time: 下午4:43
 * To change this template use File | Settings | File Templates.
 */

(function($) {
    //判断依赖类库是否存在，不存在则抛出错误
    if(undefined === $.mfweditor) {
        throw 'mfweditor.autoload.js depends on $.mfweditor';
    }
    if(undefined === $.autoload) {
        throw 'mfweditor.autoload.js depends on $.autoload';
    }

    var autoload = {
        name: 'autoload', //插件名称
        version: '', //插件版本
        defaults: {
            cssPath: '', //CSS文件路径
            jsPath: '/js/mfweditor/plugins/'   //JS文件路径
            // renhao 修改js默认路径为静态服务器路径
        },
        options: {},
        //加载CSS
        css: function(names) {
            $.autoload.css(names, this.options);
        },
        //加载JS
        js: function(names, successCallback) {
            $.autoload.js(names, {'jsPath': this.options.jsPath, 'successCallback': successCallback});
        },
        //初始化插件
        init: function(mfweditor) {
            //如果已初始化则跳出
            if(!mfweditor.options.plugins[this.name]) {
                return true;
            }

            var i;
            //扩展配置
            this.options = $.extend(true, this.defaults, mfweditor.options.plugins[this.name]);
            //默认加载主要CSS文件列表
            if(this.options.css) {
                for(i = 0; i < this.options.css.length; i += 1) {
                    this.css(this.options.css[i]);
                }
            }
        }
    };

    $.mfweditor.plugin.register(autoload); //主类库注册插件
    $.mfweditor.plugin.listen('initFrame', 'autoload.init'); //监听主类库方法初始化插件
})(jQuery);
;
// 全局命名空间
var K = this.K || {};

// 资源加载
K.Resource = K.Resource || {};

K.error = function(obj, type) {
    type = type || Error;
    throw new type(obj);
};

K.global = this;

// 工具函数
(function(K) {

var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

var slice            = ArrayProto.slice,
    unshift          = ArrayProto.unshift,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

// ECMAScript 5 原生方法
var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeCreate     = Object.create,
    nativeBind         = FuncProto.bind;

// 调试信息
K.log = function() {
    if ('console' in window && 'log' in window.console) {
        var len = arguments.length;
        if (len == 1) {
            window.console.log(arguments[0]);
        } else if (len == 2) {
            window.console.log(arguments[0], arguments[1]);
        }
    } else if (window.opera && window.opera.postError) {
        window.opera.postError.apply(window.opera, arguments);
    }
};

// 集合操作函数
// -----------------

var breaker = {};

// 遍历集合
K.forEach = function(obj, iterator, context) {
    if (obj == null) {
        return;
    }
    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
    } else if (K.isNumber(obj.length)) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if (iterator.call(context, obj[i], i, obj) == breaker) {
                return;
            }
          }
    } else {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                  if (iterator.call(context, obj[key], key, obj) === breaker) {
                    return;
                }
            }
          }
    }
};

// 在对象中的每个属性项上运行一个函数，并将函数返回值作为属性的值。
K.map = function(obj, iterator, context) {
    var results = [];
    if (obj == null) {
        return results;
    }
    if (nativeMap && obj.map === nativeMap) {
        return obj.map(iterator, context);
    }
    K.forEach(obj, function(value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
};

// 对集合元素进行递推操作
K.reduce = function(obj, iterator, memo, context) {
    var initial = memo !== void 0;
    if (obj == null) {
        obj = [];
    }
    if (nativeReduce && obj.reduce === nativeReduce) {
        if (context) {
            iterator = K.bind(iterator, context);
        }
        return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    K.forEach(obj, function(value, index, list) {
        if (!initial && index === 0) {
            memo = value;
            initial = true;
          } else {
            memo = iterator.call(context, memo, value, index, list);
          }
    });
    if (!initial) {
        throw new TypeError("Reduce of empty array with no initial value");
    }
    return memo;
};

// 为集合元素进行逆向递推操作。
K.reduceRight = function(obj, iterator, memo, context) {
    if (obj == null) {
        obj = [];
    }
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
        if (context) iterator = K.bind(iterator, context);
          return memo !== void 0 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = (K.isArray(obj) ? obj.slice() : K.toArray(obj)).reverse();
    return K.reduce(reversed, iterator, memo, context);
};

// 在集合中查找符合条件的第一个元素
K.detect = function(obj, iterator, context) {
    var result;
    K.some(obj, function(value, index, list) {
        if (iterator.call(context, value, index, list)) {
            result = value;
            return true;
          }
    });
    return result;
};

// 在集合每一个元素上运行一个函数，将函数返回值为真的元素作为数组返回
K.filter = function(obj, iterator, context) {
    var results = [];
    if (obj == null) {
        return results;
    }
    if (nativeFilter && obj.filter === nativeFilter) {
        return obj.filter(iterator, context);
    }
    K.forEach(obj, function(value, index, list) {
        if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
};

// 判断是否集合中所有元素都为真
K.every = function(obj, iterator, context) {
    var result = true;
    if (obj == null) {
        return result;
    }
    if (nativeEvery && obj.every === nativeEvery) {
        return obj.every(iterator, context);
    }
    K.forEach(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) {
          return breaker;
      }
    });
    return result;
};

// 判断集合中是否有元素符合条件
K.some = function(obj, iterator, context) {
    iterator || (iterator = K.identity);
    var result = false;
    if (obj == null) {
        return result;
    }
    if (nativeSome && obj.some === nativeSome) {
        return obj.some(iterator, context);
    }
    K.forEach(obj, function(value, index, list) {
        if (iterator.call(context, value, index, list)) {
            result = true;
            return breaker;
        }
    });
    return result;
};

// 判断集合中是否包含某元素
K.contains = function(obj, target) {
    var found = false;
    if (obj == null) {
        return found;
    }
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) {
        return obj.indexOf(target) != -1;
    }
    K.some(obj, function(value) {
      if (found = value === target) {
          return true;
      }
    });
    return found;
};

// 返回包含集合中所有元素的key属性的数组
K.pluck = function(obj, key) {
    return K.map(obj, function(value) {
        return value[key];
    });
};

// 对集合元素进行排序
K.sortBy = function(obj, iterator, context) {
    return K.pluck(K.map(obj, function(value, index, list) {
        return {
            value : value,
            criteria : iterator.call(context, value, index, list)
          };
    }).sort(function(left, right) {
        var a = left.criteria, b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
};

// Use a comparator function to figure out at what index an object should
// be inserted so as to maintain order. Uses binary search.
K.sortedIndex = function(array, obj, iterator) {
    iterator || (iterator = K.identity);
    var low = 0, high = array.length;
    while (low < high) {
          var mid = (low + high) >> 1;
          iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
    }
    return low;
};

// 转化成数组
K.toArray = function(iterable) {
    if (!iterable)                return [];
    if (iterable.toArray)         return iterable.toArray();
    if (K.isArray(iterable))      return iterable;
    if (K.isArguments(iterable))  return slice.call(iterable);
    return K.values(iterable);
};

// 数组操作
// ---------------

// 获取数组最后一个元素
K.last = function(array) {
    var len = array.length;
    return len > 0 ? array[ len - 1 ] : undefined;
};

// 获取数组中真值的项。
K.compact = function(array) {
    return K.filter(array, function(value) {
        return !!value;
    });
};

// 将一个数组扁平化
K.flatten = function(array) {
    return K.reduce(array, function(memo, value) {
        if (K.isArray(value)) {
            return memo.concat(K.flatten(value));
          }
          memo[memo.length] = value;
          return memo;
    }, []);
};

// 将数组里的某(些)元素移除。
K.without = function(array, obj) {
    var values = slice.call(arguments, 1);
    return K.filter(array, function(value) {
        return !K.contains(values, value);
    });
};

// 数组元素除重，得到新数据
K.unique = function(array, isSorted) {
    return K.reduce(array, function(memo, el, i) {
        if (0 == i || (isSorted === true ? K.last(memo) != el : !K.contains(memo, el))) memo[memo.length] = el;
          return memo;
    }, []);
};

// 获取多个数组的交集
K.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return K.filter(K.unique(array), function(item) {
        return K.every(rest, function(other) {
            return K.indexOf(other, item) >= 0;
        });
    });
};

// 返回一个元素在数组中的位置（从前往后找）。如果数组里没有该元素，则返回-1
K.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i, l;
    if (isSorted) {
        i = K.sortedIndex(array, item);
          return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
    }
    for (i = 0, l = array.length; i < l; i++) if (array[i] === item) {
        return i;
    }
    return -1;
};

// 返回一个元素在数组中的位置（从后往前找）。如果数组里没有该元素，则返回-1
K.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
        return array.lastIndexOf(item);
    }
    var i = array.length;
    while (i--) if (array[i] === item) {
        return i;
    }
    return -1;
};

// 函数操作
// ------------------

// 绑定
K.bind = function(func, context) {
    var extraArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
        context = context || (this == K.global ? false : this);
        var args = extraArgs.concat(Array.prototype.slice.call(arguments));
        if (typeof(func) == "string" && context[func]) {
            context[func].apply(context, args);
        } else if (K.isFunction(func)) {
            return func.apply(context, args);
        } else {
            K.log("not function", func);
        }
    };
};


// 对函数进行methodize化，使其的第一个参数为this，或this[attr]。
K.methodize = function(func, attr) {
    if (attr) {
        return function() {
            return func.apply(null, [this[attr]].concat([].slice.call(arguments)));
        };
    }
    return function() {
        return func.apply(null, [this].concat([].slice.call(arguments)));
    };
};

K.extend = function(klass, proto) {
    var T = function() {}; //构造prototype-chain
    T.prototype = proto.prototype;

    var klassProto = klass.prototype;

    klass.prototype = new T();
    klass.$super = proto; //在构造器内可以通过arguments.callee.$super执行父类构造

    //如果原始类型的prototype上有方法，先copy
    K.mix(klass.prototype, klassProto, true);

    return klass;
};

// 以某对象为原型创建一个新的对象
K.create = nativeCreate || function(proto, props) {
    var ctor = function(ps) {
        if (ps) {
            K.mix(this, ps, true);
        }
    };
    ctor.prototype = proto;
    return new ctor(props);
};

// 延迟执行函数
K.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function() {
        return func.apply(func, args);
    }, wait);
};

K.defer = function(func) {
    return K.delay.apply(K, [func, 1].concat(slice.call(arguments, 1)));
};

// 对象操作
// ----------------

// 得到一个对象中所有可以被枚举出的属性的列表
K.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) {
        throw new TypeError('Invalid object');
    }
    var keys = [];
    for (var key in obj) if (hasOwnProperty.call(obj, key)) {
        keys[keys.length] = key;
    }
    return keys;
};

// 得到一个对象中所有可以被枚举出的属性值的列表
K.values = function(obj) {
    return K.map(obj, K.identity);
};

// 得到一个对象中所有可以被枚举出的方法列表
K.methods = function(obj) {
    return K.filter(K.keys(obj), function(key) {
        return K.isFunction(obj[key]);
    }).sort();
};

// 将源对象的属性并入到目标对象
K.mix = function(obj) {
    K.forEach(slice.call(arguments, 1), function(source) {
        for (var prop in source) if (source[prop] !== void 0) {
            obj[prop] = source[prop];
          }
    });
    return obj;
};

// 克隆
K.clone = function(obj) {
    return K.isArray(obj) ? obj.slice() : K.mix({}, obj);
};

// 是否为空数组或对象
K.isEmpty = function(obj) {
    if (K.isArray(obj) || K.isString(obj)) {
        return obj.length === 0;
    }
    for (var key in obj) if (hasOwnProperty.call(obj, key)) {
        return false;
    }
    return true;
};

// 判断一个变量是否是Html的Element元素
K.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
};

// 判断对象是否为数组
K.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
};

// 判断对象是否为函数
K.isFunction = function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

if (toString.call(arguments) == '[object Arguments]') {
    K.isArguments = function(obj) {
        return toString.call(obj) == '[object Arguments]';
    };
} else {
    K.isArguments = function(obj) {
        return !!(obj && hasOwnProperty.call(obj, 'callee'));
    };
}


// 判断对象是否为字符串
K.isString = function(obj) {
    return !!(obj === '' || (obj && obj.charCodeAt && obj.substr));
};

// 判断对象是否为数字
K.isNumber = function(obj) {
    return !!(obj === 0 || (obj && obj.toExponential && obj.toFixed));
};

// 判断对象是否是Nan
K.isNaN = function(obj) {
    return obj !== obj;
};

// 判断对象是否为boolean类型
K.isBoolean = function(obj) {
    return obj === true || obj === false;
};

// 判断对象是否为Date类型
K.isDate = function(obj) {
    return !!(obj && obj.getTimezoneOffset && obj.setUTCFullYear);
};

// 判断对象是否为正则
K.isRegExp = function(obj) {
    return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
};

// 判断对象是否为null
K.isNull = function(obj) {
    return obj === null;
};

// 判断对象是否为undefined
K.isUndefined = function(obj) {
    return obj === void 0;
};

// 字符函数
// -----------------

// 除去字符串两边的空白字符
K.trim = function(str) {
    return str.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
};

// 得到字节长度
K.byteLen = function(str) {
    return str.replace(/[^\x00-\xff]/g, "--").length;
};

// 得到指定字节长度的子字符串
K.subByte = function(str, len, tail) {
    if (K.byteLen(str) <= len) {
        return str;
    }
    tail = tail || '';
    len -= K.byteLen(tail);
    return str.substr(0, len).replace(/([^\x00-\xff])/g, "$1 ") //双字节字符替换成两个
              .substr(0, len) // 截取长度
              .replace(/[^\x00-\xff]$/, "") //去掉临界双字节字符
              .replace(/([^\x00-\xff]) /g, "$1") + tail; //还原
};

// 字符串为javascript转码
K.encode4JS = function(str) {
    return str.replace(/\\/g, "\\u005C")
              .replace(/"/g, "\\u0022")
              .replace(/'/g, "\\u0027")
              .replace(/\//g, "\\u002F")
              .replace(/\r/g, "\\u000A")
              .replace(/\n/g, "\\u000D")
              .replace(/\t/g, "\\u0009");
};

// 为http的不可见字符、不安全字符、保留字符作转码
K.encode4HTTP = function(str) {
    return str.replace(/[\u0000-\u0020\u0080-\u00ff\s"'#\/\|\\%<>\[\]\{\}\^~;\?\:@=&]/, function(s) {
        return encodeURIComponent(s);
    });
};

/**
* 字符串为Html转码
* @method encode4Html
* @static
* @param {String} s 字符串
* @return {String} 返回处理后的字符串
* @example
    var s="<div>dd";
    alert(encode4Html(s));
*/
K.encode4Html = function(s){
    return s.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
};

/**
* 字符串为Html的value值转码
* @method encode4HtmlValue
* @static
* @param {String} s 字符串
* @return {String} 返回处理后的字符串
* @example:
    var s="<div>\"\'ddd";
    alert("<input value='"+encode4HtmlValue(s)+"'>");
*/
K.encode4HtmlValue = function(s){
    return K.encode4Html(s).replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

// 将所有tag标签消除，即去除<tag>，以及</tag>
K.stripTags = function(str) {
    return str.replace(/<[^>]*>/gi, '');
};

//日期函数
//------------------
/**
* 格式化日期
* @method format
* @static
* @param {Date} d 日期对象
* @param {string} pattern 日期格式(y年M月d天h时m分s秒)，默认为"yyyy-MM-dd"
* @return {string}  返回format后的字符串
* @example
    var d=new Date();
    alert(format(d," yyyy年M月d日\n yyyy-MM-dd\n MM-dd-yy\n yyyy-MM-dd hh:mm:ss"));
*/
K.formatDate = function(d,pattern){
    pattern=pattern||"yyyy-MM-dd";
    var y=d.getFullYear();
    var o = {
        "M" : d.getMonth()+1, //month
        "d" : d.getDate(),    //day
        "h" : d.getHours(),   //hour
        "m" : d.getMinutes(), //minute
        "s" : d.getSeconds() //second
    }
    pattern=pattern.replace(/(y+)/ig,function(a,b){var len=Math.min(4,b.length);return (y+"").substr(4-len);});
    for(var i in o){
        pattern=pattern.replace(new RegExp("("+i+"+)","g"),function(a,b){return (o[i]<10 && b.length>1 )? "0"+o[i] : o[i]});
    }
    return pattern;
}

// 工具函数
// -----------------

K.identity = function(value) {
    return value;
};

// 生成唯一ID
var idCounter = 0;
K.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
};

})(K);

// touch事件检测
( function(K, undefined) {
    var result;

    var detect = function() {
        var events = ['touchstart', 'touchmove', 'touchend'],
            flag = true;

        var el = document.createElement('div');

        for (var i=0, j=events.length; i<j; i++) {
            var eventName = 'on' + events[i];
            var isSupported = (eventName in el);
            if (! isSupported) {
                el.setAttribute(eventName, 'return;');
                isSupported = typeof el[eventName] == 'function';
            }
            if (! isSupported) {
                flag = false;
                break;
            }
        }
        return flag;
    };

    K.isSupportTouch = function() {
        if (result === undefined) {
            result = detect();
        }
        return result;
    };
})( K );

// js的运行环境，浏览器以及版本信息。（Browser仅基于userAgent进行嗅探，存在不严谨的缺陷。）
K.Browser = (function() {
    var na = window.navigator,
        ua = na.userAgent.toLowerCase(),
        browserTester = /(msie|webkit|gecko|presto|opera|safari|firefox|chrome|maxthon)[ \/]([\d.]+)/ig,
        Browser = {
            platform: na.platform
        };
    ua.replace(browserTester, function(a, b, c) {
        var bLower = b.toLowerCase();
        Browser[bLower] = c;
    });
    if (Browser.opera) { //Opera9.8后版本号位置变化
        ua.replace(/opera.*version\/([\d.]+)/, function(a, b) {
            Browser.opera = b;
        });
    }
    if (Browser.msie) {
        Browser.ie = Browser.msie;
        var v = parseInt(Browser.msie, 10);
        Browser['ie' + v] = true;
    }

    if( Browser.safari && Browser.chrome ){
        Browser.safari = false;
    }
    return Browser;
}());

if (K.Browser.ie) {
    try {
        document.execCommand("BackgroundImageCache", false, true);
    } catch (e) {}
}

//鉴于该脚本加载时间比较靠前，故将窗口是否Focus的判断放在此处，提高准确性
function onDetectFocus(){
    K.windowFocused = true;
}
function onDetectBlur(){
    K.windowFocused = false;
}
K.windowFocused = true;

if( K.Browser.ie ){
    document.attachEvent( 'onfocusin', onDetectFocus);
    document.attachEvent( 'onfocusout', onDetectBlur);
}
else{
    window.addEventListener( 'focus', onDetectFocus, false );
    window.addEventListener( 'blur', onDetectBlur, false );
}

// 内部使用的 Event
( function( K ) {

var Pubsub = function() {
    this.__callbacks__ = {};
};

K.mix( Pubsub.prototype, {
    on: function(name, callback, context) {
        if (context) {
            callback = K.bind(callback, context);
        }

        var arr = this.__callbacks__[name];
        if( arr && arr.fired === true ){
            callback.apply( context, arr.args );
            return;
        }

        //如果是fireReady并且已经触发则立即执行回调

        this.__callbacks__[name] = this.__callbacks__[name] || [];
        this.__callbacks__[name].push(callback);

        return [ name, callback ];
    },

    un: function( handle ) {
        var name = handle[0];
        var callback = handle[1];

        if ( name in this.__callbacks__ ) {
            var callbacks = this.__callbacks__[name];
            K.forEach( callbacks, function(cb, i) {
                if (callback == cb) {
                    callbacks[i] = null;
                }
            } );
        }
    },

    once: function(name, callback, context) {
        var me = this;
        var handle = this.on( name, function() {
            callback.apply( context, arguments );
            me.un( handle );
        } );
    },

    fire: function(name/* args */) {
        if ( name in this.__callbacks__ ) {
            var callbacks = this.__callbacks__[name];
            var args = Array.prototype.slice.call(arguments, 1);
            K.forEach( callbacks, function(callback, i) {
                if ( typeof(callback) != "function" ) {
                    return null;
                }
                return callback.apply(null, args);
            } );
        }
    },
    /**
     * fireReady触发的事件的特点是，即使是事件已经触发，后续on注册的callback仍然会执行
     * 同时请注意，这类事件应该只触发一次，多次会导致逻辑混乱
     */
    fireReady: function(name/* args */){
        var callbacks = this.__callbacks__[name];
        if( !callbacks ){
            callbacks = this.__callbacks__[name] = [];
        }
        var args = Array.prototype.slice.call(arguments, 1);
        K.forEach( callbacks, function(callback, i) {
            if ( typeof(callback) != "function" ) {
                return null;
            }
            return callback.apply(null, args);
        });
        callbacks.fired = true;
        callbacks.args = args;
    }
} );

K.Pubsub = Pubsub;
K.mix( K, ( new Pubsub() ) );

} )( K );

// Module
( function( K, Resource, global ) {

var definedModules = {}; // 已定义过的模块
var loadingModules = {}; // 加载中模块

function Module ( id, dependancy, factory ) {
    // 模块不能依赖自身
    if ( K.indexOf( dependancy, id ) >= 0 ) {
        throw new Error( 'Module:' + id + ' could\'t depends on itself!' );
    }

    this.id = id;
    this.dependancy = dependancy;
    this.factory = factory;
};


/**************************************
 * define( moduleId, dependancy, factory )
 * @param {string} moduleId
 * @param {array} dependancy
 * @param {function} factory
 **************************************/
function define( moduleId, dependancy, factory ) {
    if ( arguments.length < 2 ) {
        throw new Error( 'module has invalid parameters' );
    }

    if ( ! K.isString( moduleId ) ) {
        throw new Error( 'module must have a ID' );
    }

    // define( 'xx', function() {} );
    if ( K.isFunction( dependancy ) ) {
        factory = dependancy;
        dependancy = [];
    }
    // define( 'xxx', {} );
    else if ( !K.isArray( dependancy ) ) {
        var def = dependancy; // 不能省略这个赋值，因为dependancy在后面被改写了。
        factory = function(){ return def; };
        dependancy = [];
    }

    if ( definedModules[ moduleId ] ) {
        K.fire('haibei:resource:conflict');
        // 不抛异常
        // throw new Error( moduleId + ' has defined' );
        return;
    }

    var realDependancy = K.unique( dependancy ),
        allModules = Module.getDependancy( realDependancy );

    Module.wait( allModules, function() {
        var mod = new Module( moduleId, dependancy, factory );
        definedModules[ moduleId ] = mod;

        try {
            delete loadingModules[ moduleId ];
        } catch(e) {}

        K.fire( 'Module:' + moduleId + ':Ready' );
    } );
}

Module.createRequire = function( depends, sourceId ) {
    function require( id, async ) {
        if ( !async && K.indexOf( depends, id ) == -1 ) {
            throw new Error( id + ' counld\'t be required in ' + sourceId + ', as you not declared to depend it ' );
        }

        var mod = definedModules[ id ];

        if ( !mod ) {
            return null;
        }

        if ( !mod.exports ) {
            createExports( mod );
        }

        return mod.exports;
    }

    require.async = function( modules, callback, context ) {
        modules = K.isString( modules ) ? [ modules ] : modules;
        var realModules = K.unique( modules );
        var allModules = Module.getDependancy( realModules );

        Module.load( allModules );
        Module.wait( allModules, function() {
            var mods = [];
            for ( var i = 0, length = modules.length; i < length; i++ ) {
                mods.push( require( modules[ i ], true ) );
            }

            callback.apply( context || global, mods );
        } );

    };

    return require;
};

/**
 * 获得模块依赖列表
 * @param {array} 依赖模块ID列表
 * @return {array} 模块ID列表
 */
Module.getDependancy = function( midList ) {
    return Resource.getDependancy( midList );
};

/**
 * 加载模块
 * 只是简单的将script中添加到dom树中
 * 不检测文件是否加载完成
 */
Module.load = function( moduleList ) {
    moduleList = K.isString( moduleList ) ? [ moduleList ] : moduleList;

    K.forEach( moduleList, function( mid ) {
        Resource.loadModule( mid );
    } );
};

/**
 * 检测所有已加载完成的模块
 */
Module.defined = function() {
    return definedModules;
};

/**
 * 检测加载中模块
 */
Module.waiting = function() {
    return K.keys( loadingModules );
};

/**
 * 检测模块是否加载完毕
 * 如果没有则等待
 */
Module.check = function( mid, callback ) {
    mid = K.trim( mid );
    if ( mid.length == 0 || definedModules[ mid ] ) {
        callback && callback();

    } else {
        // 记录正在加载中的模块
        loadingModules[ mid ] = true;
        K.on( 'Module:' + mid + ':Ready', callback );
    }
};

/**
 * 等待所有的依赖模块加载完毕
 * 串行检测所依赖模块
 * @param { array } dependancy 依赖模块
 * @param { function } callback 回调函数
 */
Module.wait = function( dependancy, callback ) {
    dependancy = [].concat( dependancy );
    if ( dependancy.length > 0 ) {
        var mod = dependancy.shift();
        Module.check( mod, function() {
            Module.wait( dependancy, callback );
        } );
    } else {
        callback && callback();
    }
};

function createExports( mod ) {
    var factory = mod.factory,
        ret;

    if ( K.isFunction( factory ) ) {
        mod.exports = {};
        ret = factory( Module.createRequire( mod.dependancy, mod.id ), mod.exports, mod );
        if ( ret ) {
            mod.exports = ret;
        }
    }
    else if ( factory !== undefined ) {
        mod.exports = factory;
    }
}

// 暴露api
global.define = K.define = define;
global.Module = K.Module = Module;

} )( K, K.Resource, this );

( function( K, Resource ) {

var resourceMap = {};        // 静态文件版本信息
var dependsMap = {};        // 静态文件依赖信息
var resourceBasePath = 'http://js.mafengwo.net/';    // 静态文件base地址
var rjs = /\.js$/i;
var _loaded = {};           // 已经加载的静态文件
var _loading = {};            // 正在加载中的静态文件
var _callbacks = [];        // 静态文件加载的回调列表
var _links = [];            // 加载中的css列表
var _timer ;                 // 轮询css加载状态的定时器


/**
 * 添加静态文件版本信息
 * @param {object} map
 */
Resource.addResourceMap = function( map ) {
    K.mix( resourceMap, map );
};


/**
 * 获得静态文件版本信息
 */
Resource.getResourceMap = function( file ) {
    return resourceMap[file];
};


/**
 * 添加静态文件依赖信息
 * @param {object} map
 */
Resource.addResourceDepends = function( map ) {
    K.mix( dependsMap, map );
};

/**
 * 开发时用
 */
Resource.setBasePath = function( path ) {
    resourceBasePath = path;
};


/**
 * 获取依赖模块
 * @param {array|string} 依赖模块列表
 * @param {array} inlist 已经找出的依赖模块
 * todo 处理循环依赖
 */
Resource.getDependancy = function( midList, inlist ) {
    var ret = [];

    midList = K.isString( midList ) ? [ midList ] : midList;
    inlist = inlist || [];

    K.forEach( midList, function( mid ) {
        mid = mid.replace( rjs, '' );
        inlist = inlist.concat( ret );
        if ( K.indexOf( inlist, mid ) == -1 ) {
            ret.unshift( mid );
        }

        var depends = dependsMap[ mid + '.js' ];
        if ( !depends ) {
            return;
        }

        var more = Resource.getDependancy( depends, inlist );
        if ( more.length ) {
            ret.unshift.apply( ret, more );
        }
    } );

    return ret;
};

/**
 * 加载模块
 */
var rslash = /^\/+|\/+$/ig;
Resource.loadModule = function( mid ) {
    mid = mid.replace( rslash, '' );

    if ( !rjs.test( mid ) ) {
        mid += '.js';
    }

    var uri = resourceMap[ mid ];
    if ( uri ) {
        Resource.loadJS( resourceBasePath + uri );
    }
};

Resource.canonicalURI = function(src) {
    if (/^\/\/\/?/.test(src)) {
        src = location.protocol + src;
    }
    return src;
};

var _complete = function(url) {
    var list = _callbacks,
        item, i;

    for (i=0; i<list.length; i++) {
        item = list[i];
        for(var j=0; j<item.resources.length; j++) {
            if(url == item.resources[j]) {
                item.resources.splice(j, 1);
                j--;
            }
        }
        if(!item.resources.length) {
            item.callback && item.callback();
            list.splice(i--, 1);
        }
    }
};

var _poll = function() {
    var sheets = document.styleSheets,
        i = sheets.length,
        links = _links;

    while (i--) {
        var link = sheets[i],
            ready = false;

        if (! K.Browser.firefox) {
            ready = true;
        } else {
            try {
                if (link.cssRules) {
                    ready = true;
                }
            } catch (ex) {
                // cp from seajs
                if (ex.name === 'SecurityError' || // firefox >= 13.0
                        ex.name === 'NS_ERROR_DOM_SECURITY_ERR') { // old firefox
                    ready = true;
                }
                /*
                if (ex.code == 1000) {
                    ready = true;
                }
                */
            }
        }

        if (ready) {
            var owner = link.ownerNode || link.owningElement,
            j = links.length;

            if (owner) {
                while (j--) {
                    if (owner == links[j]) {
                        _complete(links[j]['data-href']);
                        links.splice(j, 1);
                    }
                }
            }
        }
    }

    if (! links.length) {
        clearInterval(_timer);
        _timer = null;
    }
};

var _injectJS = function(urls, callback) {
    if(callback) {
        _callbacks.push({
            resources: urls,
            callback: callback
        });
    }

    for(var i in urls) {
        var script = document.createElement('script');
        var callback = function() {
            script.onload = script.onerror = script.onreadystatechange = null;
            _complete(urls[i]);
        };

        K.mix(script, {
            type: 'text/javascript',
            src: urls[i],
            async: true
        });
        script.onload = script.onerror = callback;
        script.onreadystatechange = function() {
            var state = this.readyState;
            if (state == 'complete' || state == 'loaded') {
                callback();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};

var _injectCSS = function( urls, callback ) {
    if(callback) {
        _callbacks.push({
            resources: urls,
            callback: callback
        });
    }
    for(var i in urls) {
        var link = document.createElement('link');
        K.mix(link, {
            type: 'text/css',
            rel: 'stylesheet',
            href: urls[i],
            'data-href': urls[i]
        });
        document.getElementsByTagName('head')[0].appendChild(link);

        if (link.attachEvent) {
            var callback = function() {
                _complete(urls[i]);
            };
            link.onload = callback;
        } else {
            _links.push(link);
            if (! _timer) {
                _timer = setInterval(_poll, 20);
            }
        }
    }
};

var _load = function(list, callback) {
    var resources = {},
        cssList = [],
        jsList = [];

    list = K.isArray(list) ? list : [ list ];
    for (var i=0, j=list.length; i < j; i++) {

        if(~list[i].indexOf('.css')) {
            cssList.push(list[i]);
        } else {
            jsList.push(list[i]);
        }
    }

    $.get('/ajax/ajax_fetch_cssjs.php', {css_list: cssList, js_list: jsList}, function(data) {

        // 先加载css，保证加载模块样式正确
        if('css_list' in data) {
            _injectCSS(data.css_list, function() {
                if('js_list' in data) {
                    _injectJS(data.js_list, callback);
                } else if(callback) {
                    callback();
                }
            });
        } else if('js_list' in data) {
            _injectJS(data.js_list, callback);
        }
    }, 'json');

    /*if (callback) {
        _callbacks.push({
            resources: resources,
            callback: callback
        });
    }*/
};

/**
 * 加载JS文件
 * @param {mixed} src JS文件绝对地址
 * @param {function} callback js加载完成后回调函数
 */
Resource.loadJS = function( src, callback ) {
    _load(src, callback);
};


/**
 * 加载CSS文件
 * @param {mixed} uri css文件绝对地址
 * @param {function} callback todo: 文件加载完成后回调函数
 */
Resource.loadCSS = function( uri, callback ) {
    _load(uri, callback);
};

/**
 * 加载image文件
 * @param {string} uri image文件绝对地址
 * @param {function} callback todo: 文件加载完成后回调函数
 */
Resource.loadIMG = function( src, callback ) {
    var image = new Image();

    callback = typeof callback === 'function' ? callback : function() {};
    image.onload = function() {
        image.onload = null;
        callback.call( null, image );
    };
    if ( image.readyState == "complete" ) {
        callback.call(null, image);
    }
    image.src = src;
};


} )( K, K.Resource );


// Dom Ready
( function(K) {

var isDomContentLoaded = false;
var isWindowLoaded = false;

K.ready = function(callback) {
    if ( isDomContentLoaded ) {
        callback();
    } else {
        K.on( 'Onload:DomContentLoaded', callback );
    }
};

K.load = function(callback) {
    if ( isWindowLoaded ) {
        callback();
    } else {
        K.on( 'Onload:Loaded', callback );
    }
};

var onDomContentLoaded = function() {
    if ( ! isDomContentLoaded ) {
        isDomContentLoaded = true;
        K.fire( "Onload:DomContentLoaded" );
    }
};

var onWindowLoaded = function() {
    if ( ! isWindowLoaded ) {
        isWindowLoaded = true;
        K.fire( "Onload:Loaded" );
    }
};

var DOMContentLoaded;
if ( document.addEventListener ) {
    DOMContentLoaded = function() {
        document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
        onDomContentLoaded();
    };
} else if ( document.attachEvent ) {
    DOMContentLoaded = function() {
        if ( document.readyState === "complete" ) {
            document.detachEvent( "onreadystatechange", DOMContentLoaded );
            onDomContentLoaded();
        }
    };
}

var doScrollCheck = function() {
    if ( isDomContentLoaded ) {
        return;
    }

    try {
        // If IE is used, use the trick by Diego Perini
        // http://javascript.nwbox.com/IEContentLoaded/
        document.documentElement.doScroll( "left" );
    } catch(e) {
        setTimeout( doScrollCheck, 1 );
        return;
    }

    // and execute any waiting functions
    document.detachEvent( "onreadystatechange", DOMContentLoaded );
    onDomContentLoaded();
};

var bootstrapHandler = function() {

    var window = K.global,
        document = window.document,
        onloadHandler = function() {
            if ( ! isDomContentLoaded ) {
                isDomContentLoaded = true;
                onDomContentLoaded();
            }

            onWindowLoaded();
        };

    if ( document.readyState == "complete" ) {
        setTimeout( onDomContentLoaded, 0 );
        return;
    }

    if ( document.addEventListener ) {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
        window.addEventListener( 'load', onloadHandler, false );
    } else if ( document.attachEvent ) {
        document.attachEvent( "onreadystatechange", DOMContentLoaded );
        window.attachEvent( "onload", onloadHandler );

        // If IE and not a frame
        // continually check to see if the document is ready
        var toplevel = false;

        try {
            toplevel = window.frameElement == null;
        } catch(e) {}

        if ( document.documentElement.doScroll && toplevel ) {
            doScrollCheck();
        }
    }
};

bootstrapHandler();

} )( K );

// APP
( function( K, Module ) {

var reserveMethods = 'require getContainer'.split( /\s+/ig );  // 一些保留属性或者方法
var appList = {};

function Application( id, dependancy, execBeforeDomready ) {
    if ( appList[ id ] ) {
        K.fire('haibei:resource:conflict');
        throw new Error( 'App:' + id + ' has defined' );
        return;
    }
    appList[ id ] = this;
    this.id = id;

    // App默认加载jQuery
    this.requiredModList = [].concat( dependancy );
    this.execBeforeDomready = execBeforeDomready;
}

K.mix( Application.prototype, {
    'define' : function( definition ) {
        var dependancy = K.unique( this.requiredModList ),
            allModules = Module.getDependancy( dependancy ),
            me = this,
            ready = function() {
                K.fire( 'App:' + me.id + ':Ready', me );
            };

        //alert( allModules );
        // 加载所有模块
        //Module.load( allModules );

        // 等待加载完成
        Module.wait( allModules, function() {
            // factory 方法
            // 如果factory里覆盖了require方法，暂时无法检测
            var require = Module.createRequire( dependancy, me.id );
            if ( K.isFunction( definition ) ) {
                definition = definition.call( {}, require );
            }

            // App的factory可能没有return definition
            if ( !definition ) {
                return;
            }

            // 检测definition中是否定义了保留方法
            var i, length, prop;
            for ( i = 0, length = reserveMethods.length; i < length; i++ ) {
                prop = reserveMethods[ i ];
                if ( definition[ prop ] ) {
                    throw new Error( prop + ' is a reserve method or property' );
                }
            }

            definition.require = require;

            // jQuery默认加载
            var $ = definition.require( 'core/jQuery' );
            me.__jQuery__ = $;

            // 如果App中设定了container，但是DOM树中找不到
            // 则不给App绑定事件或者执行main方法
            if ( definition.container && $( definition.container ).length == 0 ) {
                return;
            }

            // 设定Container;
            var    container = processContainer( definition, $ );

            // 绑定事件
            if ( definition.events ) {
                bindEvents( definition, $, container );
            }

            // 入口初始化
            if ( K.isFunction( definition.main ) ) {
                if ( me.execBeforeDomready ) {
                    definition.main();
                    ready();
                }
                // Dom Ready 后再执行
                else {
                    K.ready( function() {
                        definition.main();
                        ready();
                    } );
                }
            } else {
                ready();
            }
        } );
    }
} );

function processContainer( definition, $ ) {
    var container;
    if ( !definition.container ) {
        definition.container = document.body; // 如果没有指定container，则默认为document.body
    }

    container = $( definition.container );

    if ( !container.length || container.length > 1 ) {
        container = $( document.body );
    }

    // 修改container
    definition.container = container;
    definition.getContainer = function() {
        return container;
    };

    return container;
}

// 给APP绑定事件
var eventSpliter = /^([\w\.]+)(?:\s+(.*))?$/;
function bindEvents( app, $, container ) {
    var events = app.events;

    K.map( events, function( handler, evtStr ) {
        var match = evtStr.match( eventSpliter ),
            evtName = match[ 1 ],
            selector = match[ 2 ],
            method = K.bind( app[ handler ], app );

        if ( !selector ) {
            container.bind( evtName, method );
        }
        else {
            container.delegate( selector, evtName, K.bind( app[ handler ], app ) );
        }
    } );
}

// 生成不重复的app id
var appId = 0;
function genAppId() {
    return '__APP__' + ( appId++ );
}

function getId( info ) {
    var id = info[ 0 ];
    if ( id && K.isString( id ) ) {
        // App id 必须以A开头
        if ( K.last( id.split( /\//ig ) ).charAt( 0 ) != 'A' ) {
            throw new Error( id + ' is a invalid name for a App' );
        }
    } else {
        id = genAppId();
    }

    return id;
}

function getDepends( info ) {
    return K.detect( info, function( item ) {
        return K.isArray( item );
    } ) || [];
}

function unsafeExec( info ) {
    var execBeforeDomready = K.last( info );
    return K.isBoolean( execBeforeDomready ) ? execBeforeDomready : false;
}

/**
 * 定义APP
 * @param {string|optinal} id  App id
 * @param {array|optional} depends 依赖模块
 */
K.App = function( id, depends, execBeforeDomready ) {
    return new Application( getId( arguments ), getDepends( arguments ), unsafeExec( arguments ) );
};

K.App.get = function( appID ) {
    return appList[ appID ] || null;
};

} )( K, K.Module );

// 自定义事件
(function(K) {
    var mix = K.mix,
        indexOf = K.indexOf;

    //----------K.CustEvent----------
    /**
     * @class CustEvent 自定义事件
     * @namespace K
     * @param {object} target 事件所属对象，即：是哪个对象的事件。
     * @param {string} type 事件类型。备用。
     * @param {object} eventArgs (Optional) 自定义事件参数
     * @returns {CustEvent} 自定义事件
     */
    var CustEvent = K.CustEvent = function(target, type, eventArgs) {
        this.target = target;
        this.type = type;
        mix(this, eventArgs || {});
    };

    mix(CustEvent.prototype, {
        /**
         * @property {Object} target CustEvent的target
         */
        target: null,
        /**
         * @property {Object} currentTarget CustEvent的currentTarget，即事件派发者
         */
        currentTarget: null,
        /**
         * @property {String} type CustEvent的类型
         */
        type: null,
        /**
         * @property {boolean} returnValue fire方法执行后的遗留产物。(建议规则:对于onbeforexxxx事件，如果returnValue===false，则不执行该事件)。
         */
        returnValue: undefined,
        /**
         * 设置event的返回值为false。
         * @method preventDefault
         * @returns {void} 无返回值
         */
        preventDefault: function() {
            this.returnValue = false;
        }
    });
    /**
     * 为一个对象添加一系列事件，并添加on/un/fire三个方法，参见：K.CustEventTarget.createEvents
     * @static
     * @method createEvents
     * @param {Object} obj 事件所属对象，即：是哪个对象的事件。
     * @param {String|Array} types 事件名称。
     * @returns {void} 无返回值
     */

    /**
     * @class CustEventTargetH  自定义事件Target
     * @namespace K
     */

    K.CustEventTargetH = {
        /**
         * 添加监控
         * @method on
         * @param {string} sEvent 事件名称。
         * @param {Function} fn 监控函数，在CustEvent fire时，this将会指向oScope，而第一个参数，将会是一个CustEvent对象。
         * @return {boolean} 是否成功添加监控。例如：重复添加监控，会导致返回false.
         * @throw {Error} 如果没有对事件进行初始化，则会抛错
         */
        on: function(target, sEvent, fn) {
            var cbs = (target.__custListeners && target.__custListeners[sEvent]) || K.error("unknown event type", TypeError);
            if (indexOf(cbs, fn) > -1) {
                return false;
            }
            cbs.push(fn);
            return true;
        },
        /**
         * 添加监控(只发生一次)
         * @method once
         * @param {string} sEvent 事件名称。
         * @param {Function} fn 监控函数，在CustEvent fire时，this将会指向oScope，而第一个参数，将会是一个CustEvent对象。
         * @return {boolean} 是否成功添加监控。例如：重复添加监控，会导致返回false.
         * @throw {Error} 如果没有对事件进行初始化，则会抛错
         */
        once: function(target, sEvent, fn) {
            var cbs = (target.__custListeners && target.__custListeners[sEvent]) || K.error("unknown event type", TypeError);
            var handler = $.proxy(function(custEvent) {
                fn.call(target, custEvent);
                K.CustEventTargetH.un(target, sEvent, handler);
            }, this);

            K.CustEventTargetH.on(target, sEvent, handler);
            return true;
        },
        /**
         * 取消监控
         * @method un
         * @param {string} sEvent 事件名称。
         * @param {Function} fn 监控函数
         * @return {boolean} 是否有效执行un.
         * @throw {Error} 如果没有对事件进行初始化，则会抛错
         */
        un: function(target, sEvent, fn) {
            var cbs = (target.__custListeners && target.__custListeners[sEvent]) || K.error("unknown event type", TypeError);
            if (fn) {
                var idx = indexOf(cbs, fn);
                if (idx < 0) {
                    return false;
                }
                cbs.splice(idx, 1);
            } else {
                cbs.length = 0;
            }
            return true;

        },
        /**
         * 事件触发。触发事件时，在监控函数里，this将会指向oScope，而第一个参数，将会是一个CustEvent对象，与Dom3的listener的参数类似。<br/>
         如果this.target['on'+this.type],则也会执行该方法,与HTMLElement的独占模式的事件(如el.onclick=function(){alert(1)})类似.<br/>
         如果createEvents的事件类型中包含"*"，则所有事件最终也会落到on("*").
         * @method fire
         * @param {string | sEvent} sEvent 自定义事件，或事件名称。 如果是事件名称，相当于传new CustEvent(this,sEvent,eventArgs).
         * @param {object} eventArgs (Optional) 自定义事件参数
         * @return {boolean} 以下两种情况返回false，其它情况下返回true.
         1. 所有callback(包括独占模式的onxxx)执行完后，custEvent.returnValue===false
         2. 所有callback(包括独占模式的onxxx)执行完后，custEvent.returnValue===undefined，并且独占模式的onxxx()的返回值为false.
         */
        fire: function(target, sEvent, eventArgs) {
            if (sEvent instanceof CustEvent) {
                var custEvent = mix(sEvent, eventArgs);
                sEvent = sEvent.type;
            } else {
                custEvent = new CustEvent(target, sEvent, eventArgs);
            }

            var cbs = (target.__custListeners && target.__custListeners[sEvent]) || K.error("unknown event type", TypeError);
            if (sEvent != "*") {
                cbs = cbs.concat(target.__custListeners["*"] || []);
            }

            custEvent.returnValue = undefined; //去掉本句，会导致静态CustEvent的returnValue向后污染
            custEvent.currentTarget = target;
            var obj = custEvent.currentTarget;
            if (obj && obj['on' + custEvent.type]) {
                var retDef = obj['on' + custEvent.type].call(obj, custEvent); //对于独占模式的返回值，会弱影响event.returnValue
            }

            for (var i = 0; i < cbs.length; i++) {
                cbs[i].call(obj, custEvent);
            }
            return custEvent.returnValue !== false || (retDef === false && custEvent.returnValue === undefined);
        },
        createEvents: function(target, types) {
            /**
             * 为一个对象添加一系列事件，并添加on/un/fire三个方法<br/>
             * 添加的事件中自动包含一个特殊的事件类型"*"，这个事件类型没有独占模式，所有事件均会落到on("*")事件对应的处理函数中
             * @static
             * @method createEvents
             * @param {Object} obj 事件所属对象，即：是哪个对象的事件。
             * @param {String|Array} types 事件名称。
             * @returns {any} target
             */
            types = types || [];
            if (typeof types == "string") {
                types = types.split(",");
            }
            var listeners = target.__custListeners;
            if (!listeners) {
                listeners = target.__custListeners = {};
            }
            for (var i = 0; i < types.length; i++) {
                listeners[types[i]] = listeners[types[i]] || []; //可以重复create，而不影响之前的listerners.
            }
            listeners['*'] = listeners["*"] || [];
            return target;
        }
    };

}(K));

( function( K ) {

    var Methodized = function() {};

    var Helper = {
        /**
         * 对helper的方法，进行methodize化，使其的第一个参数为this，或this[attr]。
         * <strong>methodize方法会抛弃掉helper上的非function类成员以及命名以下划线开头的成员（私有成员）</strong>
         * @method methodize
         * @static
         * @param {Helper} helper Helper对象，如DateH
         * @param {optional} attr (Optional)属性
         * @return {Object} 方法已methodize化的对象
         */
        methodize: function(helper, attr) {
            var ret = new Methodized(); //因为 methodize 之后gsetter和rwrap的行为不一样

            for (var i in helper) {
                if (typeof helper[i] == "function" && !/^_/.test(i)) {
                    ret[i] = K.methodize(helper[i], attr);
                }
            }
            return ret;
        }
    };

    K.Helper = Helper;
}( K ) );

( function( K ) {
    var mix = K.mix;

    var CustEventTarget = K.CustEventTarget = function() {
        this.__custListeners = {};
    };

    var methodized = K.Helper.methodize(K.CustEventTargetH, null, {
        on: 'operator',
        un: 'operator'
    }); //将Helper方法变成prototype方法，同时修改on/un的返回值

    mix(CustEventTarget.prototype, methodized);

    K.CustEvent.createEvents = CustEventTarget.createEvents = function(target, types) {
        K.CustEventTargetH.createEvents(target, types);
        return mix(target, CustEventTarget.prototype); //尊重对象本身的on。
    };
}( K ) );

// 存放全局性质的配置信息，例如工具生成的配置域信息等
(function(K){
    K.Env = {};
} )( K );

//由于onbeforeunload事件在浏览器中只能独占，因此在添加时很容易相互覆盖，以下方法可以保留已有的方法
( function( K ) {
    K.onbeforeunload = function( callback ) {
        if( !callback ) return;
        if( typeof window.onbeforeunload == 'function' ) {
            var oldBeforeUnload = window.onbeforeunload;
            window.onbeforeunload = function() {
                //Chrome必须有返回值才会出提示，其他浏览器可以设置event参数的returnValue属性
                var v = callback.apply( null, arguments );
                var ov = oldBeforeUnload.apply( null, arguments );

                //确保所有都执行，优先返回原回调值，防止覆盖
                return ov ? ov : v;
            };
        } else {
            window.onbeforeunload = callback;
        }
    };
} )( K );

// 性能数据
( function( K ) {
    K.Performance = { timing: {} };
    var performance = window.performance || window.msPerformance || window.webkitPerformance || window.mozPerformance;
    if (performance && performance.timing) {
        K.Performance.timing = performance.timing;
    } else {
        K.Performance.timing.responseStart = K.global.pageStart;
        K.ready(function() {
            K.Performance.timing.domContentLoadedEventStart = (new Date()).getTime();
        });
        K.load(function() {
            K.Performance.timing.loadEventStart = (new Date()).getTime();
        });
    }
} )( K );

// Default Event Handler
( function( K ) {

var getParentByTag = function(node, tagName) {
    tagName = tagName.toUpperCase();
    while (node && node.nodeName != tagName) {
        node = node.parentNode;
    }
    return node;
};

var getAttribute = function(element, attr) {
    if ('hasAttribute' in element) {
        return element.getAttribute(attr);
    } else if ('getAttributeNode' in element) {
        var node = element.getAttributeNode(attr);
        if (node) {
            return node.value;
        }
    }
    return undefined;
};

var isAppReady = function(app) {
    if (! ('App' in K) || ! K.App.get(app)) {
        K.log(app, 'not ready');
        return false;
    }
    return true;
};

var getNotReadyApp = function(element) {
    var app = getAttribute(element, 'data-app');
    if (app && app.length && !isAppReady(app)) {
        return app;
    }
    return false;
};

var delegateEvent = function(container, eventName, target) {
    var app = getNotReadyApp(container),
        ajax, href,oplog;
    if (app) {
        K.once( 'App:' + app + ':Ready', function( app ) {
            app.__jQuery__(target || container)[eventName]();
        } );
        return false;
    } else if (eventName == "click") {
        ajax = container.getAttribute('data-ajax');
        oplog = container.getAttribute('data-op-log');
        if (oplog && oplog.length) {
            Request.apiLog(container);
        }
        if (ajax && ajax.length) {
            href = container.getAttribute('data-ajax-url') || container.href;
            switch (ajax) {
                case 'request-post':
                case 'request':
                    Request.load(href, container);
                    break;
                case 'dialog-post':
                case 'dialog':
                    Request.loadDialog(href, container);
                    break;
                default:
                    return;
            }
            return false;
        }
    }
    return;
};

var delegateSubmit = function(target) {
    var form = getParentByTag(target, 'FORM') || target;
    return delegateEvent(form, 'submit');
};

var delegateClick = function(target) {
    var container = getParentByTag(target, 'A') || target;
    return delegateEvent(container, 'click', target);
};

var supportSubmitBubble = (function() {
    var el = document.createElement("div");
    var support = ('onsubmit' in el);
    if (! support) {
        el.setAttribute('onsubmit', "return;");
        support = typeof el.onsubmit === 'function';
    }
    return support;
})();

var defaultEventHandler = function() {
    var document = K.global.document,
        documentElement = document.documentElement;

    var target = null;
    documentElement.onclick = function(event) {
        event = event || window.event;
        target = event.target || event.srcElement;

        if (! supportSubmitBubble) {
            var type = target.type;
            if (type == 'submit' || type == 'image') {
                return delegateSubmit(target);
            }
        }

        var href = target.href;
        if (href && !/#$/.test(href)) {
            var isNotClick = (event.which && event.which != 1),
                isSpecialChar = (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);

            if (isNotClick || isSpecialChar) {
                return;
            }
        }

        return delegateClick(target);
    };

    if (! supportSubmitBubble) {
        documentElement.onkeypress = function(event) {
            event = event || window.event;
            target = event.target || event.srcElement;

            var type = target.type;
            if ( (type == 'text' || type == 'password') && event.keyCode == 13) {
                return delegateSubmit(target);
            }
            return;
        };
    }

    if (supportSubmitBubble) {
        documentElement.onsubmit = function(event) {
            event = event || window.event;
            var form = event.target || event.srcElement;

            return delegateSubmit(form);
        };
    }
};

defaultEventHandler();
} )( K );
;
/*
基于hb的通用函数
*/
// 监听需要登录的事件
K.on('login:required', $.proxy(function() {
    show_login();
}, this));
// 监听是否有upnum  + 1
K.on('hb:incr', $.proxy(function(num_box) {
    var num = parseInt(num_box.html(),10);
    num_box.UpNum('+1', function() {
        num_box.html(num + 1);
    });
}, this));

// 监听是否有upnum  - 1
K.on('hb:decr', $.proxy(function(num_box) {
    var num = parseInt(num_box.html(),10);
    num_box.UpNum('-1', function() {
        num_box.html(num - 1);
    });
}, this));

// 调用$.prompt
function showPrompt(html)
{
    $.prompt.close();
    var buttons = {

    };
    var params = {
        buttons : buttons
    };
    $.prompt(html,params);
    $("div.jqiclose").hide();
    $("div.jqifade").css("background-color","#000");
}

$(function (){
    $('body').delegate("._j_add_friend",'click',function(event){
        event.preventDefault();
        var _this = $(this);
        var to_uid = parseInt(_this.data("to_uid"),10);
        if (to_uid == 0)
        {
            return false;
        }
        $.post("/ajax/addfriend.php",{
            action : "addfriend",
            touid : to_uid,
            '_need_cstk':true
        },function(d){
            if(d.ret=="1")
            {
                if (_this.hasClass("_j_remove")){
                    _this.remove();
                }
                else{
                    _this.replaceWith(d.html);
                }
            }
            else
            {
                majaxerr(d);
            }
        }, 'json');

    })
    .delegate("._j_write_address",'click',function(event){
        event.preventDefault();
        $.prompt.close();
        if(window.__mfw_uid === 0)
        {
            show_login();
            return false;
        }
        K.Resource.loadCSS("http://css.mafengwo.net/css/msg_li.css");
        $.post("/ajax/ajax_user_ext_add.php",{ action:'get_float_address' },function(d){
            if(d.ret==1){
                $.prompt(d.html,{
                    buttons:{ "提交":true },
                    callback:function(v,m,f){
                        if(v)
                        {
                            var data = {
                                action : "address",
                                true_name : $("#true_name",$(m)).val(),
                                mobile : $("#mobile",$(m)).val(),
                                zip_code : $("#zip_code",$(m)).val(),
                                address : $("#address", $(m)).val()
                            };
                            $.post("/ajax/ajax_user_ext_add.php",data,function(d){
                                if(d.ret==1){
                                    mTinyAlert("操作成功！");
                                }
                                else{
                                    majaxerr(d);
                                }
                            },"json");
                        }
                    }
                });
            }
            else{
                majaxerr(d);
            }
        },"json");
    })
});
;
var Cache = {};

var Request = function(uri) {
    if (uri) {
        this.setURI(uri);
    }
    this._method = 'GET';
    this._dataType = 'json';
    this._data = {};
    this._options = {};
    this._xhr = null;
};

K.mix(Request, {
    load: function(url, element) {
        var $element = $(element),
            method = $element.attr('data-ajax') == 'request-post' ? 'POST' : 'GET';

        var loadingElement = $element.find('._j_loading_elem');
        if (! loadingElement.length) {
            loadingElement = $element;
        }

        if (loadingElement.hasClass('loading')) {
            return;
        }

        new Request(url)
            .setMethod(method)
            .setRelativeTo(element)
            .setLoadingElement(loadingElement)
            .send();
    },

    loadDialog: function(url, element) {
        var $element = $(element),
            method = $element.attr('data-ajax') == 'dialog-post' ? 'POST' : 'GET';

        var loadingElement = $element.find('._j_loading_elem');
        if (! loadingElement.length) {
            loadingElement = $element;
        }

        if (loadingElement.hasClass('loading')) {
            return;
        }

        new Request(url)
            .setMethod(method)
            .setRelativeTo(element)
            .setLoadingElement(loadingElement)
            .send()
            .setHandler(function(response){
                if (response.html.length > 0){
                    var params = response.params;
                    params = $.parseJSON(params);
                    $.prompt.close();
                    $.prompt(response.html,params);
                    $("._j_prompt_close").click(function(event){
                        event.preventDefault();
                        $.prompt.close();
                    });
                    K.fire("after:dialog:show",params);
                }
            });
    },
    // 记录op log
    apiLog: function(element) {
        var $element = $(element),
            log_type = $element.attr('data-type'),
            mk = $element.attr('data-mk');
        var url = '/ajax/ajax_op_log_api.php?type=' + encodeURIComponent(log_type) + '&mk='+ encodeURIComponent(mk);
        new Request(url).setMethod("GET").send();
    },

    invalidate: function(url) {
        return ResponseCache.invalidate(Request.normalizeURI(url));
    },

    normalizeURI: function(url, data) {
        var uri = new URI(url);
        var newQuery = {};
        var query = K.mix({}, data, uri.getQueryParams());
        K.forEach(query, function(val, key) {
            if (! /^_/.test(key)) {
                newQuery[key] = val;
            }
        });
        uri.setQueryParams(newQuery);

        return uri.setProtocol(null)
            .setDomain(null)
            .setFragment(null)
            .toString();
    }
});

K.mix(Request.prototype, {
    setMethod: function(method) {
        this._method = method;
        return this;
    },

    getMethod: function() {
        return this._method;
    },

    setDataType: function(dataType) {
        this._dataType = dataType;
        return this;
    },

    getDataType: function() {
        return this._dataType;
    },

    setData: function(data) {
        this._data = data;
        return this;
    },

    getData: function() {
        return this._data;
    },

    setURI: function(uri) {
        this._uri = uri;
        return this;
    },

    getURI: function() {
        return this._uri;
    },

    setHandler: function(handler) {
        if (K.isFunction(handler)) {
            this._handler = handler;
        }
        return this;
    },

    getHandler: function() {
        return this._handler;
    },

    setErrorHandler: function(errorHandler) {
        this._errorHandler = errorHandler;
        return this;
    },

    getErrorHandler: function() {
        return this._errorHandler;
    },

    setRelativeTo: function(element) {
        this._relativeTo = element;
        return this;
    },

    setFinallyHandler: function(finallyHandler) {
        this._finallyHandler = finallyHandler;
        return this;
    },

    getFinallyHandler: function() {
        return this._finallyHandler;
    },

    getRelativeTo: function() {
        return this._relativeTo;
    },

    setLoadingElement: function(element) {
        this._loadingElement = element;
        return this;
    },

    getLoadingElement: function(element) {
        return this._loadingElement;
    },

    // 目前支持 suppressEval 禁止执行
    setOption: function(name, value) {
        this._options[name] = value;
        return this;
    },

    getOption: function(name) {
        return this._options[name];
    },

    send: function() {
        if (this.getMethod() == 'GET') {
            var cachedResponse = ResponseCache.get(Request.normalizeURI(this.getURI(), this.getData()));
            if (cachedResponse) {
                this._invokeResponseHandler(cachedResponse);
                return;
            }
        }

        this._updateLoadingElement(true);

        var me = this;
        this._xhr = $.ajax({
            type: this._method,
            url: this._uri,
            data: this._data,
            dataType: this._dataType,
            success: function(data, status, xhr) {
                if (xhr.status == 204) {
                    me._invokeResponseHandler({});
                } else {
                    if (! data.error) {
                        me._invokeResponseHandler(data);
                    } else {
                        me._invokeErrorHandler(data);
                    }
                }
            },
            error: function(data) {
                me._invokeErrorHandler({ error: data });
            },
            complete: function() {
                me._updateLoadingElement(false);
            }
        });

        return this;
    },

    abort:function(){
        this._xhr && this._xhr.abort();
        return this;
    }
});

K.mix(Request.prototype, {
    _updateLoadingElement: function(loading) {
        if (this._loadingElement) {
            if (loading) {
                $(this._loadingElement).addClass('loading');
            } else {
                $(this._loadingElement).removeClass('loading');
            }
        }
    },

    _invokeResponseHandler: function(response) {
        if ('redirect' in response) {
            window.location = response.redirect;
            return;
        }
        if (this.getMethod() == 'GET' && response.cache) {
            ResponseCache.set(Request.normalizeURI(this.getURI(), this.getData()), response, 60000);
        }
        if (this.getOption("suppressEval")) {
            this._loadResource(response.resource, function() {});
            return;
        }
        if ('resource' in response) {
            this._loadResource(response.resource, K.bind(function() {
                this._dispatchResponse(response);
            }, this));
        } else {
            this._dispatchResponse(response);
        }
    },

    _invokeErrorHandler: function(response) {
        if (this.getOption("suppressEval")) {
            return;
        }
        // TODO 区分是通讯失败 还是接口返回错误信息
        if (response && response.resource) {
            this._loadResource(response.resource, K.bind(function() {
                this._dispatchErrorResponse(response);
            }, this));
        } else {
            this._dispatchErrorResponse(response);
        }
    },

    _loadResource: function(resource, callback) {
        var me = this;

        // 必须保证css都下载完成了 才能继续干其它事情
        var afterCssLoaded = function() {
            callback();

            if ('js' in resource && !K.isEmpty(resource.js)) {
                K.Resource.loadJS(resource.js);
            }
            if ('map' in resource) {
                if (resource.map.depends) {
                    K.Resource.addResourceDepends(resource.map.depends);
                }
                if (resource.map.uris) {
                    K.Resource.addResourceMap(resource.map.uris);
                }
            }

            if (!me.getOption('suppressEval')) {
                if ('onload' in resource) {
                    K.forEach(resource.onload, function(code) {
                        try
                        {
                            (new Function(code)).apply(me);
                        }
                        catch (ex)
                        {
                            K.log(code);
                        }
                    });
                }
            }
        };

        if ('css' in resource && !K.isEmpty(resource.css)) {
            K.Resource.loadCSS(resource.css, afterCssLoaded);
        } else {
            afterCssLoaded();
        }
    },

    _dispatchResponse: function(response) {
        if (response.suppressHandler) {
            return;
        }

        if (this._handler) {
            this._handler(response.payload, this);
        }

        if (this._finallyHandler) {
            this._finallyHandler(this);
        }
    },

    _dispatchErrorResponse: function(response) {
        if (response.suppressHandler) {
            return;
        }

        if (this._errorHandler) {
            this._errorHandler(response.error, this);
        }

        if (this._finallyHandler) {
            this._finallyHandler(this);
        }
    }
});

var now = function() {
    return new Date().getTime();
};

var ResponseCache = {
    set: function(uri, response, expires) {
        var key = this._getCacheKey(uri);
        if (key) {
            this._setCache(key, {
                uri: uri,
                response: response,
                time: now(),
                expires: expires
            });
            return true;
        }
        return false;
    },

    get: function(uri) {
        var key = this._getCacheKey(uri);
        if (key) {
            return this._getCache(key);
        }
        return false;
    },

    invalidate: function(uri) {
        var key = this._getCacheKey(uri);
        if (key) {
            return delete this._cache[key];
        }
        return false;
    },

    clear: function() {
        this._cache = [];
    },

    _getCacheKey: function(uri) {
        return uri;
    },

    _setCache: function(key, data) {
        this._cache[key] = data;
    },

    _getCache: function(key) {
        if (key in this._cache) {
            var data = this._cache[key];
            if (data.expires > 0 && now() <= data.time + data.expires) {
                return data.response;
            }
        }
        return false;
    },

    _cache: {}
};

var URI = function(uri) {
        this.setQueryParams({});

        if (uri) {
            // parse the url
            var result = URI._uriPattern.exec(uri);

            this.setProtocol(result[1] || undefined);
            this.setDomain(result[2] || undefined);
            this.setPort(result[3] || undefined);
            var path = result[4];
            var query = result[5];
            this.setFragment(result[6] || undefined);

            // parse the path
            this.setPath(path.charAt(0) == '/' ? path : '/' + path);

            // parse the query data
            if (query) {
                var queryData = {};
                var data;
                while ((data = URI._queryPattern.exec(query)) != null) {
                    queryData[decodeURIComponent(data[1].replace(/\+/g, ' '))] =
                        decodeURIComponent(data[2].replace(/\+/g, ' '));
                }
                this.setQueryParams(queryData);
            }
        }
    };

K.mix(URI, {
    _uriPattern: /(?:([^:\/?#]+):)?(?:\/\/([^:\/?#]*)(?::(\d*))?)?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,

    _queryPattern: /(?:^|&)([^&=]*)=?([^&]*)/g,

    _defaultQuerySerializer: function(obj) {
        var pairs = [];
        K.forEach(obj, function(val, key) {
            if (val != null) {
                pairs.push(encodeURIComponent(key) + (val ? '=' + encodeURIComponent(val) : ''));
            }
        });

        return pairs.join('&');
    }
});

K.mix(URI.prototype, {
    getProtocol: function() {
        return this._protocol;
    },

    setProtocol: function(protocol) {
        this._protocol = protocol;
        return this;
    },

    getDomain: function() {
        return this._domain;
    },

    setDomain: function(domain) {
        this._domain = domain;
        return this;
    },

    getPort: function() {
        return this._port;
    },

    setPort: function(port) {
        this._port = port;
        return this;
    },

    getPath: function(path) {
        return this._path;
    },

    setPath: function(path) {
        this._path = path;
        return this;
    },

    getQueryParams: function() {
        return this._queryParams;
    },

    addQueryParams: function(params) {
        K.mix(this.getQueryParams(), params);
        return this;
    },

    setQueryParams: function(params) {
        this._queryParams = params;
        return this;
    },

    setQueryParam: function(key, value) {
        var map = {};
        map[key] = value;
        return this.addQueryParams(map);
    },

    getFragment: function() {
        return this._fragment;
    },

    setFragment: function(fragment) {
        this._fragment = fragment;
        return this;
    },

    getQuerySerializer: function() {
        return this._querySerializer;
    },

    setQuerySerializer: function(querySerializer) {
        this._querySerializer = querySerializer;
    },

    _getQueryString: function() {
        var str = (
            this.getQuerySerializer() || URI._defaultQuerySerializer
            )(this.getQueryParams());

        return str ? '?' + str : '';
    },

    go: function() {
        var uri = this.toString();
        (uri && (window.location = uri)) || window.location.reload(true);
    }
});

// https://developer.mozilla.org/en/ECMAScript_DontEnum_attribute#JScript_DontEnum_Bug
URI.prototype.toString = function() {
    var str = '';
    if (this.getProtocol()) {
        str += this.getProtocol() + '://';
    }

    str += this.getDomain() || '';

    // If there is a domain or a protocol, we need to provide '/' for the
    // path. If we don't have either and also don't have a path, we can omit
    // it to produce a partial URI without path information which begins
    // with "?", "#", or is empty.
    str += this.getPath() || (str ? '/' : '');

    str += this._getQueryString();
    if (this.getFragment()) {
        str += '#' + this.getFragment();
    }
    return str;
};
;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
if(window.M && typeof window.M.define == 'function') {
    window.M.define('jq-mousewheel', function() {
        return jQuery;
    });
}
;
/**
 * Created by weiwei on 16-6-12.
 */

var allRules = {
    'phone' : /^1[3-9]\d{9}$/,
    'date' : /^201[6-9]\-[0-1]\d{1}\-[0-3]\d{1}$/
};

function verify_data(data,type){

    var rule = allRules[type];
    if(!rule)
        return false;
    return rule.test(data);
};
/**
 * Created by zongqi on 16/12/28.
 * 打点
 */
(function($) {
    $.fn.baoguang = function(options) {
        var defaults = {
            attr: "data-baoguang", //data-baoguang="1"
            relativeId:'data-relative-id', // 产品类的 id
            scopeId: 'data-id', // 区域 ID
            container: $(window),
            averageValue: 1000, // 平均速度
            event: '', // ['data-event']
            callback: $.noop
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        // this -- img[data-value] 节点
        $(this).each(function() {
            var value = $(this).attr(params["attr"]),relativeId =$(this).attr(params["relativeId"]) ;
            //重组
            var data = {
                obj: $(this),
                relativeId: relativeId,
                value: value
            };
            params.cache.push(data);
        });

        var callback = function(call) {
            if ($.isFunction(params.callback)) {
                params.callback.call(call.get(0));
            }
        };

        //动态显示数据
        var loading = function() {
            // params.container -- window
            var contHeight = params.container.height();
            if (params.container.get(0) === window) {
                contop = $(window).scrollTop(); // 滚动距离
            } else {
                contop = params.container.offset().top;
            }

            $.each(params.cache, function(i, data) {
                var $this = data.obj, value = data.value,relativeId = data.relativeId.trim(), post, posb;
                // todo 这里click的时候也应该进行 id的 判断
                if(params.id){
                    if (relativeId == params.id && $this.is(':visible') && !!value ) {
                        // post 距离屏幕顶端的 距离  ; posb  距离屏幕顶端的距离 + 自身的高度
                        post = $this.offset().top - contop; posb = post + $this.height();
                        if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                            //在浏览器窗口内
                            // todo 上报
                            if ($.isFunction(params.callback)) {
                                params.callback($this);
                                data.value = 0;
                            }
                        }
                    }
                }else {
                    if (!!value && $this.is(':visible')) {
                        // post 距离屏幕顶端的 距离  ; posb  距离屏幕顶端的距离 + 自身的高度
                        post = $this.offset().top - contop; posb = post + $this.height();
                        if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                            //在浏览器窗口内
                            // todo 上报
                            if ($.isFunction(params.callback)) {
                                params.callback($this);
                                data.value = 0;
                            }
                        }
                    }
                }
            });
        };
        var speedNum = 0,timer = null;
        function speed() {
            clearTimeout(timer);
            // todo 计算出滚动的速度
            // var arr = [];
            var position = $(window).scrollTop(), distance, during,
                time = (new Date()).valueOf();
            if (typeof window.lastTime == 'undefined') {
                window.lastTime = time;
                window.lastPosition = position;
                return false;
            }

            distance = Math.abs(window.lastPosition - position);
            during = time - window.lastTime;

            speedNum = Math.round(distance / (during/1000));
            // arr.push(); // 每秒的速度
            window.lastTime = time;
            window.lastPosition = position;
            if (speedNum <= 8) {
                timer = setTimeout(function () {
                    loading();
                },0)
            }else {
                timer = setTimeout(function () {
                    loading();
                },1000)
            }
        }
        //事件触发
        //加载完毕即执行
        loading();
        //滚动执行
        params.container.on("scroll", speed);
        // 点击执行
        if(params.event) {
            $(params.event).on('click',function () {
                params.id = $(this).attr(params["scopeId"]).trim();
                setTimeout(function () {
                    loading();
                },0)

            });
        }
    };
})(jQuery);
;
/**
 * google map api v3 to amap v1.1
 * author wanghui
 */
function MfwMapLoad(callback, timeout, debug){
	this.callback = callback;
	this.timeout = (typeof(timeout)=='number' && timeout>0) ? timeout : 5000;
	this.debug = debug;
	this.cb_name = '__google_map_loaded_stop_amap';
	this.timer = 0;	
	this._init();
}
MfwMapLoad.prototype._init = function(){
	var $this = this;
	window[this.cb_name] = function(){
		$this.log('google map load success');
		clearTimeout($this.timer);
		$this.callback();
	}
};
MfwMapLoad.prototype.loadGoogleMap = function(){
  if (window['offlinemap']) {
    window[this.cb_name]();
    return;
  }
  var script = document.createElement("script"),
      googleMapKey = window.Env && window.Env.GOOGLE_MAP_KEY || 'AIzaSyD-Su0x_rPy1xehlMBcMyTqWkU49Bk53nQ';
	script.type = "text/javascript";
	script.src = (location.protocol ? location.protocol : 'http:') + "//ditu.google.cn/maps/api/js?sensor=false&key="+googleMapKey+"&libraries=geometry&language=zh-CN&callback=" + this.cb_name;
	script.charset = "utf-8";
	document.body.appendChild(script);		
};
MfwMapLoad.prototype.autoLoadMap = function(){
	this.log('auto load map');
	var $this = this;
	this.timer = setTimeout(function(){
		$this.log('google map load timeout');
		$this.loadAmap.apply($this, arguments);
	}, this.timeout);
	this.loadGoogleMap();
};
MfwMapLoad.prototype.log = function(message){
	if(this.debug && window.console && window.console.log){
		window.console.log(message);
	}
};
MfwMapLoad.prototype.loadAmap = function(){
	//AMap API 1.1 不支持异步加载，只能模拟异步加载
	var script = document.createElement("script");
	var $this = this;
	script.type = "text/javascript";
	script.src = "http://api.amap.com/webapi/init?v=1.1";
	document.body.appendChild(script);
	if (document.all) { //如果是IE
		script.onreadystatechange = function () {
			if (script.readyState == 'loaded' || script.readyState == 'complete') {
				$this.google2amap(window);
				$this.log('load amap success');
				$this.callback();
			}
		}
	} else {
		script.onload = function () {
			$this.google2amap(window);
			$this.log('load amap success');
			$this.callback();
		}
	}
};
MfwMapLoad.prototype.google2amap = function(_G,CFG){
	if(_G.___G2A___)return;
	CFG = CFG || {silence:true};
	var _ = function(o){return o._impl ? o._impl : o;};
	var INTERNAL = function(x)	{return "_"+x+"_";};
	//globals	
	var DEBUG = false,EMPTY_FN = function(){};
	_gprivate = {maps:[],activeMap:null,version:0.1};
	_G.___G2A___ = _gprivate;
	_G.google = {};
	_G.google.maps = function(){};
	google.maps.MapTypeId = {};
	google.maps.MapTypeId.ROADMAP = '';
	google.maps.Animation = {};
	google.maps.Animation.BOUNCE = '';
	//properties updating
	_gprivate.objs = [];
	_gprivate.updateProperties = function(){
		for(var i = 0;i<_gprivate.objs.length;++i){
			_gprivate.objs[i]();
		}
	};
	
	function _registerUpdater(callback){
		if(callback && typeof(callback)==="function"){
			_gprivate.objs.push(callback);
		}
	}

	function log(message){
		if(DEBUG && _G.console && _G.console.log){
			_G.console.log(message);
		}
	}
	var _$ = DEBUG ? log : EMPTY_FN;

	function Const(name,v,scope){
		(scope || _G)[name] = v;
	}
	
	function Klass(name,fn,father,inherit){
		if(father && father.length>0){
			if(father.splice){
				father = father[0];
			}
			//base class of current class
			Klass.f = father;
		}
		if(typeof(fn)=="function"){
			var fun = fn.toString();
			//exports to global namespace
			_G.google.maps[name] = fn;
			//current defining class
			Klass.c = eval('_G.google.maps.'+name);
		}else{
			_G.google.maps[name] = fn;
			Klass.c = fn;
		}

		//name of current class
		Klass.c.__name__ = name;
		if(inherit){
			Klass.c.prototype = new Klass.f();
		}		
		_$("<class name='"+name+"'>");		
		return Klass;
	}

	function Typedef(name,type,scope){
		var t = (scope || _G.google.maps)[name] = type;
		return t;
	}
	
	/**
	 * add a empty method
	 */
	Klass.dummy = function(){
		for(var i = 0; i < arguments.length; ++i){
			var f = arguments[i];
			_$("  <method type='dummy' name='"+f+"' />");
			Klass.c.prototype[f] = EMPTY_FN;
		}
		return Klass;
	};
	

	Klass.same = function(){
		for(var i = 0; i < arguments.length; ++i){
			var f = arguments[i];
			_$("  <method type='same' name='"+f+"' />");
			(function(f){
				Klass.c.prototype[f] = function(){
					return this._impl[f].apply(this._impl,arguments);				
				};
			})(f);
		}
		return Klass;
	};
	
	Klass.alias = function(a,b){
		Klass.c.prototype[a] = Klass.c.prototype[b];
		return Klass;
	};
	
	Klass.reimpl = function(name,fn){
		_$("  <method type='reimp' name='"+name+"' />");
		if(Klass.c.prototype[name]){
			Klass.c.prototype[INTERNAL(name)] = Klass.c.prototype[name];
		}
		Klass.c.prototype[name] = fn;
		return Klass;
	};
	
	Klass.impl = function(name,fn){
		_$("  <method type='impl' name='"+name+"' />");
		Klass.c.prototype[name] = fn;
		return Klass;
	};
	Klass.override = Klass.impl;
	
	Klass.noimpl = function(){		
		for(var i = 0;i<arguments.length; ++i){
			var f = arguments[i];
			if(Klass.c.prototype[f]){
				log("! "+f+" has already been defined !");
				continue;
			}
			_$("  <method type='noimpl' name='"+f+"' />");
			(function(f){				
				Klass.c.prototype[f] = function(){
					if(!CFG.silence)
						throw Error(f+" is not implemented!");
				};
			})(f);
		}
		return Klass;
	};
	
	Klass.statik = function(name,v){
		_$("  <method type='static' name='"+name+"' />");
		if(Klass.c[name]){
			Klass.c[INTERNAL(name)] = Klass.c[name];
		}
		Klass.c[name] = v;
		return Klass;
	};

	Klass.end = function(){
		_$("</class>");
	};
	
	GLog = {write:log,writeUrl:log,writeHtml:log};

	/**
	 * GLatLng
	 */	
	Klass("LatLng",function(lat,lng){
		if(typeof(lng)==="string"){
			lng = parseFloat(lng);
		}
		if(typeof(lat)==="string"){
			lat = parseFloat(lat);
		}
		this._impl = new AMap.LngLat(lng, lat);
	},[
		AMap.LngLat
	])
	.impl("lat",function(){
		return this._impl.lat;
	})
	.impl("lng",function(){
		return this._impl.lng;
	})
	.same("toString")
	.end();

	/**
	 * Map
	 */
	Klass("Map",function(e,opt){
		_formatMapOpt(opt);
		//console.log(opt);
		this._impl = new AMap.Map(e, opt);
		(function(amap){
		amap.plugin(["AMap.ToolBar"], function(){
				tool = new AMap.ToolBar({
				direction : false,//隐藏方向导航
				ruler : true
				});
				amap.addControl(tool);
			});
		})(this._impl);
		_gprivate.maps.push(this);
		_gprivate.activeMap = this;
	},[
		AMap.Map
	])
	.impl("setCenter",function(latlng){
		latlng = latlng._impl;
		this._impl.setCenter(latlng);
	})
	.end();

	function _formatMapOpt(opt){
		if(opt.center){
			opt.center = opt.center._impl;
		}
		if(opt.mapTypeId){
			delete opt.mapTypeId;
		}
		if(opt.zoom){
			opt.level = opt.zoom;
			delete opt.zoom;
		}
		if(opt.minZoom){
			var minZoom = opt.minZoom>=3 ? opt.minZoom : 3;
			delete opt.minZoom;
		} else {
			var minZoom = 3;	
		}
		if(opt.maxZoom){
			var maxZoom = opt.maxZoom<=18 ? opt.maxZoom : 18;
			delete opt.maxZoom;
		} else {
			var maxZoom = 18;	
		}
		/*
		if(opt.scaleControl==undefined){
			
		}*/
		opt.zooms = [minZoom, maxZoom];
	}

	/**
	 * Marker
	 */
	Klass("Marker",function(opt){
		_formatMarkerOpt(opt);
		this._impl = new AMap.Marker(opt);
	},[
		AMap.Marker
	])
	.impl("setMap",function(map){
		if(map){
			map._impl.addOverlays(this._impl);
		} else {
			_gprivate.activeMap._impl.removeOverlays(this._impl.id);
		}
	})
	.same('getPosition')
	.noimpl('setAnimation')
	.end();
	
	function _formatMarkerOpt(opt){
		if(opt.position){
			opt.position = opt.position._impl;
		}
		if(opt.title){
			//opt.content = opt.title;
			delete opt.title;
		}
		if(typeof(opt.icon)=='object'){
			opt.icon = opt.icon._impl;
		} else if(opt.icon==undefined){
			opt.icon = 'http://api.amap.com/webapi/static/Images/marker_sprite.png';	
		}
		opt.offset = new AMap.Pixel(-16,-32);
	}
	
	/**
	 * MarkerImage
	 */
	Klass("MarkerImage",function(url, size, origin, anchor, scaledSize){
		var opt = {
			size : new AMap.Size(32,34),
			imageOffset : new AMap.Pixel(0,0),
			image : url
		}
		this._impl = new AMap.Icon(opt);
	},[
		AMap.MarkerImage
	])
	.end();

	/**
	 * InfoWindow 
	 */
	Klass("InfoWindow",function(opt){
		opt.autoMove = true;
		this._impl = new AMap.InfoWindow(opt);
	},[
		AMap.Pixel
	])
	.impl('getPosition', function(){
		var pos = this._impl.getPosition();
		return new google.maps.LatLng(pos.lat, pos.lng);
	 })
	.impl('open', function(map, marker){
		this._impl.open(map._impl, marker._impl.getPosition());
	 })
	.impl('close', function(){
		if(this._impl.getIsOpen()){
			this._impl.close();
		}
	 })
	.end();	
	
	/**
	 * event 
	 */
	Klass("event",function(opt){
		this._impl = _gprivate.activeMap._impl;
	},[
		AMap.Map
	])
	.statik("addListener",function(obj, e, fn){
		_gprivate.activeMap._impl.bind(obj._impl, e, fn);
	})
	.end();	
	
	/**
	 * Size
	 */
	Klass("Size",function(w, h){
		this._impl = new AMap.Size(w, h);
	},[
		AMap.Size
	])
	.end();
	
	/**
	 * Point
	 */
	Klass("Point",function(x, y){
		this._impl = new AMap.Pixel(x, y);
	},[
		AMap.Pixel
	])
	.end();	

	/**
	 * KmlLayer
	 */
	Klass("KmlLayer",function(file, opt){
	},[])
	.noimpl("setMap")
	.end();
};

if(window.M && typeof window.M.define == 'function') {
    window.M.define('/js/google2amap', function() {
        return MfwMapLoad;
    });
}
;
function get_connect_share_js(share_type,title,content,url,pic) {
	var str = '';
	if(share_type == 'sina') {
        if('object' === typeof content) {
            content = content['sina'];
        }
		if(content!='')
		    title = content.substr(0,140);
		var pop_url = "http://service.weibo.com/share/share.php?appkey=82015185&title="+encodeURIComponent(title)+"&pic="+encodeURIComponent(pic)+"&url="+encodeURIComponent(url)+"&ralateUid=1730714982";
		str = "window.open('"+pop_url+"','_blank','scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes');"
	} else if(share_type == 'renren' || share_type == 'xiaonei') {
        if('object' === typeof title) {
            title = title['renren'];
        }
        if('object' === typeof content) {
            content = content['renren'];
        }
		var rrShareParam = {
			resourceUrl : url,
			pic : pic,
			title : title,
			description : content	
		};
		shareClick(rrShareParam);
	} else if(share_type == 'qzone' || share_type == 'qq') {
        if('object' === typeof title) {
            title = title['qq'];
        }
        if('object' === typeof content) {
            content = content['qq'];
        }
		str = "window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title="+encodeURIComponent(title)+"&summary="+encodeURIComponent(content)+"&pics="+encodeURIComponent(pic)+"&site="+encodeURIComponent("马蜂窝")+"&url="+encodeURIComponent(url)+"','_blank','scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');"
	} else {
		return false;
    }
	return str;
}
function shareClick(rrShareParam) {
	rrShareOnclick(rrShareParam);
}
;
/**
 * Created with JetBrains PhpStorm.
 * User: Eric
 * Date: 13-3-29
 * Time: 上午10:39
 * To change this template use File | Settings | File Templates.
 */
// DOM 无关事件
var o = $({});
$.subscribe = function() {
    o.bind.apply( o, arguments );
};
$.unsubscribe = function() {
    o.unbind.apply( o, arguments );
};
$.publish = function() {
    o.trigger.apply( o, arguments );
};

var cookieHandler = {
    key: '_YWF_BROWSE_HIST_',
    get: function(){
        var cookieStr = $.cookie(cookieHandler.key),
            cookieArr;
        if(cookieStr) {
            cookieArr = eval('('+ cookieStr +')');
            return cookieArr;
        }
        return false;
    },
    set: function(id, title){
        var cArr = cookieHandler.get()||[], di= -1, cJson = '';
        for(var i=0; i<cArr.length; i++){
            var item = cArr[i];
            if( id == item.id ){
                di = i;
                break;
            }
        }
        if(cArr.length > 0){
            if(di >= 0){
                Array.prototype.splice.call(cArr, di, 1);
            }else if(cArr.length == 3){
                Array.prototype.shift.call(cArr);
            }
        }
        Array.prototype.push.call(cArr, {id: id, title: title});
        
        for(var j=0; j<cArr.length; j++){
            var item = cArr[j];
            cArr[j] = '{"id":"'+ item['id'] +'","title":"'+ item['title'] +'"}';
        }
        cJson = '['+ cArr.join(',') +']';
        $.cookie(cookieHandler.key, cJson);
    },
    assemble: function(){
        var cArr = cookieHandler.get(), html = '';
        for(var i=0; i<cArr.length; i++ ){
            var subTitle = cArr[i]['title'].length > 12? cArr[i]['title'].substr(0,12)+'...': cArr[i]['title'];
            html += '<li><a title="'+ cArr[i]['title'] +'" target="_blank" href="/sales/'+ cArr[i]['id'] +'.html">'+ subTitle +'</a></li>';
        }
        return html;
    },
    clear: function(){
        $.cookie(cookieHandler.key, null);
    }
}

function share_weibo( title, content, pic, url ){
    var pop_url = "http://service.weibo.com/share/share.php?title="+encodeURIComponent(title)+"&pic="+encodeURIComponent(pic)+"&url="+encodeURIComponent(url)+"&ralateUid=3120321513&rnd=1393998152805";
    window.open(pop_url,'_blank','scrollbars=no,width=600,height=480,left=75,top=20,status=no,resizable=yes');
}


var Timer = function( dom, target ){
    this.dom = dom;
    this.target = target;
}

Timer.fn = Timer.prototype;
Timer.fn.zero = function(n){
    var n = parseInt(n, 10);
    if(n > 0){
        if(n <= 9){
            n = "0" + n;
        }
        return String(n);
    }else{
        return "00";
    }
};
Timer.fn.start = function( timestamp ){
    var beforeSend = (new Date()).getTime();
    var self = this;
    $.getJSON('/sales/ajax.php', {act:'GetTime'}, function(data){
        if(data.ret == 1){
            var afterSend = (new Date()).getTime();
            var serverTime = parseInt(data.msg) + Math.floor(afterSend - beforeSend);
            var timeGap = afterSend - serverTime;
            self.target = self.target + timeGap;
            setInterval(function(){
                var pms = self.caculate.call( self );
                $.publish('change-time', pms);
            }, 1000);
        }
    });
    
    
}

Timer.fn.caculate = function (){
    var now = new Date(), dur = Math.round((this.target - now.getTime()) / 1000);
    var pms = {sec: "00", mini: "00", hour: "00", day: "00"};
    if(dur > 0){
        pms.sec = this.zero(dur % 60);
        pms.mini = Math.floor((dur / 60)) > 0? this.zero(Math.floor((dur / 60)) % 60) : "00";
        var hour = this.dom['day'] == "plus" ? Math.floor((dur / 3600)) : Math.floor((dur / 3600)) %24;
        pms.hour = Math.floor((dur / 3600)) > 0? this.zero(hour) : "00";
        pms.day = Math.floor((dur / 86400)) > 0? this.zero(Math.floor((dur / 86400)) % 30) : "00";
        
    }
    for( var i in pms ){
        var dom = $( this.dom[ i ] );
        dom.text( pms[ i ] );
    }
    return pms;
}

var YWFCollect = function(){
    
}
YWFCollect.fn = YWFCollect.prototype;
YWFCollect.fn.collect = function( id, func){
    if(window.__mfw_uid === 0){
        show_login(); return;
    }
    var data = {act:'AddCollect', sales_id: id};
    $.post('/sales/ajax.php', data, function(data){
        if(func){
            func();
        }
    }, 'json')
}
var cc = new YWFCollect();



$(function(){
    $('.extra-side>li>.es-icon').hover(function(){
        $(this).siblings('.es-txt').fadeIn();
        
    }, function(){
        var self = $(this);
        window.shareTimer = setTimeout(function(){
            self.siblings('.es-txt').fadeOut();
        }, 300); 
        
    }).closest('.extra-side').find('.es-backTop>.es-icon').bind('click',function(){
        $(window).scrollTop(0);
    });
    $('body').delegate('.extra-side>li>.es-txt', 'mouseenter', function(){
        clearTimeout(window.shareTimer);
    });
    $('body').delegate('.extra-side>li>.es-txt', 'mouseleave', function(){
         $(this).fadeOut();
    });
    
    $('.FeedBackBtn').hide();



    // 抢购小帮手
    $('#btn_helper').bind('click', function(){
        if (parseInt($(this).data('state')) > 0){
            $('#helper_info_tips, #popup_layer').fadeIn();
        } else {
            $('#helper_info, #popup_layer').fadeIn();
        }
    });
    $('.close-btn').bind('click', function(){
        $('#helper_info,#helper_info_tips, #popup_layer').fadeOut();
        $('#helper_form input:text').each(function(){
            $(this).placeholder({ holderContent: $(this).data('ph'), holderColor:'#999999'});
        })
        $('#ipt_phone').data('valid', 0);
        $('#tip_sending, #ipt_valid, #tip_success,#btn_prebook_success').hide();
        $('#btn_valid_phone,#btn_prebook').show();
    });

    // 预订按钮

    $('body').delegate('#submit_helper', 'click', function(){
        if(window.__mfw_uid === 0){ show_login();return; }
        var self = $(this), name = $('#ipt_name'), email = $('#ipt_email_1'), phone = $('#ipt_phone');
        var mail_reg = new RegExp('^([A-Z0-9a-z_-])+@([a-z0-9A-Z_-])+((\\.([a-zA-Z])+){1,2})$');
        var data = { };
        if(self.data('lock')) return;
        if( $.trim(name.val()).length == 0 || name.val() == name.data('ph') ){
            mTinyAlert('请输入正确的姓名！');return;
        }
        if( $.trim(email.val()).length == 0 || email.val() == email.data('ph') || !mail_reg.test($.trim(email.val())) ){
            mTinyAlert('请输入正确的邮箱！');return;
        }
        if( $.trim(phone.val()).length == 0 || phone.val() == phone.data('ph') ){
            mTinyAlert('请输入正确的手机号！');return;
        }
        if( phone.data('valid') != 2 ){
            mTinyAlert('请验证您的手机号！');return;
        }

        data.act = 'AddSalesUser';
        data.order_name = $.trim(name.val());
        data.order_phone = $.trim(phone.val());
        data.order_email = $.trim(email.val());
        self.data('lock', true);
        $.post('/sales/ajax.php', data, function(json){
            if(json.ret == 1){
                self.hide(); $('#btn_prebook_success').show();
                setTimeout(function(){
                    $('.close-btn').trigger('click');
                    $('#btn_helper').data('state', 1);
                    $('#helper_info').remove();
                }, 1000);
            }
            mTinyAlert(json.msg);
        }, 'json');

    });

    $('body').delegate('#btn_valid_phone', 'click', function(){
        if(window.__mfw_uid === 0){ show_login();return; }
        var self = $(this), phone = $('#ipt_phone'), valid = phone.data('valid'),
            code = $('#ipt_valid'), sending = $('#tip_sending'), success = $('#tip_success'),
            data = { };
        if( $.trim(phone.val()).length != 11 || isNaN($.trim(phone.val())) ){
            mTinyAlert('请输入正确的手机号'); return;
        }
        if( !valid ){ // 尚未发送短信

            data.act = 'SendMobileCode';
            data.order_phone = $.trim(phone.val());

            $.post('/sales/ajax.php', data, function(json){

                if(json.ret == 1){
                    phone.data('valid', 1);
                    code.show();
                    sending.show();
                }else{
                    mTinyAlert(json.msg);
                }
            }, 'json');

        }else if(valid == 1){  // 短信已经发出

            if( !$.trim(code.val()).length ){
                mTinyAlert('请输入验证码'); return;
            }

            data.act = 'VerifyMobileCode';
            data.order_phone = $.trim(phone.val());
            data.order_code = $.trim(code.val());

            $.post('/sales/ajax.php', data, function(json){
                if(json.ret == 1){
                    code.hide();
                    sending.hide();
                    self.hide();
                    phone.data('valid', 2);
                    success.show();
                }else{
                    mTinyAlert(json.msg);
                }
            }, 'json');

        }else{
            return;
        }


    });

    $('body').delegate('#ipt_phone', 'change', function(){
        var self = $(this), orignal = self.data('orignal');
        $('#tip_sending,#tip_success').hide();
        if(self.val() == orignal){
            self.data('valid', 2); $('#btn_valid_phone').hide();
        }else{
            self.data('valid', 0); $('#btn_valid_phone').show();
        }
    });

    $('#helper_form input:text').each(function(){
        $(this).placeholder({ holderContent: $(this).data('ph'), holderColor:'#999999'});
    });
    
    $('body').delegate('[data-ywfstat]', 'click', function(){
        var statKey = $(this).data('ywfstat'), total = $(this).data('total');
        if(!statKey) return;
        $.get('/ajax/ajax_op_log_api.php?type=yiwofeng&mk='+encodeURIComponent('V7_'+ statKey));
        if(total){
            $.get('/ajax/ajax_op_log_api.php?type=yiwofeng&mk='+encodeURIComponent('V7_'+ total +'总数'));
        }
    });
    
    /* 
    $(window).bind('scroll', function(){
        var top = $(window).scrollTop();
        if(top > 400 && $('.m-gotopbtn').is(':hidden')){
            $('.m-gotopbtn').fadeIn();
        }
        if(top < 400 && $('.m-gotopbtn').is(':visible')){
            $('.m-gotopbtn').fadeOut();
        }
    })
    
    $('#btn_gototop').bind('click', function(){
        $('html, body').animate({ scrollTop : 0}, 500); 
    });
    */
    
    $('#btn_share_wx').bind('click', function(){
         $('#popup_container2').show();
    });
    
    $('.close-btn').bind('click', function(){
        $('.popup-box').hide(); 
    });
      
    
    
});
;
/**
 * Created by mafengwo on 15/12/30.
 */


(function(global) {

    //var events = ['open', 'close', 'hide', 'active', 'click', 'scroll'];

    // 防止重复调用
    if(global.hasSalesTrackLog) {
        return false;
    }

    // register now in Date
    if (!Date.now) {
        Date.now = function() { return new Date().getTime(); }
    }

    var totalStart = Date.now(), activeStart = Date.now(), activeDuring = 0, activeHist = 0, activeFlag = false;

    var hidden = "hidden", scrollDelay = 0;

    // Standards:
    if (hidden in document) {
        document.addEventListener("visibilitychange", pageVisibilityChange);
        // Mozilla
    } else if ((hidden = "mozHidden") in document) {
        document.addEventListener("mozvisibilitychange", pageVisibilityChange);
        // Webkit
    } else if ((hidden = "webkitHidden") in document) {
        document.addEventListener("webkitvisibilitychange", pageVisibilityChange);
        // IE
    } else if ((hidden = "msHidden") in document) {
        document.addEventListener("msvisibilitychange", pageVisibilityChange);
        // IE 9 and lower:
    } else if ("onfocusin" in document) {
        document.onfocusin = document.onfocusout = pageVisibilityChange;
        // Other
    } else {
        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = pageVisibilityChange;
    }

    function pageVisibilityChange (evt) {
        var v = "active", h = "hide",
            evtMap = {
                focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
            }, status;

        evt = evt || window.event;
        if (evt.type in evtMap) {
            status = evtMap[evt.type];
        } else {
            status = this[hidden] ? "hide" : "active";
        }
        postEvent(status);
    }

    // set the initial state (but only if browser supports the Page Visibility API)
    if( document[hidden] !== undefined )
        pageVisibilityChange({type: document[hidden] ? "blur" : "focus"});


    $(window).on('beforeunload', function() {
        postEvent('close');
    }).on('scroll', function() {
        clearTimeout(scrollDelay);
        scrollDelay = setTimeout(function() {
            postEvent('scroll');
        }, 500);
    });

    $('html').on('click', function() {
        postEvent('click');
    });


    function postEvent(eventName) {

        // var totalDuring = _getDuringTime(totalStart);
        // var pageId = typeof window.Env && typeof window.Env.uPageId ?  window.Env.uPageId : '';
        //
        // if(activeFlag) {
        //     activeDuring =  activeHist + _getDuringTime(activeStart);
        // }
        // if(eventName == 'hide' || eventName == 'close') {
        //     activeFlag = false;
        //     activeHist = activeDuring;
        // }
        // if(eventName == 'active' || eventName == 'open') {
        //     activeFlag = true;
        //     activeStart = Date.now();
        // }
        //
        // var img = $('<img>');
        // img.attr('src', 'https://tongji.mafengwo.cn/sales/track_log.gif?eventName='
        //     + eventName + '&totalDuring='+ totalDuring + '&activeDuring=' + activeDuring + '&pageId=' + pageId);
    }

    function _getDuringTime(beginTime) {

        return Math.floor((Date.now() - beginTime) / 1000);
    }

    postEvent('open');


    global.hasSalesTrackLog = true;


})(window);;
