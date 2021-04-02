<template>
	<div class="d-demo">
		<h2>我是Demo组件，我有台车：{{car}}</h2>
		<h2>父亲给我的学校是{{xuexiao}}</h2>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				car:'奔驰'
			}
		},

		//props第一种写法（最麻烦）对：类型、必要性做限制，且指定默认值。
		/* props:{
			xuexiao:{
				type:String,
				default:'蓝翔',
				required:true
			}
		}, */

		//props第二种写法（较麻烦）对类型做限制
		/* props:{
			xuexiao:String
		}, */

		//props第三种写法（最简单）
		props:['xuexiao'],

		mounted(){
			console.log('Demo',this)
		}
	}
</script>

<style scoped>
	.d-demo{
		background-color: skyblue;
		padding: 10px;
	}
</style>