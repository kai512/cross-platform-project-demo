<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-title">默认样式</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="lw-title">不同颜色和尺寸的switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>

			<view class="lw-title">推荐展示样式</view>
		</view>
		<view class="lw-list">
			<view class="lw-list-cell lw-list-cell-pd">
				<view class="lw-list-cell-db">开启中</view>
				<switch checked />
			</view>
			<view class="lw-list-cell lw-list-cell-pd">
				<view class="lw-list-cell-db">关闭</view>
				<switch />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'switch 开关'
			}
		},
		methods: {
			switch1Change: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.detail.value)
			},
			switch2Change: function (e) {
				console.log('switch2 发生 change 事件，携带值为', e.detail.value)
			}
		}
	}
</script>

