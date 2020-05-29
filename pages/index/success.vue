<template>
	<view class="container">

		<!-- <view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>返回</text>
		</view> -->
		<view class="success text-center">
			<image src="https://wxhyx-cdn.aisspc.cn/static/success.png" mode=""></image>
			<text>发布成功</text>
		</view>

		<view class="btn-section">
			<button type="default" class="cu-btn backHome" @click="backHome">返回首页</button>
		</view>

		<!-- foot -->
		<foot :btm="false" position hide></foot>

	</view>
</template>

<script>
	import foot from '../component/foot'
	export default {
		components: {
			foot
		},
		data() {
			return {

			};
		},
		methods: {
			backHome() {
				uni.navigateTo({
					url: "/pages/home/home"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		position: relative;
		min-height: 100vh;

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
		}

		/deep/.uni-navbar--border {
			border: none;
		}

		.success {
			@include flexY;
			@include flexX;

			image {
				margin-top: 100rpx;
				width: 200rpx;
				height: 200rpx;
			}

			text {
				font-size: 36rpx;
				color: #666666;
			}
		}

		.btn-section {
			margin-top: 75rpx;
			@include flexY;
			@include flexX;

			.backHome {
				width: 400rpx;
				height: 90rpx;
				border: 2rpx solid #FF544C;
				border-radius: 45rpx;
				font-size: 34rpx;
				font-weight: 400;
				color: #FF544C;
				background-color: #fff;
			}
		}


	}
</style>
