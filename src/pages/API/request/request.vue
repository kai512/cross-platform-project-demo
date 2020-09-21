<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-hello-text">
				请点击按钮向服务器发起请求
			</view>
			<view class="lw-textarea lw-common-mt">
				<textarea :value="res"></textarea>
			</view>
			<view class="lw-btn-v lw-common-mt">
				<button type="primary" @click="sendRequest" :loading="loading">发起请求（Callback）</button>
				<button type="primary" @click="sendRequest('promise')" :loading="loading">发起请求（Promise）</button>
				<button type="primary" @click="sendRequest('await')" :loading="loading">发起请求（Async/Await）</button>
			</view>
		</view>
	</view>
</template>
<script>
	const requestUrl = 'https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app'
	const duration = 2000
	export default {
		data() {
			return {
				title: 'request',
				loading: false,
				res: ''
			}
		},
		methods: {
			sendRequest(mode) {
				this.loading = true;
				switch (mode) {
					case 'promise':
						this._requestPromise();
						break;
					case 'await':
						this._requestAwait();
						break;
					default:
						this._request();
						break;
				}
			},
			_request() {
				var that = this;
				this.$lw.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					},
					success: (res) => {
						console.log('request success', res)
						that.$lw.showToast({
							title: '请求成功',
							icon: 'success',
							mask: true,
							duration: duration
						});
						that.res = '请求结果 : ' + JSON.stringify(res);
					},
					fail: (err) => {
						console.log('request fail', err);
						that.$lw.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						that.loading = false;
					}
				});
			},
			_requestPromise() {
				this.$lw.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				}).then(res => {
					console.log('request success', res[1]);
					this.$lw.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '请求结果 : ' + JSON.stringify(res[1]);

					this.loading = false;
				}).catch(err => {
					console.log('request fail', err);
					this.$lw.showModal({
						content: err.errMsg,
						showCancel: false
					});

					this.loading = false;
				});
			},
			async _requestAwait() {
				const [err, res] = await this.$lw.request({
					url: requestUrl,
					dataType: 'text',
					data: {
						noncestr: Date.now()
					}
				});
				if (err) {
					console.log('request fail', err);
					this.$lw.showModal({
						content: err.errMsg,
						showCancel: false
					});
				} else {
					console.log('request success', res)
					this.$lw.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true,
						duration: duration
					});
					this.res = '请求结果 : ' + JSON.stringify(res);
				}
				this.loading = false;
			}
		}
	}
</script>
