<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-common-mt">
			<form>
				<view class="lw-list">
					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">图片来源</view>
						</view>
						<view class="lw-list-cell-right">
							<picker :range="sourceType" @change="sourceTypeChange" :value="sourceTypeIndex" mode="selector">
								<view class="lw-input">{{sourceType[sourceTypeIndex]}}</view>
							</picker>
						</view>
					</view>

					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">图片质量</view>
						</view>
						<view class="lw-list-cell-right">
							<picker :range="sizeType" @change="sizeTypeChange" :value="sizeTypeIndex" mode="selector">
								<view class="lw-input">{{sizeType[sizeTypeIndex]}}</view>
							</picker>
						</view>
					</view>

					<view class="lw-list-cell">
						<view class="lw-list-cell-left">
							<view class="lw-label">数量限制</view>
						</view>
						<view class="lw-list-cell-right">
							<picker :range="count" @change="countChange" mode="selector">
								<view class="lw-input">{{count[countIndex]}}</view>
							</picker>
						</view>
					</view>
				</view>
					

				<view class="lw-list list-pd">
					<view class="lw-list-cell cell-pd">
						<view class="lw-uploader">
							<view class="lw-uploader-head">
								<view class="lw-uploader-title">点击可预览选好的图片</view>
								<view class="lw-uploader-info">{{imageList.length}}/9</view>
							</view>
							<view class="lw-uploader-body">
								<view class="lw-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="lw-uploader__file">
											<image class="lw-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="lw-uploader__input-box">
										<view class="lw-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				title: 'choose/previewImage',
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		onUnload() {
			this.imageList = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		methods: {
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = e.target.value
			},
			sizeTypeChange: function(e) {
				this.sizeTypeIndex = e.target.value
			},
			countChange: function(e) {
				this.countIndex = e.target.value;
			},
			chooseImage: async function() {
					if (this.imageList.length === 9) {
						let isContinue = await this.isFullImg();
						console.log("是否继续?", isContinue);
						if (!isContinue) {
							return;
						}
					}
					this.$lw.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						sizeType: sizeType[this.sizeTypeIndex],
						count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					})
				},
				isFullImg: function() {
					return new Promise((res) => {
						this.$lw.showModal({
							content: "已经有9张图片了,是否清空现有图片？",
							success: (e) => {
								if (e.confirm) {
									this.imageList = [];
									res(true);
								} else {
									res(false)
								}
							},
							fail: () => {
								res(false)
							}
						})
					})
				},
				previewImage: function(e) {
					var current = e.target.dataset.src
					this.$lw.previewImage({
						current: current,
						urls: this.imageList
					})
				}
		}
	}
</script>

<style>
	.cell-pd {
		padding: 22upx 30upx;
	}

	.list-pd {
		margin-top: 50upx;
	}
</style>
