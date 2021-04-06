<template>
	<div class="t">
		<h2>我是Test</h2>
	</div>
</template>

<script>
	export default {
		name:'Test',
		mounted(){
			console.log('Test',this)
		}
	}
</script>

<style>
	.t{
		background-color: pink;
		padding: 10px;
	}
</style>