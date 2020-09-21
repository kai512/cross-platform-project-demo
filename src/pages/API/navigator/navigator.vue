<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-btn-v">
				<button @tap="navigateTo">跳转新页面，并传递数据</button>
				<button @tap="navigateBack">返回上一页</button>
				<button @tap="redirectTo">在当前页面打开</button>
				<button @tap="switchTab">切换到扩展组件选项卡</button>
				<button @tap="reLaunch">关闭所有页面，打开首页</button>
				<!-- #ifdef APP-PLUS -->
				<button @tap="customAnimation">使用自定义动画打开页面</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button @tap="preloadPage">预载复杂页面</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<button @tap="unPreloadPage">取消页面预载</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button @tap="navigateToPreloadPage">打开复杂页面</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>
<script>
	const preloadPageUrl = '/pages/extUI/calendar/calendar'
	export default {
		data() {
			return {
				title: 'navigate'
			}
		},
		methods: {
			navigateTo() {
				this.$lw.navigateTo({
					url: 'new-page/new-vue-page-1?data=Hello'
				})
			},
			navigateBack() {
				this.$lw.navigateBack();
			},
			redirectTo() {
				this.$lw.redirectTo({
					url: 'new-page/new-vue-page-1'
				});
			},
			switchTab() {
				this.$lw.switchTab({
					url: '/pages/tabBar/extUI/extUI'
				});
			},
			reLaunch() {
				this.$lw.reLaunch({
					url: '/pages/tabBar/component/component'
				});
			},
			customAnimation(){
				this.$lw.navigateTo({
					url: 'new-page/new-vue-page-1?data=使用自定义动画打开页面',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			},
			preloadPage(){
				var that = this;
				this.$lw.preloadPage({
					url: preloadPageUrl,
					success(){
						that.$lw.showToast({
							title:'页面预载成功'
						})
					},
					fail(){
						that.$lw.showToast({
							title:'页面预载失败'
						})
					}
				})
			},
			unPreloadPage(){
				this.$lw.unPreloadPage({
					url: preloadPageUrl
				})
			},
			navigateToPreloadPage(){
				this.$lw.navigateTo({
					url: preloadPageUrl
				})
			}
		}
	}
</script>
