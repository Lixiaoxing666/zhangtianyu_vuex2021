## 1.Vue脚手架说明
			1.文件结构分析
						|-- node_modules
						|-- public
								|-- index.html: 主页面文件
						|-- src
							|-- components：存放组件的文件夹
							|-- App.vue:外壳组件
							|-- main.js: 应用入口js
						|-- babel.config.js: babel的配置文件
						|-- .gitignore: git版本管制忽略的配置
						|-- package.json: 应用包配置文件 
						|-- README.md: 应用描述说明的readme文件
			2.关于h函数说明
						vue.runtime.common.js（项目中用的多） : 
								1.不包含模板解析器，打包后体积小
								2.配置项中的不能写template，要用render: h => h(App)代替
						vue.js : 
								1.包含解模板析器，打包后体积大
								2.配置可以写template

## 2.一个简单的Hello组件
			自己动手写几个简单的组件

## 3.样式scoped属性、组件name配置、eslint语法检查
			(1).scoped可以让样式在当前组件生效
			(2).name可以给组件命名
			(3.)语法检查配置
						第一种方式：/*eslint-disable-next-line*/
						第二种方式：vue.confog.js中配置

## 4.ref与props
		1.ref的用法：
				(1).给组件标签指定ref：<Demo ref="xxxx"/>，获取到的是Demo组件的实例对象——vc
				(2).给html标签指定ref：<input ref="xxxx"/>，获取到的是真实DOM节点
				(3).通过this.$refs.xxxx获取
		2.props的用法
				(1).传递props：
							<Demo :a="xxx"/>
				(2).接收props：
							第一种方式（只声明）：
								props:['userName'] 
	
							第二种方式（限制类型）：
								props:{
									userName:Number
								}
	
							第三种方式（限制类型、属性，指定默认值）：
								props:{
									userName:{
										type:String, //类型
										required:true, //必要性
										default:'老王' //默认值
									}
								}
		关于props与watch
				1.props是只读的，（Vue底层会监测你对props的修改，如果进行了修改，就会报错）
					备注：；Vue监测props修改时对于对象类型的数据，是判断地址值。
				2.watch中配置的监视属性名，可以是vc或vm身上任何一个属性

## 5.todoList案例
		(1).组件data中的数据、接到的props、methods中的方法、computed中的属性，通过vc均可读取。
		(2).使用计算属性时，只是读取用get即可，修改记得要用set
		(3).methods、computed、watch并没有严格意义上的界定，视具体功能而定，有时用什么都可以实现。

## 6.深度监视
		(1).使用watch时根据数据的具体结构，决定是否采用深度监视
		(2).深度监视：
					(1).Vue中watch中配置的监视，默认只能监测自身一层的数据
					(2).配置deep:true可以检测所有层次的数据

## 7.浏览器本地存储（webStorage）
	(1). Cookie、SessionStorage、LocalStorage均被用来在浏览器端存储数据，且都是字符串类型的键值对！
	(2). 注意：session和SessionStorage不是一个概念！！！
			 在服务端有一种存储方式叫做：session会话存储，常常被简称session。
			 SessionStorage和LocalStorage都是浏览器本地存储，统称为Web Storage。
	(3). 存储内容大小一般支持5-10MB
	(4). 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
	(5). 相关API：
				1. xxxxxStorage.setItem('key', 'value');
							该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
				2. var data = xxxxxStorage.getItem('person');
							该方法接受一个键名作为参数，返回键名对应的值。
				3. xxxxxStorage.removeItem('key');
							该方法接受一个键名作为参数，并把该键名从存储中删除。
				4. xxxxxStorage.clear()
							调用该方法会清空存储中的所有键名
	(6).备注：
					1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。
					2.LocalStorage存储的内容，需要手动清除才会消失。
					3.xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null
					4.JSON.parse(null)的结果依然是null

