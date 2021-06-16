<!--
		关于props与watch
		TODO 1.props是只读的，（Vue底层会监测你对props的修改，如果收到了以后，进行修改，就会报错）
			todo 备注：；Vue监测props修改时对于对象类型的数据，是判断地址值。
				2.watch中配置的监视属性名，可以是vc或vm身上任何一个属性
 -->

<template>
	<li 
		@mouseenter="isEnter = true" 
		@mouseleave="isEnter = false" 
		:class="{enter:isEnter}"
	>
		<!--<label> 标签为 input 元素定义标注（标记）。
		label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。
		如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该
		标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
		<label> 标签的 for 属性应当与相关元素的 id 属性相同。
		-->
		<label>
			<!--todo 改变todoObj.done方法：v-model数据双向绑定 这种方式可能报错（只适用于改对象的某个属性），
			其他的采用第二种-->
			<!-- <input type="checkbox" v-model="todoObj.done"/> -->
			<!--TODO 第2种：改变todoObj.done：:checked单向绑定 通过父传过来的方法操作
			todo  $event.target.checked是单选框的状态：true or false-->
			<input type="checkbox" :checked="todoObj.done" @change="updateT(todoObj.id, $event)"/>
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
			//删除
			deleteT(id){
				if(confirm('确定删除？')){
					this.deleteTodo(id)
				}
			},
			//响应勾选 or 取消勾选
			updateT(id,e){
				this.updateTodo(id,e.target.checked)
			}
		},
		props:{
			todoObj:Object,
			deleteTodo:Function,
			updateTodo:Function
		},
	}
</script>
<!--TODO scoped局部：表示此样式只负责本文件 出了本文件就无效了-->
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