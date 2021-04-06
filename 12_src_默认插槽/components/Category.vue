<template>
	<div class="cate">
		<h2 class="title">{{cateTile}}分类</h2>
		<slot/>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['cateTile','list']
	}
</script>

<style>
	.cate{
		background-color: skyblue;
		width: 300px;
		height: 400px;
	}
	.title{
		text-align: center;
	}
</style>