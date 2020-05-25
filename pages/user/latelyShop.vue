<template>
	<view class="container">
		<view class="navBack" @click.stop="navBack">
			<text class="cuIcon-back"></text>
			<text>我去过的店 ({{ latelyList.length }})</text>
		</view>

		<!-- 列表 -->
		<lately-shop-list :latelyList="latelyList">
		</lately-shop-list>

		<!-- foot -->
		<foot></foot>
	</view>
</template>

<script>
	import foot from '../component/foot';
	import latelyShopList from '../component/latelyShopList'
	export default {
		components: {
			foot,
			latelyShopList
		},
		data() {
			return {
				latelyList: [{
						id: 0,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						browse: 99,
						title: "布达拉宫布达佩斯大饭店布达拉宫布达佩斯大饭店...",
						address: "无锡市梁溪区火车站北广场34无锡市梁溪区火车站北广场34",
						mainCont: "火锅 牛肉火锅  闽菜",
						rate: 4,
						date: "5月6日"
					},
					{
						id: 1,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						browse: 69,
						title: "牛品福潮汕牛肉火锅牛品福潮汕牛肉火锅牛品福潮汕牛肉火锅",
						address: "无锡市梁溪区火车站北广场34无锡市梁溪区火车站北广场34",
						mainCont: "火锅 牛肉火锅  闽菜",
						rate: 5,
						date: "1月32日"
					},
					{
						id: 2,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						browse: 99,
						title: "布达拉宫布达佩斯大饭店布达拉宫布达佩斯大饭店...",
						address: "无锡市梁溪区火车站北广场34无锡市梁溪区火车站北广场34",
						mainCont: "火锅 牛肉火锅  闽菜",
						rate: 4,
						date: "5月6日"
					},
					{
						id: 3,
						logo: "http://qakj5dvcb.bkt.clouddn.com/static/logo.png",
						browse: 69,
						title: "牛品福潮汕牛肉火锅牛品福潮汕牛肉火锅牛品福潮汕牛肉火锅",
						address: "无锡市梁溪区火车站北广场34无锡市梁溪区火车站北广场34",
						mainCont: "火锅 牛肉火锅  闽菜",
						rate: 5,
						date: "1月32日"
					}
				]
			}
		},
		methods: {
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
		background-color: #F4F4F6;
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
