(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"3bae":function(t,e,o){"use strict";o.r(e);var n=o("bc60"),i=o("457c");for(var c in i)"default"!==c&&function(t){o.d(e,t,(function(){return i[t]}))}(c);o("3dfc");var a,s=o("f0c5"),f=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"1cde8edc",null,!1,n["a"],a);e["default"]=f.exports},"3dfc":function(t,e,o){"use strict";var n=o("8e5a"),i=o.n(n);i.a},"457c":function(t,e,o){"use strict";o.r(e);var n=o("63e7"),i=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"5fde":function(t,e,o){"use strict";(function(t){o("7c16");n(o("66fd"));var e=n(o("3bae"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"63e7":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("f538"),i={data:function(){return{mobile:{phone:"",code:""},safety:{time:60,state:!1,interval:""},loginMobile:!1,phoneReg:/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,footInfo:{}}},onLoad:function(){this.getFootConfig()},watch:{mobile:{handler:function(t){this.phoneReg.test(t.phone)&&6===t.code.length?this.loginMobile=!0:this.loginMobile=!1},deep:!0}},methods:{fnLogin:function(){var e=this;t.showLoading({title:"登陆中...",mask:!0}),this.$http.postMobilelogin({mobile:this.mobile.phone,captcha:this.mobile.code},(function(o){1==o.code?(e.$db.set("userinfo",o.data.userinfo),t.hideLoading(),t.showToast({icon:"success",title:"登录成功"}),setTimeout((function(){t.navigateTo({url:"/pages/home/home"})}),500)):e.$common.errorToShow(o.msg)}))},getPhoneNumber:function(e){var o=this;t.showLoading({title:"获取中...",mask:!0});var i=e.detail,c=i.errMsg,a=i.iv,s=i.encryptedData,f=t.getStorageSync("confirm_unionid")||"";"getPhoneNumber:ok"==c?(t.hideLoading(),n.checkSession().then((function(e){var n={code:e,iv:a,encryptedData:s,confirm_unionid:f};o.$http.getMobile(n,(function(e){1==e.code&&(t.showToast({title:"授权成功！"}),o.mobile.phone=e.data.mobile,t.hideToast())})).catch((function(t){console.log(t)}))})).catch(console.log)):t.showToast({title:"手机号授权失败！",icon:"none"})},fnGetPhoneCode:function(){var e=this;this.phoneReg.test(this.mobile.phone)?t.showToast({title:"正在发送验证码",icon:"loading",success:function(){e.safety.state=!0,e.safety.interval=setInterval((function(){e.safety.time--<=0&&(e.safety.time=60,e.safety.state=!1,clearInterval(e.safety.interval))}),1e3),e.$http.postSendCode({mobile:e.mobile.phone},(function(o){1==o.code?t.showToast({title:"发送成功",icon:"success"}):e.$common.errorToShow(o.msg)}))}}):t.showToast({title:"手机号不正确",icon:"none"})},getFootConfig:function(){var t=this;this.$http.getFootConfig({},(function(e){1==e.code?t.footInfo=e.data:t.$common.errorToShow(e.msg)}))}}};e.default=i}).call(this,o("543d")["default"])},"8e5a":function(t,e,o){},bc60:function(t,e,o){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){!t.safety.state&&t.fnGetPhoneCode()})},c=[];o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){return n}))}},[["5fde","common/runtime","common/vendor"]]]);