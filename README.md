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
		(3).创建Vue实例时this为vm；创建组件时this为vc，这是Vue强制绑定的，无法修改。
		(4).methods、computed、watch并没有严格意义上的界定，视具体功能而定，有时用什么都可以实现。