## 8.自定义事件
		一种组件间通信的方式，适用于：子 ===> 父
		(1).绑定自定义事件：
				第一种方式：
						<Demo @haha="test"/>
				第二种方式：
						<Demo ref="demo"/>
						mounted中：this.$refs.demo.$on('haha',this.test)
		(2).触发自定义事件：
						this.$emit('haha',数据)
		(3).前提：A是父 B是子
					1.A组件想接收B组件传递的数据，那就：在A组件中给B组件绑定自定义事件，事件的回调在是在A组件自身
					2.自定义事件的回调在哪，哪才能接收到数据
					3.适用于 子 ===> 父


## 9.全局事件总线(GlobalEventBus)
		一种组件间通信的方式，适用于任意组件间通信
		(1).安装全局事件总线，在main.js中配置
					new Vue({
						.....
						beforeCreate() {
							Vue.prototype.$bus = this //安装事件总线
						},
						......
					})
		(2).A组件想接收数据，则在A组件中给$bus绑定自定义事件,回调留在A组件自身
					mounted() {
						this.$bus.$on('xxxx',this.yyyyy)
					}
				备注：上方的yyyy是回调，yyy需要配置在组件的methos属性中，切勿直接写回调
		(3).要提供数据的组件中触发事件：this.$bus.$emit('xxxx',数据)
		(4).备注：
						1.谁接数据，谁就$on('xxx-xxx',this.yyy)
						2.谁发数据，谁就$emit('xxx-xxxx',数据)
						3.记得在beforeDestroy中解绑事件，用$off去解绑

## 10.总结pubsub
		一种组件间通信的方式，适用于任意组件间通信
		(1).安装pubsub：yarn add pubub-js
		(2).引入使用: import pubsub from 'pubsub-js'
		(3).需要接收数据的组件中，订阅消息：
					在组件的mounted钩子中：
						this.订阅的id = pubsub.subscribe('xxx',this.yyy)
						上方的yyy：
									1.是需要配置在methods中的方法
									2.yyy啥时候调用？有人发布xxx消息时，yyy被调用
									3.yyy会收到什么参数？msg,data; 其实msg是消息名(一般不用)、data是数据
		(4).需要把数据提供给别人的组件中，发布消息
						pubsub.publish('xxx',数据)

## 11.插槽(slot)
		也算是一种组件间通信的方式，适用于 父===>子，且传递的是html结构
		(1).作用：父组件向子组件指定位置中插入html结构
		(2).分类：
					第一种：默认插槽：<slot></slot>
					第二种：命名插槽：<slot name="s1"></slot>
					第三种：作用域插槽：后期项目中会讲到
		(3).使用：	
					父组件中：
							<template slot="s1">
								具体html结构
							</template>
					子组件中：
							<slot></slot> 或 <slot name="s1"></slot>
		

## 12.求和案例vuex版
		(1).项目根目录创建：vuex/store.js 
					(1.1)应用Vuex插件
					(1.2)创建store并管理：state、actions、mutations对象
		(2).组件中读取状态：$store.state.xxxx
		(3).组件中更新状态：$store.dispatch('动作名',数据)
		(4).actions中可以写业务逻辑、开启异步任务，若actions中没有任何逻辑，
				可以在组件中直接$store.commit()去直接对话mutations进行更新状态
		(5).mutations中尽量不写业务逻辑，不写异步任务，只负责加工状态。
	
## 13.Vuex中的getters
			(1).作用：Vuex中的数据想要经过处理后再使用，可以使用getters
			(2).写法：
				const getters = {
					bigSum(state){
						return state.sum * 100
					}
				}
			(3).备注：getters不是必须要用，也可以用computed、methods、过滤器实现

## 14.四个mapXxxx的使用
		使用：mapState、mapGetters自动生成原本我们亲自在computed中写的属性
		使用：mapMutations、mapActions自动生成原本我们亲自在methods中写的回调
		注意：以上所有mapXxxx方法在使用时：
						1.若组件中用的名字 等于 actions、state、mutations、getters中的名字可以简写成数组
						2.若组件中用的名字 不等于 actions、state、mutations、getters中的名字要写成对象

