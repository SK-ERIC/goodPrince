<template>
	<view class="container">
		<view class="photo-section">
			<view class="photo-list">
				<view class="photo-cont" v-for="(item, index) in photoList" :key="index" @click="_switchShopHome(item)">
					<view class="rate-wrap">
						<text class="title">{{ item.shop[0].shop_title }}</text>
						<view class="date-wrap">
							<view class="item-l">
								<text class="date">{{ item.add_date }}</text>
								<view class="rate">
									<text>综合评分</text>
									<uni-rate disabled="true" :size="14" :max="5" :value="item.score_show" />
								</view>
							</view>
							<view class="item-r">
								<image @click.stop="_changeLike(item, false, index)" v-if="item.myZan" class="like-icon" src="https://wxhyx-cdn.aisspc.cn/static/liked.png"
								 mode=""></image>
								<image @click.stop="_changeLike(item, true, index)" v-else class="like-icon" src="https://wxhyx-cdn.aisspc.cn/static/like.png"
								 mode=""></image>
								<text class="text">{{ item.zan }}</text>
							</view>
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
							<image :src="img.image_url" mode="aspectFill"></image>
						</view>
					</view>
					<!-- 回复 -->
					<view class="reply-warp" v-if="item.keeper_content">
						<text class="reply">店家回复: </text>
						{{ item.keeper_content }}
					</view>
				</view>
				<view v-if="photoList.length==0" class="nthing-section">
					<image class="nthing-img" src="https://wxhyx-cdn.aisspc.cn/static/nthing.png" mode=""></image>
					<text class="nthing-text">您还没有评论过哦～</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "latelyPhotoList",
		props: {
			photoList: { // 数据列表
				type: Array,
				default () {
					return []
				}
			}
		},
		watch: {
			photoList: {
				handler(newVal, oldVal) {
					for (let i = 0; i < newVal.length; i++) {
						if (oldVal[i] != newVal[i]) {
							this.photoList = newVal;
						}
					}
				},
				deep: true
			}
		},
		methods: {
			_switchShopHome(item) {
				this.$emit("switchShopHome", item)
			},
			isShowFullText(v) {
				return v.split("").length > 64
			},
			_changeLike(item, bl, index) {
				this.$emit("changeLike", {
					item,
					bl,
					index
				})
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
			_changeFullText(e) {
				this.$emit("changeFullText", {
					e
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {

		.photo-section {

			.photo-list {
				padding: 0 32rpx;

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
								width: 40rpx;
								height: 40rpx;
								margin-right: 5rpx;
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

	}
</style>
