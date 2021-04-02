/* 
		关于props与watch
				1.props是只读的，（Vue底层会监测你对props的修改，如果收到了以后，进行修改，就会报错）
					备注：；Vue监测props修改时对于对象类型的数据，是判断地址值。
				2.watch中配置的监视属性名，可以是vc或vm身上任何一个属性
 */

<template>
	<li 
		@mouseenter="isEnter = true" 
		@mouseleave="isEnter = false" 
		:class="{enter:isEnter}"
	>
		<label>
			<!-- <input type="checkbox" v-model="todoObj.done"/> -->
			<input type="checkbox" :checked="todoObj.done"/>
			<span>{{todoObj.title}}</span>
		</label>
		<button 
			class="btn btn-danger" 
			@click="deleteT(todoObj.id)"
			:style="{display:isEnter ? 'block' : 'none'}"
		>删除</button>
	</li>
</template>

<script>
	export default {
		name:'Item',
		data(){
			return {
				isEnter:false
			}
		},
		methods:{
			deleteT(id){
				if(confirm('确定删除？')){
					this.deleteTodo(id)
				}
			}
		},
		props:{
			todoObj:Object,
			deleteTodo:Function
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}
	li label {
		float: left;
		cursor: pointer;
	}
	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}
	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}
	li:before {
		content: initial;
	}
	li:last-child {
		border-bottom: none;
	}
	.enter{
		background-color: #ddd;
	}
</style>