(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/foot"],{"12ad":function(t,o,e){"use strict";e.r(o);var n=e("48f3"),f=e("3cbd");for(var a in f)"default"!==a&&function(t){e.d(o,t,(function(){return f[t]}))}(a);e("f28d");var u,r=e("f0c5"),c=Object(r["a"])(f["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);o["default"]=c.exports},"3cbd":function(t,o,e){"use strict";e.r(o);var n=e("71e3"),f=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);o["default"]=f.a},"48f3":function(t,o,e){"use strict";var n,f=function(){var t=this,o=t.$createElement;t._self._c},a=[];e.d(o,"b",(function(){return f})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return n}))},"568f":function(t,o,e){},"71e3":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={name:"foot",props:{btm:{type:Boolean,default:!0},color:{type:Boolean,default:!1},position:{type:Boolean,default:!1},show:{type:Boolean,default:!1},hide:{type:Boolean,default:!1},tip:{type:Boolean,default:!1},lately:{type:Boolean,default:!1}},data:function(){return{codeList:[],footInfo:{}}},created:function(){this.getFootInfo(),this.getFootConfig()},methods:{getFootInfo:function(){var t=this;this.$http.getFootInfo({},(function(o){1==o.code?t.codeList=o.data.reverse():t.$common.errorToShow(o.msg)}))},getFootConfig:function(){var t=this;this.$http.getFootConfig({},(function(o){1==o.code?t.footInfo=o.data:t.$common.errorToShow(o.msg)}))}}};o.default=n},f28d:function(t,o,e){"use strict";var n=e("568f"),f=e.n(n);f.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/component/foot-create-component',
    {
        'pages/component/foot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("12ad"))
        })
    },
    [['pages/component/foot-create-component']]
]);
