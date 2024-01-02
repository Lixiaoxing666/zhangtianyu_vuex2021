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
							path:'detail/:id',
							component:Detail,
							//TODO 路由props三种写法
							//TODO 第一种写法：props值为对象，该对象中所有的key-value的组合最终都传给Detail组件作为props
							// props:{a:900}

							//TODO 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数作为props传给Detail
							//TODO 常用
							// props:true

							//TODO 第三种写法：props值为函数，该函数返回的对象中每一组key-value都会作为props传给Detail
							props(r){   //todo 这里的形参r 就是$route 里面包含本组件Detail的一切信息
								return {
									id:r.params.id,
									title:r.query.title,
									content:r.query.content,
								}
							}

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