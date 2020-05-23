<template>
	<view class="container" :class="{'type-server': !isClient}">

		<view class="logo" :class="{'server': !isClient}">
			<image src="http://qakj5dvcb.bkt.clouddn.com/static/logo.png" mode=""></image>
		</view>

		<view v-if="!isClient" class="platform">
			<text>无锡好印象-经营评价平台</text>
			<text>商家管理中心</text>
		</view>

		<view v-if="isClient" class="form-section">
			<!-- <input disabled type="number" v-model="mobile.phone" focus maxlength="11" placeholder="点击获取您的手机号" @getphonenumber="getPhoneNumber" /> -->
			<button class="btn" :class="{btnColor :mobile.phone}" type="default" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
				{{ mobile.phone || "点击获取您的手机号" }}
			</button>
		</view>

		<view v-else class="server-section">
			<view class="item-l">
				账号
			</view>
			<view class="item-r">
				<input type="number" v-model="mobile.phone" maxlength="11" placeholder="请输入手机号码..." placeholder-class="holder" />
			</view>
		</view>

		<view v-if="isClient" class="form-section">
			<view class="form-item-l">
				<input type="number" v-model="mobile.code" maxlength="6" placeholder="请输入验证码" />
			</view>
			<view class="form-item-r" @tap="!safety.state ? fnGetPhoneCode() : ''">
				{{!safety.state&&'获取验证码'||(safety.time+' s')}}
			</view>
		</view>

		<view v-else class="server-section">
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

		<view class="btn-section" :class="{'type-server': !isClient}">
			<button type="default" class="cu-btn loginBtn" :disabled="!loginMobile" @tap="fnLogin">
				登录
			</button>
		</view>

		<view v-if="!isClient" class="switch-text">
			<view @click="switchAuthen">
				实名入住平台<text class="cuIcon-roundrightfill"></text>
			</view>
		</view>

		<!-- btm -->
		<view class="btm-section text-center">
			<text>主办单位</text>
			<text>无锡市梁溪区市场监督局 无锡市梁溪区通江街道</text>
		</view>


	</view>
</template>

<script>
	const WxAuth = require('@/config/WxAuth');
	export default {
		data() {
			return {
				isClient: true, // 是否是用户
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
		onLoad(options) {
			if (options.login && options.login == "shop") {
				this.isClient = false
			}
			console.log("option", options)
			console.log("this.isClient", this.isClient)
		},
		methods: {
			// 登录按钮点击执行
			fnLogin() {
				console.log(JSON.stringify(this.mobile));
				uni.showLoading({
					title: "登陆中...",
					mask: true
				})
				setTimeout(() => {
					uni.hideLoading()
					if (this.isClient) {
						uni.switchTab({
							url: "/pages/index/index"
						})
					}
				}, 2000)


			},
			// 获取用户信息
			getUserInfo() {

			},
			// 获取用户电话
			getPhoneNumber(e) {
				console.log(e)
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
						// token
						this.$http.getUnionid(data, res => {
							console.log("getUnionid", res)
							// uni.showToast({
							// 	title: "授权成功！"
							// })
							// uni.hideLoading();
						})
						// api.wxmobile(data)
						// 	.then(res => {
						// 		uni.showToast({
						// 			title: '授权成功！'
						// 		});
						// 		this.process.phone = 1;
						// 		uni.hideLoading();
						// 		setTimeout(function() {
						// 			uni.navigateBack({
						// 				delta: 1 //上一级页面
						// 			});
						// 		}, 1000);
						// 	}).catch(err => {
						// 		console.log(err)
						// 	});
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
			// 实名认证
			switchAuthen() {
				uni.navigateTo({
					url: "/pages/login/authentication"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		min-height: 100vh;
		background-image: url("http://qakj5dvcb.bkt.clouddn.com/static/login_bg.png");
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
			@include flexY;
			@include flexJ;
			border-top: 1rpx solid #414449;
			width: 680rpx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 80rpx;
			padding-top: 45rpx;
			font-size: 26rpx;
			color: #6F7984;
			line-height: 40rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
		}




	}
</style>
