/* 
		Vue中组件名称推荐使用方案：
				组件名文件名、组件引入名、组件标签名，均首字母大写；
				如果组件名和原生html元素同名了，组件标签千万不要首字母小写；
 */
<template>
	<div class="demo">
		<h2>我是App组件</h2>
		<h3>{{msg}}</h3>
		<Hello/>
		<hr/>
		<test/>
	</div>
</template>

<script>
	import Test from './components/Test'
	import Hello from './components/Hello'

	export default {
		data(){
			return {
				msg:'老刘我想你'
			}
		},
		components:{Hello,Test}
	}
</script>

