<template>
	<view class="container">
		<view class="head">
			<image src="http://qakj5dvcb.bkt.clouddn.com/static/contact_bg.png" mode=""></image>
		</view>

		<view class="foot-section">
			<!-- 底部 -->
			<view class="bottom-section">
				<view class="comTop">
					<text>无锡好印象-经营评价平台主办单位</text>
					<text>无锡市梁溪区市场监督管理局</text>
					<text>无锡市梁溪区通江街道</text>
					<view class="phone">
						<image src="http://qakj5dvcb.bkt.clouddn.com/static/contactUs_phone.png" mode="" @click="callPhone"></image>
						<text>电话号码：{{ info.phone }}</text>
					</view>
					<view class="email">
						<image src="http://qakj5dvcb.bkt.clouddn.com/static/contactUs_email.png" mode="" @tap="setClipboard"></image>
						<text>电子邮箱：{{ info.email }}</text>
					</view>
				</view>
				<view class="code-wrap">
					<view class="code-inner text-center" v-for="(item, index) in info.codeList" :key="index">
						<text class="text">{{ item.text }}</text>
						<image class="code-img" :src="item.code" mode=""></image>
						<text class="code-tip">请长按识别二维码 <br />{{ item.tip }}</text>
					</view>
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
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					phone: "0510-82304547",
					email: "lxqsjtj@163.com",
					codeList: [{
							id: 0,
							text: "全民监督  共创和谐",
							code: "http://qakj5dvcb.bkt.clouddn.com/static/contactUs_qr_a.png",
							tip: "关注梁溪市场监督管理",
						},
						{
							id: 1,
							text: "通江一家人、弘扬正能量",
							code: "http://qakj5dvcb.bkt.clouddn.com/static/contactUs_qr_b.png",
							tip: "关注通江街道公众号",
						}
					],
					copyright: "无锡市市场监管管理局版权所有 无锡市市场监督管理总主办",
					recordNo: "苏ICP备09024546号 公安备案号：32021102000707 网站标识码：3202000002",
					gover: "http://qakj5dvcb.bkt.clouddn.com/static/government.png"
				}
			}
		},
		methods: {
			setClipboard() {
				var data = this.info.email;
				if (data.length === 0) {
					uni.showModal({
						title: '设置剪贴板失败',
						content: '内容不能为空',
						showCancel: false
					})
				} else {
					uni.setClipboardData({
						data: data,
						success: () => {
							// 成功处理
							// #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
							uni.showToast({
								title: '设置剪贴板成功',
								icon: "success",
								mask: !1
							})
							// #endif
						},
						fail: () => {
							// 失败处理
							// #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
							uni.showToast({
								title: '储存数据失败!',
								icon: "none",
								mask: !1
							})
							// #endif
						}
					});
				}
			},
			// 拨打电话。
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: this.info.phone,
					fail: (err) => {
						console.log("err", err)
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {

		.head {
			background-color: #A01613;

			image {
				width: 100%;
				height: 556rpx;
			}
		}

		.foot-section {
			background-color: #A11612;
			padding: 26rpx 20rpx;

			.bottom-section {
				background-color: #FFF5F4;
				border-radius: 10rpx;
				overflow: hidden;


				.comTop {
					@include flexY;
					@include flexJ;
					padding-top: 90rpx;
					text-align: center;

					text {
						font-size: 32rpx;
						line-height: 54rpx;
						color: #333333;
						font-weight: 500;
					}

					.phone,
					.email {
						@include flexX;
						@include flexJ;

						image {
							width: 44rpx;
							height: 44rpx;
							margin-right: 18rpx;
						}
					}

					.phone {
						margin: 80rpx 0 20rpx;
					}

					.email {
						margin-bottom: 150rpx;
					}
				}

				.code-wrap {
					@include flexX;
					@include flexJ;
					margin-bottom: 63rpx;

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

		}


	}
</style>
