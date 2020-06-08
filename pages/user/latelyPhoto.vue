<template>
	<view class="container">

		<!-- <view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我拍过的店 ({{ total }})</text>
		</view> -->

		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" :up="upOption" @up="upCallback">

			<!-- list -->
			<lately-photo-list @switchShopHome="_switchShopHome" :photoList="photoList" @changeLike="_changeLike"
			 @changeFullText="_changeFullText"></lately-photo-list>

		</mescroll-body>

		<!-- foot -->
		<!-- <foot show position hide></foot> -->
		<!-- pop -->
		<pop ref="popup" :popCont="popCont"></pop>

	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import foot from '../component/foot'
	import pop from '../component/pop'
	import latelyPhotoList from '../component/latelyPhotoList'
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		components: {
			foot,
			pop,
			latelyPhotoList
		},
		data() {
			return {
				total: "",
				photoList: [],
				pageIndex: 1,
				pageSize: 5,
				user_id: "",
				popCont: "您今天对此条留言的点赞次数已达上限",
				upOption: {
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 5, // 每页数据的数量
						time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
					},
					empty: {
						use: false, // 是否显示空布局
						icon: "https://wxhyx-cdn.aisspc.cn/static/nthing.png", // 图标路径
						tip: '~ 暂无相关数据 ~', // 提示
						// btnText: '我来说个话', // 按钮
						// // fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
						// // top: "100rpx", // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
						// // zIndex: 99 // fixed定位z-index值
					},
				}
			}
		},
		watch: {
			photoList: {
				handler(newVal, oldVal) {
					for (let i = 0; i < newVal.length; i++) {
						if (oldVal[i] != newVal[i]) {
							this.photoList = newVal;
						}
					}
				},
				deep: true
			}
		},
		onLoad(options) {
			if (options.total) this.total = options.total;
			this.user_id = this.$db.get("userinfo").user_id
			uni.setNavigationBarTitle({
				title: `我拍过的店(${this.total})`
			})
		},
		methods: {
			_switchShopHome(val) {
				uni.navigateTo({
					url: `/pages/home/home?id=${val.shop_id}`
				})
			},
			postCommentShop() {
				this.$http.postCommentShop({
					user_id: this.user_id,
					page: this.pageIndex,
					page_size: this.pageSize
				}, res => {
					//联网成功的回调,隐藏下拉刷新的状态
					this.mescroll.endSuccess();
					if (res.code == 1) {
						this.mescroll.endBySize(this.photoList.length, this.total); //必传参数(当前页的数据个数, 总数据量)
						if (this.pageIndex == 1) this.photoList = []; //如果是第一页需手动制空列表
						this.photoList = this.photoList.concat(res.data);
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			/*下拉刷新的回调 */
			downCallback() {
				// 这里加载你想下拉刷新的数据
				// this.postCommentShop();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				this.mescroll.resetUpScroll()
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				this.pageIndex = page.num;
				this.pageSize = page.size;
				this.postCommentShop();
			},
			previewImage(v, e) {
				const current = e.currentTarget.dataset.src;
				uni.previewImage({
					urls: v,
					current: current,
				})
				console.log(v, e)
			},
			_changeLike(val) {
				// this.$emit('changeLike', val)
				const {
					item,
					bl,
					index
				} = val;
				let num = +this.photoList[index].zan;
				const user_id = this.$db.get("userinfo").user_id
				this.$http.postSaveZan({
					cid: item.id,
					uid: user_id
				}, res => {
					if (res.code == 1) {
						const code = res.data.code;
						const msg = res.data.msg;
						if (code == 200) {
							this.$set(this.photoList[index], `myZan`, 1);
							this.$set(this.photoList[index], `zan`, ++num);
						} else if (code == 100) {
							this.popCont = msg;
							this.$refs.popup.$refs.pop.open();
						} else if (code == 300) {
							this.$set(this.photoList[index], `myZan`, 0);
							this.$set(this.photoList[index], `zan`, --num);
						}
					} else {
						this.$common.errorToShow(res.msg);
					}
				})

			},
			_changeFullText(val) {
				// this.$emit('changeFullText', val)
				const {
					e
				} = val;
				const index = e.currentTarget.dataset.index;
				const str = e.currentTarget.dataset.text;
				this.photoList[index].full_text = str == "全文" ? "收起全文" : "全文";
			},
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		padding-bottom: 144rpx;
		min-height: 100vh;
		position: relative;
		padding-bottom: 220rpx;


		.navBack {
			display: inline-flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 36rpx;
			color: #282828;
			margin-left: 27rpx;

			.cuIcon-back {
				margin-right: 30rpx;
			}
		}

	}
</style>
