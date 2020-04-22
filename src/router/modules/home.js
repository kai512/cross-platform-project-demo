// router/modules/home.js
const home = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/index/index',
		aliasPath : "/",
		component:()=>import('../../pages/index/index.vue'),
        meta: {
			loginCheck : ["wechat"],
	        title: '首页',
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