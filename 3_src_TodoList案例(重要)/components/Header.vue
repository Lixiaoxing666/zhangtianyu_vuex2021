<template>
	<div class="todo-header">
		<!--TODO @keyup.xxx 敲击键盘事件-->
		<input v-model="title" @keyup.enter="addT" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
<!--    todo 使用ref绑定   ref : 指定唯一标识, vue对象通过$els属性访问这个元素对象
		<input ref="title" @keyup.enter="addT" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
-->
	</div>
</template>

<script>
	export default {
        //
		name:'Header',
		data(){
			return {
				title:''
			}
		},
		methods:{
			addT(){
				//todo 获取用户的输入
				//方法一：解构赋值 const {value} = this.$refs.title
				//或 const title = this.$refs.title.value
				const {title} = this
				if(!title.trim()) return alert('输入不能为空！')
				//包装成一个Todo对象
				const todoObj = {id:Date.now(),title,done:false}
				//TODO 通知App加一个 addTodo是父组件传给他的方法  :addTodo="addTodo"
				this.addTodo(todoObj)
				//清空输入
				this.title = ''
			}
		},
		//TODO 父组件传下来的属性都要进行声明接收
		props:['addTodo'],
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		//圆形边框
		border-radius: 4px;
		padding: 4px 7px;
	}
	/*TODO 点输入框的时候输入框的变化样式 */
	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>