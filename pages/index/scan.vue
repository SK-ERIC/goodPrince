<template>
	<view class="container">
			<view class="img-section">
				<image class="scan-logo" src="https://wxhyx-cdn.aisspc.cn/static/scan_logo.png" mode=""></image>
			</view>
			<view class="scan-section">
				<image class="scan-bg" src="https://wxhyx-cdn.aisspc.cn/static/scan_bg.png" mode=""></image>
				<view class="scan-inner">
					<view class="scan-code">
						<text>扫一扫店家二维码</text>
						<image class="scan-btn" src="https://wxhyx-cdn.aisspc.cn/static/scan_btn.png" mode="" @click="scanQRCode"></image>
					</view>
					
					<view class="img-section">
						<image class="scan-tip" src="https://wxhyx-cdn.aisspc.cn/static/scan_tip.png" mode=""></image>
					</view>
					
					<view class="scan-btm-section">
						<view class="img-section">
							<image class="scan-btm" src="https://wxhyx-cdn.aisspc.cn/static/scan_btm.png" mode=""></image>
						</view>
						
						<view class="text-section">
							<text>{{ footInfo.copyright }}</text>
							<text>{{ footInfo.address }}</text>
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
				footInfo: {},
			}
		},
		created() {
			this.getFootConfig();
		},
		methods: {
			scanQRCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
					// scanType: ['qrCode'],
				   success: res => {
						console.log("scanCode", res)
						 if(res.scanType == "WX_CODE") {
							 uni.navigateTo({
							 	url: `/${res.path}`
							 })
						 } else {
							 uni.showToast({
								 title: '请扫描正确的小程序码',
								 icon: "none"
							 })
						 }
				    },
					 fail: (err) => {
					 	this.$common.errorToShow(err)
					 }
				});
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
	
	.container{
		height: 100vh;
		@include flexY;
		@include flexA;
		
		.img-section{
			@include flexX;
			.scan-logo{
				width: 272rpx;
				height: 124rpx;
				margin-top: 130rpx;
			}
		}
		.scan-section{
			
			width: 100%;
			flex: 1;
			position: relative;
			.scan-bg{
				width: 100%;
				height: 100%;
			}
			
			.scan-inner{
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				bottom: 0;
				z-index: 2;
				@include flexY;
				@include flexA;
				
				
				.scan-code{
					@include flexY;
					@include flexA;
					padding-top: 110rpx;
					text{
						font-size: 30rpx;
						font-weight: 500;
						color: #666666;
						line-height: 46rpx;
						margin-bottom: 30rpx;
					}
					.scan-btn{
						width: 268rpx;
						height: 308rpx;
					}
				}
			
				
				.scan-tip{
					width: 398rpx;
					height: 75rpx;
					
					margin-top: 130rpx;
				}
				
				.scan-btm-section{
					position: absolute;
					width: 100%;
					left: 0;
					bottom: 68rpx;
					
					.scan-btm{
						width: 680rpx;
						height: 36rpx;
					}
					
					.text-section{
						@include flexY;
						@include flexA;
						font-size: 20rpx;
						font-weight: 400;
						color: #ADB1B3;
						line-height: 30rpx;
						margin-top: 10rpx;
						
					}
				}
				
			
			
			
			
			}
		}
		
	}
	
	
	
	
</style>
