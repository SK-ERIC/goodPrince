<template>
	<view class="container">
		<text class="one">欢迎使用 无锡好印象-经营评价平台</text>
		<text class="two">请确认授权以下信息</text>
		<text class="three">获取你的公开信息（昵称、头像等）</text>
		<view class="btn-section">
			<button type="default" class="cu-btn btn" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">微信授权</button>
		</view>
	</view>
</template>

<script>
	const WxAuth = require('@/config/WxAuth');
	export default {
		data() {
			return {

			}
		},
		methods: {
			/**
			 * 微信授权 uni.getUserInfo
			 */
			handleGetUserInfo(e) {
				console.log("e", e)
				let confirm_unionid = uni.getStorageSync('confirm_unionid') || '';
				let {
					errMsg,
					iv,
					encryptedData
				} = e.detail;
				if (errMsg == 'getUserInfo:ok') { // 同意授权
					uni.hideLoading()
					// 检查登录态是否过期。
					WxAuth.checkSession().then(code => {
						//code, iv, encryptedData 传给服务器解析，得到用户信息
						let data = {
							code,
							iv,
							encryptedData,
							confirm_unionid,
							loginType: 'WXMA'
						}

						return this.$http.getUnionid(data, res => {
							uni.showToast({
								title: "授权成功！"
							})
							uni.hideLoading();
						})

					})
					.then(result => {
						//result： userInfo、token
						if (result.data.statusCode == 200) {
							// if (result.data.code == 200) {
							// 	//临时登录凭证 code 只能使用一次,故刷新code;
							// 	WxAuth.onLogin();
							// 	//更新用户信息
							// 	// let token = result.data.data.token;
							// 	// let userInfo = result.data.data;
							// 	// let userInfoNew = { ...userInfo.user,
							// 	// 	is_vip
							// 	// };
							// 	// uni.setStorageSync('token', token);
							// 	// uni.setStorageSync('userInfo', userInfoNew);
							// 	uni.showToast({
							// 		title: '授权成功！'
							// 	});

							// 	if (userInfo.user.mobile) {

							// 		uni.hideLoading()
							// 		// setTimeout(function() {
							// 		// 	uni.navigateBack({
							// 		// 		delta: 1
							// 		// 	});
							// 		// }, 1000);
							// 	} else {
							// 		uni.hideLoading()
							// 	}
							// } else {
							// 	console.log("获取用户信息: 老用户")
							// }

						} else {
							console.log("获取用户信息失败")
						}
					}).catch(console.log)
				} else {
					// 拒绝授权
					uni.showToast({
						title: '授权失败！',
						icon: 'none'
					});
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;

		.one,
		.two,
		.three {
			margin-left: 80rpx;
			font-family: Source Han Sans CN;
		}

		.one {
			font-size: 36rpx;
			color: #333333;
			font-weight: 500;
			margin-top: 378rpx;
		}

		.two {
			font-size: 36rpx;
			color: #333333;
			font-weight: 400;
			margin-top: 56rpx;
		}

		.three {
			font-size: 30rpx;
			color: #999999;
			font-weight: 400;
			margin-top: 20rpx;
		}

		.btn-section {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 78rpx;

			.btn {
				width: 590rpx;
				height: 98rpx;
				border-radius: 14rpx;
				background-color: #07C160;
				color: #fff;
				font-size: 34rpx;
				font-weight: 500;
			}
		}
	}
</style>
