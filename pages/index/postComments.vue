<template>
	<view class="container">
		<view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>{{ topLeftText }}</text>
		</view>
		<!-- 评分 -->
		<view class="rate-section">
			<text class="text">综合评分</text>
			<uni-rate :value="rate" :size="18" :max="5" @change="changeRate" />
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
			<view class="upload-inner" v-show="imgList.length<=9">
				<image 
					@tap="chooseImage" 
					class="add-img" 
					src="http://qakj5dvcb.bkt.clouddn.com/static/add-img.png" 
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
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components:{
			uniRate,
		},
		data() {
			return {
				topLeftText: "粤玲珑广式早茶",
				rate: 0.5, // 评分
				comCont: "", // 评论
				imgList: [], // 微信小程序本地地址
				allImgTNum: 0, //所有图片数量
				showImage: false,// 展示图片标识
				filePath:[], // 线上图片地址
			};
		},
		onLoad(options) {
			console.log(options)
			if (options.src) {
				this.showImage = true;
				this.imgList.push(options.src);
				this.filePath.push(options.src);
				this.uploadImage(this.filePath,0)
			}
			
		},
		methods:{
			chooseImage() {
				
				// this.$http.uploadImage(9, res=> {
				// 	console.log("res", res)
				// })
				
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册或手机选择
					success: (res) => {
						this.showImage = true;
						console.log("res.tempFilePaths", res.tempFilePaths)
						this.imgList.push(res.tempFilePaths.shift())
						this.filePath = res.tempFilePaths
						for( let i=0;i<this.filePath.length;i++) {
							this.uploadImage(this.filePath,i)
						}
					}
				});
			},
			// 上传图片
			uploadImage(tempFilePaths, index) {
				let that =this
				uni.uploadFile({
					url: that.$http.domain + '/api/addons/qiniu/Index',
					filePath: tempFilePaths[index] ,
					fileType: 'image',
					name: 'file',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'multipart/form-data',
					},
					formData: {
						'method': 'images.upload',
						'upfile': tempFilePaths[index],
						'token': ""
					},
					success: res => {
					//对于返回数据的处理，根据实际情况调整
					console.log("res", res)
						// that.imgList.push(JSON.parse(res.data).data)
						// console.log(that.imgList)
						// let data ={img_arr:that.imgList.join('|')}
						// that.updataCourseInfo(data)
					}
				})
			},
			//预览图片
			viewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
				console.log("e", e, "this.imgList", this.imgList)
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
							let data = {img_arr:this.imgList.join('|')}
							this.updataCourseInfo(data)
							console.log("e",e, "data", data)
						}
						if (this.imgList.length === 0) {
							this.showImage = false;
						}
					}
				})
			},
			// 更新信息 
			updataCourseInfo(data) {
				//上传接口操作
				this.updatePageInfo()
			},
			// 更新页面
			updatePageInfo(){	
				//对获取信息接口进行操作，重新拉取数据渲染页面
			},
			confirmBtn() {
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
				
				
				const params = {
					uid: 1,
					sid: 1,
					content: this.comCont,
					score: this.rate,
					files: this.imgList
				}
				console.log("params", params)
				// uni.navigateTo({
				// 	url: "/pages/index/success"
				// })
				
			},
			cancelBtn() {
				uni.navigateBack({
					delta: 1
				})
			},
			changeRate(e) {
				this.rate = e.value;
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

.container{
	// min-height: 100vh;
	padding: 60rpx 48rpx 0;
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
