<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap lw-common-mt">
			<view class="movable block">
				<!-- #ifndef MP-TOUTIAO -->
				<movable-area>
					<movable-view class="target" direction="all" @change="getNodeInfo">Drag</movable-view>
				</movable-area>
				<!-- #endif -->
				<!-- #ifdef MP-TOUTIAO -->
				<view class="target" @click="setPosition" :style="{top:top,left:left}">Click</view>
				<!-- #endif -->
			</view>
			<view class="movable">
				<view class="info">
					<view v-for="(item,index) in info" :key="index">
						<text class="b">{{item.key}}</text>
						<text class="span">{{item.val}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'createSelectorQuery',
				top: 0,
				left: '0px',
				info: []
			}
		},
		onReady() {
			this.getNodeInfo()
		},
		methods: {
			setPosition() {
				this.left = Math.random() * this.$lw.upx2px(320) + 'px'
				this.top = Math.random() * this.$lw.upx2px(320) + 'px'
				this.getNodeInfo()
			},
			getNodeInfo() {
				this.$lw.createSelectorQuery().select('.target').boundingClientRect().exec((ret) => {
					const rect = ret[0]
					if (rect) {
						const info = []
						for (let key in rect) {
							if (key !== 'id' && key !== 'dataset') {
								info.push({
									'key': key,
									'val': rect[key]
								})
							}
						}
						this.info = info
					}
				});
			}
		},
	}
</script>

<style>
	.movable {
		display: flex;
		justify-content: center;
	}

	.block {
		height: 400upx;
		width: 400upx;
		background-color: #FFFFFF;
		border: 1px solid #ccc;
		position: relative;
		margin: 0 auto;
		margin-bottom: 30upx;
	}

	movable-area {
		height: 400upx;
		width: 400upx;
		position: relative;
	}

	.target {
		height: 80upx;
		width: 80upx;
		line-height: 80upx;
		text-align: center;
		color: #FFFFFF;
		background-color: #4cd964;
		font-size: 28upx;
		position: absolute;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.b {
		font-weight: bold;
		width: 150upx;
		display: inline-block;
	}

	.span {
		width: 100upx;
		display: inline-block;
	}
</style>
