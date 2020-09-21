<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap" v-if="provider[0]">
			<view class="lw-btn-v lw-common-mt">
				<button type="primary" @tap="openPush">开启push</button>
				<button type="primary" @tap="closePush">关闭push</button>
				<button type="primary" @tap="listenTranMsg">监听透传数据</button>
				<button type="primary" @tap="removeTranMsg">移除监听透传数据</button>
			</view>
			<view class="lw-btn-v lw-common-mt">
				<button type="primary" @tap="requireTranMsg">发送"透传数据"消息</button>
			</view>
			<view class="lw-title lw-common-mt">透传内容：</view>
			<view class="lw-textarea">
				<textarea v-model="tranMsg" />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'push',
				provider: [],
				pushServer: 'http://demo.dcloud.net.cn/push/?',
				tranMsg:''
			}
		},
		onLoad: function () {
			this.$lw.getProvider({
				service: "push",
				success: (e) => {
					console.log("success", e);
					this.provider = e.provider;
				},
				fail: (e) => {
					console.log("获取推送通道失败", e);
				}
			});
		},
		onUnload:function(){
			this.tranMsg = ''
		},
		methods: {
			openPush() {
				this.$lw.subscribePush({
					provider: this.provider[0],
					success: (e) => {
						this.$lw.showToast({
							title: "已开启push接收"
						})
					}
				})
			},
			closePush() {
				this.$lw.unsubscribePush({
					provider: this.provider[0],
					success: (e) => {
						this.$lw.showToast({
							title: "已关闭push接收"
						})
					}
				})
			},
			listenTranMsg() {
				this.$lw.onPush({
					provider: this.provider[0],
					success: (e) => {
						this.$lw.showToast({
							title: "开始监听透传数据"
						})
					},
					callback: (e) => {
						this.$lw.showToast({
							title: "接收到透传数据"
						});
						
						this.tranMsg = JSON.stringify(e.data);
					}
				})
			},
			removeTranMsg() {
				this.$lw.offPush({
					provider: this.provider[0],
					success: (e) => {
						console.log("移除监听透传数据");
						this.$lw.showToast({
							title: "移除监听透传数据"
						})
					}
				})
			},
			requireTranMsg() { //请求‘透传数据’推送消息
				var inf = plus.push.getClientInfo();
				var url = this.pushServer + 'type=tran&appid=' + encodeURIComponent(plus.runtime.appid);
				inf.id && (url += '&id=' + inf.id);
				url += ('&cid=' + encodeURIComponent(inf.clientid));
				if (plus.os.name == 'iOS') {
					url += ('&token=' + encodeURIComponent(inf.token));
				}
				url += ('&title=' + encodeURIComponent('Hello lw-app'));
				url += ('&content=' + encodeURIComponent('带透传数据推送通知！'));
				if(plus.os.name === 'iOS'){
					url += ('&payload=' + encodeURIComponent('{"title":"Hello lw-app Test","content":"test content"}'));
				}else{
					url += ('&payload=' + encodeURIComponent('\'{"title":"Hello lw-app Test","content":"test content"}\''));
				}
				url += ('&version=' + encodeURIComponent(plus.runtime.version));
				plus.runtime.openURL(url);
			}
		}
	}
</script>

<style>

</style>

