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