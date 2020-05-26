<template>
	<view class="container">

		<!-- head -->
		<view class="head-section" :class="{safearea: isShowSafearea}">
			<view class="navBack">
				<!-- <text class="cuIcon-back"></text> -->
				<text class="title">{{ topLeftText }}</text>
			</view>
			<image class="img-bg" src="http://qakj5dvcb.bkt.clouddn.com/static/user_head_bg.png" mode=""></image>
			<view class="set-inner">
				<view class="set-item-l" @click="_switchToMsg">
					<image src="http://qakj5dvcb.bkt.clouddn.com/static/user_msg.png" mode=""></image>
					<text>99+</text>
				</view>
				<view class="set-item-r" @click="_switchEditInfo">
					<image src="http://qakj5dvcb.bkt.clouddn.com/static/user_set.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- user -->
		<view class="user-section">
			<view class="user-inner-t">
				<view class="item-l">
					<image :src="userInfo.avatar" mode=""></image>
				</view>
				<view class="item-r">
					<text class="name">{{ userInfo.nickname }}</text>
					<text class="address" v-show="userInfo.province">{{ userInfo.province }} {{ userInfo.city }}</text>
				</view>
			</view>
			<view class="user-inner-b grid col-3">
				<view class="info-cont" @click="_switchlatelyShop">
					<text class="info-num">{{ userInfo.beenCount }}</text>
					<text class="info-text">去过的店</text>
				</view>
				<view class="info-cont" @click="_switchlatelyPhoto">
					<text class="info-num">{{ userInfo.commentCount }}</text>
					<text class="info-text">拍过的店</text>
				</view>
				<view class="info-cont">
					<text class="info-num">{{ userInfo.commentZan }}</text>
					<text class="info-text">获赞</text>
				</view>
			</view>
		</view>
		<!-- 最近去过的店 -->
		<view class="lately-section">
			<view class="title-inner">
				<view class="title-item-l">
					最近去过的店
				</view>
				<view class="title-item-r" @click="_switchlatelyShop">
					全部
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<!-- 列表 -->
			<lately-shop-list @switchShopHome="_switchShopHome" :latelyList="latelyList"></lately-shop-list>
		</view>
		<!-- 最近拍过的店 -->
		<view class="photo-section">
			<view class="title-inner">
				<view class="title-item-l">
					最近拍过的店
				</view>
				<view class="title-item-r" @click="_switchlatelyPhoto">
					全部
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<!-- 列表 -->
			<lately-photo-list @switchShopHome="_switchShopHome" :photoList="photoList" @changeLike="_changeLike" @changeFullText="_changeFullText"></lately-photo-list>
		</view>

		<!-- foot -->
		<foot :btm="false"></foot>
		<!-- pop -->
		<pop ref="popup" :popCont="popCont"></pop>

	</view>
</template>

