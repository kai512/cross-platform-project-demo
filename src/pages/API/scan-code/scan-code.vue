<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-title">扫码结果：</view>
			<view class="lw-list" v-if="result">
				<view class="lw-cell">
					<view class="scan-result">
						{{result}}
					</view>
				</view>
			</view>
			<view class="lw-btn-v">
				<button type="primary" @click="scan">扫一扫</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'scanCode',
				result: ''
			}
		},
		methods: {
			scan: function() {
				this.$lw.scanCode({
					success: (res) => {
						this.result = res.result
					}
				});
			}
		}
	}
</script>

<style>
	.scan-result {
		min-height: 50upx;
		line-height: 50upx;
	}
</style>
