<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-common-mt">
			<form @submit="openLocation">
				<view class="lw-list">
					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">经度</view>
						</view>
						<view class="lw-list-cell-db">
							<input class="lw-input" type="text" :disabled="true" value="116.39747" name="longitude"></input>
						</view>
					</view>
					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">纬度</view>
						</view>
						<view class="lw-list-cell-db">
							<input class="lw-input" type="text" :disabled="true" value="39.9085" name="latitude"></input>
						</view>
					</view>
					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">位置名称</view>
						</view>
						<view class="lw-list-cell-db">
							<input class="lw-input" type="text" :disabled="true" value="天安门" name="name"></input>
						</view>
					</view>
					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">详细位置</view>
						</view>
						<view class="lw-list-cell-db">
							<input class="lw-input" type="text" :disabled="true" value="北京市东城区东长安街" name="address"></input>
						</view>
					</view>
				</view>
				<view class="lw-padding-wrap">
					<view class="lw-btn-v lw-common-mt">
						<button type="primary" formType="submit">查看位置</button>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'openLocation'
			}
		},
		methods: {
			openLocation: function (e) {
				console.log(e)
				var value = e.target.value
				this.$lw.openLocation({
					longitude: Number(value.longitude),
					latitude: Number(value.latitude),
					name: value.name,
					address: value.address
				})
			}
		}
	}
</script>

<style>
	.lw-list-cell-left {
		padding: 0 30upx;
	}
</style>
