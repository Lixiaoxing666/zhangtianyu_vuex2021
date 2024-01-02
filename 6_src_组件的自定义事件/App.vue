<template>
	<div class="app">
		<h2>我是App组件</h2>
		<h3>Child给我一台电脑:{{dn}}</h3>
		<br/>
		<!--TODO 自定义事件(组件间通信的一种方式）：比较适合子给父传东西-->
		<!--todo 绑定事件监听2种方法-->
		<!--todo （第一种写法）给Child组件实例绑定自定义事件 -->
		<!-- <Child ref="haizi"/> -->

		<!--todo （第二种写法）给Child组件实例绑定自定义事件
		todo 第二种方法不就是给子组件传了个方法 然后子组件不用声明接收了 -->
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
		/* mounted(){
            //todo 绑定事件监听第一种方式  触发事件的时候this.$emit('haizi', 传给demo方法的参数)
			this.$refs.haizi.$on('haizi',this.demo)
		} */
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>