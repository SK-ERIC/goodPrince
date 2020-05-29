<template>
	<view class="container">

		<view class="logo">
			<image src="https://wxhyx-cdn.aisspc.cn/static/logo.png" mode=""></image>
		</view>

		<view class="form-section">
			<button class="btn" :class="{btnColor :mobile.phone}" type="default" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
				{{ mobile.phone || "点击获取您的手机号" }}
			</button>
		</view>

		<view class="form-section">
			<view class="form-item-l">
				<input type="number" v-model="mobile.code" maxlength="6" placeholder="请输入验证码" />
			</view>
			<view class="form-item-r" @tap="!safety.state ? fnGetPhoneCode() : ''">
				{{!safety.state&&'获取验证码'||(safety.time+' s')}}
			</view>
		</view>

		<view class="btn-section">
			<button type="default" class="cu-btn loginBtn" :disabled="!loginMobile" @tap="fnLogin">
				登录
			</button>
		</view>

		<!-- btm -->
		<view class="btm-section text-center">
			<text>{{ footInfo.copyright }}</text>
			<text>
				{{ footInfo.address }}
			</text>
		</view>

	</view>
</template>

<script>
	const WxAuth = require('@/config/WxAuth');
	export default {
		data() {
			return {
				mobile: {
					phone: '',
					code: ''
				},
				// 验证码
				safety: {
					time: 60,
					state: false,
					interval: ''
				},
				loginMobile: false,
				phoneReg: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
				footInfo: {}
			}
		},
		onLoad() {
			this.getFootConfig()
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
				uni.showLoading({
					title: "登陆中...",
					mask: true
				})
				this.$http.postMobilelogin({
					mobile: this.mobile.phone,
					captcha: this.mobile.code
				}, res => {
					if (res.code == 1) {
						this.$db.set("userinfo", res.data.userinfo);
						uni.hideLoading()
						uni.showToast({
							icon: "success",
							title: "登录成功"
						})
						setTimeout(() => {
							uni.navigateTo({
								url: "/pages/home/home"
							})
						}, 500)
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			// 获取用户电话
			getPhoneNumber(e) {
				uni.showLoading({
					title: "获取中...",
					mask: true
				})
				let {
					errMsg,
					iv,
					encryptedData
				} = e.detail;
				let confirm_unionid = uni.getStorageSync('confirm_unionid') || '';
				if (errMsg == "getPhoneNumber:ok") { // 同意授权
					uni.hideLoading()
					// 检查登录态是否过期。
					WxAuth.checkSession().then(code => {
						//code, iv, encryptedData 传给服务器解析，得到手机号信息
						const data = {
							code,
							iv,
							encryptedData,
							confirm_unionid
						};
						this.$http.getMobile(data, res => {
							if (res.code == 1) {
								uni.showToast({
									title: "授权成功！"
								})
								this.mobile.phone = res.data.mobile;
								uni.hideToast();
							}
						}).catch(err => {
							console.log(err)
						})
					}).catch(console.log)
				} else {
					// 拒绝手机号授权
					uni.showToast({
						title: '手机号授权失败！',
						icon: 'none'
					});
				}
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
							// 发送验证码
							this.$http.postSendCode({
								mobile: this.mobile.phone
							}, res => {
								if (res.code == 1) {
									uni.showToast({
										title: "发送成功",
										icon: "success"
									})
								} else {
									this.$common.errorToShow(res.msg);
								}
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
			getFootConfig() {
				this.$http.getFootConfig({}, res => {
					if (res.code == 1) {
						this.footInfo = res.data;
					} else {
						this.$common.errorToShow(res.msg)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		min-height: 100vh;
		background-image: url("https://wxhyx-cdn.aisspc.cn/static/login_bg.png");
		background-size: 100% 100%;
		position: relative;

		&.type-server {
			background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2373850336,630695277&fm=26&gp=0.jpg");
		}

		.server-section {
			@include flexX;
			margin: 0 auto;
			width: 630rpx;
			height: 93rpx;
			border: 1rpx solid #B2ADA8;
			border-radius: 14rpx;
			margin-bottom: 24rpx;

			input {
				padding-left: 60rpx;
				color: #FFFFFF;
			}

			.holder {
				font-size: 28rpx;
				color: #75767D;
			}

			.item-l {
				font-size: 34rpx;
				color: #FFFFFF;
				font-weight: 800;
				margin-left: 40rpx;
				width: 110rpx;
				white-space: nowrap;
			}

			.item-r {
				@include flexX;

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

		.logo {
			@include flexX;
			@include flexJ;
			width: 100%;
			padding-top: 164rpx;

			&.server {
				padding-top: 154rpx;
				margin-bottom: 0;
			}

			image {
				width: 200rpx;
				height: 200rpx;
			}

			margin-bottom: 123rpx;
		}

		.platform {
			font-size: 40rpx;
			font-weight: 500;
			font-style: italic;
			color: #FFFFFF;
			margin-top: 37rpx;
			margin-bottom: 66rpx;
			@include flexY;
			text-align: center;
			line-height: 1;

			text {
				&:first-child {
					margin-bottom: 20rpx;
				}
			}
		}

		.switch-text {
			@include flexX;
			@include flexJ;

			font-size: 30rpx;
			color: #F75347;
			text-align: center;
			margin: 50rpx auto 0;

			.cuIcon-roundrightfill {
				margin-left: 10rpx;
			}
		}

		.form-section {
			@include flexX;
			margin: 0 auto;
			width: 540rpx;
			height: 98rpx;
			background-color: #2B2C3A;
			border-radius: 49rpx;
			border: 2rpx solid #4C4E5E;
			margin-bottom: 46rpx;

			.item-l {}

			.btn {
				border: none;
				background-color: #2B2C3A;
				color: #747688;
				border-radius: 49rpx;
				margin-left: 0;
				font-size: 34rpx;
				padding-left: 50rpx;

				&.btnColor {
					color: #FFFFFF;
				}
			}

			input {
				padding: 0 50rpx;
				height: 98rpx;
				color: #FFFFFF;
			}

			.form-item-l {
				input {
					padding-right: 25rpx;
				}
			}

			.form-item-r {
				word-break: keep-all;
				font-size: 34rpx;
				color: #D82A2B;
				margin-right: 50rpx;
			}
		}

		.btn-section {
			@include flexX;
			@include flexJ;
			padding-top: 40rpx;

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


		.btm-section {
			background-image: url("https://wxhyx-cdn.aisspc.cn/static/cm_btm_bg.png");
			background-size: 100% 100%;
			@include flexY;
			position: absolute;
			width: 100%;
			left: 0;
			bottom: 0;
			padding-top: 40rpx;
			height: 188rpx;
			font-size: 22rpx;
			color: #6F7984;
			line-height: 40rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
		}




	}
</style>
