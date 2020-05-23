<template>
	<view class="container">
		<!-- <view class="navBack">
			<text class="cuIcon-back edg" @click.stop="navBack"></text>
			<text class="title">商家中心</text>
			<text class="edg"></text>
		</view> -->
		<view class="info-section">
			<view class="shop-name">
				布达佩斯大饭店（东大门店）
			</view>
			<view class="shop-id">
				ID:158447152
			</view>
			<view class="rate-t">
				<text class="text">顾客满意</text>
				<uni-rate disabled="true" :size="18" :max="5" :value="3" />
				<view class="num">
					3分 <text>(2人)</text>
				</view>
			</view>
			<view class="rate-b">
				<text class="text">综合评分</text>
				<uni-rate disabled="true" :size="18" :max="5" :value="4.1" />
				<text class="num">4.1分</text>
			</view>
			<view class="nav-list">
				<view class="nav-section" v-for="(item, index) in navList" :key="index" @click="_switchNav(item)">
					<view class="nav-item-l">
						<image class="logo" :src="item.logo" mode=""></image>
						<view class="text">
							<text class="name">{{ item.name }}</text>
							<text class="desc">{{ item.desc }}</text>
						</view>
					</view>
					<view class="nav-item-r">
						<view class="new" v-if="item.status">New</view>
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>

		</view>
		<view class="foot_section">
			<image src="http://qakj5dvcb.bkt.clouddn.com/static/shopCenter_icon_foot.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components: {
			uniRate
		},
		data() {
			return {
				navList: [{
						id: 0,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/shopCenter_icon_a.png",
						name: "商家资料",
						desc: "备案信息 更改上传资料等",
						status: 0
					},
					{
						id: 1,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/shopCenter_icon_b.png",
						name: "顾客留言",
						desc: "顾客留言 评价一键回复",
						status: 1
					},
					{
						id: 2,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/shopCenter_icon_c.png",
						name: "系统消息",
						desc: "各类消息 点我查看",
						status: 1
					},
					{
						id: 3,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/shopCenter_icon_d.png",
						name: "店铺二维码",
						desc: "店铺专属二维码",
						status: 0
					},
					{
						id: 4,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/shopCenter_icon_e.png",
						name: "设置",
						desc: "我的设置",
						status: 0
					}
				]
			}
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			_switchNav(item) {
				switch (item.name) {
					case "商家资料":
						uni.navigateTo({
							url: "/pages/shop/shopInfo"
						})
						break
					case "顾客留言":
						uni.navigateTo({
							url: "/pages/shop/leaveWord"
						})
						break
					case "系统消息":
						uni.navigateTo({
							url: "/pages/user/msg"
						})
						break
					case "店铺二维码":
						uni.navigateTo({
							url: "/pages/shop/QRCode"
						})
						break
					case "设置":
						uni.navigateTo({
							url: "/pages/shop/set"
						})
						break

				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		// padding-top: 60rpx;
		position: relative;
		padding-bottom: 170rpx;

		.navBack {
			@include flexX;
			font-size: 36rpx;
			margin-bottom: 30rpx;
			margin: 0 27rpx;

			.edg {
				flex: .3;
			}

			.title {
				flex: .4;
				text-align: center;
			}

		}

		.info-section {
			// padding: 68rpx 30rpx 0;
			padding: 34rpx 30rpx 0;

			.shop-name {
				font-size: 36rpx;
				color: #282828;
				font-weight: 500;
				margin-bottom: 36rpx;
			}

			.shop-id {
				font-size: 24rpx;
				color: #B1B1B1;
				font-weight: 500;
				margin-bottom: 39rpx;
			}

			.rate-t,
			.rate-b {
				display: flex;
				align-items: baseline;
				font-size: 24rpx;
				font-weight: 500;
				color: #282828;
				margin-bottom: 20rpx;

				.text {
					margin-right: 20rpx;
				}

				.num {
					margin-left: 30rpx;

					text {
						color: #999999;
						margin-left: 15rpx;
					}
				}
			}

			.rate-b {
				margin-bottom: 62rpx;
			}

			.nav-list {
				.nav-section {
					@include flexSB;
					width: 680rpx;
					height: 160rpx;
					border: 1rpx solid #F1F1F0;
					background-color: #FBFAFA;
					margin-bottom: 30rpx;

					.nav-item-l {
						@include flexX;
						;

						.logo {
							width: 100rpx;
							height: 100rpx;
							margin-left: 26rpx;
						}

						.text {
							margin-left: 27rpx;
							@include flexY;

							.name {
								font-size: 34rpx;
								color: #323232;
								font-weight: bold;
							}

							.desc {
								font-size: 22rpx;
								font-weight: 500;
								color: #808080;
								margin-top: 16rpx;
							}
						}
					}

					.nav-item-r {
						margin-right: 30rpx;
						@include flexX;
						@include flexJ;
						text-align: center;

						.new {
							width: 60rpx;
							height: 28rpx;
							background: rgba(255, 177, 79, 0);
							border: 2rpx solid #FF4238;
							border-radius: 14rpx;
							font-size: 18rpx;
							color: #FF453A;
							font-weight: 500;
							margin-right: 12rpx;
						}

						.cuIcon-right {
							color: #DFDFDF;
							font-size: 24rpx;
						}
					}
				}
			}
		}

		.foot_section {
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 2;
			width: 100%;
			height: 170rpx;

			image {
				width: 100%;
				height: 170rpx;
			}
		}

	}
</style>
