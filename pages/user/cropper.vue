<template>
	<view class="container">
		<tui-image-cropper :lockRatio="true" :loadding="false" :limitMove="true" :imageUrl="imageUrl" @ready="ready" @cropper="cropper"></tui-image-cropper>
	</view>
</template>

<script>
	import tuiImageCropper from '@/components/tui-image-cropper/tui-image-cropper.vue'
	export default {
		components: {
			tuiImageCropper
		},
		data() {
			return {
				src: '',
				imageUrl: '' //要裁剪的图片
			};
		},
		onLoad(options) {
			this.src = options.src || '';
			//如果从上个页面传值时可显示loading
			this.src &&
				uni.showLoading({
					title: '请稍候...',
					mask: true
				});
		},
		methods: {
			ready() {
				this.imageUrl = this.src;
			},
			cropper(e) {
				//裁剪完成后处理逻辑
				// uni.previewImage({
				// 	current: '', // 当前显示图片的http链接
				// 	urls: [e.url] // 需要预览的图片http链接列表
				// });
				let userinfo = this.$db.get("userinfo") || "";
				console.log("e.url", e)
				uni.uploadFile({
					url: 'https://wxhyx.aisspc.cn/addons/qiniu/index/upload',
					filePath: e.url,
					name: 'file',
					fileType: 'image',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'multipart/form-data',
					},
					formData: {
						'method': 'images.upload',
						'upfile': e.url,
						'token': userinfo.token
					},
					//formData:{},传递参数
					success: (uploadFileRes) => {
						console.log("uploadFileRes:", uploadFileRes.data, "backUpload:", backUpload)
						const backUpload = JSON.parse(uploadFileRes.data);
						uni.navigateTo({
							url: `./info?src=${e.url}&tem=${backUpload}`
						})
						//自定义操作
					},
					complete() {
						//console.log("this is headimg"+this.headimg)   
					},
					fail(e) {
						console.log("this is errormes " + e.message)
					}

				});


			}
		}
	};
</script>

<style>

</style>