<script>
	import latelyShopList from '../component/latelyShopList';
	import latelyPhotoList from '../component/latelyPhotoList';
	import foot from '../component/foot';
	import pop from '../component/pop';
	import {
		mapMutations
	} from 'vuex'
	export default {
		components: {
			latelyShopList,
			latelyPhotoList,
			foot,
			pop
		},
		props: {
			userInfo: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				topLeftText: "我的个人中心",
				latelyList: [],
				photoList: [],
				popCont: "您今天对此条留言的点赞次数已达上限",
				isShowSafearea: false 
			}
		},
		created() {
			this.postCommentShop();
			this.postBeenShop();
		},
		mounted() {
			this.isShowSafearea = this.$common.checkPlatFromFunc();
		},
		methods: {
			postCommentShop() {
				this.$http.postCommentShop({
					user_id: this.userInfo.user_id
				}, res=>{
					if(res.code == 1) {
						this.photoList = res.data;
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			postBeenShop() {
				this.$http.postBeenShop({
					user_id: this.userInfo.user_id
				}, res=>{
					if(res.code == 1) {
						this.latelyList = res.data;
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			previewImage(v, e) {
				const current = e.currentTarget.dataset.src;
				uni.previewImage({
					urls: v,
					current
				})
			},
			_changeLike(val) {
				console.log("user--val", val)
				const {
					item,
					bl,
					index
				} = val;
				let num = parseInt(this.photoList[index].like_num);
				if (bl) {
					this.photoList[index].like = bl;
					this.photoList[index].like_num = num + 1;
				} else {
					// if (num > 0) {
					// 	this.photoList[index].like_num = num - 1;
					// }
					this.$refs.popup.$refs.pop.open();
				}
			},
			_changeFullText(val) {
				const {
					e
				} = val;
				const index = e.currentTarget.dataset.index;
				const str = e.currentTarget.dataset.text;
				for (let i = 0; i < this.photoList.length; i++) {
					this.photoList[index].fullText = str == "全文" ? "收起全文" : "全文";
				}
			},
			_switchToMsg() {
				uni.navigateTo({
					url: "/pages/user/msg"
				})
			},
			_switchEditInfo() {
				uni.navigateTo({
					url: "/pages/user/info"
				})
			},
			_switchlatelyPhoto() {
				uni.navigateTo({
					url: `/pages/user/latelyPhoto?total=${this.userInfo.commentCount}`
				})
			},
			_switchlatelyShop() {
				uni.navigateTo({
					url: `/pages/user/latelyShop?total=${this.userInfo.beenCount}`
				})
			},

			_switchShopHome(val) {
				this.$emit("click", val)
				// const id = item.id
		
				// uni.navigateTo({
				// 	url: "/pages/home/home?page=shop",
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';
	.container {
		background-color: #F8F8FA;
		

		// head
		.head-section {
			width: 100%;
			height: 344rpx;
			// height: calc(344rpx + var(--status-bar-height));
			// height: 370rpx;
			position: relative;
			&.safearea{
				height: 380rpx;
			}

			.navBack {
				position: absolute;
				left: 27rpx;
				top: 60rpx;
				display: inline-flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 36rpx;
				color: #282828;
				z-index: 1;

				.cuIcon-back {
					margin-right: 30rpx;
				}
			}

			.img-bg {
				width: 100%;
				height: 100%;
			}

			.set-inner {
				position: absolute;
				right: 47rpx;
				bottom: 150rpx;
				@include flexSB;

				.set-item-l {
					position: relative;
					margin-right: 35rpx;

					image {
						width: 44rpx;
						height: 44rpx;
					}

					text {
						position: absolute;
						top: -5rpx;
						right: -20rpx;
						font-size: 15rpx;
						font-weight: 400;
						color: #FEFFFF;
						height: 24rpx;
						line-height: 24rpx;
						border-radius: 12rpx;
						background-color: #FF5C5C;
						padding: 0 6rpx;
					}

				}

				.set-item-r {
					image {
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}

		// userInfo
		.user-section {
			@include flexY;
			position: relative;
			margin-top: -30rpx;
			border-radius: 30rpx 30rpx 0 0;
			background-color: #F8F9FA;

			.user-inner-t {
				@include flexX;
				padding-top: 30rpx;

				.item-l {
					margin-left: 30rpx;

					image {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
					}
				}

				.item-r {
					@include flexY;
					justify-content: space-around;
					margin-left: 24rpx;
					height: 120rpx;

					.name {
						font-size: 44rpx;
						color: #212223;
						font-weight: bold;
					}

					.address {
						font-size: 28rpx;
						color: #757676;
						margin-top: 22prx;
					}
				}
			}

			.user-inner-b {

				.info-cont {
					@include flexY;
					text-align: center;
					padding: 45rpx 0 60rpx;

					.info-num {
						font-size: 36rpx;
						color: #282828;
						font-family: Arial;
						font-weight: 400;
					}

					.info-text {
						font-size: 26rpx;
						color: #6A6F74;
						font-weight: 400;
						margin-top: 16rpx;
					}
				}
			}
		}

		// 最近去过的店
		.lately-section {
			margin: 0 30rpx 24rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;

			/deep/.shop-section {
				margin: 0;

				.lately-cont:nth-child(2) {
					margin-bottom: 0;
				}
			}

			.title-inner {
				@include flexSB;
				padding-top: 10rpx;
				height: 100rpx;

				.title-item-l {
					margin-left: 30rpx;
					font-size: 36rpx;
					font-weight: bold;
					font-style: italic;
					color: rgba(40, 40, 40, 1);
					background: linear-gradient(0deg, rgba(153, 153, 255, 1) 0%, rgba(102, 204, 255, 1) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					letter-spacing: 2rpx;
				}

				.title-item-r {
					font-size: 28rpx;
					font-weight: 400;
					color: #282828;
					margin-right: 30rpx;
				}
			}


		}

		// 最近拍过的店
		.photo-section {
			margin: 0 30rpx 24rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;

			/deep/.photo-list .photo-cont {
				padding-top: 0;
			}

			.title-inner {
				@include flexSB;
				padding-top: 10rpx;
				height: 100rpx;

				.title-item-l {
					margin-left: 30rpx;
					font-size: 36rpx;
					font-weight: bold;
					font-style: italic;
					color: rgba(40, 40, 40, 1);
					background: linear-gradient(0deg, rgba(153, 153, 255, 1) 0%, rgba(102, 204, 255, 1) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					letter-spacing: 2rpx;
				}

				.title-item-r {
					font-size: 28rpx;
					font-weight: 400;
					color: #282828;
					margin-right: 30rpx;
				}
			}


		}
	}
</style>
