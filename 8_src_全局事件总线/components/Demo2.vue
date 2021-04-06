<template>
	<div class="d2">
		<h2>我是Demo2,{{number}}</h2>
		<button @click="sendCar">把车给我哥哥Demo1</button>
		<Test></Test>
	</div>
</template>

<script>
	import Test from './Test'
	export default {
		name:'Demo2',
		components:{Test},
		data(){
			return {
				car:'奔驰',
				number:''
			}
		},
		methods:{
			sendCar(){
				this.$bus.$emit('atguigu',this.car)
			},
			saveNumber(n){
				this.number = n
			}
		},
		mounted(){
			this.$bus.$on('get-number',this.saveNumber)
		}
	}
</script>

<style>
	.d2{
		background-color: skyblue;
		padding: 10px;
	}
</style>