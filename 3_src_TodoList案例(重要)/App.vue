<template>
	<div class="todo-container">
    <div class="todo-wrap">
        <!--TODO 给子组件传一个名为addTodo1的方法 值是自己的addTodo-->
      <Header :addTodo1="addTodo"/>
        <!--TODO 给子组件传一个名为todos1的方法 值是自己的todos-->
      <List v-show="todos.length" :todos1="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer v-show="todos.length" :todos="todos" :updateAll="updateAll" :clearAllDone="clearAllDone"/>
    </div>
  </div>
</template>

<script>
	import Header from './components/Header'
	import List from './components/List'
	import Footer from './components/Footer'

	export default {
	    //todo 给组件起个名，这个名在渲染时展示 其他无用
		name:'App',
		components:{Header,List,Footer},
		data(){
			return {
				todos:[
					{id:'001',title:'吃饭',done:true},
					{id:'002',title:'抽烟',done:false},
					{id:'003',title:'开车',done:true}
				]
			}
		},
		methods:{
			//添加一个
			addTodo(todoObj){
                //todo unshift()方法将一个或多个元素添加到数组的开头，
                // todo push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
                // 并返回该数组的新长度(该方法修改原有数组)。
				this.todos.unshift(todoObj)
			},
			//删除一个
			deleteTodo(id){
				this.todos = this.todos.filter((t)=>{
                    //todo filter返回不等于id的 就是删除id的
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

                /*或者
                 this.todos=this.todos.map((t)=>{
                if(t.id===id) {
                    t.done=!t.done
                }
                return t
            })*/
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