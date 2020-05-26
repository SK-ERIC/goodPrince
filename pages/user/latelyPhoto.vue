<template>
	<view class="container">
		<view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我拍过的店 ({{ total }})</text>
		</view>

		<!-- <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback"> -->
		<!-- <mescroll-body ref="mescrollRef" @init="mescrollInit"> -->

			<!-- list -->
			<lately-photo-list :photoList="photoList" @changeLike="_changeLike" @changeFullText="_changeFullText"></lately-photo-list>

		<!-- </mescroll-body> -->

		<!-- foot -->
		<foot></foot>
		<!-- pop -->
		<pop ref="popup" :popCont="popCont"></pop>

	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import foot from '../component/foot'
	import pop from '../component/pop'
	import latelyPhotoList from '../component/latelyPhotoList'
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		components: {
			foot,
			pop,
			latelyPhotoList
		},
		data() {
			return {
				total: "",
				photoList: [],
				downOption: {
					auto: false //是否在初始化后,自动执行downCallback; 默认true
				},
				upOption: {
					empty: {
						use: true, // 是否显示空布局
						icon: "http://qakj5dvcb.bkt.clouddn.com/static/nthing.png", // 图标路径
						tip: '~ 暂无相关数据 ~', // 提示
						btnText: '我来说个话', // 按钮
						// fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
						// top: "100rpx", // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
						// zIndex: 99 // fixed定位z-index值
					},
				}
			}
		},
		onLoad(options) {
			this.total = options.total || "";
		},
		created() {
			this.postCommentShop()
		},
		methods: {
			postCommentShop() {
				let user_id = this.$db.get("userinfo").user_id
				this.$http.postCommentShop({
					user_id,
				}, res=>{
					if(res.code == 1) {
						this.photoList = res.data;
					} else {
						this.$common.errorToShow(res.msg);
					}
				})
			},
			/*下拉刷新的回调 */
			downCallback() {
				//联网加载数据
				apiNewList().then(data => {
					//联网成功的回调,隐藏下拉刷新的状态
					this.mescroll.endSuccess();
					//设置列表数据
					this.dataList.unshift(data[0]);
				}).catch(() => {
					//联网失败的回调,隐藏下拉刷新的状态
					this.mescroll.endErr();
				})
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				//联网加载数据
				apiGoods(page.num, page.size, this.isGoodsEdit).then(curPageData => {
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;

					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//this.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					//this.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

					//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
					this.mescroll.endSuccess(curPageData.length);

					//设置列表数据
					if (page.num == 1) this.goods = []; //如果是第一页需手动制空列表
					this.goods = this.goods.concat(curPageData); //追加新数据
				}).catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			},
			previewImage(v, e) {
				const current = e.currentTarget.dataset.src;
				uni.previewImage({
					urls: v,
					current: current,
				})
				console.log(v, e)
			},
			_changeLike(val) {
				this.$emit('changeLike', val)
			},
			_changeFullText(val) {
				const {
					e
				} = val;
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

	}
</style>
