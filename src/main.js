
// main.js
import Vue from 'vue'
import App from './App'
// #ifdef H5
import RouterMount from './router'
// #endif
App.mpType = 'app'
import lw from "linewell-api"
const app = new Vue({
	...App
})
Vue.use(lw)

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
