<template>
	<view :style="showPage ? 'opacity: 1;' : 'opacity: 0;' ">
		<scroll-view scroll-y="true" class="app-container" :style="'height:'+containerHeight+'px'">
			<view v-if="page =='shop'" :class="page=='shop'?'animation-fade':''">
				<cu-shop :shopIndex="shopInfo" @changeLike="_changeLike" @changeFullText="_changeFullText"></cu-shop>
			</view>
			<view v-if="page =='user'" :class="page=='user'?'animation-fade':''">
				<cu-user @click="handleClick"></cu-user>
			</view>
		</scroll-view>
		<!-- pop -->
		<uni-popup ref="pop">
			<view class="pop-section">
				<view class="title text-center">
					温馨提示
				</view>
				<view class="cont text-center">
					{{ popCont }}
				</view>
				<view class="cu-btn btn" @click="confirmPop">
					知道了
				</view>
			</view>
		</uni-popup>
		<view id="tabbar" class="cu-bar tabbar">
			<view class="action tabbar-icon" v-for="(item,index) in tabbar" :key="index"
			 @tap="changeTab(item)">
				<view>
					<image :class="page==item.page?'animation-scale-up':''" v-if="page==item.page" :src="item.selectedIconPath" mode=""></image>
					<image v-else :src="item.iconPath" mode=""></image>
				</view>
				<text :class="{'acitvieColor': page==item.page}">
					{{item.title}}
				</text>
			</view>
		</view>
		<!-- 预加载所有tabbar 图标，以防点击的时候 闪一下 此处隐藏显示 -->
		<view v-for="(item,index) in tabbar" :key="index" style="display: none;">
			<image :src="item.iconPath" mode=""></image>
			<image :src="item.selectedIconPath" mode=""></image>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	let _this;
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				page: "shop",
				showPage: false,
				containerHeight: 400,
				tabbar: [{
						"iconPath": "http://qakj5dvcb.bkt.clouddn.com/static/tabIcon_shop.png",
						"selectedIconPath": "http://qakj5dvcb.bkt.clouddn.com/static/tabIcon_shop_sel.png",
						"title": "首页",
						"page": "shop"
					},
					{
						"iconPath": "http://qakj5dvcb.bkt.clouddn.com/static/tabIcon_photo.png",
						"selectedIconPath": "http://qakj5dvcb.bkt.clouddn.com/static/tabIcon_photo.png",
						"title": "",
						"page": "",
					},
					{
						"iconPath": "http://qakj5dvcb.bkt.clouddn.com/static/tabIcon_user.png",
						"selectedIconPath": "http://qakj5dvcb.bkt.clouddn.com/static/tabIcon_user_sel.png",
						"title": "我的",
						"page": "user"
					}
				],
				showLoading: false,
				shopInfo: {},
				popCont: "您今天对此条留言的点赞次数已达上限"
			}
		},
		onLoad(options) {
			if (options.page) this.page = options.page; 
			console.log("options", options)
			this.init_page_size();
			this.getShopIndex();
		},
		methods: {
			_changeLike(val) {
				console.log("val", val);
				const {item, bl, index} = val;
				let num = parseInt(this.shopInfo.comments.list[index].like_num);
				if (bl) {
					this.shopInfo.comments.list[index].like = bl;
					this.shopInfo.comments.list[index].like_num = num + 1;
					this.$http.postSaveZan({
						cid: item.id,
						uid: item.uid
					},res=>{
						console.log("res", res)
					})
				} else {
					// if (num > 0) {
					// 	this.shopInfo.comments.list[index].like_num = num - 1;
					// }
					this.$refs.pop.open()
				}
			},
			_changeFullText(val) {
				const {e} = val;
				const index = e.currentTarget.dataset.index;
				const str = e.currentTarget.dataset.text;
				this.shopInfo.comments.list[index].full_text = str == "全文" ? "收起全文" : "全文";
			},
			confirmPop() {
				this.$refs.pop.close()
			},
			// 店铺信息
			getShopIndex() {
				this.$http.getShopIndex({
					// id: null
				}, res => {
					// console.log(res)
					if (res.code == 1) {
					 // this.shopInfo = Object.assign({},res.data)
					 this.shopInfo = res.data;
					 console.log("shopInfo", this.shopInfo)
					} else {
					  this.$common.errorToShow(res.msg);
					}
				})
			},
			handleClick(val) {
				console.log("val", val)
				this.page = "shop";
				
			},
			changeTab(item) {
				if (item.page){
					this.page = item.page;
				} else {
					// uni.navigateTo({
					// 	url: "/pages/index/postComments"
					// })
					
					uni.chooseImage({
						count: 9, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册或手机选择
						success: (res) => {
							const filePath = res.tempFilePaths
							console.log("filePath", filePath)
							if(filePath[0]) {
								uni.navigateTo({
									url: `/pages/index/postComments?src=${filePath}`
								})
							}
						}
					});
					
					
					
				}

				// 可代替onshow去做一些业务逻辑
				// 因为数据全都在vuex 动态管理
			},
			// 初始化内容区域的高度
			async init_page_size() {
				this.$nextTick(async () => {
					let sysInfo = uni.getSystemInfoSync();
					const query = uni.createSelectorQuery().in(this);
					const tabbarObj = query.select('#tabbar')
					let tabbarNodeRes = await this.syncBoundingClientRect(tabbarObj);
					let pageHeight = sysInfo.windowHeight - 50;
					this.containerHeight = pageHeight;
					this.showPage = true;
				})
			},
			syncBoundingClientRect(nodeobj) {
				return new Promise((resolve, reject) => {
					nodeobj.boundingClientRect(data => {
						resolve(data)
					}).exec();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';
	.app-container {
		min-height: 600rpx;
		background-color: #FFFFFF;
	}

	.tabbar-icon {
		
		image {
			width: 56rpx;
			height: 56rpx;
		}
		&:nth-child(2){
			image{
				width: 118rpx;
				height: 78rpx;
			}
		}
		text{
			font-size: 20rpx;
			color: #B3B3B3;
			&.acitvieColor{
				color: #FF5F52;
			}
		}
	}
	.pop-section {
		width: 590rpx;
		height: 480rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		@include flexY;
		@include flexA;
		justify-content: space-between;
	
		.title {
			font-size: 34rpx;
			color: #666666;
			line-height: 122rpx;
		}
	
		.cont {
			flex: 1;
			margin-top: 26rpx;
			font-size: 30rpx;
			color: #666666;
			width: 390rpx;
			line-height: 44rpx;
		}
	
		.btn {
			width: 440rpx;
			height: 90rpx;
			background-color: #FF544C;
			color: #FFFFFF;
			border-radius: 45rpx;
			margin-bottom: 75rpx;
		}
	}

</style>
