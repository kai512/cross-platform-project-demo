<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-common-mt">
			<view class="lw-form-item lw-column">
				<view class="title">表单组件在label内</view>
				<checkbox-group class="lw-list" @change="checkboxChange">
					<label class="lw-list-cell lw-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
						<view>
							<checkbox :value="item.name" :checked="item.checked"></checkbox>
						</view>
						<view>{{item.value}}</view>
					</label>
				</checkbox-group>
			</view>

			<view class="lw-form-item lw-column">
				<view class="title">label用for标识表单组件</view>
				<radio-group class="lw-list" @change="radioChange">
					<label class="lw-list-cell lw-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view>
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
						</view>
						<view>
							<label class="label-2-text" :for="item.name">
								<text>{{item.value}}</text>
							</label>
						</view>
					</label>
				</radio-group>
			</view>

			<view class="lw-form-item lw-column">
				<view class="title">label内有多个时选中第一个</view>
				<checkbox-group class="lw-list" @change="checkboxChange">
					<label class="label-3">
						<view class="lw-list-cell lw-list-cell-pd">
							<checkbox class="checkbox-3">选项一</checkbox>
						</view>
						<view class="lw-list-cell lw-list-cell-pd">
							<checkbox class="checkbox-3">选项二</checkbox>
						</view>
						<view class="lw-link lw-center" style="margin-top:20upx;">点击该label下的文字默认选中第一个checkbox</view>
					</label>
				</checkbox-group>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'label',
				checkboxItems: [{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: 'true'
					}
				],
				radioItems: [{
						name: 'USA',
						value: '美国'
					},
					{
						name: 'CHN',
						value: '中国',
						checked: 'true'
					}
				],
				hidden: false
			}
		},
		methods: {
			checkboxChange: function(e) {
				var checked = e.target.value
				console.log(checked)

			},
			radioChange: function(e) {
				var checked = e.target.value
				console.log(checked)
			}
		}
	}
</script>

<style>
	.lw-list-cell {
		justify-content: flex-start
	}

	.lw-list .label-3 {
		padding: 0;
	}
</style>
