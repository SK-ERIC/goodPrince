<template>
	<view class="container">
		<view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我的消息 ({{ msgList.length }})</text>
		</view>
		<view class="msg-wrap">
			<view class="msg-section" v-for="(item, index) in msgList" :key="index" @click="_switchToDetail(item)">
				<view class="msg-item-l">
					<image class="img" :src="item.logo" mode=""></image>
					<text class="dot" v-show="!item.read"></text>
				</view>
				<view class="msg-item-r">
					<view class="item-inner-t">
						<text class="title"> {{ item.title }} </text>
						<text class="date"> {{ item.date }} </text>
					</view>
					<view class="item-inner-b">
						{{ item.desc }}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList: [{
						id: 0,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						title: "系统消息",
						desc: "【梁溪区市场监督管理局】关于复工复产中的劳【梁溪区市场监督管理局】关于复工复产中的劳...",
						date: "刚刚",
						read: false,
					},
					{
						id: 1,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						title: "活动奖励",
						desc: "【梁溪区市场监督管理局】关于复工复产中的劳【梁溪区市场监督管理局】关于复工复产中的劳...",
						date: "5月6日",
						read: true,
					},
					{
						id: 2,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						title: "热门活动",
						desc: "【梁溪区市场监督管理局】关于复工复产中的劳【梁溪区市场监督管理局】关于复工复产中的劳...",
						date: "5月6日",
						read: true,
					}

				]
			}
		},
		methods: {
			_switchToDetail(item) {
				uni.navigateTo({
					url: `/pages/user/msgDetail?id=${item.id}`
				})
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

		padding-top: 60rpx;

		.navBack {
			display: inline-flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 36rpx;
			color: #282828;
			margin-left: 27rpx;
			margin-bottom: 30rpx;

			.cuIcon-back {
				margin-right: 30rpx;
			}
		}

		.msg-wrap {
			padding: 0 45rpx;

			.msg-section {
				@include flexSB;
				height: 150rpx;
				border-bottom: 2rpx solid #F3F3F3;

				.msg-item-l {
					position: relative;

					.img {
						width: 84rpx;
						height: 84rpx;
						border-radius: 50%;
					}

					.dot {
						width: 25rpx;
						height: 25rpx;
						border-radius: 50%;
						background-color: #FE4B4D;
						position: absolute;
						top: 3rpx;
						right: -7rpx;
						border: 1rpx solid #FFFFFF;

					}
				}

				.msg-item-r {
					height: 84rpx;
					width: 84%;
					@include flexY;
					justify-content: space-between;

					.item-inner-t {
						@include flexSB;

						.title {
							font-size: 32rpx;
							color: #142340;
							font-weight: 600;

						}

						.date {
							font-size: 24rpx;
							color: #B1B1B1;
						}
					}

					.item-inner-b {
						@include txt_cut;
						color: #9295A1;
						font-size: 26rpx;
					}
				}
			}

		}


	}
</style>
