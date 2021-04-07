<template>
	<div class="count">
		<h2>我是Cout组件</h2>
		<h3>当前求和为:{{sum}}</h3>
		<h4>当前求和放大100倍后：{{bigSum}}</h4>
		<h4>当前求和-1后：{{smallSum}}</h4>
		<select v-model.number="number">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>&nbsp;
		<button @click="INCREMENT(number)">+</button>&nbsp;
		<button @click="DECREMENT(number)">-</button>&nbsp;
		<button @click="incrementOdd(number)">和为奇数再+</button>&nbsp;
		<button @click="incrementWait(number)">等500毫秒+</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				car:'奔驰',
				number:1,
			}
		},
		computed:{
			//借助mapState批量获取vuex中的数据（精简写法）
 			...mapState(['sum']),
			...mapGetters(['bigSum','smallSum'])
		},
		methods:{
			//靠mapMutations批量生成操作数据的函数（精简写法）
			...mapMutations(['INCREMENT','DECREMENT']),
			...mapActions(['incrementOdd','incrementWait'])
		},
		mounted(){
			/* const x = mapMutations({
				increment:'JIA',
				decrement:'JIAN'
			})
			console.log('&&&&',x) */
		},
	}
</script>

<style lang="css">
	.count{
		background-color: orange;
		padding: 10px;
	}
</style>
