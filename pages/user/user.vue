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
					<image :src="userInfo.uPic" mode=""></image>
				</view>
				<view class="item-r">
					<text class="name">{{ userInfo.name }}</text>
					<text class="address">{{ userInfo.address }}</text>
				</view>
			</view>
			<view class="user-inner-b grid col-3">
				<view class="info-cont" @click="_switchlatelyShop">
					<text class="info-num">{{ userInfo.visit }}</text>
					<text class="info-text">去过的店</text>
				</view>
				<view class="info-cont" @click="_switchlatelyPhoto">
					<text class="info-num">{{ userInfo.photo }}</text>
					<text class="info-text">拍过的店</text>
				</view>
				<view class="info-cont">
					<text class="info-num">{{ userInfo.praise }}</text>
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
			<view class="lately-list">
				<view class="lately-cont" v-for="(item, index) in latelyList" :key="index" @click="_switchShopHome(item)">
					<view class="item-l">
						<image class="img" :src="item.logo" mode=""></image>
						<text class="browse">浏览: {{ item.browse }}</text>
					</view>
					<view class="item-r">
						<view class="item-cont-t">
							<text class="title">{{ item.title }}</text>
							<text class="address">
								<text>地址·</text>
								{{ item.address }}
							</text>
						</view>
						<view class="item-cont-b">
							<text class="mainCont">
								<text>内容·</text>
								{{ item.mainCont }}
							</text>
							<view class="rate-wrap">
								<view class="rate">
									<text>综合评分</text>
									<uni-rate disabled="true" :size="16" :max="5" :value="item.rate" />
								</view>
								<view class="date">
									{{ item.date }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
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
			<view class="photo-list">
				<view class="photo-cont" v-for="(item, index) in photoList" :key="index" @click="_switchShopHome(item)">
					<view class="rate-wrap">
						<text class="title">{{ item.shopName }}</text>
						<view class="date-wrap">
							<view class="item-l">
								<text class="date">{{ item.date }}</text>
								<view class="rate">
									<text>综合评分</text>
									<uni-rate disabled="true" :size="18" :max="5" :value="item.rate" />
								</view>
							</view>
							<view class="item-r">
								<image @click.stop="_changeLike(false, index)" v-if="item.like" class="like-icon" src="http://qakj5dvcb.bkt.clouddn.com/static/liked.png"
								 mode=""></image>
								<image @click.stop="_changeLike(true, index)" v-else class="like-icon" src="http://qakj5dvcb.bkt.clouddn.com/static/like.png" mode=""></image>
								<text class="text">{{ item.like_num }}</text>
							</view>
						</view>
					</view>
					<!-- 评论内容 -->
					<view class="art" :class="{cut: item.fullText=='全文'}">
						{{ item.content }}
					</view>
					<!-- 全文 -->
					<view class="fullText" :data-text="item.fullText" :data-index='index' @click.stop="_changeFullText">
						{{ item.fullText }}
					</view>
					<!-- 图片列表 -->
					<view class="img-list">
						<view class="img-cont" v-for="(img, ind) in item.picList" :key="ind" :data-src="item.picList[ind]" @click.stop="previewImage(item.picList, $event)">
							<image :src="img" mode=""></image>
						</view>
					</view>
					<!-- 回复 -->
					<view class="reply-warp">
						<text class="reply">店家回复: </text>
						{{ item.reply }}
					</view>
				</view>
			</view>
		</view>

		<!-- foot -->
		<foot :btm="false"></foot>
		<!-- pop -->
		<uni-popup ref="pop">
			<view class="pop-section">
				<view class="title text-center">
					温馨提示
				</view>
				<view class="cont text-center">
					{{ popCont }}
				</view>
				<view class="cu-btn btn" @click="confirmPop">
					知道了
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import foot from '../component/foot';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import {
		mapMutations
	} from 'vuex'
	export default {
		components: {
			foot,
			uniPopup
		},
		data() {
			return {
				topLeftText: "我的个人中心",
				userInfo: {
					uPic: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
					name: "王晓璐",
					address: "江苏 无锡",
					visit: 64,
					photo: 93,
					praise: 23,
				},
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
		methods: {
			...mapMutations(['shopId']),
			previewImage(v, e) {
				const current = e.currentTarget.dataset.src;
				uni.previewImage({
					urls: v,
					current: current,
				})
				console.log(v, e)
			},
			_changeLike(bl, index) {
				let num = parseInt(this.photoList[index].like_num);
				if (bl) {
					this.photoList[index].like = bl;
					this.photoList[index].like_num = num + 1;
				} else {
					// if (num > 0) {
					// 	this.photoList[index].like_num = num - 1;
					// }
					this.$refs.pop.open()
				}
			},
			confirmPop() {
				this.$refs.pop.close()
			},
			_changeFullText(e) {
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
				.cuIcon-back{
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

			.lately-list {
				padding: 0 20rpx 56rpx;

				.lately-cont {
					display: flex;
					margin-bottom: 80rpx;

					&:last-child {
						margin-bottom: 0;
					}

					.item-l {
						position: relative;

						.img {
							width: 194rpx;
							height: 194rpx;
							border-radius: 14rpx;
						}

						.browse {
							position: absolute;
							left: 0;
							bottom: 24rpx;
							height: 35rpx;
							background: linear-gradient(90deg, #F98F30, #FFAD03);
							border-radius: 0rpx 18rpx 18rpx 0rpx;
							font-size: 22rpx;
							font-weight: 400;
							color: #FFFFFF;
							padding: 0 8rpx;
						}
					}

					.item-r {
						flex: 1;
						margin-left: 20rpx;
						@include flexY;
						width: 60%;
						justify-content: space-between;

						.item-cont-t {
							height: 48%;
							@include flexY;
							justify-content: space-between;

							.title {
								@include txt_cut;
								font-size: 36rpx;
								color: #282828;
								font-weight: bold;
							}

							.address {
								font-size: 24rpx;
								color: #333333;
								@include txt_cut;

								text {
									font-weight: bold;
									color: #282828;
								}
							}
						}

						.item-cont-b {
							height: 48%;
							@include flexY;
							justify-content: space-between;

							.mainCont {
								font-size: 24rpx;
								color: #333333;
								@include txt_cut;

								text {
									font-weight: bold;
									color: #282828;
								}
							}

							.rate-wrap {
								@include flexX;
								justify-content: space-between;

								.rate {
									@include flexX;
									align-items: baseline;

									text {
										font-weight: bold;
										font-size: 24rpx;
										color: #282828;
										margin-right: 20rpx;
									}
								}

								.date {
									font-size: 24rpx;
									color: #B1B1B1;
									font-weight: 400;
								}
							}
						}
					}
				}

			}

		}

		// 最近拍过的店
		.photo-section {
			margin: 0 30rpx 24rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;

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

			.photo-list {
				padding: 0 20rpx;

				.photo-cont {
					padding-bottom: 52rpx;

					.rate-wrap {
						@include flexY;

						.title {
							font-size: 36rpx;
							color: #282828;
							font-weight: bold;
						}
					}

					.date-wrap {
						@include flexSB;
						margin: 32rpx 0 40rpx;

						.item-l {
							@include flexY;

							.date {
								font-size: 24rpx;
								color: #B1B1B1;
								font-weight: 400;
								margin-bottom: 18rpx;
							}

							.rate {
								display: flex;
								align-items: baseline;

								text {
									font-size: 24rpx;
									color: #282828;
									font-weight: bold;
									margin-right: 11rpx;
								}
							}
						}

						.item-r {
							@include flexX;

							.like-icon {
								width: 34rpx;
								height: 34rpx;
							}

							.text {
								font-size: 30rpx;
								color: #B1B1B1;
								font-weight: 400;
							}
						}
					}

					.art {
						font-size: 30rpx;
						font-weight: 500;
						color: #333333;

						&.cut {
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							word-break: break-all;
							overflow: hidden;
							white-space: normal;
						}
					}

					.fullText {
						font-size: 30rpx;
						color: #FF903A;
						margin: 26rpx 0 14rpx;
					}

					.img-list {
						padding: 30rpx 0;
						@include flexX;
						flex-wrap: wrap;

						.img-cont {
							margin-right: 18rpx;
							margin-bottom: 18rpx;

							&:nth-child(3n) {
								margin-right: 0;
							}

							image {
								width: 174rpx;
								height: 174rpx;
								border-radius: 14rpx;
							}
						}
					}

					.reply-warp {
						min-height: 70rpx;
						padding: 20rpx;
						font-size: 24rpx;
						color: #989897;
						background-color: #F3F3F4;
						border-radius: 6rpx;

						.reply {
							color: #333333;
							font-weight: 500;
							word-break: keep-all;
							display: inline;
						}
					}
				}
			}

		}

		.pop-section {
			width: 590rpx;
			height: 480rpx;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			@include flexY;
			@include flexA;
			justify-content: space-between;

			.title {
				font-size: 34rpx;
				color: #666666;
				line-height: 122rpx;
			}

			.cont {
				flex: 1;
				margin-top: 26rpx;
				font-size: 30rpx;
				color: #666666;
				width: 390rpx;
				line-height: 44rpx;
			}

			.btn {
				width: 440rpx;
				height: 90rpx;
				background-color: #FF544C;
				color: #FFFFFF;
				border-radius: 45rpx;
				margin-bottom: 75rpx;
			}
		}
	}
</style>
