<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="lw-padding-wrap">
			<view style="background:#FFF; padding:40upx;">
				<block v-if="hasLogin === true">
					<view class="lw-h3 lw-center lw-common-mt">已登录</view>
					<view class="lw-hello-text lw-center">
						<text>每个账号仅需登录 1 次，\n后续每次进入页面即可自动拉取用户信息。</text>
					</view>
				</block>
				<block v-if="hasLogin === false">
					<view class="lw-h3 lw-center lw-common-mt">未登录</view>
					<view class="lw-hello-text lw-center">
						请点击按钮登录
					</view>
				</block>
				{{result}}
			</view>
			<view class="lw-btn-v lw- lw-common-mt">
				<button type="primary" class="page-body-button" v-for="(value,key) in providerList" @click="tologin(value)" :key="key">{{value.name}}</button>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				title: 'login',
				providerList: [],
				result : ''
			}
		},
		computed: {
			...mapState(['hasLogin'])
		},
		onLoad() {
			this.providerList = [{
					name: '立即登录',
					id: 'cstoon'
				}]
		},
		methods: {
			...mapMutations(['login']),
			tologin(provider) {
				
				let UserModule = this.$lw.requireNativePlugin('UserModule')
				this.result = UserModule.getToken();
			}
		}
	}
</script>

<style>
	button {
		background-color: #007aff;
		color: #ffffff;
	}
</style>
