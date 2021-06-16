<!--/*
	todo 	关于ref的使用
		1.给一般html标签打ref最终通过this.$refs获取到的是：真实DOM节点 :input button之类的
			如this.$refs.keyword.value就可以获取到input的输入内容
		2.给一般组件标签打ref最终通过this.$refs获取到的是：该组件的实例对象——vc （就是Demo该组件对象）

 */-->

<template>
	<div class="app-demo">
		<h2>我是App组件，我的学校名是：{{school}}</h2>
		<!--v-model是双向绑定-->
		<input ref="keyword" type="text" v-model="school">&nbsp;双向数据绑定<br>
		<!--v-bind:简写为: 是单向绑定 是从data到标签的单向绑定-->
		<input ref="keyword" type="text" :value="school">&nbsp;单向数据绑定
		<button ref="btn" @click="show">点我提示左侧输入</button>
		<hr/>
	<!--TODO 这里如果写的是xuexiao="school" （不加：）那就是给子组件传一个key为xuexiao value为"school"的字符串
		TODO 而 :xuexiao="school" 是key为xuexiao绑定变量school 传给子组件-->
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
				/*{keyword: input, btn: button, test: VueComponent}
					btn: button
					keyword: input
					test: VueComponent
					__proto__: Object*/
				// console.log(this.$refs.keyword.value)  啊哈哈哈哈
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