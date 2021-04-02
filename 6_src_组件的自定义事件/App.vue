<template>
	<div class="app">
		<h2>我是App组件</h2>
		<h3>Child给我一台电脑:{{dn}}</h3>
		<br/>

		<!-- 给Child组件实例绑定自定义事件（第一种写法） -->
		<!-- <Child ref="haizi"/> -->

		<!-- 给Child组件实例绑定自定义事件（第二种写法） -->
		<Child @fangjiale="demo" ref="haizi"/>
	</div>
</template>

<script>
	import Child from './components/Child'

	export default {
		name:'App',
		components:{Child},
		data(){
			return {
				dn:''
			}
		},
		methods:{
			demo(c){
				console.log('有人触发Child组件的fangjiale事件',c)
				// console.log('%%%',this)
				this.dn = c
			}
		},
		mounted(){
			console.log(this.$refs.haizi)
			// this.dn = this.$refs.haizi.computer 
		}
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>