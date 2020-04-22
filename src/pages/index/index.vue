<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<lw-Badge text="1"></lw-Badge>
		</view>
		<view>
	
		</view>
	</view>
</template>

<script>
	// import {uniCalendar} from '@dcloudio/uni-ui'
	import lwBadge from "linewell-ui/lib/lw-badge/lw-badge.vue"
	import Scroller from "@/libs/scroller"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			lwBadge
		},
		onLoad() {
			console.log(this.onReachBottom)
		},
		methods: {
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
