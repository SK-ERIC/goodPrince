<template>
	<view :style="showPage ? 'opacity: 1;' : 'opacity: 0;' ">
		<scroll-view scroll-y="true" :scroll-top="topNum" class="app-container" :style="'height:'+containerHeight+'px'"
		 :lower-threshold='100' @scrolltolower="scrolltolower">
			<view v-if="page =='shop'" :class="page=='shop'?'animation-fade':''">
				<cu-shop :shopIndex="shopInfo" :commentList="commentList" @changeLike="_changeLike" @changeFullText="_changeFullText"
				 @switchPostComments="_switchPostComments"></cu-shop>
			</view>
			<view v-if="page =='user'" :class="page=='user'?'animation-fade':''">
				<cu-user :userInfo="userInfo" @handleClick="_handleClick"></cu-user>
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
	let _this;
	export default {
		components: {
			pop
		},
		data() {
			return {
				page: "shop",
				showPage: false,
				containerHeight: 800,
				tabbar: [{
						"iconPath": "https://wxhyx-cdn.aisspc.cn/static/tabIcon_shop.png",
						"selectedIconPath": "https://wxhyx-cdn.aisspc.cn/static/tabIcon_shop_sel.png",
						"title": "首页",
						"page": "shop"
					},
					{
						"iconPath": "https://wxhyx-cdn.aisspc.cn/static/tabIcon_photo.png",
						"selectedIconPath": "https://wxhyx-cdn.aisspc.cn/static/tabIcon_photo.png",
						"title": "",
						"page": "",
					},
					{
						"iconPath": "https://wxhyx-cdn.aisspc.cn/static/tabIcon_user.png",
						"selectedIconPath": "https://wxhyx-cdn.aisspc.cn/static/tabIcon_user_sel.png",
						"title": "我的",
						"page": "user"
					}
				],
				showLoading: false,
				shopInfo: {},
				shopId: 1,
				topNum: 0,
				pageIndex: 1,
				pageSize: 5,
				total: 0,
				commentList: [], // 评论列表
				popCont: "您今天对此条留言的点赞次数已达上限",
			}
		},
		watch: {
			commentList: {
				handler(newVal, oldVal) {
					for (let i = 0; i < newVal.length; i++) {
						if (oldVal[i] != newVal[i]) {
							this.commentList = newVal;
						}
					}
				},
				deep: true
			}
		},
		onLoad(options) {
			console.log("home", options)
			let id = "";
			if (options.id) id = options.id;
			if (options.page) this.page = options.page;
			//在此函数中获取扫描普通链接二维码参数
			if (options.q) {
				let q = decodeURIComponent(options.q)
				let access_token = utils.getQueryString(q, 'access_token');
				id = utils.getQueryString(q, 'id');
			};
			if (id) this.shopId = id;

			this.init_page_size();
			this.getShopIndex();
		},
		methods: {
			scrolltolower() {
				if (this.page == 'shop') {
					this.pageIndex += 1;
					this.postShopCommentsList()
				}
			},
			_changeLike(val) {
				if (!this.$db.userMobile()) return;
				const {
					item,
					bl,
					index
				} = val;
				let num = +this.commentList[index].zan;

				this.$http.postSaveZan({
					cid: item.id,
					uid: item.user_id
				}, res => {
					if (res.code == 1) {
						const code = res.data.code;
						const msg = res.data.msg;
						if (code == 200) {
							this.$set(this.commentList[index], `like`, bl);
							this.$set(this.commentList[index], `zan`, ++num);
						} else if (code == 100) {
							this.popCont = msg;
							this.$refs.popup.$refs.pop.open();
						}
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
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
					shop_id: this.shopId
				}, res => {
					if (res.code == 1) {
						// this.shopInfo = Object.assign({},res.data)
						this.shopInfo = res.data;
						this.total = res.data.comments.counts;
						this.postShopCommentsList()
						// this.commentList = res.data.comments.list.slice(0, 2);
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			postShopCommentsList() {
				this.$http.postShopCommentsList({
					shop_id: this.shopId,
					page: this.pageIndex,
					page_size: this.pageSize
				}, res => {
					if (res.code == 1) {
						if (this.pageIndex == 1) this.commentList = []; //如果是第一页需手动制空列表
						this.commentList = this.commentList.concat(res.data);
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			_handleClick(val) {
				console.log("店铺信息：", val)
				this.page = "shop";
				this.topNum = this.topNum + 0.001;
				this.shopId = val.shop_id;
				this.getShopIndex();
			},
			changeTab(item) {
				if (item.page) {
					if (item.page == 'user' && !this.$db.userMobile()) return;
					this.page = item.page;
					uni.setNavigationBarTitle({
						title: item.title
					})
					this.topNum += 0.0001;
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
