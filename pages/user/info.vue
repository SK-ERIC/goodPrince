<template>
	<view class="container">

		<view class="info-section type-img">
			<view class="info-item-l">
				头像
			</view>
			<view class="info-item-r">
				<view class="img-inner" @tap="chooseImage">
					<image class="img" :src="info.avatar" mode=""></image>
				</view>
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				昵称
			</view>
			<view class="info-item-r">
				{{ info.nickname}}
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				年龄
			</view>
			<view class="info-item-r">
				{{ info.age }}
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				性别
			</view>
			<!-- <view class="info-item-r type-picker" @click="openActionSheet"> -->
			<view class="info-item-r">
				{{ gender }}
				<!-- <text class="cuIcon-unfold"></text> -->
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				手机号码
			</view>
			<view class="info-item-r">
				{{ info.mobile }}
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="info-section">
			<view class="info-item-l">
				城市
			</view>
			<view class="info-item-r type-picker">
				<picker class="addressPicker" mode="region" @change="addressPickerChange" :value="value">
					{{ info.province }} - {{ info.city }}
				</picker>
				<text class="cuIcon-unfold"></text>
			</view>
		</view>
		<!-- #endif -->

		<!-- btn -->
		<view class="cu-btn save-btn">
			保存
		</view>

		<tui-actionsheet :show="showActionSheet" :item-list="itemList" :tips="tips" :is-cancel="false" @click="itemClick"
		 @cancel="closeActionSheet"></tui-actionsheet>



	</view>
</template>

<script>
	import tuiActionsheet from '@/components/tui-actionsheet/tui-actionsheet.vue'
	export default {
		components: {
			tuiActionsheet
		},
		data() {
			return {
				
				info: {},
				value: [],
				showActionSheet: false,
				tips: "选择您的性别",
				itemList: [{
					text: "男",
					color: "#2B2B2B"
				}, {
					text: "女",
					color: "#2B2B2B"
				}, {
					text: "不公开",
					color: "#2B2B2B"
				}],
				uploadImg: "", // 上传的头像地址
			}
		},
		computed:{
			gender() {
				let a = this.info.gender;
				switch(a) {
					case 0:
					return "不公开";
					case 1:
					return "男";
					case 2:
					return "女"
				}
			}
		},
		onLoad(options) {
			console.log("options", options)
			this.info.avatar = options.src || "";
			this.uploadImg = options.tem || "";
			this.info = this.$db.get("userinfo") || ""
		},
		mounted() {
			console.log("mounted", this.uploadImg)
		},
		methods: {
			addressPickerChange(e) {
				this.info.province = e.detail.value[0]
				this.info.city = e.detail.value[1]
			},
			chooseImage() {
				this.$http.uploadImage(1, (res, tem) => {
					if (res.code == 1) {
						uni.navigateTo({
							url: `./cropper?src=${tem}`
						})
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			itemClick(e) {
				const index = e.index;
				this.info.gender = this.itemList[index].text;
				this.closeActionSheet();
			},
			openActionSheet() {
				this.showActionSheet = true
			},
			closeActionSheet() {
				this.showActionSheet = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		padding: 52rpx 45rpx 0;
		min-height: 100vh;
		position: relative;

		.info-section {
			height: 100rpx;
			@include flexSB;
			border-bottom: 2rpx solid #F3F3F3;

			&.type-img {
				height: 122rpx;

				.info-item-r {
					.img-inner {
						width: 100rpx;
						height: 100rpx;
						border: 4rpx solid #E8E8E8;
						border-radius: 50%;
						overflow: hidden;
						position: relative;

						&::before {
							content: "更换头像";
							width: 100%;
							height: 36rpx;
							background-color: rgba(0, 0, 0, .5);
							position: absolute;
							bottom: 0;
							left: 0;
							z-index: 1;
							color: #fff;
							line-height: 36rpx;
							font-size: 18rpx;
							text-align: center;
						}

						.img {
							width: 100rpx;
							height: 100rpx;
						}
					}
				}
			}

			.info-item-l {
				font-size: 32rpx;
				color: #9295A1;
				margin-left: 4rpx;
			}

			.info-item-r {
				font-size: 30rpx;
				color: #142340;
				margin-right: 8rpx;

				&.type-picker {
					@include flexX;
				}

				.cuIcon-unfold {
					color: #142340;
					margin-left: 15rpx;
				}
			}
		}

		.save-btn {
			width: 640rpx;
			height: 100rpx;
			line-height: 100rpx;
			background-color: #FF544C;
			color: #FFFFFF;
			border-radius: 50rpx;
			font-size: 34rpx;
			font-weight: 400;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 200rpx;
		}
	}
</style>
