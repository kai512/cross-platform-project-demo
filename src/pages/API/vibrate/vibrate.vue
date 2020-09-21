<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap">
			<button class="lw-button" type="primary" @click="longshock">长震动</button>
			<button class="lw-button"  @click="shortshock">短震动</button>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			title: 'vibrateLong/vibrateShort'
		};
	},
	onLoad() {},
	methods: {
		longshock() {
			this.$lw.vibrateLong({
				success: function() {
					console.log('success');
				}
			});
		},
		shortshock() {
			this.$lw.vibrateShort({
				success: function() {
					console.log('success');
				}
			});
		}
	}
};
</script>

<style>
.lw-padding-wrap {
	margin-top: 50upx 0;
}
.lw-button {
	margin: 30upx 0;
}
</style>
