
// main.js
import Vue from 'vue'
import App from './App'
import store from './store'

// import RouterMount from './router'
Vue.prototype.$store = store
import pageHead from './components/page-head.vue'

App.mpType = 'app'
import lw from "linewell-api"
Vue.component('page-head', pageHead)
const app = new Vue({
	store,
	...App
})

Vue.use(lw)
// Vue.component('lw', lw)

app.$mount(); //为了兼容小程序及app端必须这样写才有效果

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// ##ifdef H5
	//RouterMount(app,'#app');
// ##endif

// ##ifndef H5
	
// ##endif
