<template>
	<div class="d1">
		<h2>我是Demo1,{{car}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Demo1',
		data(){
			return {
				car:''
			}
		},
		methods:{
			saveCar(c){
				this.car =c
			}
		},
		mounted(){
			/*TODO 全局事件总线：任意组件间的通信问题 就是自定义事件（只能父子）的升级版*/
            //todo 全局事件总线this.$bus.$on绑定监听  （就是自定义事件的升级版）
			this.$bus.$on('atguigu',this.saveCar)
		}
	}
</script>

<style>
	.d1{
		background-color: orange;
		padding: 10px;
	}
</style>