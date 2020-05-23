<template>
	<view class="container">
		<image class="img" src="http://qakj5dvcb.bkt.clouddn.com/static/accountChange.png" mode=""></image>
		<view class="account-section"  v-if="Unbind">
			<text>1870****1906</text>
		</view>
		<view class="splitCls" v-if="!Unbind"></view>
		<view class="server-section">
			<view class="item-l">
				手机号码
			</view>
			<view class="item-r">
				<input type="number" v-model="mobile.phone" maxlength="11" :placeholder="holder" placeholder-class="holder" />
			</view>
		</view>

		<view class="server-section">
			<view class="item-l">
				验证码
			</view>
			<view class="item-r">
				<input type="number" maxlength="6" v-model="mobile.code" placeholder="请输入验证码..." />
				<text class="phoneCode" @tap="!safety.state ? fnGetPhoneCode() : ''">
					{{!safety.state&&'获取验证码'||(safety.time+' s')}}
				</text>
			</view>
		</view>

		<view class="btn-section">
			<button type="default" class="cu-btn loginBtn" :disabled="!loginMobile" @tap="fnLogin">
				{{ btnText }}
			</button>
		</view>

		<view class="tip-section" v-if="Unbind">
			手机号码无法使用 <text class="red" @click="_switchToAuth">点击此处</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: {
					phone: '',
					code: ''
				},
				Unbind: true,
				// 验证码
				safety: {
					time: 60,
					state: false,
					interval: ''
				},
				loginMobile: false,
				phoneReg: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
			}
		},
		computed: {
			btnText() {
				return this.Unbind ? "下一步" : "保存"
			},
			holder() {
				return this.Unbind ? "请输入原手机号解绑..." : "请输入新手号..."
			}
		},
		watch: {
			/**
			 * 监听手机登录数值
			 */
			mobile: {
				handler(newValue) {
					if (this.phoneReg.test(newValue.phone) && newValue.code.length === 6) {
						this.loginMobile = true;
					} else {
						this.loginMobile = false;
					}
				},
				deep: true
			},
				
		},
		methods: {
			// 登录按钮点击执行
			fnLogin() {
				console.log(JSON.stringify(this.mobile));
				let title;

				if (this.Unbind) {
					title = "解绑中...";
					setTimeout(() => {
						uni.hideLoading()
						this.Unbind = false;
						this.mobile.phone = "";
						this.mobile.code = "";
					}, 2000)
				} else {
					title = "保存中..."
					setTimeout(() => {
						uni.hideLoading()
						uni.navigateTo({
							url: "/pages/shop/changeSuccess"
						})
					}, 2000)
				}
				uni.showLoading({
					title,
					mask: true
				})


			},
			// 获取验证码
			fnGetPhoneCode() {
				if (this.phoneReg.test(this.mobile.phone)) {
					uni.showToast({
						title: "正在发送验证码",
						icon: "loading",
						success: () => {
							// 成功后显示倒计时60s后可在点击
							this.safety.state = true;
							// 倒计时
							this.safety.interval = setInterval(() => {
								if (this.safety.time-- <= 0) {
									this.safety.time = 60;
									this.safety.state = false;
									clearInterval(this.safety.interval);
								}
							}, 1000);
							uni.showToast({
								title: "发送成功",
								icon: "success"
							})
						}
					})
				} else {
					uni.showToast({
						title: "手机号不正确",
						icon: "none"
					})
				}
			},
			_switchToAuth() {
				uni.navigateTo({
					url: "/pages/login/authentication"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.img {
		display: block;
		width: 118rpx;
		height: 118rpx;
		margin: 30rpx auto 25rpx;
	}
	
	.splitCls{
		width: 100%;
		height: 100rpx;
	}

	.account-section {
		font-size: 32rpx;
		color: #142340;
		font-weight: 500;
		text-align: center;
		margin-bottom: 70rpx;

		text {
			position: relative;

			&::after {
				content: "当前";
				font-size: 16rpx;
				color: #FFFFFF;
				font-weight: 500;
				line-height: 1;
				padding: 4rpx 7rpx;
				background-color: #5280E0;
				border-radius: 10rpx;
				position: absolute;
				right: -55rpx;
				top: -16rpx;
			}
		}
	}

	.server-section {
		@include flexX;
		margin: 0 auto;
		width: 630rpx;
		height: 93rpx;
		border: 1rpx solid #B2ADA8;
		border-radius: 14rpx;
		margin-bottom: 24rpx;



		.holder {
			font-size: 28rpx;
			color: #75767D;
		}

		.item-l {
			font-size: 34rpx;
			color: #363636;
			font-weight: 500;
			margin-left: 40rpx;
			flex: .3;
			white-space: nowrap;
		}

		.item-r {
			@include flexX;
			flex: .7;

			.phoneCode {
				font-size: 28rpx;
				color: #FF473E;
				font-weight: 500;
				margin-right: 25rpx;
				white-space: nowrap;
				border-left: 1rpx solid #FF473E;
				padding-left: 12rpx;
			}
		}
	}

	.btn-section {
		@include flexX;
		@include flexJ;
		padding-top: 100rpx;

		&.type-server {
			padding-top: 53rpx;
		}

		.loginBtn {
			width: 520rpx;
			height: 98rpx;
			background-color: #D82A2B;
			border-radius: 49rpx;
			color: #FFFFFF;
			font-size: 34rpx;
			margin: 0 auto;
		}
	}

	.tip-section {
		text-align: center;
		font-size: 30rpx;
		color: #363636;
		margin-top: 60rpx;
		font-weight: 500;

		.red {
			color: #F75347;
			margin-left: 12rpx;
		}
	}
</style>
