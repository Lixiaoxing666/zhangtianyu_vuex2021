<template>
	<div class="demo">	
		<h2>我是Test组件{{info}}</h2>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				info:'1125班级'
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: green;
		padding: 20px;
	}
</style>