/* 
	该文件用于创建一个Vue中的路由器(router)
*/

//引入vue-router
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


//创建一个路由器（router），用于管理整个Vue项目中所以的路由（route）
const router = new VueRouter({
	mode:'history',
	routes:[
		{
			// path:'/home*', //*号可以实现模糊匹配
			name:'zhuye',
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangqing',
							path:'detail',
							component:Detail
						}
					]
				}
			]
		},
		{
			name:'guanyu',
			path:'/about',
			component:About
		},
		{ //redirect实现最后的匹配
			path:'/*',
			redirect:'/about'
		}
	]
})

export default router