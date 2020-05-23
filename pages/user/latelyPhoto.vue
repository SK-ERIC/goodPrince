<template>
	<view class="container">
		<view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我拍过的店 ({{ photoList.length }})</text>
		</view>
		<view class="photo-section">
			<view class="photo-list">
				<view class="photo-cont" v-for="(item, index) in photoList" :key="index">
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
								<image @click="_changeLike(false, index)" v-if="item.like" class="like-icon" src="http://qakj5dvcb.bkt.clouddn.com/static/liked.png" mode=""></image>
								<image @click="_changeLike(true, index)" v-else class="like-icon" src="http://qakj5dvcb.bkt.clouddn.com/static/like.png" mode=""></image>
								<text class="text">{{ item.like_num }}</text>
							</view>
						</view>
					</view>
					<!-- 评论内容 -->
					<view class="art" :class="{cut: item.fullText=='全文'}">
						{{ item.content }}
					</view>
					<!-- 全文 -->
					<view class="fullText" :data-text="item.fullText" :data-index='index' @click="_changeFullText">
						{{ item.fullText }}
					</view>
					<!-- 图片列表 -->
					<view class="img-list">
						<view class="img-cont" v-for="(img, ind) in item.picList" :key="ind" :data-src="item.picList[ind]" @click="previewImage(item.picList, $event)">
							<image :src="img" mode=""></image>
						</view>
					</view>
					<!-- 回复 -->
					<view class="reply-warp" v-if="item.reply">
						<text class="reply">店家回复: </text>
						{{ item.reply }}
					</view>
				</view>
			</view>
		</view>


		<!-- foot -->
		<foot></foot>
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
	import foot from '../component/foot'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			foot,
			uniPopup
		},
		data() {
			return {
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
					},
					{
						id: 1,
						shopName: "麦当劳快餐厅",
						date: "3月6日",
						like: true,
						like_num: 3,
						rate: 4,
						content: `茫茫西部戈壁滩，他头戴牛仔帽，嘴角叼着烟，左轮手枪插在腰间，右手拉着缰绳，脸庞在夕阳余晖的映照下沧桑无限。茫茫茫茫西部戈壁滩，他头戴牛仔帽，嘴角叼着烟，左轮手枪插在腰间，右手拉着缰绳，脸
							庞在夕阳余晖的映照下沧桑无限。茫茫茫茫西部戈壁滩，他头戴牛仔帽，嘴角叼着烟，左轮手枪插在腰间，右手拉着缰绳，脸庞在夕阳余晖的映照下沧桑无限。茫茫...`,
						fullText: "全文",
						picList: [
							"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
							"http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						],
						reply: ""
					},
				],
				popCont: "您今天对此条留言的点赞次数已达上限"
			}
		},
		methods: {
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
					this.$refs.pop.open();
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
			navBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		padding-top: 60rpx;

		.navBack {
			display: inline-flex;
			justify-content: flex-start;
			align-items: center;
			font-size: 36rpx;
			color: #282828;
			margin-left: 27rpx;

			.cuIcon-back {
				margin-right: 30rpx;
			}
		}

		.photo-section {

			.photo-list {
				padding: 0 32rpx;

				.photo-cont {
					padding: 40rpx 0 52rpx;
					border-bottom: 2rpx solid #EFEFEF;

					&:last-child {
						border-bottom: none;
					}

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
