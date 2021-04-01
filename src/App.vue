<template>
	<div class="demo">
		<h2>我是App组件</h2>
		<h3>{{msg}}</h3>
		<Hello/>
		<hr/>
		<Test/>
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

