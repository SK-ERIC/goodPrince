(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/latelyShop"],{"0f56":function(t,e,n){"use strict";n.r(e);var o=n("d839"),a=n("2433");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("bf20");var u,l=n("f0c5"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"602adf2b",null,!1,o["a"],u);e["default"]=c.exports},1790:function(t,e,n){},2433:function(t,e,n){"use strict";n.r(e);var o=n("5f4d"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"28df":function(t,e,n){"use strict";(function(t){n("a3dd");o(n("66fd"));var e=o(n("0f56"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"5f4d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("1761"));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("pages/component/foot").then(function(){return resolve(n("12ad"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("pages/component/latelyShopList").then(function(){return resolve(n("2b1f"))}.bind(null,n)).catch(n.oe)},l={mixins:[o.default],components:{foot:i,latelyShopList:u},data:function(){return{total:"",latelyList:[],pageIndex:1,pageSize:10,user_id:"",upOption:{page:{num:0,size:10,time:null},textColor:"gray",textLoading:"加载中 ...",textNoMore:"-- END --",empty:{use:!1}}}},onLoad:function(e){e.total&&(this.total=e.total),this.user_id=this.$db.get("userinfo").user_id,t.setNavigationBarTitle({title:"我去过的店(".concat(this.total,")")})},methods:{_switchShopHome:function(e){t.navigateTo({url:"/pages/home/home?id=".concat(e.shop_id)})},navBack:function(){t.navigateBack({delta:1})},postBeenShop:function(){var t=this;this.$http.postBeenShop({user_id:this.user_id,page:this.pageIndex,page_size:this.pageSize},(function(e){t.mescroll.endSuccess(),1==e.code?(t.mescroll.endBySize(t.latelyList.length,t.total),1==t.pageIndex&&(t.latelyList=[]),t.latelyList=t.latelyList.concat(e.data)):t.$common.errorToShow(e.msg)}))},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(t){this.pageIndex=t.num,this.pageSize=t.size,this.postBeenShop()}}};e.default=l}).call(this,n("543d")["default"])},bf20:function(t,e,n){"use strict";var o=n("1790"),a=n.n(o);a.a},d839:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))}},[["28df","common/runtime","common/vendor"]]]);