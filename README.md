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
				1. localStorage.setItem('key', 'value');
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
		(3).提A是父 B是子
					1.A组件想接收B组件传递的数据，那就：在A组件中给B组件绑定自定义事件，事件的回调在是在A组件自身
					2.自定义事件的回调在哪，哪才能接收到数据
					3.适用于 子 ===> 父