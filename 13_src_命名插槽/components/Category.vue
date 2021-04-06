<template>
	<div class="cate">
		<h2 class="title">{{cateTile}}分类</h2>
		<div>
			<div class="cate-top">
				<slot name="ct"/>
			</div>
			<div class="cate-bottom">
				<slot name="cb"/>
			</div>
		</div>
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