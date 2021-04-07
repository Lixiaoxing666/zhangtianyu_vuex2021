/* 
	该文件用于创建一个Vue中的路由器(router)
*/

//引入vue-router
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'

//创建一个路由器（router），用于管理整个Vue项目中所以的路由（route）
const router = new VueRouter({
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/about',
			component:About
		},
	]
})

export default router