<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-btn-v">
				<button type="primary" :disabled="isOpen" @click="openBluetoothAdapter">打开蓝牙模块</button>
				<button type="primary" :disabled="!isOpen" @click="closeBluetoothAdapter">关闭蓝牙模块</button>
				<button type="primary" :disabled="!isOpen || isStarted" :loading="isStarted" @click="startBeaconDiscovery">开始搜索附近的iBeacon设备</button>
				<button type="primary" :disabled="!isStarted" @click="stopBeaconDiscovery">停止搜索附近的iBeacon设备</button>
			</view>
		</view>
		<scroll-view class="lw-scroll_box">
			<view class="lw-title" v-if="isStarted || deviceList.length > 0">已经发现 {{ deviceList.length }} 台设备:</view>
			<view class="lw-list-box" v-for="(item, index) in deviceList" :key="item.uuid">
				<view>
					<view class="lw-list_name">UUID: {{ item.uuid }}</view>
					<view class="lw-list_item">major: {{ item.major }}</view>
					<view class="lw-list_item">minor: {{ item.minor }}</view>
					<view class="lw-list_item">rssi: {{ item.rssi }} dBm</view>
					<view class="lw-list_item">accuracy: {{ item.accuracy }}</view>
					<view class="lw-list_item">heading: {{ item.heading }}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	const DEVICE_UUID_WEICHAT = 'FDA50693-A4E2-4FB1-AFCF-C6EB07647825';
	export default {
		data() {
			return {
				title: 'iBeacon',
				isOpen: false,
				isStarted: false,
				deviceList: [],
				isPageOpened: false
			};
		},
		onLoad() {
			this.onBeaconUpdate();
		},
		onShow() {
			this.isPageOpened = true;
		},
		methods: {
			maskclose() {
				this.maskShow = false;
			},
			openBluetoothAdapter() {
				this.$lw.openBluetoothAdapter({
					success: (res) => {
						console.log('初始化蓝牙成功:' + res.errMsg);
						console.log(res);
						this.isOpen = true;
						this.deviceList = [];
					},
					fail: (err) => {
						console.log('初始化蓝牙失败，错误码：' + (err.errCode || err.errMsg));
						if (err.errCode !== 0) {
							initTypes(err.errCode, err.errMsg);
						}
					}
				});
			},
			closeBluetoothAdapter(OBJECT) {
				this.stopBeaconDiscovery();
				wx.closeBluetoothAdapter({
					success: (res) => {
						this.isOpen = false;
						console.log('断开蓝牙模块成功');
					}
				});
			},
			onBeaconUpdate() {
				this.$lw.onBeaconUpdate(res => {
					if (!this.isPageOpened || !this.isOpen || !this.isStarted) {
						return;
					}
					console.log(res);
					// if (res.code !== 0) {
					// 	return;
					// }
					if (res.beacons && res.beacons.length > 0) {
						this.getBeacons();
					} else if (!res.connected) {
						this.deviceList = [];
					}
				});
			},
			startBeaconDiscovery() {
				this.$lw.startBeaconDiscovery({
					uuids: this.getUUIDList(),
					success: (res) => {
						this.isStarted = true;
						console.log(res);
					},
					fail: (err) => {
						console.error(err);
					}
				});
			},
			stopBeaconDiscovery(types) {
				if(this.isStarted) {
					this.$lw.stopBeaconDiscovery({
						success: (res) => {
							this.isStarted = false;
						},
						fail: (err) => {
							console.error(err);
						}
					});
				}
			},
			getBeacons() {
				this.$lw.getBeacons({
					success: (res) => {
						if (res.beacons && res.beacons.length > 0) {
							console.log(res.beacons);
							this.deviceList = res.beacons;
						}
					},
					fail: (err) => {
						console.log('获取设备服务失败，错误码：' + err.errCode);
						if (errCode.errCode !== 0) {
							initTypes(errCode.errCode);
						}
					}
				});
			},
			getUUIDList() {
				// #ifdef APP-PLUS
				const sysInfo = this.$lw.getSystemInfoSync();
				if (!sysInfo) {
					return [];
				}
				let isIOS = sysInfo.platform ? (sysInfo.platform.toLowerCase() === "ios") : false;
				if (isIOS) {
					return [DEVICE_UUID_WEICHAT];
				}
				return [];
				// #endif

				// #ifndef APP-PLUS
				return [DEVICE_UUID_WEICHAT];
				// #endif
			}
		},
		onUnload() {
			this.isPageOpened = false;
		}
	};

	/**
	 * 判断初始化蓝牙状态
	 */
	function initTypes(code, errMsg) {
		switch (code) {
			case 10000:
				toast('未初始化蓝牙适配器');
				break;
			case 10001:
				toast('未检测到蓝牙，请打开蓝牙重试！');
				break;
			case 10002:
				toast('没有找到指定设备');
				break;
			case 10003:
				toast('连接失败');
				break;
			case 10004:
				toast('没有找到指定服务');
				break;
			case 10005:
				toast('没有找到指定特征值');
				break;
			case 10006:
				toast('当前连接已断开');
				break;
			case 10007:
				toast('当前特征值不支持此操作');
				break;
			case 10008:
				toast('其余所有系统上报的异常');
				break;
			case 10009:
				toast('Android 系统特有，系统版本低于 4.3 不支持 BLE');
				break;
			default:
				toast(errMsg);
		}
	}

	/**
	 * 弹出框封装
	 */
	function toast(content, showCancel = false) {
		this.$lw.showModal({
			title: '提示',
			content,
			showCancel
		});
	}
</script>

<style>
	.lw-title {
		/* width: 100%; */
		/* height: 80rpx; */
		text-align: center;
	}

	.lw-mask {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		background: rgba(0, 0, 0, 0.6);
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.lw-scroll_box {
		height: 70%;
		background: #fff;
		border-radius: 20rpx;
	}

	.lw-list-box {
		margin: 0 20rpx;
		padding: 15rpx 0;
		border-bottom: 1px #f5f5f5 solid;
		box-sizing: border-box;
	}

	.lw-list:last-child {
		border: none;
	}

	.lw-list_name {
		font-size: 30rpx;
		color: #333;
	}

	.lw-list_item {
		font-size: 24rpx;
		color: #555;
		line-height: 1.5;
	}

	.lw-success_box {
		position: absolute;
		left: 0;
		bottom: 0;
		min-height: 100rpx;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		border-top: 1px #eee solid;
	}

	.lw-success_sub {
		/* width: 100%%; */
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
	}

	.lw-close_button {
		padding: 0 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #ce3c39;
		color: #ffffff;
		border-radius: 10rpx;
	}

	.lw-success_content {
		height: 600rpx;
		margin: 30rpx;
		margin-top: 0;
		border: 1px #eee solid;
		padding: 30rpx;
	}

	.lw-content_list {
		padding-bottom: 10rpx;
		border-bottom: 1px #f5f5f5 solid;
	}

	.lw-tips {
		text-align: center;
		font-size: 24rpx;
		color: #666;
	}
</style>
