<template>
	<div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List v-show="todos.length" :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer v-show="todos.length" :todos="todos" :updateAll="updateAll" :clearAllDone="clearAllDone"/>
    </div>
  </div>
</template>

<script>
	import Header from './components/Header'
	import List from './components/List'
	import Footer from './components/Footer'

	export default {
		name:'App',
		components:{Header,List,Footer},
		data(){
			return {
                /*todos:[
                {id:'001',title:'吃饭',done:true},
                {id:'002',title:'抽烟',done:false},
                {id:'003',title:'开车',done:true}
            ],*/
                //todo JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
                //TODO JSON.parse()解析对象字符串得到对象，解析数组字符串得到数组 这里就是得到数组 里面是对象
                //TODO 注意todos初始值会是[] 空数组
				todos:JSON.parse(localStorage.getItem('todos')) || []
			}
		},
		methods:{
			//添加一个
			addTodo(todoObj){
				this.todos.unshift(todoObj)
			},
			//删除一个
			deleteTodo(id){
				this.todos = this.todos.filter((t)=>{
					return t.id !== id
				})
			},
			//更新一个
			updateTodo(id,done){
				this.todos.forEach((todoObj)=>{
					if(todoObj.id === id) todoObj.done = done
				})

				//原来在react中我们如下操作，因为react规定：不能通过非setState的形式修改源数据
				/* const x = this.todos.map((todoObj)=>{
					if(todoObj.id === id) return {...todoObj,done}
					return todoObj
				})
				this.todos = x */
			},
			//更新所有
			updateAll(done){
				this.todos.forEach((t)=>{
					t.done = done
				})
			},
			//清除所有已完成
			clearAllDone(){
				this.todos = this.todos.filter((t)=>{
					return !t.done
				})
			}
		},
		watch:{
            //TODO 监视谁
			todos:{
                //todo 开启深度监视：可以监视数组里对象某一个属性的改变 （普通监视不行）
                // TODO 对todos的增查删改都要更改localStorage 为了不在每个crud方法里都操作
                // TODO 一遍localStorage 采用深度监视 一旦发生变化就重新设置todos
				deep:true,
				handler(value){
					console.log('todos被改了')
                    //todo JSON.stringify() 方法将一个 JavaScript对象或值转换为 JSON 字符串
					localStorage.setItem('todos',JSON.stringify(value))
				}
			}
		}
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}

</style>