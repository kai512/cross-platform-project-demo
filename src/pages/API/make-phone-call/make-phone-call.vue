<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-hello-text lw-center">请在下方输入电话号码</view>
			<input class="input lw-common-mt" type="number" name="input" @input="bindInput" />
			<view class="lw-btn-v lw-common-mt">
				<button @tap="makePhoneCall" type="primary" :disabled="disabled">拨打</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'makePhoneCall',
				disabled: true
			}
		},
		methods: {
			bindInput: function (e) {
				this.inputValue = e.target.value
				if (this.inputValue.length > 0) {
					this.disabled = false
				} else {
					this.disabled = true
				}
			},
			makePhoneCall: function () {
				this.$lw.makePhoneCall({
					phoneNumber: this.inputValue,
					success: () => {
						console.log("成功拨打电话")
					}
				})
			}
		}
	}
</script>

<style>
	.input {
		height: 119upx;
		line-height: 119upx;
		font-size: 78upx;
		border-bottom: 1upx solid #E2E2E2;
		text-align:center;
	}
</style>
