<template>
	<view class="content">
		<view class="status_bar" :class="{model: shopIndex.party_member}">
			<!-- 这里是状态栏 -->
			<view class="shopName">
				<text class="name">{{ shopIndex.shop_title }}</text>
				<image class="img" v-if="shopIndex.party_member" src="https://wxhyx-cdn.aisspc.cn/static/model.png" mode=""></image>
			</view>

			<!-- 商户图片 -->
			<scroll-view scroll-x scroll-with-animation>
				<view class="picList">
					<view class="pic" v-for="(item, index) in shopImg" :key="index" :data-src="shopImg[index].image_url" @click="previewImage(shopImg, $event)">
						<image class="img" :src="item.image_url" mode=""></image>
						<!-- <view class="tip-section" v-if="index==0">
							<image class="tip-img" src="https://wxhyx-cdn.aisspc.cn/static/icon-t1.png" mode=""></image>
							<text>{{ shopInfo.shopPicNum }}</text>
						</view> -->
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 地址 -->
		<view class="address-section">
			<view class="address-item-l">
				<view class="address-inner">
					<image class="img" src="https://wxhyx-cdn.aisspc.cn/static/icon-gps.png" mode=""></image>
					<view class="address-wrap">
						<text class="type-bold">店家地址 ·</text>
						<text>{{ shopIndex.shop_address }}</text>
					</view>
				</view>
				<view class="address-inner">
					<image class="img" src="https://wxhyx-cdn.aisspc.cn/static/icon-time.png" mode=""></image>
					<view class="address-wrap">
						<text class="type-bold">营业时间 ·</text>
						<text>{{ shopIndex.shop_open_add_time }} - {{ shopIndex.shop_open_end_time }}</text>
					</view>
				</view>
				<view class="address-inner">
					<image class="img" src="https://wxhyx-cdn.aisspc.cn/static/icon-eat.png" mode=""></image>
					<view class="address-wrap">
						<text class="type-bold">主营内容 ·</text>
						<text>{{ shopIndex.shop_content }}</text>
					</view>
				</view>
			</view>
			<view class="address-item-r">
				<view class="viewNum">
					{{ shopIndex.looks }}
				</view>
				<view>
					浏览
				</view>
			</view>
		</view>
		<view class="splitCls"></view>

		<!-- 店铺信息 -->
		<view class="shopInfo">
			<view class="title">
				<text>经营许可</text>
			</view>
			<view class="cardList">
				<view class="cardCont">
					<view v-for="(item, index) in LicenseList" :key="index" :data-src="LicenseList[index].image_url" @click="previewImage(LicenseList, $event)">
						<image class="img-big" :src="item.image_url" mode=""></image>
					</view>
				</view>
				<view class="cardCont type-small">
					<view v-for="(item, index) in cardList" :key="index" :data-src="cardList[index].image_url" @click="previewImage(cardList, $event)">
						<image class="img-sma" :src="item.image_url" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 评分 -->
		<view class="shop-rate">
			<view class="rate-inner">
				<view class="rate-item-l">
					<text>顾客满意</text>
					<uni-rate disabled="true" :size="18" :max="5" :value="shopIndex.score" />
				</view>
				<view class="rate-item-r">
					{{ shopIndex.score }}分<text>({{ shopIndex.comments.counts }})</text>
				</view>
			</view>
			<view class="rate-inner">
				<view class="rate-item-l">
					<text>综合评分</text>
					<uni-rate disabled="true" :size="18" :max="5" :value="shopIndex.total_score" />
				</view>
				<view class="rate-item-r">
					{{ shopIndex.total_score }}分
				</view>
			</view>
		</view>

		<view class="splitCls"></view>

		<!-- 顾客有话说 -->
		<view class="comment-section">
			<view class="title">
				顾客有话说 {{ shopIndex.comments.counts }}
			</view>

			<view class="comment-list">
				<view v-if="shopIndex.comments.counts>0" class="comment-cont" v-for="(item, index) in commentList" :key="index">
					<view class="info-wrap">
						<view class="info-inner-l">
							<image :src="item.uname.avatar" mode=""></image>
						</view>
						<view class="info-inner-r">
							<view class="user">
								{{ item.uname.nickname }}
							</view>
							<view class="date">
								{{ item.add_date }}
							</view>
						</view>
					</view>
					<view class="comment-inner">
						<!-- 满意度打分 -->
						<view class="rate-wrap">
							<view class="rate-inner-l">
								<text class="text">满意度打分</text>
								<uni-rate disabled="true" :size="18" :max="5" :value="item.score_show" />
							</view>
							<view class="rate-inner-r">
								<image @click.stop="_changeLike(item, false, index)" v-if="item.like" class="like-icon" src="https://wxhyx-cdn.aisspc.cn/static/liked.png"
								 mode=""></image>
								<image @click.stop="_changeLike(item, true, index)" v-else class="like-icon" src="https://wxhyx-cdn.aisspc.cn/static/like.png"
								 mode=""></image>
								<text class="text">{{ item.zan }}</text>
							</view>
						</view>
						<!-- 评论内容 -->
						<view class="art" :class="{cut: item.full_text=='全文'}">
							{{ item.content }}
						</view>
						<!-- 全文 -->
						<view class="fullText" v-if="isShowFullText(item.content)" :data-text="item.full_text" :data-index='index'
						 @click.stop="_changeFullText">
							{{ item.full_text }}
						</view>
						<!-- 图片列表 -->
						<view class="img-list">
							<view class="img-cont" v-for="(img, ind) in item.image" :key="ind" :data-src="item.image[ind].image_url"
							 @click.stop="previewImage(item.image, $event)">
								<image :src="img.image_url" mode=""></image>
							</view>
						</view>
						<!-- 回复 -->
						<view class="reply-warp" v-if="item.keeper_content">
							<text class="reply">店家回复: &nbsp;</text>
							{{ item.keeper_content }}
						</view>
					</view>
				</view>
				<view v-if="shopIndex.comments.counts==0" class="nthing-section">
					<image class="nthing-img" src="https://wxhyx-cdn.aisspc.cn/static/nthing.png" mode=""></image>
					<text class="nthing-text">这家店铺还没有顾客评论哦～</text>
					<view class="cu-btn nthing-btn" @click="_switchPostComments">
						我来说个话
					</view>
				</view>
			</view>


		</view>

		<!-- foot -->
		<foot show tip></foot>

	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import foot from '../component/foot';
	export default {
		components: {
			uniRate,
			foot
		},
		props: {
			shopIndex: {
				type: Object,
				default: {}
			},
			commentList: {
				type: Array,
				default: []
			}
		},
		computed: {
			// 店铺照片
			shopImg() {
				if (this.shopIndex.images) {
					return this.shopIndex.images.filter(v => {
						return v.type == 1
					})
				}
			},
			// 经营执照|食品许可
			LicenseList() {
				if (this.shopIndex.images) {
					return this.shopIndex.images.filter(v => {
						return v.type == 2 || v.type == 4
					})
				}
			},
			// 健康证
			cardList() {
				if (this.shopIndex.images) {
					return this.shopIndex.images.filter(v => {
						return v.type == 3
					})
				}
			},
		},
		beforeUpdate() {
			if (this.shopIndex.id) this.postAddBeenShop();
		},
		methods: {
			postAddBeenShop() {
				const user_id = this.$db.get("userinfo").user_id || '';
				const shop_id = this.shopIndex.id || "";
				this.$http.postAddBeenShop({
					user_id,
					shop_id
				}, res => {
					if (res.code == 1) {

					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			isShowFullText(v) {
				return v.split("").length >= 64
			},
			previewImage(v, e) {
				let list = [];
				const current = e.currentTarget.dataset.src;
				v.map(el => {
					list.push(el.image_url)
				})
				uni.previewImage({
					urls: list,
					current: current,
				})
			},
			_changeLike(item, bl, index) {
				this.$emit("changeLike", {
					item,
					bl,
					index
				})
			},
			_changeFullText(e) {
				this.$emit("changeFullText", {
					e
				})
			},
			_switchPostComments() {
				this.$emit("switchPostComments");
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.content {
		background-color: #fff;

		.status_bar {
			height: 306rpx;
			@include flexY;
			justify-content: space-between;

			&.model {
				background-image: url("https://wxhyx-cdn.aisspc.cn/static/model_bg.png");
				background-size: 100% 100%;
			}

			.shopName {
				@include flexX;
				justify-content: flex-start;
				margin-left: 30rpx;

				.name {
					font-size: 36rpx;
					color: #282828;
					font-weight: 500;
					line-height: 45rpx;
				}

				.img {
					width: 230rpx;
					height: 44rpx;
					margin: 0 20rpx 0 8rpx;
				}

			}


		}


		.splitCls {
			height: 20rpx;
			width: 100%;
			background-color: #F5F5F5;
		}

		.picList {
			display: flex;
			height: 210rpx;
			justify-content: flex-start;
			align-items: center;
			// background-color: #fff;
			padding: 0 25rpx;

			.pic {
				width: 298rpx;
				height: 210rpx;
				padding-right: 12rpx;
				position: relative;

				&:last-child {
					padding-right: 25rpx;

					.tip-section {
						right: 33rpx;
					}
				}

				.img {
					width: 298rpx;
					height: 210rpx;
					border-radius: 6rpx;
				}

				.tip-section {
					position: absolute;
					right: 20rpx;
					bottom: 11rpx;
					background-color: rgba(0, 0, 0, .5);
					color: #FFFFFF;
					height: 48rpx;
					line-height: 48rpx;
					border-radius: 24rpx;
					@include flexX;
					@include flexJ;
					padding: 0 18rpx;
					font-size: 22rpx;
					color: #FFFFFF;

					.tip-img {
						width: 32rpx;
						height: 28rpx;
						margin-right: 8rpx;
					}
				}
			}
		}

		.address-section {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			padding-left: 25rpx;
			margin: 40rpx 0 24rpx;

			.address-item-l {

				.address-inner {
					@include flexX;
					font-size: 26rpx;
					margin-bottom: 15rpx;
					color: #333333;

					.img {
						width: 32rpx;
						height: 32rpx;
						margin-right: 18rpx;
					}

					.type-bold {
						font-weight: bold;
						white-space: nowrap;
					}
				}

			}

			.address-item-r {
				@include flexY;
				@include flexJ;
				align-items: center;
				width: 150rpx;
				height: 100rpx;
				color: #6A6F74;
				font-size: 26rpx;
				border-left: 1rpx solid #C4CCD6;
			}
		}

		.shopInfo {
			padding: 0 25rpx;

			.title {
				text-align: center;
				line-height: 110rpx;
				border-bottom: 2rpx solid #F5F5F5;

				text {
					display: inline-block;
					position: relative;
					color: #282828;
					font-size: 32rpx;
					font-weight: 400;

					&::before {
						content: "";
						width: 36rpx;
						height: 2rpx;
						background-color: #2B2B2B;
						position: absolute;
						left: -46rpx;
						top: 50%;
						transform: translateY(-50%);
					}

					&::after {
						content: "";
						width: 36rpx;
						height: 2rpx;
						background-color: #2B2B2B;
						background-color: #2B2B2B;
						position: absolute;
						right: -46rpx;
						top: 50%;
						transform: translateY(-50%);
					}
				}
			}

			.cardList {
				padding-top: 30rpx;

				.cardCont {
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					margin-bottom: 20rpx;

					&.type-small {
						justify-content: flex-start;
					}

					.img-big {
						width: 340rpx;
						height: 260rpx;
					}

					.img-sma {
						width: 160rpx;
						height: 120rpx;
						margin-right: 20rpx;
					}
				}
			}
		}

		// 店铺评分
		.shop-rate {
			@include flexY;
			padding-left: 60rpx;
			padding-top: 40rpx;

			.rate-inner {
				@include flexX;
				width: 100%;
				font-size: 32rpx;
				font-weight: 500;
				color: #282828;
				margin-bottom: 30rpx;

				.rate-item-l {
					display: flex;
					align-items: baseline;

					text {
						margin-right: 20rpx;
					}
				}

				.rate-item-r {
					margin-left: 45rpx;

					text {
						color: #BFBFBF;
					}
				}
			}
		}

		.comment-section {
			padding: 0 40rpx;

			.title {
				font-size: 36rpx;
				color: #282828;
				font-weight: 500;
				line-height: 96rpx;
			}

			.comment-list {
				padding-top: 10rpx;

				.comment-cont {
					@include flexY;
					padding-bottom: 50rpx;
					border-bottom: 2rpx solid #EFEFEF;

					&:last-child {
						border-bottom: none;
					}

					.info-wrap {
						display: flex;
						justify-content: flex-start;
						padding-top: 27rpx;

						.info-inner-l {
							image {
								width: 90rpx;
								height: 90rpx;
								border-radius: 50%;
							}
						}

						.info-inner-r {
							margin-left: 22rpx;
							@include flexY;
							justify-content: space-around;

							.user {
								font-size: 32rpx;
								color: #222222;
								font-weight: 500;
							}

							.date {
								font-size: 24rpx;
								color: #B1B1B1;
								font-weight: 400;
							}
						}
					}

					// 评论
					.comment-inner {
						padding-left: 114rpx;

						.rate-wrap {
							@include flexSB;
							margin: 45rpx 0 40rpx;

							.rate-inner-l {
								@include flexX;
								align-items: baseline;

								.text {
									color: #282828;
									font-size: 24rpx;
									font-weight: 500;
									margin-right: 16rpx;
								}

							}

							.rate-inner-r {
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
							font-weight: 400;
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
								margin-right: 15rpx;
								margin-bottom: 15rpx;

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

				.nthing-section {
					@include flexY;
					@include flexA;
					padding-top: 230rpx;
					padding-bottom: 130rpx;

					.nthing-img {
						width: 220rpx;
						height: 220rpx;
					}

					.nthing-text {
						margin: 40rpx 0 56rpx;
						font-size: 30rpx;
						color: #AFB0B5;
					}

					.nthing-btn {
						width: 480rpx;
						height: 100rpx;
						background-color: #FF544C;
						border-radius: 50rpx;
						color: #FFFFFF;
						font-size: 32rpx;
						text-align: center;
						font-weight: 400;
					}
				}
			}


		}


	}
</style>
