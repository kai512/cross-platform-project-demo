<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap">
			<view class="lw-btn-v">
				<button class="btn-load" type="primary" @click="showLoading">显示 loading 提示框</button>
				<button @click="hideLoading">隐藏 loading 提示框</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'loading'
			}
		},
		methods: {
			showLoading: function() {
				this.$lw.showLoading({
					title: 'loading'
				});
			},
			hideLoading: function() {
				this.$lw.hideLoading();
			}
		}
	}
</script>

<style>

</style>
