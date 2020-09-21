<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap">
			<view class="lw-title">默认样式</view>
			<view>
				<label class="radio">
					<radio value="r1" checked="true" />选中
				</label>
				<label class="radio">
					<radio value="r2" />未选中
				</label>
			</view>
		</view>
		<view class="lw-title lw-common-mt lw-common-pl">推荐展示样式</view>
		<view class="lw-list">
			<radio-group @change="radioChange">
				<label class="lw-list-cell lw-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'radio',
				items: [{
						value: 'USA',
						name: '美国'
					},
					{
						value: 'CHN',
						name: '中国',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: '巴西'
					},
					{
						value: 'JPN',
						name: '日本'
					},
					{
						value: 'ENG',
						name: '英国'
					},
					{
						value: 'FRA',
						name: '法国'
					},
				],
				current: 0
			}
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style>
	.lw-list-cell {
		justify-content: flex-start
	}
</style>
