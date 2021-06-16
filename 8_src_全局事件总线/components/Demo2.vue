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
                //TODO 全局事件总线this.$bus.$emit 触发事件
                //TODO 调用atguigu绑定的方法（this.$bus.$on('atguigu',this.saveCar)）
				// 传入参数this.car
				this.$bus.$emit('atguigu',this.car)
			},
			saveNumber(n){
				this.number = n
			}
		},
		mounted(){
            //同理
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