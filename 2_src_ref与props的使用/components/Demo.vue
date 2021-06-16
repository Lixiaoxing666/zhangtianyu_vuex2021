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
		//TODO 子组件props必须得声明才能接收到父组件传的属性
		//props第一种写法（最麻烦）对：类型、必要性做限制，且指定默认值。
		/* props:{
			xuexiao:{
				type:String,
				//不传的默认值
				default:'蓝翔',
				required:true
			}
		}, */

		//props第二种写法（较麻烦）对类型做限制
		/* props:{
			xuexiao:String
		}, */

		//props第三种写法（最简单）：以数组的形式直接声明 没做什么限制
		props:['xuexiao'],

		mounted(){
			console.log('Demo',this)
			/*Demo VueComponent {_uid: 3, _isVue: true, $options: {…},
			 _renderProxy: Proxy, _self: VueComponent, …}*/
            console.log('Demo2',this.$refs)
			/*Demo2 Object*/
		}
	}
</script>

<style scoped>
	.d-demo{
		background-color: skyblue;
		padding: 10px;
	}
</style>