<template>
	<view>
		<page-head title="websocket通讯示例"></page-head>
		<view class="lw-padding-wrap">
			<view class="lw-btn-v">
				<view class="websocket-msg">{{showMsg}}</view>
				<button type="primary" @click="connect">连接websocket服务</button>
				<button v-show="connected" type="primary" @click="send">发送一条消息</button>
				<button type="primary" @click="close">断开websocket服务</button>
				<view class="websocket-tips">发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				connected: false,
				connecting: false,
				msg: false,
				roomId: '',
				platform : this.$lw.getSystemInfoSync().platform
			}
		},
		computed: {
			showMsg() {
				if (this.connected) {
					if (this.msg) {
						return '收到消息：' + this.msg
					} else {
						return '等待接收消息'
					}
				} else {
					return '尚未连接'
				}
			}
		},
		onUnload() {
			this.$lw.closeSocket()
            this.$lw.hideLoading()
		},
		methods: {
			connect() {
				if (this.connected || this.connecting) {
					this.$lw.showModal({
						content: '正在连接或者已经连接，请勿重复连接',
						showCancel: false
					})
					return false
				}
				this.connecting = true
				this.$lw.showLoading({
					title: '连接中...'
				})
				this.$lw.connectSocket({
					url: 'wss://echo.websocket.org',
					data() {
						return {
							msg: 'Hello'
						}
					},
					// #ifdef MP
					header: {
						'content-type': 'application/json'
					},
					// #endif
					// #ifdef MP-WEIXIN
					method: 'GET',
					// #endif
					success(res) {
						// 这里是接口调用成功的回调，不是连接成功的回调，请注意
					},
					fail(err) {
						// 这里是接口调用失败的回调，不是连接失败的回调，请注意
					}
				})
				this.$lw.onSocketOpen((res) => {
					this.connecting = false
					this.connected = true
					this.$lw.hideLoading()
					this.$lw.showToast({
						icon: 'none',
						title: '连接成功'
					})
					console.log('onOpen', res);
				})
				this.$lw.onSocketError((err) => {
					this.connecting = false
					this.connected = false
					this.$lw.hideLoading()
					this.$lw.showModal({
						content: '连接失败，可能是websocket服务不可用，请稍后再试',
						showCancel: false
					})
					console.log('onError', err);
				})
				this.$lw.onSocketMessage((res) => {
					this.msg = res.data
					console.log('onMessage', res)
				})
				this.$lw.onSocketClose((res) => {
					this.connected = false
					this.startRecive = false
					this.msg = false
					console.log('onClose', res)
				})
			},
			send() {
				this.$lw.sendSocketMessage({
					data: 'from ' + this.platform + ' : ' + parseInt(Math.random() * 10000).toString(),
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					}
				})
			},
			close() {
				this.$lw.closeSocket()
			}
		}
	}
</script>

<style>
	.lw-padding-wrap {
		width: 690rpx;
		padding: 0 30rpx;
	}

	.lw-btn-v {
		padding: 10rpx 0;
	}

	.lw-btn-v button {
		margin: 20rpx 0;
	}

	.websocket-room {
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-bottom: solid 1px #DDDDDD;
		margin-bottom: 20px;
	}

	.websocket-msg {
		padding: 40px 0px;
		text-align: center;
		font-size: 14px;
		line-height: 40px;
		color: #666666;
	}

    .websocket-tips{
        padding: 40px 0px;
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        color: #666666;
    }
</style>
