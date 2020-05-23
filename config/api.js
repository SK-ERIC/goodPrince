import * as common from './common.js' //引入common
import * as db from './db.js' //引入db

export const domain = 'https://wxhyx.aisspc.cn'
const http = domain + '/api/';
//POST方法
const post = (method, data, callback) => {
	uni.showLoading({
		title: '加载中'
	});
	
	let userinfo = db.get("userinfo");
	
	if (userinfo) {
		data.token = userinfo.token;
	}
	
	uni.request({
		url: http + method,
		header: {
			'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		data: data,
		method: 'POST',
		success: (response) => {
			uni.hideLoading();
			const result = response.data			
			// 登录信息过期或者未登录
			if (result.code === 401) {
				//db.del("userinfo");
				uni.showToast({
					title: result.msg,
					icon: 'none',
					duration: 1000,
					complete: function() {
						setTimeout(function() {
							uni.hideToast();
							// #ifdef H5 || APP-PLUS
							uni.navigateTo({
								url: '/pages/login/base'
							})
							// #endif
							// #ifdef MP-WEIXIN || MP-ALIPAY	
							uni.navigateTo({
								url: '/pages/login/base',
								animationType: 'pop-in',
								animationDuration: 200
							});
							// #endif
						}, 1000)
					}
				});
			}
			callback(result);
			
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		},
	});

}
//GET方法
const get = (url, data, callback) => {
	
	uni.showLoading({
		title: '加载中'
	});	
	let header = {
		'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
	}
	// 判断token是否存在
	let userinfo = db.get("userinfo");
	
	if (userinfo) {
		header.token = userinfo.token;
	}
	

	
	let param = common.builderUrlParams(http + url, data)
	
	// console.log(url, data, param, header);
	
	uni.request({
		url: param,
		header: header,
		method: 'GET',
		success: (response) => {
			uni.hideLoading();
			const result = response.data
			if (result.code === 401) {
				//db.del("userinfo");
				uni.showToast({
					title: result.msg,
					icon: 'none',
					duration: 1000,
					complete: function() {
						setTimeout(function() {
							uni.hideToast();
							// #ifdef H5 || APP-PLUS
							uni.navigateTo({
								url: '/pages/login/base'
							})
							// #endif
							// #ifdef MP-WEIXIN || MP-ALIPAY	
							uni.navigateTo({
								url: '/pages/login/base',
								animationType: 'pop-in',
								animationDuration: 200
							});
							// #endif
						}, 1000)
					}
				});
			}
			callback(result);
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		}
	});
}
//统一处理请求错误
const showError = error => {
	let errorMsg = ''
	switch (error.status) {
		case 400:
			errorMsg = '请求参数错误'
			break
		case 401:
			errorMsg = '未授权，请登录'
			break
		case 403:
			errorMsg = '跨域拒绝访问'
			break
		case 404:
			errorMsg = `请求地址出错: ${error.config.url}`
			break
		case 408:
			errorMsg = '请求超时'
			break
		case 500:
			errorMsg = '服务器内部错误'
			break
		case 501:
			errorMsg = '服务未实现'
			break
		case 502:
			errorMsg = '网关错误'
			break
		case 503:
			errorMsg = '服务不可用'
			break
		case 504:
			errorMsg = '网关超时'
			break
		case 505:
			errorMsg = 'HTTP版本不受支持'
			break
		default:
			errorMsg = error.msg
			break
	}

	uni.showToast({
		title: errorMsg,
		icon: 'none',
		duration: 1000,
		complete: function() {
			setTimeout(function() {
				uni.hideToast();
			}, 1000);
		}
	});
}
// 
// 上传图片
export const uploadImage = (num, callback) => {
	let userinfo = db.get("userinfo");

	if (!userinfo) {
		common.jumpToLogin();
		return false;
	}
	uni.chooseImage({
		count: num,
		success: (res) => {
			uni.showLoading({
				title: '上传中...'
			});
			let tempFilePaths = res.tempFilePaths
			for (var i = 0; i < tempFilePaths.length; i++) {
				uni.uploadFile({
					url: domain + '/addons/qiniu/index/upload',
					filePath: tempFilePaths[i],
					fileType: 'image',
					name: 'file',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'multipart/form-data',
					},
					formData: {
						'method': 'images.upload',
						'upfile': tempFilePaths[i],
						'token': userinfo.token
					},
					success: (uploadFileRes) => {
						callback(JSON.parse(uploadFileRes.data),tempFilePaths)
					},
					fail: (error) => {
						if (error && error.response) {
							showError(error.response);
						}
					},
					complete: () => {
						setTimeout(function() {
							uni.hideLoading();
						}, 250);
					},
				});
			}
		}
	});
}

// code
export const wxLogin = (data, callback) => post('wechat_mp/login', data, callback)
// 首页
export const getShopIndex = (data, callback) => get('shops/shopIndex', data, callback)
// 点赞
export const postSaveZan = (data, callback) => post('Comment/saveZan', data, callback)
// 发表评论
export const postPushComment = (data, callback) => post("comment/pushComment", data, callback)
// 手机号
export const getUnionid = (data, callback) => post("wechat_mp/getUnionid", data, callback)
