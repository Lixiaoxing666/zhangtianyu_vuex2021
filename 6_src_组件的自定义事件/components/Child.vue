<template>
	<div class="child">
		<h2>我是Child组件</h2>
		<h3>我有台电脑:{{computer}}</h3>
		<button @click="sendComputer">把电脑传给App</button>
	</div>
</template>

<script>
	export default {
		name:'Child',
		data(){
			return {
				computer:'联想拯救者'
			}
		},
		methods:{
			sendComputer(){
                //todo 触发事件 及传参   父组件绑定事件监听的时候：this.$refs.haizi.$on('haizi',this.demo)
				this.$emit('fangjiale',this.computer)
			}
		}
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>