<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="lw-btn-v">
				<button type="default" @tap="modalTap">有标题的modal</button>
				<button type="default" @tap="noTitlemodalTap">无标题的modal</button>
			</view>
		</view>
	</view>
</template>
<script>

	export default {
		data() {
			return {
				title: 'modal',
				modalHidden: true,
				modalHidden2: true
			}
		},
		methods: {
			modalTap: function (e) {
				this.$lw.showModal({
					title: "弹窗标题",
					content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
					showCancel: false,
					confirmText: "确定"
				})
			},
			noTitlemodalTap: function (e) {
				this.$lw.showModal({
					content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
					confirmText: "确定",
					cancelText: "取消"
				})
			}
		}
	}
</script>