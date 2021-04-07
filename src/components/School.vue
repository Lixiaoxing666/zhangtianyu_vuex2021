<template>
	<div class="school">	
		<h2>我是School组件,{{sum}},{{bigSum}}</h2>
		<h3>{{school}}</h3>
		<h3>{{address}}</h3>
	</div>
</template>

<script>
	import {mapGetters, mapState} from 'vuex'

	export default {
		name:'School',
		computed:{
			...mapState(['school','address','sum']),
			...mapGetters(['bigSum'])
		}
	}
</script>

<style>
	.school{
		background-color: skyblue;
		padding: 10px;
	}
</style>