<template>
	<div class="d2">
		<h2>我是Demo2</h2>
		<button @click="sendCar">把车给我哥哥Demo1</button>
		<Test></Test>
	</div>
</template>

<script>
	import Test from './Test'
	export default {
		name:'Demo2',
		components:{Test},
		methods:{
			sendCar(){
				this.$bus.$emit('atguigu',this.car)
			}
		},
		data(){
			return {
				car:'奔驰'
			}
		}
	}
</script>

<style>
	.d2{
		background-color: skyblue;
		padding: 10px;
	}
</style>