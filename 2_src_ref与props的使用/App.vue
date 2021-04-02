/* 
		关于ref的使用
				1.给一般html标签打ref最终通过this.$refs获取到的是：真实DOM节点
				2.给一般组件标签打ref最终通过this.$refs获取到的是：该组件的实例对象——vc
 */

<template>
	<div class="app-demo">
		<h2>我是App组件，我的学校名是：{{school}}</h2>
		<input ref="keyword" type="text">&nbsp;
		<button @click="show">点我提示左侧输入</button>
		<hr/>
		<Demo ref="test" :xuexiao="school"/>
	</div>
</template>

<script>
	import Demo from './components/Demo'

	export default {
		data(){
			return {
				school:'尚硅谷',
			}
		},
		methods:{
			show(){
				console.log(this.$refs)
			}
		},
		components:{Demo}
	}
</script>

<style scoped>
	.app-demo{
		background-color: gray;
		padding: 10px;
	}
</style>