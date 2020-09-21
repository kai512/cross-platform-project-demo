<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<!-- #ifdef APP-PLUS -->
			<view class="lw-btn-v">
				<button class="shake" @tap="shake">摇一摇</button>
			</view>
			<!-- #endif -->
			<view class="lw-btn-v">
				<button type="primary" @tap="watchAcce">监听设备的加速度变化</button>
				<button type="primary" @tap="stopAcce">停止监听设备的加速度变化</button>
			</view>
			<view class="lw-textarea lw-common-mt">
				<textarea :value="value" />
			</view>
		</view>
	</view>
</template>
<script>

	export default {
		data() {
			return {
				title: 'onAccelerometerChange',
				value: ''
			}
		},
		onUnload() {
			this.$lw.stopAccelerometer();
		},
		methods: {
			//#ifdef APP-PLUS
			shake() {
				this.$lw.navigateTo({
					url: '/platforms/app-plus/shake/shake'
				})
			},
			//#endif
			watchAcce() {
				this.$lw.onAccelerometerChange((res) => {
					this.value = "监听设备的加速度变化:\n" + "X轴：" + res.x.toFixed(2) + "\nY轴：" + res.y.toFixed(2) +
						"\nZ轴：" + res.z.toFixed(2);
				})
			},
			stopAcce() {
				this.$lw.stopAccelerometer()
			}
		}
	}
</script>

<style>
	.shake {
		background-color: #FFCC33;
		color: #ffffff;
		margin-bottom: 50upx;
	}
</style>
