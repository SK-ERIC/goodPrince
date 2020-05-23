<template>
	<view class="container">
		<view class="canvas-section">
			<canvas canvas-id="myCanvas" :style="{ width: canvasW + 'px', height: canvasH + 'px' }" @click.top="previewImage"></canvas>
		</view>

		<view class="btn-section">
			<button v-if="openSettingBtnHidden" type="default" class="cu-btn download-btn" @click="saveImage">下载到本地</button>
			<button v-else type="default" class="cu-btn download-btn" open-type="openSetting" @opensetting="handleSetting">下载到本地</button>
		</view>

	</view>
</template>

<script>
	var _this;
	export default {
		data() {
			return {
				canvasW: 0,
				canvasH: 0,
				imgSrc: "http://qakj5dvcb.bkt.clouddn.com/static/qr_bg.png", // 背景图
				// imgSrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1561799702,4184189341&fm=26&gp=0.jpg", // 背景图
				Title: "月玲珑广式早茶", // 店铺名
				QrSrc: "http://img0.imgtn.bdimg.com/it/u=1891218604,1144850372&fm=26&gp=0.jpg", //太阳码
				LineType: true, //标题显示行数		（注超出2行显示会导致画布布局絮乱）
				tempFilePath: [], // 海报
				finished: false,
				openSettingBtnHidden: true, //是否授权
			}
		},
		mounted() {
			_this = this;
			_this.OnCanvas();
		},
		methods: {
			//微信小程序保存到相册
			handleSetting(e) {
				if (!e.detail.authSetting['scope.writePhotosAlbum']) {
					_this.openSettingBtnHidden = false;
				} else {
					_this.openSettingBtnHidden = true;
				}
			},
			saveImage: function(e) {

				if (!this.finished) {
					uni.showToast({
						title: '正在生成图片，稍后再试',
						icon: 'none'
					})
					return
				}

				//获取相册授权
				uni.getSetting({
					success(res) {
						console.log(res)
						if (!res.authSetting['scope.writePhotosAlbum']) {
							uni.authorize({
								scope: 'scope.writePhotosAlbum',
								success() {
									//这里是用户同意授权后的回调
									_this.saveImgToLocal();
								},
								fail() { //这里是用户拒绝授权后的回调
									_this.openSettingBtnHidden = false
								}
							})
						} else { //用户已经授权过了
							_this.saveImgToLocal();
						}
					}
				})
			},
			saveImgToLocal: function(e) {

				uni.showModal({
					title: '提示',
					content: '确定保存到相册吗',
					success: function(res) {
						if (res.confirm) {
							uni.downloadFile({
								url: _this.tempFilePath[0], //图片地址
								success: (res) => {
									if (res.statusCode === 200) {
										uni.saveImageToPhotosAlbum({
											filePath: res.tempFilePath,
											success: function() {
												uni.showToast({
													title: "保存成功",
													icon: "none"
												});
											},
											fail: function() {
												uni.showToast({
													title: "保存失败",
													icon: "none"
												});
											}
										});
									}
								}
							})
						} else if (res.cancel) {

						}
					}
				});

			},
			previewImage() {
				console.log("adsfsdf")
				uni.previewImage({
					urls: this.tempFilePath,
					current: "",
				})
			},
			async OnCanvas() {
				_this.ctx = uni.createCanvasContext("myCanvas", this);
				const C_W = uni.upx2px(662), //canvas宽度
					C_P = uni.upx2px(0), //canvas Padding 间距
					C_Q = uni.upx2px(150); //二维码或太阳码宽高
				let _strlineW = 0; //文本宽度
				let _imgInfo = await _this.getImageInfo({
					imgSrc: _this.imgSrc
				}); //背景图
				let _QrCode = await _this.getImageInfo({
					imgSrc: _this.QrSrc
				}); //二维码或太阳码
				let r = [_imgInfo.width, _imgInfo.height];
				let q = [_QrCode.width, _QrCode.height];
				let imgW = C_W - C_P * 2;
				if (r[0] != imgW) {
					r[1] = Math.floor((imgW / r[0]) * r[1]);
					r[0] = imgW;
				}
				if (q[0] != C_Q) {
					q[1] = Math.floor((C_Q / q[0]) * q[1]);
					q[0] = C_Q;
				}
				_this.canvasW = C_W;
				_this.canvasH = r[1];
				_this.ctx.setFillStyle("#fff"); //canvas背景颜色
				_this.ctx.fillRect(0, 0, C_W, _this.canvasH); //canvas画布大小
				//添加图片展示
				_this.ctx.drawImage(_imgInfo.path, C_P, C_P, r[0], r[1]);
				//设置文本
				_this.ctx.setFontSize(uni.upx2px(40)); //设置标题字体大小
				_this.ctx.setFillStyle("#F4E0AD"); //设置标题文本颜色
				_this.ctx.setTextAlign("center")
				let _strLastIndex = 0; //每次开始截取的字符串的索引
				let _strHeight = uni.upx2px(90); //绘制字体距离canvas顶部的初始高度
				let _num = 1;
				for (let i = 0; i < _this.Title.length; i++) {
					_strlineW += _this.ctx.measureText(_this.Title[i]).width;
					if (_strlineW > r[0]) {
						if (_num == 2 && _this.LineType) {
							//文字换行数量大于二进行省略号处理
							_this.ctx.fillText(_this.Title.substring(_strLastIndex, i - 8) + '...', C_W / 2, _strHeight);
							_strlineW = 0;
							_strLastIndex = i;
							_num++;
							break;
						} else {
							_this.ctx.fillText(_this.Title.substring(_strLastIndex, i), C_W / 2, _strHeight);
							_strlineW = 0;
							_strHeight += 30;
							_strLastIndex = i;
							_num++;
						}
					} else if (i == _this.Title.length - 1) {
						_this.ctx.fillText(_this.Title.substring(_strLastIndex, i + 1), C_W / 2, _strHeight);
						_strlineW = 0;
					}
				}
				//设置文本 end

				//添加二维码
				// _strHeight += uni.upx2px(20);
				_this.ctx.drawImage(_QrCode.path, C_W / 2 - q[0] * 2.2 / 2, uni.upx2px(184), q[0] * 2.2, q[1] * 2.2);
				//添加二维码 end


				//延迟后渲染至canvas上
				setTimeout(function() {
					_this.ctx.draw(true, (ret) => {
						_this.getNewImage();
						_this.finished = true
					});
				}, 600);

			},
			async getImageInfo({
				imgSrc
			}) {
				return new Promise((resolve, errs) => {
					uni.getImageInfo({
						src: imgSrc,
						success: function(image) {
							resolve(image);
						},
						fail(err) {
							errs(err);
						}
					});
				});
			},
			getNewImage() {
				uni.canvasToTempFilePath({
					canvasId: "myCanvas",
					quality: 1,
					complete: (res) => {
						// console.log(res.tempFilePath);
						this.tempFilePath.push(res.tempFilePath);
					}
				}, this);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/style/mixin.scss';

	.container {
		min-height: 100vh;
		background-image: url("http://img0.imgtn.bdimg.com/it/u=1184573749,3669233175&fm=26&gp=0.jpg");
		background-size: 100% 100%;
		padding-bottom: 80rpx;
	}

	.canvas-section {
		padding: 80rpx 44rpx 0;
	}

	.btn-section {
		@include flexX;
		@include flexJ;
		margin-top: 50rpx;

		.download-btn {
			width: 480rpx;
			height: 100rpx;
			background-color: #FF544C;
			color: #fff;
			font-size: 32rpx;
			font-weight: 500;
			border-radius: 50rpx;
		}
	}
</style>
