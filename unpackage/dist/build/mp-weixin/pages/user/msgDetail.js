(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/msgDetail"],{"05d0":function(t,n,e){"use strict";var o,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}))},"0a33":function(t,n,e){"use strict";e.r(n);var o=e("05d0"),u=e("fd28");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("927b");var r,a=e("f0c5"),i=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,"d7b58224",null,!1,o["a"],r);n["default"]=i.exports},7719:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("pages/component/foot").then(function(){return resolve(e("9e06"))}.bind(null,e)).catch(e.oe)},u={components:{foot:o},data:function(){return{msg:""}},onLoad:function(t){this.getReplyContent(t.id)},methods:{getReplyContent:function(t){var n=this;this.$http.getReplyContent({id:t},(function(t){1==t.code?n.msg=t.data.contents:n.$common.errorToShow(t.msg)}))}}};n.default=u},"927b":function(t,n,e){"use strict";var o=e("eb16"),u=e.n(o);u.a},d683:function(t,n,e){"use strict";(function(t){e("4475");o(e("66fd"));var n=o(e("0a33"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},eb16:function(t,n,e){},fd28:function(t,n,e){"use strict";e.r(n);var o=e("7719"),u=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=u.a}},[["d683","common/runtime","common/vendor"]]]);