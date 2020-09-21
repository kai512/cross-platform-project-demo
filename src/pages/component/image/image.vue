<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-title">
				示例1 <text>\n本地图片</text>
			</view>
			<view class="lw-center" style="background:#FFFFFF; font-size:0;">
				<!-- #ifdef MP-ALIPAY -->
				<image class="image" mode="widthFix" src="../../../static/logo.png" />
				<!-- #endif -->
				<!-- #ifndef MP-ALIPAY -->
				<image class="image" mode="widthFix" src="../../../static/logo.png" />
				<!-- #endif -->
			</view>
			<view class="lw-title lw-common-mt">
				示例2 <text>\n网络图片</text>
			</view>
			<view class="lw-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" src="../../../static/app-plus/lw@2x.png" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'image'
			}
		}
	}
</script>
<style>
	.image {
		margin:40upx 0;
		width: 200upx;
	}
</style>
