<template>
	<view class="container">
		<view class="check-section">
			<image class="img" :src="info.pic" mode=""></image>
			<view class="text-inner">
				<view class="text-l">
					公司名称
				</view>
				<view class="text-r">
					{{ info.CompanyName }}
				</view>
			</view>
			<view class="text-inner">
				<view class="text-l">
					法人姓名
				</view>
				<view class="text-r">
					{{ info.legalPerson }}
				</view>
			</view>
			<view class="text-inner">
				<view class="text-l">
					办理人姓名
				</view>
				<view class="text-r">
					{{ info.handleName }}
				</view>
			</view>
			<view class="text-inner">
				<view class="text-l">
					手机号码
				</view>
				<view class="text-r">
					{{ info.mobilePhone }}
				</view>
			</view>
		</view>
		
		<view class="btn-section">
			<button type="default" class="cu-btn btn">变更实名认证</button>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				info: {
					pic: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
					CompanyName: "月玲珑广式早茶",
					legalPerson: "王**",
					handleName: "刘**",
					mobilePhone: "176****1906",
				}
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';
	.container{
		.check-section{
			padding: 30rpx 65rpx 0;
			.img{
				width: 100%;
				height: 336rpx;
				margin-bottom: 70rpx;
			}
			.text-inner{
				@include flexX;
				margin-bottom: 36rpx;
				.text-l{
					flex: .3;
					font-size: 30rpx;
					font-weight: 800;
					color: #363636;
					
				}
				.text-r{
					flex: .7;
					font-size: 30rpx;
					font-weight: 500;
					color: #142340;
				}
			}
		}
		
		.btn-section{
			@include flexX;
			@include flexJ;
			padding-top: 130rpx;
			.btn{
				width: 590rpx;
				height: 100rpx;
				background-color: #F75347;
				color: #ffffff;
				border-radius: 50rpx;
				font-size: 34rpx;
				font-weight: 500;
			}
		}
		
	}
</style>
