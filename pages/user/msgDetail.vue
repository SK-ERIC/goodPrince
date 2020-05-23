<template>
	<view class="container">
		<view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>消息详情</text>
		</view>
		<view class="msg-section">
			<text>{{ msg }}</text>
		</view>

		<!-- foot -->
		<foot color></foot>
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
				msg: `蓝湖是一款产品文档和设计图的共享平台,帮助互联网
						团队更好地管理文档和设计图。蓝湖可以在线展示Ax
						ure,自动生成设计图标注,与团队共享设计图,展示页面
						之间的跳转关系..

						蓝湖是一款产品文档和设计图的共享平台,帮助互联网
						团队更好地管理文档和设计图。蓝湖可以在线展示Ax
						ure,自动生成设计图标注,与团队共享设计图,展示页面
						之间的跳转关系..`
			}
		},
		onLoad(option) {
			console.log("option", option)
		},
		methods: {
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
		padding-top: 60rpx;

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

		.msg-section {
			padding: 50rpx;

			text {
				font-size: 28rpx;
				color: #9295A1;
				font-weight: 500;
			}
		}
	}
</style>
