<template>
	<!-- 底部 -->
	<view class="bottom-section" :class="{position}">
		<view class="tip-title" v-show="btm" :class="{white: color}">
			<text class="text">
				啊欧，快到底了哦
			</text>
		</view>
		<view class="comTop" v-show="!btm || color"></view>
		<view class="code-wrap">
			<view class="code-inner text-center" v-for="(item, index) in info.codeList" :key="index">
				<text class="text">{{ item.text }}</text>
				<image class="code-img" :src="item.code" mode=""></image>
				<view class="code-tip">
					<text>请长按识别二维码</text>
					<text>{{ item.tip }}</text>
				</view>
			</view>
		</view>
		<view class="supervise-wrap">
			<image class="icon-phone" src="http://qakj5dvcb.bkt.clouddn.com/static/icon-phone.png" mode=""></image>
			<text>市民监督电话：{{ info.tel }}</text>
		</view>
		<!-- 版权 -->
		<view class="copyright text-center">
			{{ info.copyright }}
		</view>
		<!-- 备案 -->
		<view class="recordNo text-center">
			{{ info.recordNo }}
		</view>
		<view class="government">
			<image :src="info.gover" mode=""></image>
		</view>
	</view>
	
</template>

<script>
	export default {
		name: "foot",
		props:{
			"btm": {
				type: Boolean,
				default: true
			},
			"color": {
				type: Boolean,
				default: false
			},
			"position": {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				info: {
					codeList: [
						{
							id: 0,
							text: "全民监督  共创和谐",
							code: "http://qakj5dvcb.bkt.clouddn.com/static/code_market.png",
							tip: "关注梁溪市场监督管理",
						},
						{
							id: 1,
							text: "通江一家人、弘扬正能量",
							code: "http://qakj5dvcb.bkt.clouddn.com/static/code_street.png",
							tip: "关注通江街道公众号",
						}
					],
					tel: "0510-82304547",
					copyright: "无锡市市场监管管理局版权所有 无锡市市场监督管理总主办",
					recordNo: "苏ICP备09024546号 公安备案号：32021102000707 网站标识码：3202000002",
					gover: "http://qakj5dvcb.bkt.clouddn.com/static/government.png"
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '@/style/mixin.scss';
	.bottom-section {
		background-color: #F3F5F7;
		width: 100%;
		&.position{
			position: absolute;
			left: 0;
			bottom: 0;
		}

		.tip-title {
			font-size: 28rpx;
			color: #BFBFBF;
			font-weight: 400;
			height: 135rpx;
			@include flexX;
			@include flexJ;
			&.white{
				background-color: #FFFFFF;
			}

			.text {
				display: inline-block;
				position: relative;

				&::before {
					content: "";
					width: 150rpx;
					height: 2rpx;
					background-color: #BFBFBF;
					position: absolute;
					left: -200rpx;
					top: 50%;
					transform: translateY(-50%);
				}

				&::after {
					content: "";
					width: 150rpx;
					height: 2rpx;
					background-color: #BFBFBF;
					position: absolute;
					right: -200rpx;
					top: 50%;
					transform: translateY(-50%);
				}
			}

		}
		.comTop{
			height: 48rpx;
			width: 100%;
			background-color: #F3F5F7;
		}

		.code-wrap {
			@include flexX;
			@include flexJ;

			.code-inner {
				@include flexY;
				@include flexA;
				width: 260rpx;

				&:first-child {
					margin-right: 60rpx;
				}

				.text {
					font-size: 24rpx;
					color: #333E49;
					font-weight: 400;
				}

				.code-img {
					width: 200rpx;
					height: 200rpx;
					margin: 20rpx 0;
				}

				.code-tip {
					@include flexY;
					font-size: 20rpx;
					color: #8B8B8B;
					line-height: 30rpx;
				}
			}
		}

		.supervise-wrap {
			@include flexX;
			@include flexJ;
			margin: 50rpx 0 60rpx;

			.icon-phone {
				width: 32rpx;
				height: 27rpx;
				margin-right: 11rpx;
			}

			font-size: 24rpx;
			color: #646D77;
			font-weight: 400;
		}

		.copyright {
			font-size: 20rpx;
			color: #8B8B8B;
			font-weight: 400;
			padding: 0 32rpx;
		}

		.recordNo {
			font-size: 16rpx;
			color: #8B8B8B;
			font-weight: 400;
			margin-top: 15rpx;
			padding: 0 32rpx;
		}

		.government {
			@include flexX;
			@include flexJ;
			margin-top: 24rpx;
			padding-bottom: 36rpx;

			image {
				width: 56rpx;
				height: 68rpx;
			}
		}

	}

</style>
