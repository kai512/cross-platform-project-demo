<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */
	/*每个页面公共css */
	@import './common/lw.css';
	/* 以下样式用于 hello lw-app 演示所需 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	
	.lw-header-logo {
		padding: 30upx;
		text-align: center;
		margin-top: 10upx;
	}
	
	.lw-header-logo image {
		width: 140upx;
		height: 140upx;
	}
	
	.lw-hello-text {
		color: #7A7E83;
	}
	
	.lw-hello-addfile {
		text-align: center;
		line-height: 300upx;
		background: #FFF;
		padding: 50upx;
		margin-top: 10px;
		font-size: 38upx;
		color: #808080;
	}
	 /* #endif*/
</style>