## 15.路由的基本使用
		(1).用到的插件库：vue-router
		(2).创建路由器: router/index.js
					new VueRouter({
						mode:'history' //默认值是hash模式
						routes: [
							{
								path: '/about',
								component: About
							}
						]
					})
		(3).注册路由器: main.js
						import router from './router'
						new Vue({
							router
						})
		(4).使用路由组件标签:
						<router-link to="/home">首页</router-link> //导航区
						<router-view></router-view> //展示区

## 16.路由的其他配置项
		1.路由链接点击高亮：<router-link .... active-class="active" ....>
		2.调整路由工作模式：mode:'history' //hash
		3.模糊匹配：
			{
				path:'/home*'，
				component:Home
			}

		4.重定向（兜底）:
			{
				path:'/*',
				redirect:'/about'
			}

## 17.多级路由（嵌套路由）
			routes:[
				{
					path:'/home',
					component:Home,
					children:[
						{
							path:'message',
							component:Message,
						},
						{
							path:'news',
							component:News
						}
					]
				}
			]

## 18.路由params参数
			(1).注册路时声明接收params：
						path:'detail/:id'
			(2).路由链接：
						<router-link to="/home/message/detail/001">点我</router-link>
			(3).路由组件中接收：
						this.$route.params.id

## 19.路由query参数
			(1).注册路时无需声明接收params：
						path:'detail'
			(2).路由链接：
						<router-link to="/home/message/detail?id=001">点我</router-link>
			(3).路由组件中接收：
						this.$route.query.id

## 20.命名路由
		配置：
				{
					name:'xinwen' //路由名
					path:'news',
					component:News,
				}
		作用：简化跳转与传参
				传统写法：<router-link to="/demo/001?title=标题1">点我</router-link>
				简化写法：<router-link :to="{
										name:'xinwen',
										params:{id:'001'},
										query:{	title:'标题1'}
									}">
									点我
									</router-link>
				备注：路由如果配置了name属性，且to写成对象形式，那么params可以不用占位符了，即：
				
							如果不配置name属性：
									{
										name:'xiangqing',
										path:'detail/:id', //一定要声明接收id
										component:Detail
									}
							配置name属性：
									{
										name:'xiangqing',
										path:'detail', //id可以不用声明了
										component:Detail
									}
									
									
## 编程式路由导航（我自己加的笔记）
<!--todo 与react一样 router-link里加replace 不会给回退留下痕迹  不加默认push-->


 //todo 抛开router-link实现路由跳转
				this.$router.push({
					//TODO 下面相当于吧router-link里的都粘过来了 m是遍历的项
					name:'xiangqing', //跳转哪个路由（路径的代替者）
					params:{id:m.id}, //携带params参数
					query:{ //携带query参数
						title:m.title,
						content:m.content
					}
				})
## 缓存路由组件
在导航的地方 Home.vue里router-view外包裹
<!--TODO 缓存路由组件：在点了别的路由在点回来 输入框里的内容还在 -->
			<keep-alive include="News">
				<router-view></router-view>
			</keep-alive>
			
## vue脚手架配置代理总结



方法一

在vue.config.js中追加如下配置

    devServer:{
      proxy:"http://localhost:5000"
    }

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （有限匹配前端资源）



方法二

编写vue.config.js配置具体代理规则：

    module.exports = {
    	devServer: {
          proxy: {
          '/api1': {// 匹配所有以 '/api'开头的请求路径
            target: 'http://localhost:5000',// 代理目标的基础路径
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
          },
          '/api2': {// 匹配所有以 '/api'开头的请求路径
            target: 'http://localhost:5001',// 代理目标的基础路径
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
          }
        }
      }
    }

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## elementUI的使用
官网：https://element.eleme.cn/#/zh-CN/component/quickstart
完整引入（不行，要按需）
在 main.js 中写入以下内容：

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
});
##按需引入
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

npm install babel-plugin-component -D
然后，将 .babelrc 修改为：（是往里加内容，不是替换掉）

{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});

