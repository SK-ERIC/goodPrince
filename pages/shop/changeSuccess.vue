<template>
	<view class="container">
		<image class="img" src="http://qakj5dvcb.bkt.clouddn.com/static/status_success.png" mode=""></image>
		<text class="title text-center">您的实名认证已通过</text>
		<text class="tip">您提交的实名认证资料已通过审核，请尽快登录商家中心后台，完善您的店铺资料。</text>
		<view class="btn-section">
			<button type="default" class="cu-btn btn" @click="_switchToLogin">登录商家中心</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			_switchToLogin() {
				uni.navigateTo({
					url: "/pages/login/login?login=shop"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		@include flexY;
		@include flexJ;

		.img {
			width: 200rpx;
			height: 200rpx;
			display: block;
			margin: 80rpx auto 52rpx;
		}

		.title {
			font-size: 34rpx;
			color: #363636;
			font-weight: 500;
			margin-bottom: 28rpx;
		}

		.tip {
			font-size: 28rpx;
			color: #989EAC;
			font-weight: 400;
			line-height: 44rpx;
			width: 540rpx;
			display: block;
			margin: 0 auto 65rpx;
		}

		.btn-section {
			@include flexX;
			@include flexJ;

			.btn {
				width: 590rpx;
				height: 100rpx;
				border-radius: 50rpx;
				background-color: #F75347;
				color: #ffffff;
				font-size: 34rpx;
				font-weight: 500;
			}
		}
	}
</style>
