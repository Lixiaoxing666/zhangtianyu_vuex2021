<template>
	<!--todo <template>下只能有一个根标签-->
	<div class="demo">
		<h2>你好啊，{{name}}</h2>
		<button @click="show">提示信息</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name:'尚硅谷'
			}
		},
		methods:{
			show(){
				alert('你好啊！')
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: orange;
		padding: 10px;
	}
</style>