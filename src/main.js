
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

Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

const app = new Vue({
	store,
	...App
})

//#ifdef APP-PLUS
Vue.use(lw, true)
// #endif

//#ifndef APP-PLUS
Vue.use(lw)
// #endif
// Vue.component('lw', lw)

app.$mount(); //为了兼容小程序及app端必须这样写才有效果

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// ##ifdef H5
	//RouterMount(app,'#app');
// ##endif

// ##ifndef H5
	
// ##endif
