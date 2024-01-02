<template>
	<div class="row">
		<div class="col-xs-offset-2 col-xs-8">
			<div class="page-header">
				<h2>React Router Demo</h2>
				<button @click="houtui">←后退</button>
				<button @click="qianjin">前进→</button>
				<button @click="test">测试一下go</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Header',
		methods: {
			houtui(){
				//TODO 后退
				this.$router.back()
			},
			qianjin(){
                //TODO 前进
				this.$router.forward()
			},
			test(){
                //TODO 往后退两步 正值为前进
				this.$router.go(-2)
			}
		},	
		mounted(){
			console.log('H',this)
		}
	}
</script>