<template>
	<view class="container">

		<view class="info-section type-img">
			<view class="info-item-l">
				头像
			</view>
			<view class="info-item-r">
				<view class="img-inner" @tap="chooseImage">
					<image class="img" :src="userInfo.avatar" mode=""></image>
				</view>
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				昵称
			</view>
			<view class="info-item-r">
				<input type="text" maxlength="10" v-model="userInfo.nickname" placeholder="请填写..." />
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				年龄
			</view>
			<view class="info-item-r type-picker" @click="showTimePicker">
				<text v-if="userInfo.age || userInfo.age=='0'">{{ userInfo.age }} 岁</text>
				<text v-else>未选择</text>
				<text class="cuIcon-unfold"></text>
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				性别
			</view>
			<view class="info-item-r type-picker" @click="openActionSheet">
				{{ gender }}
				<text class="cuIcon-unfold"></text>
			</view>
		</view>
		<view class="info-section">
			<view class="info-item-l">
				手机号码
			</view>
			<view class="info-item-r">
				{{ userInfo.mobile }}
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="info-section">
			<view class="info-item-l">
				城市
			</view>
			<view class="info-item-r type-picker">
				<picker class="addressPicker" mode="region" @change="addressPickerChange" :value="value">
					<text v-if="userInfo.province && userInfo.province != 'null '">{{ userInfo.province }} - {{ userInfo.city }}</text>
					<text v-else>未选择</text>
				</picker>
				<text class="cuIcon-unfold"></text>
			</view>
		</view>
		<!-- #endif -->

		<!-- btn -->
		<view class="cu-btn save-btn" @click="confirmSave">
			保存
		</view>

		<tui-actionsheet :show="showActionSheet" :item-list="itemList" :tips="tips" :is-cancel="false" @click="itemClick"
		 @cancel="closeActionSheet"></tui-actionsheet>

		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" :unitTop="unitTop" radius @confirm="change"></tui-datetime>


	</view>
</template>

<script>
	import tuiActionsheet from '@/components/tui-actionsheet/tui-actionsheet.vue'
	import tuiDatetime from '@/components/tui-datetime/tui-datetime.vue'
	export default {
		components: {
			tuiActionsheet,
			tuiDatetime
		},
		data() {
			return {
				userInfo: {},
				value: [],
				showActionSheet: false,
				tips: "选择您的性别",
				itemList: [{
					id: 1,
					text: "男",
					color: "#2B2B2B"
				}, {
					id: 2,
					text: "女",
					color: "#2B2B2B"
				}, {
					id: 0,
					text: "不公开",
					color: "#2B2B2B"
				}],
				uploadImg: "", // 上传的头像地址	
				type: 2,
				startYear: 1980,
				endYear: 2020,
				cancelColor: '#888',
				color: '#5677fc',
				setDateTime: '',
				unitTop: false,

			}
		},
		computed: {
			gender() {
				let a = this.userInfo.gender;
				switch (a) {
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
			this.endYear = new Date().getFullYear()
			this.userInfo = this.$db.get("userinfo") || "";
			if (options.src) this.userInfo.avatar = options.src;
			if (options.tem) this.uploadImg = options.tem;
		},
		watch: {
			userInfo: {
				handler(newVal, oldVal) {
					this.userInfo = newVal;
				},
				deep: true
			}
		},
		methods: {
			showTimePicker() {
				this.$refs.dateTime.show();
			},
			change(e) {
				const age = this.endYear - e.year;
				this.$set(this.userInfo, `age`, age)
			},
			addressPickerChange(e) {
				this.$set(this.userInfo, `province`, e.detail.value[0]);
				this.$set(this.userInfo, `city`, e.detail.value[1]);
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
				this.$set(this.userInfo, `gender`, this.itemList[index].id);
				this.closeActionSheet();
			},
			openActionSheet() {
				this.showActionSheet = true
			},
			closeActionSheet() {
				this.showActionSheet = false
			},
			confirmSave() {
				uni.showLoading({
					title: "保存中...",
					mask: true
				})
				let {
					nickname,
					avatar,
					province,
					city,
					gender,
					age
				} = this.userInfo;

				let data = {
					nickname,
					avatar,
					province,
					city,
					gender,
					age
				}
				if (this.uploadImg) data.avatar = this.uploadImg;
				this.$http.postProfile(data, res => {
					uni.hideLoading()
					if (res.code == 1) {
						uni.showToast({
							icon: "success",
							title: "保存成功",
							mask: true
						})
						uni.hideToast()
						uni.navigateTo({
							url: "/pages/home/home?page=user"
						})

					} else {
						this.$common.errorToShow(res.msg)
					}
				})
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

				input {
					text-align: right;
				}

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
