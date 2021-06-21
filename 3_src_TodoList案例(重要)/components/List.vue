<template>
	<ul class="todo-main">
		<!--todo v-for的使用-->
		<Item :key="todoObj.id" v-for="todoObj in todos1" :todoObj="todoObj" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
	</ul>
</template>

<script>
	import Item from './Item'

	export default {
		name:'List',
		components:{Item},
		//声明接收props
		props:{
			todos1:{
				type:Array,
				required:true,
			},
			deleteTodo:{
				type:Function,
				required:true,
			},
			updateTodo:{
				type:Function,
				required:true,
			}
		}
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}
	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
	
</style>