<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view style="background:#FFFFFF; padding:40upx;">
				<view class="lw-hello-text lw-center">网络状态</view>
				<block v-if="hasNetworkType === false">
					<view class="lw-h2 lw-center lw-common-mt">未获取</view>
					<view class="lw-hello-text lw-center lw-common-mt">请点击下面按钮获取网络状态</view>
				</block>
				<block v-if="hasNetworkType === true">
					<view class="lw-h2 lw-center lw-common-mt">{{networkType}}</view>
				</block>
			</view>
			<view class="lw-btn-v lw-common-mt">
				<button type="primary" @tap="getNetworkType">获取手机网络状态</button>
				<button @tap="clear">清空</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'getNetworkType',
				hasNetworkType: false,
				networkType: ''
			}
		},
		onUnload:function(){
			this.networkType = '',this.hasNetworkType = false;
		},
		methods: {
			getNetworkType: function () {
				this.$lw.getNetworkType({
					success: (res) => {
						console.log(res)
						this.hasNetworkType = true, this.networkType = res.subtype || res.networkType
					},
                    fail: () => {
                        this.$lw.showModal({
                        	content:'获取失败！',
                            showCancel:false
                        })
                    }
				})
			},
			clear: function () {
				this.hasNetworkType = false,
					this.networkType = ''
			}
		}
	}
</script>

<style>

</style>
