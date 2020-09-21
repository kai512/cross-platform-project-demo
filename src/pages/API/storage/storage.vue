<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-common-mt">
			<view class="lw-list">
				<view class="lw-list-cell">
					<view class="lw-list-cell-left">
						<view class="lw-label">key</view>
					</view>
					<view class="lw-list-cell-db">
						<input class="lw-input" type="text" placeholder="请输入key" name="key" :value="key" @input="keyChange"></input>
					</view>
				</view>
				<view class="lw-list-cell">
					<view class="lw-list-cell-left">
						<view class="lw-label">value</view>
					</view>
					<view class="lw-list-cell-db">
						<input class="lw-input" type="text" placeholder="请输入value" name="data" :value="data" @input="dataChange"></input>
					</view>
				</view>
			</view>
			<view class="lw-padding-wrap">
				<view class="lw-btn-v">
					<button type="primary" class="btn-setstorage" @tap="setStorage">存储数据</button>
					<button @tap="getStorage">读取数据</button>
					<button @tap="clearStorage">清理数据</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'get/set/clearStorage',
				key: '',
				data: ''
			}
		},
		methods: {
			keyChange: function (e) {
				this.key = e.target.value
			},
			dataChange: function (e) {
				this.data = e.target.value
			},
			getStorage: function () {
				var key = this.key,
					data = this.data;
				if (key.length === 0) {
					this.$lw.showModal({
						title: '读取数据失败',
						content: "key 不能为空",
						showCancel:false
					})
				} else {
					this.$lw.getStorage({
						key: key,
						success: (res) => {
							this.$lw.showModal({
								title: '读取数据成功',
								content: "data: '" + res.data + "'",
								showCancel:false
							})
						},
						fail: () => {
							this.$lw.showModal({
								title: '读取数据失败',
								content: "找不到 key 对应的数据",
								showCancel:false
							})
						}
					})
				}
			},
			setStorage: function () {
				var key = this.key
				var data = this.data
				if (key.length === 0) {
					this.$lw.showModal({
						title: '保存数据失败',
						content: 'key 不能为空',
						showCancel:false
					})
				} else {
					this.$lw.setStorage({
						key: key,
						data: data,
						success: (res) => {
							this.$lw.showModal({
								title: '存储数据成功',
								content: ' ',
								showCancel:false
							})
						},
						fail: () => {
							this.$lw.showModal({
								title: '储存数据失败!',
								showCancel:false
							})
						}
					})
				}
			},
			clearStorage: function () {
				this.$lw.clearStorageSync()
				this.key = '',
					this.data = ''
				this.$lw.showModal({
					title: '清除数据成功',
					content: ' ',
					showCancel:false
				})
			}
		}
	}
</script>

<style>
	.btn-setstorage {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
