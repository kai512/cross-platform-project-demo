// router/index.js

import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router, {
	RouterMount
} from '../components/uni-simple-router';
import { setToken, getToken, setTitle, setAppInfo, initNativeBack } from '@/libs/util'
import { canTurnTo } from '@/libs/h5/login-filter'
import config from '@/config'
Vue.use(Router)

//初始化
const router = new Router({
	h5 : {
		vueRouterDev : false,  //完全使用vue-router开发 默认 false  
		vueNext : true,
		useUniConfig : true
	},
	encodeURI : false,
    routes : [...modules] //路由表
});

/**
 * 权限判断 
 */
const turnTo = (to, from, next) => {
	
	canTurnTo(to, from).then(() => {
		
		next();
	}).catch(() => {
		next({
			replace: true,
			path: '/404'
		}) // 无权限，重定向到401页面
	})
}
router.beforeEach((to, from, next) => {
	setAppInfo(to).then(() => {
		turnTo(to, from, next)
	})
	
})
router.afterEach(to => {
	setTitle(to, router.app)
	
	initNativeBack();
})
export default RouterMount;