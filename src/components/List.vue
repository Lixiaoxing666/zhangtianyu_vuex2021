<template>
	<ul class="todo-main">
		<Item :key="todoObj.id" v-for="todoObj in todos" :todoObj="todoObj" :deleteTodo="deleteTodo"/>
	</ul>
</template>

<script>
	import Item from './Item'

	export default {
		name:'List',
		components:{Item},
		//声明接收props
		props:{
			todos:{
				type:Array,
				required:true,
			},
			deleteTodo:{
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