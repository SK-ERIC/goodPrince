<template>
	<view :style="showPage ? 'opacity: 1;' : 'opacity: 0;' ">
		<scroll-view scroll-y="true" :scroll-top="topNum" class="app-container" :style="'height:'+containerHeight+'px'"
		 :lower-threshold='100' @scrolltolower="scrolltolower">
			<view v-if="page =='shop'" :class="page=='shop'?'animation-fade':''">
				<cu-shop v-if="shopId && !isShowScan" :shopIndex="shopInfo" :commentList="commentList" @changeLike="_changeLike"
				 @changeFullText="_changeFullText" @switchPostComments="_switchPostComments"></cu-shop>

				<cu-scan v-else></cu-scan>

			</view>
			<view v-if="page =='user'" :class="page=='user'?'animation-fade':''">
				<cu-user @handleClick="_handleClick"></cu-user>
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
	import {
		mapMutations
	} from 'vuex'
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
						"title": "店家",
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
				shopId: "",
				topNum: 0,
				pageIndex: 1,
				pageSize: 5,
				total: 0,
				isShowScan: false,
				commentList: [], // 评论列表
				popCont: "您今天对此条留言的点赞次数已达上限",
				finished: false, // 是否已加载完成
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
		async onLoad(options) {
			console.log("home", options)
			let id = "";

			// 1 如果是历史中启动小程序，尝试获取店铺id
			if (this.$db.get("shop_id")) id = this.$db.get("shop_id");

			// 2 在此函数中获取扫描普通链接二维码参数
			if (options.scene) {
				// scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
				const scene = decodeURIComponent(options.scene)
				id = scene;
			};

			// 3 页面跳转过来的
			if (options.id) id = options.id;
			if (options.page) this.page = options.page;

			// 定义当前登录的店铺id
			this.shopId = id;
			this.$db.set("shop_id", id);

			if (id) {
				const shop = await this.getShopIndex()
				// 0是删除，1是正常，2是暂停展示
				if (shop.status != 1) {
					uni.showToast({
						title: "该店铺存在异常~",
						duration: 2000,
						icon: "none",
						mask: true,
						success: () => {
							this.isShowScan = true;
							this.shopId = "";
							this.$db.set("shop_id", "")
						}
					})
				} else {
					await this.postShopCommentsList()
				}
			};

			this.init_page_size();

		},
		methods: {
			...mapMutations(['shopConfig']),
			scrolltolower() {
				if (this.page == 'shop' && this.shopId && !this.finished) {
					this.pageIndex++;
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
				const user_id = this.$db.get("userinfo").user_id
				this.$http.postSaveZan({
					cid: item.id,
					uid: user_id
				}, res => {
					if (res.code == 1) {
						const code = res.data.code;
						const msg = res.data.msg;
						if (code == 200) {
							this.$set(this.commentList[index], `myZan`, 1);
							this.$set(this.commentList[index], `zan`, ++num);
						} else if (code == 100) {
							this.popCont = msg;
							this.$refs.popup.$refs.pop.open();
						} else if (code == 300) {
							this.$set(this.commentList[index], `myZan`, 0);
							this.$set(this.commentList[index], `zan`, --num);
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
				const _this = this
				return new Promise((resolve, reject) => {
					_this.$http.getShopIndex({
						shop_id: _this.shopId
					}, res => {
						if (res.code == 1) {
							_this.shopInfo = res.data;
							_this.total = res.data.comments.counts || 0;
							_this.shopConfig(res.data);
							resolve(res.data)
						} else if (res.code == 0) {
							resolve({
								status: 0
							})
						} else {
							this.$common.errorToShow(res.msg);
						}
					})
				})

			},
			postShopCommentsList() {
				const total = this.shopInfo.comments.counts || 0;
				const user_id = this.$db.get("userinfo").user_id;
				this.$http.postShopCommentsList({
					shop_id: this.shopId,
					user_id,
					page: this.pageIndex,
					page_size: this.pageSize
				}, res => {
					if (res.code == 1) {
						// 返回当前页的数据
						const data = res.data;
						// 加载结束
						if (data == null || data.length == 0) {
							this.finished = true
							return
						}
						// 如果是第一页需手动制空列表
						if (this.pageIndex == 1) this.commentList = [];
						// 将新数据与老数据进行合并
						this.commentList = this.commentList.concat(data);
						//如果列表数据条数>=总条数，不再触发滚动加载
						if (this.commentList.length >= total) {
							this.finished = true
						}
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			async _handleClick(val) {
				const _this = this
				this.topNum = this.topNum + 0.001;
				this.shopId = val.shop_id;
				this.$db.set("shop_id", val.shop_id)
				this.page = "shop";
				const shop = await this.getShopIndex();

				if (shop.status != 1) {
					uni.showToast({
						title: "该店铺存在异常~",
						icon: "none",
						mask: true,
						success: () => {
							this.isShowScan = true;
							this.shopId = "";
							this.$db.set("shop_id", "")
						}
					})
					return
				} else {
					await _this.postShopCommentsList()
				}
			},
			changeTab(item) {
				const _this = this
				if (item.page) {
					if (item.page == 'user' && !this.$db.userMobile()) return;
					this.page = item.page;
					let title = "";
					if (this.page == "shop" && !this.shopId) {
						title = "通江好印象"
					} else {
						title = item.title
					}
					uni.setNavigationBarTitle({
						title: title
					})
					this.topNum += 0.0001;
				} else {
					if (!this.$db.userMobile()) return;
					if (!this.shopId) {
						uni.showToast({
							title: "请选择一个店家",
							icon: "none"
						})
						return
					}

					// this.$http.uploadImage(1, (res, tem) => {
					// 	if (res.code == 1) {
					// 		uni.navigateTo({
					// 			url: `/pages/index/postComments?src=${tem}&tem=${res.data.url}`
					// 		})
					// 	} else {
					// 		this.$common.errorToShow(res.msg);
					// 	}
					// })

					// 选择图片直接上传
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['camera', 'album'], //从相册选择
						success: function(res) {
							console.log(JSON.stringify(res.tempFilePaths));
							uni.showLoading({
								title: '上传中...'
							});
							let userinfo = _this.$db.get("userinfo");
							uni.uploadFile({
								url: 'https://wxhyx.aisspc.cn/addons/qiniu/index/upload',
								filePath: res.tempFilePaths[0],
								fileType: 'image',
								name: 'file',
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'multipart/form-data',
								},
								formData: {
									'method': 'images.upload',
									'upfile': res.tempFilePaths[0],
									'token': userinfo.token
								},
								success: (uploadFileRes) => {
									const backUpload = JSON.parse(uploadFileRes.data);
									uni.navigateTo({
										// url: `./info?src=${e.url}&tem=${backUpload.data.url}`
										url: `/pages/index/postComments?src=${res.tempFilePaths[0]}&tem=${backUpload.data.url}`
									})
									uni.hideLoading();
									//自定义操作
								},
								complete:()=> {
									//console.log("this is headimg"+this.headimg)   
								},
								fail:(e)=> {
									console.log("this is errormes " + e.message)
								}
							})
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
