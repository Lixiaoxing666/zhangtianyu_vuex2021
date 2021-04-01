<template>
	<div class="demo">
		<h2>我是App组件</h2>
		<h3>{{msg}}</h3>
		<Hello/>
	</div>
</template>

<script>
	import Hello from './components/Hello'

	export default {
		data(){
			return {
				msg:'老刘我想你'
			}
		},
		components:{Hello}
	}
</script>

<style>
	.demo{
		background-color: skyblue;
		padding: 10px;
	}
</style>
