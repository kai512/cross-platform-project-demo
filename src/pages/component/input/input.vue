<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-common-mt">
			<view class="lw-form-item lw-column">
				<view class="title">可自动聚焦的 input</view>
				<input class="lw-input" focus placeholder="自动获得焦点" />
			</view>
			<!-- #ifdef APP-PLUS -->
			<view v-if="platform==='ios'" class="lw-form-item lw-column">
				<view class="title">隐藏 iOS 软键盘上的导航条</view>
				<input class="lw-input" placeholder="触摸其他地方收起键盘" @focus="onFocus" @blur="onBlur" />
			</view>
			<!-- #endif -->
			<view class="lw-form-item lw-column">
				<view class="title">键盘右下角按钮显示为搜索</view>
				<input class="lw-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">控制最大输入长度的 input</view>
				<input class="lw-input" maxlength="10" placeholder="最大输入长度为10" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">实时获取输入值：{{inputValue}}</view>
				<input class="lw-input" @input="onKeyInput" placeholder="输入同步到view中" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">控制输入的 input</view>
				<input class="lw-input" @input="replaceInput" v-model="changeValue" placeholder="连续的两个1会变成2" />
			</view>
			<!-- #ifndef MP-BAIDU -->
			<view class="lw-form-item lw-column">
				<view class="title">控制键盘的 input</view>
				<input class="lw-input" ref="input1" @input="hideKeyboard" placeholder="输入123自动收起键盘" />
			</view>
			<!-- #endif -->
			<view class="lw-form-item lw-column">
				<view class="title">数字输入的 input</view>
				<input class="lw-input" type="number" placeholder="这是一个数字输入框" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">密码输入的 input</view>
				<input class="lw-input" password type="text" placeholder="这是一个密码输入框" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">带小数点的 input</view>
				<input class="lw-input" type="digit" placeholder="带小数点的数字键盘" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">身份证输入的 input</view>
				<input class="lw-input" type="idcard" placeholder="身份证输入键盘" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">控制占位符颜色的 input</view>
				<input class="lw-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">带清除按钮的输入框</view>
				<view class="with-fun">
					<input class="lw-input" placeholder="带清除按钮的输入框" :value="inputClearValue" @input="clearInput" />
					<view class="lw-icon lw-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
				</view>
			</view>
			<view class="lw-form-item lw-column">
				<view class="title">可查看密码的输入框</view>
				<view class="with-fun">
					<input class="lw-input" placeholder="请输入密码" :password="showPassword" />
					<view class="lw-icon lw-icon-eye" :class="[!showPassword ? 'lw-active' : '']" @click="changePassword"></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'input',
				focus: false,
				inputValue: '',
				showClearIcon: false,
				inputClearValue: '',
				changeValue: '',
				showPassword: true,
				src: '../../../static/eye-1.png',
				platform: ''
			}
		},
		methods: {
			onKeyInput: function(event) {
				this.inputValue = event.target.value
			},
			replaceInput: function(event) {
				var value = event.target.value;
				if (value === '11') {
					this.changeValue = '2';
				}
			},
			hideKeyboard: function(event) {
				if (event.target.value === '123') {
					this.$lw.hideKeyboard();
				}
			},
			clearInput: function(event) {
				this.inputClearValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			onFocus() {
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'none'
				})
			},
			onBlur() {
				this.$mp.page.$getAppWebview().setStyle({
					softinputNavBar: 'auto'
				})
			}
		},
		onLoad() {
			this.platform = this.$lw.getSystemInfoSync().platform
		}
	}
</script>

<style>
	.title {
		padding: 10upx 25upx;
	}
</style>
