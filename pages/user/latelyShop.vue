<template>
	<view class="container">

		<!-- <view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我去过的店 ({{ total }})</text>
		</view> -->

		<!-- 列表 -->
		<lately-shop-list @switchShopHome="_switchShopHome" :latelyList="latelyList">
		</lately-shop-list>

		<!-- foot -->
		<foot show position hide></foot>
	</view>
</template>

<script>
	import foot from '../component/foot';
	import latelyShopList from '../component/latelyShopList'
	export default {
		components: {
			foot,
			latelyShopList
		},
		data() {
			return {
				total: "",
				latelyList: []
			}
		},
		onLoad(options) {
			this.total = options.total || "";
			uni.setNavigationBarTitle({
				title: `我去过的店(${this.total})`
			})
		},
		created() {
			this.postBeenShop();
		},
		methods: {
			_switchShopHome() {
				uni.navigateTo({
					url:"/pages/home/home"
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
					user_id,
				}, res => {
					if (res.code == 1) {
						this.latelyList = res.data;
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
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
