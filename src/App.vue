<template>
	<div class="app">
		<h2>我是App</h2>
		<Demo1></Demo1>
		<br/>
		<Demo2></Demo2>
	</div>
</template>

<script>
	import Demo1 from './components/Demo1'
	import Demo2 from './components/Demo2'
	
	export default {
		name:'App',
		components:{Demo1,Demo2},
		mounted(){
			console.log('App',this)
		}
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 15px;
	}	
</style>