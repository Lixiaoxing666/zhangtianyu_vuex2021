<template>
	<div class="person">
		<h2>我是Person组件,{{school}}</h2>
		<input type="text" v-model="username">
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