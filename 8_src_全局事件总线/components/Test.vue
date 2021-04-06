<template>
	<div class="t">
		<h2>我是Test</h2>
		<button @click="sendNumber">传递数字给Demo2</button>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data(){
			return {
				number:900
			}
		},
		methods:{
			sendNumber(){
				this.$bus.$emit('get-number',this.number)
			}
		}
	}
</script>

<style>
	.t{
		background-color: pink;
		padding: 10px;
	}
</style>