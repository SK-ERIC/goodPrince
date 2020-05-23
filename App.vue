<script>
	export default {

		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {

			uni.getProvider()


			uni.login({
				provider: 'weixin',
				success: res => {
					
					if (res.errMsg == "login:ok") {
						uni.setStorageSync('code', res.code);
						this.$http.wxLogin({
							code: res.code
						}, msg => {
							this.$db.set("userinfo", msg.data.userinfo)
							this.$db.set("confirm_unionid", msg.data.confirm_unionid)
						})

					} else {
						// reject(res);
					}
				},
				fail: function(err) {
					// reject(res);
					uni.showToast({
						icon: none,
						title: "授权失败！"
					})
					uni.hideLoading()
				}
			});
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import 'colorui/main.css';
	@import 'colorui/icon.css';
	@import 'style/icon.css';

	/* @import 'style/app.scss'; */
	page {
		background-color: #fff;
	}
</style>
