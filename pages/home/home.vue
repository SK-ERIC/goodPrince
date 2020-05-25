<template>
	<view :style="showPage ? 'opacity: 1;' : 'opacity: 0;' ">
		<scroll-view scroll-y="true" class="app-container" :style="'height:'+containerHeight+'px'">
			<view v-if="page =='shop'" :class="page=='shop'?'animation-fade':''">
				<cu-shop :shopIndex="shopInfo" :commentList="commentList" @changeLike="_changeLike" @changeFullText="_changeFullText"
				 @switchPostComments="_switchPostComments"></cu-shop>
			</view>
			<view v-if="page =='user'" :class="page=='user'?'animation-fade':''">
				<cu-user :userInfo="userInfo" @click="handleClick"></cu-user>
			</view>
		</scroll-view>
		<!-- pop -->
		<pop ref="popup" :popCont="popCont"></pop>
		<!-- tabbar -->
		<view id="tabbar" class="cu-bar tabbar">
			<view class="action tabbar-icon" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
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
	import pop from '../component/pop'
	import {
		mapMutations
	} from 'vuex'
	let _this;
	export default {
		components: {
			pop
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
				userInfo: {},
				commentList: [], // 评论列表
				popCont: "您今天对此条留言的点赞次数已达上限"
			}
		},
		onLoad(options) {
			if (options.page) this.page = options.page;
			this.init_page_size();
			this.getShopIndex();
			this.getUserInfo();
		},
		methods: {
			...mapMutations(['shopConfig']),
			getUserInfo() {
				this.$http.getUserInfo({}, res=>{
					if (res.code == 1) {
						this.userInfo  = res.data.userinfo;
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			_changeLike(val) {
				if (!this.$db.userMobile()) return;

				const {
					item,
					bl,
					index
				} = val;
				let num = parseInt(this.commentList[index].like_num);
				if (bl) {
					this.$http.postSaveZan({
						cid: item.id,
						uid: item.uid
					}, res => {
						if (res.code == 1) {
							this.commentList[index].like = bl;
							this.commentList[index].like_num = num + 1;
							this.getShopIndex();
						} else {
							this.$common.errorToShow(res.msg);
						}
					})
				} else {
					// if (num > 0) {
					// 	this.commentList[index].like_num = num - 1;
					// }
					this.$refs.popup.$refs.pop.open();
				}
			},
			_changeFullText(val) {
				const {
					e
				} = val;
				const index = e.currentTarget.dataset.index;
				const str = e.currentTarget.dataset.text;
				this.commentList[index].full_text = str == "全文" ? "收起全文" : "全文";
			},
			_switchPostComments() {
				if (!this.$db.userMobile()) return;
				uni.navigateTo({
					url: "/pages/index/postComments"
				})
			},
			// 店铺信息
			getShopIndex() {
				this.$http.getShopIndex({
					// id: null
				}, res => {
					if (res.code == 1) {
						// this.shopInfo = Object.assign({},res.data)
						this.shopInfo = res.data;
						this.commentList = res.data.comments.list.slice(0, 2);
						this.shopConfig(res.data);
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			handleClick(val) {
				this.page = "shop";
			},
			changeTab(item) {
				if (item.page) {
					if (item.page == 'user' && !this.$db.userMobile()) return;
					this.page = item.page;
				} else {
					if (!this.$db.userMobile()) return;
					this.$http.uploadImage(1, (res, tem) => {
						if (res.code == 1) {
							uni.navigateTo({
								url: `/pages/index/postComments?src=${tem}&tem=${res.data.url}`
							})
						} else {
							this.$common.errorToShow(res.msg);
						}
					})
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
					let pageHeight = sysInfo.windowHeight - tabbarNodeRes.height;
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

		&:nth-child(2) {
			image {
				width: 118rpx;
				height: 78rpx;
			}
		}

		text {
			font-size: 20rpx;
			color: #B3B3B3;

			&.acitvieColor {
				color: #FF5F52;
			}
		}
	}
</style>
