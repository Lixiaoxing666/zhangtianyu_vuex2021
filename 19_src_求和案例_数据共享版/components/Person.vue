<template>
	<div class="person">
		<h2>我是Person组件,{{school}}</h2>
		<input type="text" v-model="username">
		<!--TODO 这里也可以用键盘事件 -->
		<!-- TODO 常用的按键盘事件  注意别写在button里（没用） 写在Input输入框里
				todo @keydown（键盘按下时触发），@keypress(键盘按住时触发)，@keyup(键盘弹起)
				todo 获取按键的键码 e.keyCode
 				-->
		<button @click="addPerson">添加</button>
		<ul>
			<li :key="p.id" v-for="p in persons">{{p.name}}</li>
		</ul>
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name:'Person',
		data() {
			return {
				username:''
			}
		},
		computed:{
			...mapState(['persons','school'])
		},
		methods:{
			addPerson(){
				const p = {id:Date.now(),name:this.username}
				this.$store.commit('ADDP',p)
			}
		}
	}
</script>

<style>
	.person{
		background-color: pink;
		padding: 10px;
	}
</style>