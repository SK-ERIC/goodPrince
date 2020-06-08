<template>
	<view class="container">
		<view class="rate-section">
			<text class="text">评分</text>
			<uni-rate :value="rate" :size="22" :max="5" :margin="10" @change="changeRate" />
			<text class="score">{{ rate }}分</text>
		</view>
		<!-- 评述 -->
		<view class="comment-section">
			<textarea v-model.trim="comCont" class="text" value="" placeholder="请分享您的体验，或者给我们提建议吧～" />
			</view>
		<!-- 上传图片 -->
		<view class="upload-section">
			<view 
				v-show="showImage" 
				class="upload-inner" 
				v-for="(item, index) in imgList" 
				:key="index"
				:data-url="imgList[index]"
				@tap="viewImage"
			>
				<image :src="item" mode="aspectFill"></image>
				<view class="deletBox" @tap.stop="delImage" :data-index="index">
					<text class="cuIcon-roundclosefill"></text>
				</view>
			</view>
			<view class="upload-inner" v-if="imgList.length < 9">
				<image 
					@tap="chooseImage" 
					class="add-img" 
					src="https://wxhyx-cdn.aisspc.cn/static/add-img.png" 
					mode=""
				></image>
			</view>
		</view>
		<!-- btn -->
		<view class="btn-section">
			<view class="cu-btn confirm-btn" @click="confirmBtn">
				发布
			</view>
			<view class="cu-btn cancel-btn" @click="cancelBtn">
				取消
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components:{
			uniRate,
		},
		data() {
			return {
				topLeftText: "",
				rate: 0, // 评分
				comCont: "", // 评论
				imgList: [], // 预览本地地址
				allImgTNum: 0, //所有图片数量
				showImage: false,// 展示图片标识
				filePath:[], // 线上图片地址
			};
		},
		onLoad(options) {
			if (options.src) {
				this.showImage = true;
				this.imgList.push(options.src);
				this.filePath.push(options.tem);
			}
			uni.setNavigationBarTitle({
				title: this.shopInfo.shop_title
			})
		},
		computed: mapState(['shopInfo']),
		methods:{
			chooseImage() {
				this.$http.uploadImage(1, (res, tem)=> {
					this.showImage = true;
					this.imgList.push(...tem);
					this.filePath.push(res.data.url);
				})
			},
			//预览图片
			viewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			// 删除图片
			delImage(e) {
				uni.showModal({
					title: '删除照片',
					content: '确定要删除这张照片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
						this.imgList.splice(e.currentTarget.dataset.index, 1);
						this.filePath.splice(e.currentTarget.dataset.index, 1);	
						}
						if (this.imgList.length === 0) {
							this.showImage = false;
						}
					}
				})
			},
			confirmBtn() {
				if(this.rate == 0) {
					uni.showToast({
						icon: "none",
						title: "店铺评分不能为空~",
						duration: 2000
					})
					return;
				}
				if(this.comCont == "") {
					uni.showToast({
						icon: "none",
						title:"评论留言不能为空哦~",
						duration: 2000
					})
					return;
				}
				if (this.imgList.length == 0) {
					uni.showToast({
						icon: "none",
						title:"至少需要一张图片哦~",
						duration: 2000
					})
					return;
				}
				
				const uid = this.$db.get("userinfo").user_id;
				
				const params = {
					uid,
					sid: this.shopInfo.id,
					content: this.comCont,
					score: Number(this.rate)*2,
					files: this.filePath.join(',')
				}
			
				this.$http.postPushComment(params,res=>{
					if(res.code == 200) {
						uni.reLaunch({
							url: "/pages/index/success"
						})
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			cancelBtn() {
				uni.navigateBack({
					delta: 1
				})
			},
			changeRate(e) {
				this.rate = e.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.container{
	// min-height: 100vh;
	padding: 0 48rpx 0;
	.navBack{
		display: inline-flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 36rpx;
		color: #282828;
	}
	
	.rate-section{
		@include flexX;
		line-height: 154rpx;
		align-items: baseline;
		.text{
			font-size: 32rpx;
			color: #282828;
			margin-right: 20rpx;
			font-weight: 500;
		}
		.score{
			font-size: 32rpx;
			color: #282828;
			font-weight: 500;
			margin-left: 46rpx;
		}
	}
	.comment-section{
		padding: 20rpx;
		height: 200rpx;
		background-color: #F3F3F4;
		border-radius: 6rpx;
		.text{
			width: 100%;
			height: 100%;
			font-size: 24rpx;
		}
		
	}
	.upload-section{
		display: flex;
		padding-top: 30rpx;
		flex-wrap: wrap;
		.upload-inner{
			margin-right: 30rpx;
			position: relative;
			&:last-child{
				margin-right: 0;
			}
			image{
				width: 154rpx;
				height: 154rpx;
				border-radius: 6rpx;
			}
			.deletBox{
				position: absolute;
				right: 0;
				top: 0;
				.cuIcon-roundclosefill{
					// background-color: #FFFFFF;
					// border-radius: 50%;
				}
			}
		}
		
	}
	
	.btn-section{
		@include flexY;
		position: fixed;
		left: 50%;
		bottom: 100rpx;
		transform: translateX(-50%);
		.cu-btn{
			width: 640rpx;
			height: 100rpx;
			border-radius: 50rpx;
			font-size: 34rpx;
			font-weight: 400;
			text-align: center;
		}
		.confirm-btn{
			background-color: #FF544C;
			color: #FFFFFF;
			margin-bottom: 34rpx;
		}
		.cancel-btn{
			background-color: #EEEEEE;
			color: #2E2E2E;
		}
		
	}
}


</style>
