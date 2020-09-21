<template>
	<view class="lw-padding-wrap">
		<page-head :title="title"></page-head>
		<button @click="setTabBarBadge">
			{{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}
		</button>
		<button @click="showTabBarRedDot">
			{{ !hasShownTabBarRedDot ?  '显示红点' : '移除红点'}}
		</button>
		<button @click="customStyle">
			{{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}}
		</button>
		<button @click="customItem">
			{{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}
		</button>
		<button @click="hideTabBar">
			{{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}
		</button>
		<view class="btn-area">
			<button type="primary" @click="navigateBack">返回上一级</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'tababr',
				hasSetTabBarBadge: false,
				hasShownTabBarRedDot: false,
				hasCustomedStyle: false,
				hasCustomedItem: false,
				hasHiddenTabBar: false
			}
		},
		destroyed() {
			if (this.hasSetTabBarBadge) {
				this.$lw.removeTabBarBadge({
					index: 1
				})
			}
			if (this.hasShownTabBarRedDot) {
				this.$lw.hideTabBarRedDot({
					index: 1
				})
			}
			if (this.hasHiddenTabBar) {
				this.$lw.showTabBar()
			}
			if (this.hasCustomedStyle) {
				this.$lw.setTabBarStyle({
					color: '#7A7E83',
					selectedColor: '#007AFF',
					backgroundColor: '#F8F8F8',
					borderStyle: 'black'
				})
			}

			if (this.hasCustomedItem) {
				let tabBarOptions = {
					index: 1,
					text: '接口',
					iconPath: '/static/api.png',
					selectedIconPath: '/static/apiHL.png'
				}
				this.$lw.setTabBarItem(tabBarOptions)
			}
		},
		methods: {
			navigateBack() {
				this.$emit('unmount')
			},
			setTabBarBadge() {
				if (!this.hasSetTabBarBadge) {
					this.$lw.setTabBarBadge({
						index: 1,
						text: '1'
					})
				} else {
					this.$lw.removeTabBarBadge({
						index: 1
					})
				}
				this.hasSetTabBarBadge = !this.hasSetTabBarBadge
			},
			showTabBarRedDot() {
				if (!this.hasShownTabBarRedDot) {
					this.$lw.showTabBarRedDot({
						index: 1
					})
				} else {
					this.$lw.hideTabBarRedDot({
						index: 1
					})
				}
				this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot
			},
			hideTabBar() {
				if (!this.hasHiddenTabBar) {
					this.$lw.hideTabBar()
				} else {
					this.$lw.showTabBar()
				}
				this.hasHiddenTabBar = !this.hasHiddenTabBar
			},
			customStyle() {
				if (this.hasCustomedStyle) {
					this.$lw.setTabBarStyle({
						color: '#7A7E83',
						selectedColor: '#007AFF',
						backgroundColor: '#F8F8F8',
						borderStyle: 'black'
					})
				} else {
					this.$lw.setTabBarStyle({
						color: '#FFF',
						selectedColor: '#007AFF',
						backgroundColor: '#000000',
						borderStyle: 'black'
					})
				}
				this.hasCustomedStyle = !this.hasCustomedStyle
			},
			customItem() {
				let tabBarOptions = {
					index: 1,
					text: '接口',
					iconPath: '/static/api.png',
					selectedIconPath: '/static/apiHL.png'
				}
				if (this.hasCustomedItem) {
					this.$lw.setTabBarItem(tabBarOptions)
				} else {
					tabBarOptions.text = 'API'
					this.$lw.setTabBarItem(tabBarOptions)
				}
				this.hasCustomedItem = !this.hasCustomedItem
			}
		}
	}
</script>

<style>
	button {
		margin-top: 30upx;
	}

	.btn-area {
		padding-top: 30upx;
	}
</style>
