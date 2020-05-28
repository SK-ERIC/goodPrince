<template>
	<view class="container">

		<!-- <view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我去过的店 ({{ total }})</text>
		</view> -->
		<mescroll-body ref="mescrollRef" :up="upOption" @init="mescrollInit" @down="downCallback" @up="upCallback">
			<!-- 列表 -->
			<lately-shop-list @switchShopHome="_switchShopHome" :latelyList="latelyList">
			</lately-shop-list>
		</mescroll-body>
		<!-- foot -->
		<!-- <foot show position hide></foot> -->
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import foot from '../component/foot';
	import latelyShopList from '../component/latelyShopList'
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		components: {
			foot,
			latelyShopList
		},
		data() {
			return {
				total: "",
				latelyList: [],
				pageIndex: 1,
				pageSize: 5,
				user_id: "",
				upOption: {
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 3, // 每页数据的数量
						time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
					},
					textColor: "gray", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
					textLoading: '加载中 ...', // 加载中的提示文本
					textNoMore: '-- END --', // 没有更多数据的提示文本
					empty: {
						use: false, // 是否显示空布局
						// icon: "https://wxhyx-cdn.aisspc.cn/static/nthing.png", // 图标路径
						// tip: '~ 暂无相关数据 ~', // 提示
						// btnText: '我来说个话', // 按钮
						// // fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
						// // top: "100rpx", // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
						// // zIndex: 99 // fixed定位z-index值
					},
				}
			}
		},
		onLoad(options) {
			if (options.total) this.total = options.total;
			this.user_id = this.$db.get("userinfo").user_id
			uni.setNavigationBarTitle({
				title: `我去过的店(${this.total})`
			})
		},
		methods: {
			_switchShopHome(val) {
				uni.navigateTo({
					url: `/pages/home/home?id=${val.shop_id}`
				})
			},
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			postBeenShop() {
				let user_id = this.$db.get("userinfo").user_id
				this.$http.postBeenShop({
					user_id: this.user_id,
					page: this.pageIndex,
					page_size: this.pageSize
				}, res => {
					//联网成功的回调,隐藏下拉刷新的状态
					this.mescroll.endSuccess();
					if (res.code == 1) {
						this.mescroll.endBySize(this.latelyList.length, this.total); //必传参数(当前页的数据个数, 总数据量)
						if (this.pageIndex == 1) this.latelyList = []; //如果是第一页需手动制空列表
						this.latelyList = this.latelyList.concat(res.data);
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			/*下拉刷新的回调 */
			downCallback() {
				// 这里加载你想下拉刷新的数据
				this.postBeenShop();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				this.mescroll.resetUpScroll()
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				this.pageIndex = page.num;
				this.pageSize = page.size;
				this.postBeenShop();
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		padding-top: 10rpx;
		background-color: #F4F4F6;
		padding-bottom: 144rpx;
		min-height: 100vh;
		position: relative;

		.status_bar {
			height: var(--status-bar-height);
			width: 100%;
		}

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
