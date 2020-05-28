(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/foot"],{"0e8f":function(t,o,e){"use strict";var n=e("c726"),a=e.n(n);a.a},1345:function(t,o,e){"use strict";e.r(o);var n=e("c7cd"),a=e("7952");for(var f in a)"default"!==f&&function(t){e.d(o,t,(function(){return a[t]}))}(f);e("0e8f");var u,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);o["default"]=r.exports},7952:function(t,o,e){"use strict";e.r(o);var n=e("8564"),a=e.n(n);for(var f in n)"default"!==f&&function(t){e.d(o,t,(function(){return n[t]}))}(f);o["default"]=a.a},8564:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={name:"foot",props:{btm:{type:Boolean,default:!0},color:{type:Boolean,default:!1},position:{type:Boolean,default:!1},show:{type:Boolean,default:!1},hide:{type:Boolean,default:!1},tip:{type:Boolean,default:!1},lately:{type:Boolean,default:!1}},data:function(){return{codeList:[],footInfo:{}}},created:function(){this.getFootInfo(),this.getFootConfig()},methods:{getFootInfo:function(){var t=this;this.$http.getFootInfo({},(function(o){1==o.code?t.codeList=o.data.reverse():t.$common.errorToShow(o.msg)}))},getFootConfig:function(){var t=this;this.$http.getFootConfig({},(function(o){1==o.code?t.footInfo=o.data:t.$common.errorToShow(o.msg)}))}}};o.default=n},c726:function(t,o,e){},c7cd:function(t,o,e){"use strict";var n,a=function(){var t=this,o=t.$createElement;t._self._c},f=[];e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return f})),e.d(o,"a",(function(){return n}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/component/foot-create-component',
    {
        'pages/component/foot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1345"))
        })
    },
    [['pages/component/foot-create-component']]
]);
