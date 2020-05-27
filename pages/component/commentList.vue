<template>
	<view class="container">
		<view class="comment-list">
			<view v-if="list.length>0" class="comment-cont" v-for="(item, index) in list" :key="index">
				<view class="info-wrap">
					<view class="info-inner-l">
						<image :src="item.uPic" mode=""></image>
					</view>
					<view class="info-inner-r">
						<view class="user">
							{{ item.name }}
						</view>
						<view class="date">
							{{ item.date }}
						</view>
					</view>
				</view>
				<view class="comment-inner">
					<!-- 满意度打分 -->
					<view class="rate-wrap">
						<view class="rate-inner-l">
							<text class="text">满意度打分</text>
							<uni-rate disabled="true" :size="18" :max="5" :value="item.rate" />
						</view>
						<view class="rate-inner-r">
							<image @click="_changeLike(false, index)" v-if="item.like" class="like-icon" src="https://wxhyx-cdn.aisspc.cn/static/liked.png"
							 mode=""></image>
							<image @click="_changeLike(true, index)" v-else class="like-icon" src="https://wxhyx-cdn.aisspc.cn/static/like.png"
							 mode=""></image>
							<text class="text">{{ item.like_num }}</text>
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
					<view class="reply-warp">
						<text class="reply">店家回复: </text>
						{{ item.reply }}
					</view>
				</view>
			</view>
			<view v-if="list.length==0" class="nthing-section">
				<image class="nthing-img" src="https://wxhyx-cdn.aisspc.cn/static/nthing.png" mode=""></image>
				<text class="nthing-text">还没有顾客评论哦～</text>
				<!-- <view class="cu-btn nthing-btn" @click="_switchPostComments">
					我来说个话
				</view> -->
			</view>
		</view>

	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate';
	export default {
		components: {
			uniRate,
		},
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

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
</style>
