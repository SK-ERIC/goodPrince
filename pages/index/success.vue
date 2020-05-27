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
			navBack() {
				uni.switchTab({
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
			margin-top: 40rpx;

			// padding-bottom: 134rpx;
			image {
				width: 200rpx;
				height: 200rpx;
			}

			text {
				font-size: 36rpx;
				color: #666666;
			}
		}


	}
</style>
