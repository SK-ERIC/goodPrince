<template>
	<view class="container">
		<image class="head-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3743690184,2535555305&fm=26&gp=0.jpg"
		 mode=""></image>

		<view class="form-section">
			<view class="form-inner">
				<view class="input-wrap">
					<view class="input-item-l">
						店铺名称:
					</view>
					<view class="input-item-r">
						<input type="text" v-model="shopInfo.name" placeholder="请输入店铺名称..." />
					</view>
				</view>
				<view class="input-wrap type-area">
					<view class="input-item-l">
						店铺地址:
					</view>
					<view class="input-item-r">
						<textarea v-model="shopInfo.address" placeholder="请输入店铺地址..." />
						</view>
				</view>
				<view class="input-wrap">
					<view class="input-item-l">
						营业时间:
					</view>
					<view class="input-item-r">
						<input type="text" v-model="shopInfo.time" placeholder="请输入营业时间..." />
					</view>
				</view>
				<view class="input-wrap type-area">
					<view class="input-item-l">
						主营内容:
					</view>
					<view class="input-item-r">
						<textarea v-model="shopInfo.mainCont" placeholder="请输入主营内容..." />
					</view>
				</view>
				<view class="input-wrap">
					<view class="input-item-l">
						联系电话:
					</view>
					<view class="input-item-r">
						<input type="number" v-model="shopInfo.tel" placeholder="请输入联系电话..." />
					</view>
				</view>
				<view class="upload-section">
					<view class="title">
						商家照片上传<text>(请上传的图片不得大于2M)</text>
					</view>
					<view class="upload-wrap">
						<view
							class="upload-inner"
							v-for="(item, index) in imgList"
							:key="index"
							:data-url="imgList[index]"
						>
							<image :src="item" mode="aspectFill"></image>
							<view class="deletBox" :data-index="index">
								<image class="del-img" src="http://qakj5dvcb.bkt.clouddn.com/static/delete_icon.png" mode=""></image>
							</view>
						</view>
						<view class="upload-inner" v-if="imgList.length<5">
							<image
								@tap="chooseImage"
								class="add-img" 
								src="http://qakj5dvcb.bkt.clouddn.com/static/add-img.png" 
								mode=""
							></image>
						</view>
					</view>
				</view>
				
				<view class="upload-section">
					<view class="title">
						营业执照上传
					</view>
					<view class="upload-wrap">
						<view class="upload-inner" v-if="license">
							<image :src="license" mode="aspectFill"></image>
							<view class="deletBox">
								<image class="del-img" src="http://qakj5dvcb.bkt.clouddn.com/static/delete_icon.png" mode=""></image>
							</view>
						</view>
						<view class="upload-inner" v-else>
							<image
								class="add-img" 
								src="http://qakj5dvcb.bkt.clouddn.com/static/add-img.png" 
								mode=""
							></image>
						</view>
					</view>
				</view>
				
				<view class="upload-section">
					<view class="title">
						卫生经营许可证上传
					</view>
					<view class="upload-wrap">
						<view class="upload-inner" v-if="hygiene">
							<image :src="hygiene" mode="aspectFill"></image>
							<view class="deletBox">
								<image class="del-img" src="http://qakj5dvcb.bkt.clouddn.com/static/delete_icon.png" mode=""></image>
							</view>
						</view>
						<view class="upload-inner" v-else>
							<image
								
								class="add-img" 
								src="http://qakj5dvcb.bkt.clouddn.com/static/add-img.png" 
								mode=""
							></image>
						</view>
					</view>
				</view>
				
				<view class="upload-section">
					<view class="title">
						健康证上传
					</view>
					<view class="upload-wrap">
						<view
							class="upload-inner"
							v-for="(item, index) in imgList"
							:key="index"
							:data-url="imgList[index]"
						>
							<image :src="item" mode="aspectFill"></image>
							<view class="deletBox" :data-index="index">
								<image class="del-img" src="http://qakj5dvcb.bkt.clouddn.com/static/delete_icon.png" mode=""></image>
							</view>
						</view>
						<view class="upload-inner">
							<image
								@tap="chooseImage"
								class="add-img" 
								src="http://qakj5dvcb.bkt.clouddn.com/static/add-img.png" 
								mode=""
							></image>
						</view>
					</view>
					
					
					<view class="btn-section">
						<button type="default" class="cu-btn save-btn">保存</button>
					</view>
					
					
					
				</view>

			</view>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopInfo: {
					name: "",
					address: "",
					time: "",
					mainCont: "",
					tel: "",
				},
				imgList:[],
				license: "", // 营业执照
				hygiene: "", // 卫生经营许可证
				healthCert:"", // 健康证
			}
		},
		methods: {
			timeChange(e) {
				console.log("e", e)
			},
			chooseImage() {
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册或手机选择
					success: (res) => {
						this.imgList.push(res.tempFilePaths.shift())
						// this.filePath = res.tempFilePaths
						// for( let i=0;i<this.filePath.length;i++) {
						// 	this.uploadImage(this.filePath,i)
						// }
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		.head-img {
			width: 100%;
			height: 324rpx;
		}

		.form-section {
			// background-color: #FFFFFF;
			position: relative;
			margin-top: -200rpx;
			// border-radius: 100rpx 100rpx 0 0;
			width: 100%;
			height: 960rpx;
			background-image: url("http://qakj5dvcb.bkt.clouddn.com/static/shopInfo_bg.png");
			background-size: 100% 100%;

			.form-inner {
				// margin:  0 55rpx;
				width: 640rpx;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: -64rpx;

				.input-wrap {
					height: 94rpx;
					border: 1rpx solid #DFDFDF;
					border-radius: 14rpx;
					background-color: #FFFFFF;
					margin-bottom: 28rpx;
					@include flexX;
					&.type-area{
						height: 200rpx;
						align-items: flex-start;
						.input-item-l{
							line-height: 92rpx;
						}
						.input-item-r{
							padding: 20rpx 0;
							textarea{
								width: 400rpx;
								height: 150rpx;
							}
						}
					}
					
					.input-item-l{
						font-size: 30rpx;
						color: #363636;
						margin-left: 30rpx;
						white-space: nowrap;
					}
					.input-item-r{
						margin-left: 50rpx;
						input{
							height: 94rpx;
						}
						
					}
				}
			
				.upload-section{
					.title{
						font-size: 30rpx;
						color: #363636;
						font-weight: bold;
						margin-left: 20rpx;
						line-height: 90rpx;
						text{
							color: #666666;
							font-weight: 400;
						}
					}
					
					.upload-wrap{
						display: flex;
						justify-content: flex-start;
						flex-wrap: wrap;
						
						.upload-inner{
							width: 154rpx;
							height: 154rpx;
							position: relative;
							border-radius: 20rpx;
							overflow: hidden;
							margin-right: 30rpx;
							margin-bottom: 20rpx;
							&:nth-child(3n){
								margin-right: 0;
							}
							
							image{
								width: 154rpx;
								height: 154rpx;
							}
							.del-img{
								width: 42rpx;
								height: 40rpx;
								position: absolute;
								right: 0;
								top: 0;
								z-index: 2;
							}
						}
					}
					
				}
			
				.btn-section{
					@include flexX;
					@include flexJ;
					padding: 65rpx 0;
					.save-btn{
						width: 590rpx;
						height: 100rpx;
						background-color: #F75347;
						color: #FFFFFF;
						border-radius: 50rpx;
						font-size: 34rpx;
						font-weight: 500;
					}
				}
			}
		}
	}
</style>
