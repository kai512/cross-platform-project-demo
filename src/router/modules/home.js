// router/modules/home.js
const home = [
	{
		path: '/pages/tabBar/component/component',
		aliasPath : "/",
		component:()=>import('../../pages/tabBar/component/component.vue'),
	    meta: {
			loginCheck : ["wechat"],
	        title: '内置组件'
	    }
	},
	{
		path: '/pages/tabBar/API/API',
		component:()=>import('../../pages/tabBar/API/API.vue'),
	    meta: {
			loginCheck : ["wechat"],
	        title: '接口'
	    }
	},
	{
		path: "/pages/component/view/view",
		component:()=>import('../../pages/component/view/view.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'view'
		}
	},
	{
		path: "/pages/component/scroll-view/scroll-view",
		component:()=>import('../../pages/component/scroll-view/scroll-view.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'scroll-view'
		}
	},
	{
		path: "/pages/component/swiper/swiper",
		component:()=>import('../../pages/component/swiper/swiper.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'swiper'
		}
	},
	// ifndef#MP-TOUTIAO
	{
		path: "/pages/component/cover-view/cover-view",
		component:()=>import('../../pages/component/cover-view/cover-view.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'cover-view'
		}
	},
	{
		path: "/pages/component/movable-view/movable-view",
		component:()=>import('../../pages/component/movable-view/movable-view.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'movable-view'
		}
	},
	// endif
	{
		path: "/pages/component/text/text",
		component:()=>import('../../pages/component/text/text.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'text'
		}
	},
	{
		path: "/pages/component/rich-text/rich-text",
		component:()=>import('../../pages/component/rich-text/rich-text.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'rich-text'
		}
	},
	{
		path: "/pages/component/progress/progress",
		component:()=>import('../../pages/component/progress/progress.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'progress'
		}
	},
	{
		path: "/pages/component/button/button",
		component:()=>import('../../pages/component/button/button.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'button'
		}
	},
	{
		path: "/pages/component/checkbox/checkbox",
		component:()=>import('../../pages/component/checkbox/checkbox.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'checkbox'
		}
	},
	{
		path: "/pages/component/form/form",
		component:()=>import('../../pages/component/form/form.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'form'
		}
	},
	{
		path: "/pages/component/input/input",
		component:()=>import('../../pages/component/input/input.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'input'
		}
	},
	{
		path: "/pages/component/label/label",
		component:()=>import('../../pages/component/label/label.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'label'
		}
	},
	{
		path: "/pages/component/picker/picker",
		component:()=>import('../../pages/component/picker/picker.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'picker'
		}
	},
	{
		path: "/pages/component/picker-view/picker-view",
		component:()=>import('../../pages/component/picker-view/picker-view.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'picker-view'
		}
	},
	{
		path: "/pages/component/radio/radio",
		component:()=>import('../../pages/component/radio/radio.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'radio'
		}
	},
	{
		path: "/pages/component/slider/slider",
		component:()=>import('../../pages/component/radio/radio.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'radio'
		}
	},
	{
		path: "/pages/component/switch/switch",
		component:()=>import('../../pages/component/switch/switch.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'switch'
		}
	},
	{
		path: "/pages/component/textarea/textarea",
		component:()=>import('../../pages/component/textarea/textarea.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'textarea'
		}
	},
	{
		path: "/pages/component/navigator/navigator",
		component:()=>import('../../pages/component/navigator/navigator.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'navigator'
		}
	},
	{
		path: "/pages/component/navigator/navigate/navigate",
		component:()=>import('../../pages/component/navigator/navigate/navigate.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'navigatePage'
		}
	},
	{
		path: "/pages/component/navigator/redirect/redirect",
		component:()=>import('../../pages/component/navigator/redirect/redirect.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'redirect'
		}
	},
	{
		path: "/pages/component/image/image",
		component:()=>import('../../pages/component/image/image.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'image'
		}
	},
	// ifndefMP-ALIPAY
	{
		path: "/pages/component/video/video",
		component:()=>import('../../pages/component/video/video.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'video'
		}
	},
	// endif
	// ifndefMP-ALIPAYMP-TOUTIAO
	{
		path: "/pages/component/audio/audio",
		component:()=>import('../../pages/component/audio/audio.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'audio'
		}
	},
	// endif
	// ifndefMP-TOUTIAO
	{
		path: "/pages/component/map/map",
		component:()=>import('../../pages/component/map/map.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'map'
		}
	},
	// endif
	{
		path: "/pages/component/canvas/canvas",
		component:()=>import('../../pages/component/canvas/canvas.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'canvas'
		}
	},
	{
		path: "/pages/component/web-view/web-view",
		component:()=>import('../../pages/component/web-view/web-view.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'web-view'
		}
	},
	// #ifdefAPP-PLUS
	{
		path: "/pages/component/web-view-local/web-view-local",
		component:()=>import('../../pages/component/web-view-local/web-view-local.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: 'web-view-local'
		}
	},
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/index/index',
		aliasPath : "/",
		component:()=>import('../../pages/index/index.vue'),
	    meta: {
			loginCheck : ["wechat"],
	        title: '首页'
	    }
	},
	{
		path: "pages/API/login/login",
		component:()=>import('../../pages/API/login/login.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '授权登录'
		}
	},
	{
		path: "pages/API/get-user-info/get-user-info",
		component:()=>import('../../pages/API/get-user-info/get-user-info.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '获取用户信息'
		}
	},
	{
		path: "pages/API/request-payment/request-payment",
		component:()=>import('../../pages/API/request-payment/request-payment.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '发起支付'
		}
	},
	{
		path: "pages/API/share/share",
		component:()=>import('../../pages/API/share/share.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '分享'
		}
	},
	{
		path: "pages/API/set-navigation-bar-title/set-navigation-bar-title",
		component:()=>import('../../pages/API/set-navigation-bar-title/set-navigation-bar-title.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '设置界面标题'
		}
	},
	{
		path: "pages/API/show-loading/show-loading",
		component:()=>import('../../pages/API/show-loading/show-loading.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '加载提示框'
		}
	},
	{
		path: "pages/API/navigator/navigator",
		component:()=>import('../../pages/API/navigator/navigator.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '页面跳转'
		}
	},
	{
		path: "pages/API/navigator/new-page/new-page",
		component:()=>import('../../pages/API/navigator/new-page/new-page.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '新页面'
		}
	},
	{
		path: "pages/API/pull-down-refresh/pull-down-refresh",
		component:()=>import('../../pages/API/pull-down-refresh/pull-down-refresh.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '下拉刷新'
		}
	},
	// ifndefH5
	{
		path: "pages/API/animation/animation",
		component:()=>import('../../pages/API/animation/animation.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '创建动画'
		}
	},
	// endif
	{
		path: "pages/API/get-node-info/get-node-info",
		component:()=>import('../../pages/API/get-node-info/get-node-info.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '节点信息'
		}
	},
	// ifdefAPP-PLUS/MPWEIXIN/MPBAIDU
	{
		path: "pages/API/intersection-observer/intersection-observer",
		component:()=>import('../../pages/API/intersection-observer/intersection-observer.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '节点布局相交状态'
		}
	},
	// endif
	{
		path: "pages/API/canvas/canvas",
		component:()=>import('../../pages/API/canvas/canvas.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '创建绘画'
		}
	},
	{
		path: "pages/API/action-sheet/action-sheet",
		component:()=>import('../../pages/API/action-sheet/action-sheet.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '操作菜单'
		}
	},
	{
		path: "pages/API/modal/modal",
		component:()=>import('../../pages/API/modal/modal.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '模态弹窗'
		}
	},
	{
		path: "pages/API/toast/toast",
		component:()=>import('../../pages/API/toast/toast.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '消息提示框'
		}
	},
	{
		path: "pages/API/get-network-type/get-network-type",
		component:()=>import('../../pages/API/get-network-type/get-network-type.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '获取手机网络状态'
		}
	},
	{
		path: "pages/API/get-system-info/get-system-info",
		component:()=>import('../../pages/API/get-system-info/get-system-info.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '获取手机系统信息'
		}
	},
	{
		path: "pages/API/add-phone-contact/add-phone-contact",
		component:()=>import('../../pages/API/add-phone-contact/add-phone-contact.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '添加手机联系人'
		}
	},
	{
		path: "pages/API/on-accelerometer-change/on-accelerometer-change",
		component:()=>import('../../pages/API/on-accelerometer-change/on-accelerometer-change.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '监听加速度计数据'
		}
	},
	{
		path: "platforms/app-plus/shake/shake",
		component:()=>import('../../platforms/app-plus/shake/shake.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '摇一摇'
		}
	},
	{
		path: "pages/API/on-compass-change/on-compass-change",
		component:()=>import('../../pages/API/on-compass-change/on-compass-change.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '监听罗盘数据'
		}
	},
	{
		path: "pages/API/make-phone-call/make-phone-call",
		component:()=>import('../../pages/API/make-phone-call/make-phone-call.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '打电话'
		}
	},
	{
		path: "pages/API/scan-code/scan-code",
		component:()=>import('../../pages/API/scan-code/scan-code.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '扫码'
		}
	},
	{
		path: "pages/API/clipboard/clipboard",
		component:()=>import('../../pages/API/clipboard/clipboard.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '剪贴板'
		}
	},
	{
		path: "pages/API/request/request",
		component:()=>import('../../pages/API/request/request.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '网络请求'
		}
	},
	{
		path: "pages/API/upload-file/upload-file",
		component:()=>import('../../pages/API/upload-file/upload-file.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '上传文件'
		}
	},
	{
		path: "pages/API/download-file/download-file",
		component:()=>import('../../pages/API/download-file/download-file.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '下载文件'
		}
	},
	{
		path: "pages/API/image/image",
		component:()=>import('../../pages/API/image/image.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '图片'
		}
	},
	{
		path: "pages/API/voice/voice",
		component:()=>import('../../pages/API/voice/voice.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '录音'
		}
	},
	{
		path: "pages/API/background-audio/background-audio",
		component:()=>import('../../pages/API/background-audio/background-audio.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '背景音频'
		}
	},
	{
		path: "pages/API/video/video",
		component:()=>import('../../pages/API/video/video.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '视频'
		}
	},
	{
		path: "pages/API/file/file",
		component:()=>import('../../pages/API/file/file.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '文件'
		}
	},
	{
		path: "pages/API/get-location/get-location",
		component:()=>import('../../pages/API/get-location/get-location.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '获取位置'
		}
	},
	{
		path: "pages/API/open-location/open-location",
		component:()=>import('../../pages/API/open-location/open-location.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '查看位置'
		}
	},
	// ifndefMP-TOUTIAO
	{
		path: "pages/API/choose-location/choose-location",
		component:()=>import('../../pages/API/choose-location/choose-location.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '使用地图选择位置'
		}
	},
	// endif
	{
		path: "pages/API/storage/storage",
		component:()=>import('../../pages/API/storage/storage.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '数据存储'
		}
	},
	{
		path: "platforms/app-plus/speech/speech",
		component:()=>import('../../platforms/app-plus/speech/speech.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '语音识别'
		}
	},
	{
		path: "platforms/app-plus/orientation/orientation",
		component:()=>import('../../platforms/app-plus/orientation/orientation.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '方向传感器'
		}
	},
	{
		path: "platforms/app-plus/proximity/proximity",
		component:()=>import('../../platforms/app-plus/proximity/proximity.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '距离传感器'
		}
	},
	{
		path: "platforms/app-plus/push/push",
		component:()=>import('../../platforms/app-plus/push/push.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '推送'
		}
	},
	{
		path: "platforms/app-plus/feedback/feedback",
		component:()=>import('../../platforms/app-plus/feedback/feedback.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '问题反馈'
		}
	},
	// ifdefH5 ||APPPLUS
	{
		path: "pages/about/about",
		component:()=>import('../../pages/about/about.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '关于'
		}
	},
	// endif
	// ifndefH5 
	{
		path: "pages/API/brightness/brightness",
		component:()=>import('../../pages/API/brightness/brightness.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '屏幕亮度'
		}
	},
	// endif
	// ifndefH5 || MPALIPAY
	{
		path: "pages/API/save-media/save-media",
		component:()=>import('../../pages/API/save-media/save-media.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '保存媒体到本地'
		}
	},
	// endif
	// ifdefAPP-PLUS ||MPWEIXIN
	{
		path: "pages/API/bluetooth/bluetooth",
		component:()=>import('../../pages/API/bluetooth/bluetooth.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '蓝牙'
		}
	},
	// endif
	{
		path: "pages/API/vibrate/vibrate",
		component:()=>import('../../pages/API/vibrate/vibrate.vue'),
		meta: {
			loginCheck : ["wechat"],
		    title: '震动'
		}
	},
	{
		path: '*',
		component:()=>import('../../components/404.vue'),
		meta: {
	        title: '404',
		}
	}
   
]
export default home