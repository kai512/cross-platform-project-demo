<template>
	<view class="lw-container">
		<view class="lw-header-logo">
			<image class="lw-header-image" src="/static/extuiIndex.png"></image>
		</view>
		<view class="lw-hello-text">
			<text class="hello-text">以下是lw-app扩展组件示例</text>
		</view>
		<view class="lw-panel" v-for="item in lists" :key="item.url">
			<view class="lw-panel-h" @click="goDetailPage(item.url)">
				<text class="lw-panel-text">{{item.name}}</text>
				<text class="lw-panel-icon lw-icon">&#xe470;</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				navigateFlag: false,
				lists: [{
						name: "Badge 数字角标",
						url: "badge"
					},
					{
						name: "Calendar 日历",
						url: "calendar"
					},
					{
						name: "Card 卡片",
						url: "card"
					},
					{
						name: "Collapse 折叠面板",
						url: "collapse"
					},
					{
						name: "Combox 组合框",
						url: "combox"
					},
					{
						name: "Countdown 倒计时",
						url: "countdown"
					},
					{
						name: "Drawer 抽屉",
						url: "drawer"
					},
					{
						name: "Fab 悬浮按钮",
						url: "fab"
					},
					{
						name: "Fav 收藏按钮",
						url: "fav"
					},
					{
						name: "GoodsNav 商品导航",
						url: "goods-nav"
					},
					{
						name: "Grid 宫格",
						url: "grid"
					},
					{
						name: "Icons 图标",
						url: "icons"
					},
					{
						name: "IndexedList 索引列表",
						url: "indexed-list"
					},
					{
						name: "Link 超链接",
						url: "link"
					},
					{
						name: "List 列表",
						url: "list"
					},
					{
						name: "LoadMore 加载更多",
						url: "load-more"
					},
					{
						name: "NavBar 自定义导航栏",
						url: "nav-bar"
					},
					// #ifndef QUICKAPP-WEBVIEW
					{
						name: "NoticeBar 通告栏",
						url: "notice-bar"
					},
					// #endif
					{
						name: "NumberBox 数字输入框",
						url: "number-box"
					},
					{
						name: "Pagination 分页器",
						url: "pagination"
					},
					// #ifndef QUICKAPP-WEBVIEW-HUAWEI
					{
						name: "PopUp 弹出层",
						url: "popup"
					},
					// #endif
					{
						name: "Rate 评分",
						url: "rate"
					},
					{
						name: "SearchBar 搜索栏",
						url: "search-bar"
					},
					{
						name: "SegmentedControl 分段器",
						url: "segmented-control"
					},
					{
						name: "Steps 步骤条",
						url: "steps"
					},
					{
						name: "SwipeAction 滑动操作",
						url: "swipe-action"
					},
					{
						name: "SwiperDot 轮播图指示点",
						url: "swiper-dot"
					},
					{
						name: "Tag 标签",
						url: "tag"
					},
					{
						name: "Transition 过渡动画",
						url: "transition"
					},
				]
			};
		},
		onLoad() {},
		onReady() {
			// #ifdef APP-NVUE
			this.$lw.preloadPage({
				url: "/pages/extUI/calendar/calendar",
				success(){
					console.log("preloadPage /pages/extUI/calendar/calendar")
				},
				fail(){
				}
			})
			// #endif
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验lw-app',
				path: '/pages/tabBar/extUI/extUI'
			}
		},
		onNavigationBarButtonTap(e) {
			
			this.$lw.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			goDetailPage(path) {
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				this.$lw.navigateTo({
					url: '/pages/extUI/' + path + '/' + path
				});
				
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			}
		}
	}
</script>

<style>
	@import '../../../common/lw-nvue.css';
	.lw-panel-h, .lw-navigate-item{display: flex;}
</style>
