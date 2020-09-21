<template>
	<view class="page">
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap">
			<view class="lw-helllo-text">
				本页标题栏是lw-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。
			</view>
			<view class="lw-btn-v">
				<button type="default" @click="setText">改变标题栏文字</button>
				<button type="primary" @click="setBg">改变标题栏颜色</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'nav-default',
				hasSetText:false,
				hasSetBg:false
			}
		},
		methods: {
			setText() {
				this.hasSetText = !this.hasSetText;
				this.$lw.setNavigationBarTitle({
					title: this.hasSetText ? "Hello lw-app" : "默认导航栏"
				})
			},
			setBg() {
				this.hasSetBg = !this.hasSetBg;
				this.$lw.setNavigationBarColor({
					frontColor: this.hasSetBg ?  "#000000" : "#ffffff",
					backgroundColor: this.hasSetBg ? "#F8F8F8" : "#007AFF"
				})
			}
		}
	}
</script>

<style>
</style>
