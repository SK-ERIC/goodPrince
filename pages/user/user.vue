<template>
	<view class="container">

		<!-- head -->
		<view class="head-section">
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
					<text class="info-num">99</text>
					<text class="info-text">去过的店</text>
				</view>
				<view class="info-cont" @click="_switchlatelyPhoto">
					<text class="info-num">99</text>
					<text class="info-text">拍过的店</text>
				</view>
				<view class="info-cont">
					<text class="info-num">99</text>
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
			<lately-shop-list :latelyList="latelyList">
			</lately-shop-list>
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

			<lately-photo-list :photoList="photoList" @changeLike="_changeLike" @changeFullText="_changeFullText"></lately-photo-list>

		</view>

		<!-- foot -->
		<foot :btm="false"></foot>
		<!-- pop -->
		<pop ref="popup" :popCont="popCont"></pop>


	</view>
</template>

<script>
	import latelyShopList from '../component/latelyShopList'
	import latelyPhotoList from '../component/latelyPhotoList'
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
				// userInfo: {
				// 	uPic: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
				// 	name: "王晓璐",
				// 	address: "江苏 无锡",
				// 	visit: 64,
				// 	photo: 93,
				// 	praise: 23,
				// },
				latelyList: [{
						id: 0,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						browse: 99,
						title: "布达拉宫布达佩斯大饭店布达拉宫布达佩斯大饭店...",
						address: "无锡市梁溪区火车站北广场34无锡市梁溪区火车站北广场34",
						mainCont: "火锅 牛肉火锅  闽菜",
						rate: 4,
						date: "5月6日"
					},
					{
						id: 1,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						browse: 69,
						title: "牛品福潮汕牛肉火锅牛品福潮汕牛肉火锅牛品福潮汕牛肉火锅",
						address: "无锡市梁溪区火车站北广场34无锡市梁溪区火车站北广场34",
						mainCont: "火锅 牛肉火锅  闽菜",
						rate: 5,
						date: "1月32日"
					}
				],
				photoList: [{
					id: 0,
					shopName: "布达佩斯大饭店（东大门店）",
					date: "5月6日",
					like: false,
					like_num: 3,
					rate: 3,
					content: `茫茫西部戈壁滩，他头戴牛仔帽，嘴角叼着烟，左轮手枪插在腰间，右手拉着缰绳，脸庞在夕阳余晖的映照下沧桑无限。茫茫茫茫西部戈壁滩，他头戴牛仔帽，嘴角叼着烟，左轮手枪插在腰间，右手拉着缰绳，脸
							庞在夕阳余晖的映照下沧桑无限。茫茫茫茫西部戈壁滩，他头戴牛仔帽，嘴角叼着烟，左轮手枪插在腰间，右手拉着缰绳，脸庞在夕阳余晖的映照下沧桑无限。茫茫...`,
					fullText: "全文",
					picList: [
						"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
					],
					reply: "欢迎亲的任可，欢迎下次再来哦 欢迎亲的任可，欢迎下次再来哦 欢迎亲的任可，欢迎下次再来哦"
				}],
				popCont: "您今天对此条留言的点赞次数已达上限"
			}
		},
		onLoad() {
			
		},
		mounted() {

		},
		methods: {
			previewImage(v, e) {
				const current = e.currentTarget.dataset.src;
				uni.previewImage({
					urls: v,
					current
				})
			},
			_changeLike(val) {
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
					url: "/pages/user/latelyPhoto"
				})
			},
			_switchlatelyShop() {
				uni.navigateTo({
					url: "/pages/user/latelyShop"
				})
			},

			_switchShopHome(item) {
				this.$emit("click", item)
				// const id = item.id
				// this.shopId(id)
				// // uni.switchTab({
				// // 	url: "/pages/index/index"
				// // })
				// uni.navigateTo({
				// 	url: "/pages/home/home?page=shop",
				// 	// url: "/pages/index/index"
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
			position: relative;

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
				bottom: 158rpx;
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
