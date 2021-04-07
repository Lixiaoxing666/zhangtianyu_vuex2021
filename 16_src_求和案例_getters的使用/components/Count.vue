<template>
	<div>
		<h2>当前求和为:{{$store.state.sum}}</h2>
		<h4>当前求和放大100倍后：{{$store.getters.bigSum}}</h4>
		<select v-model.number="number">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>&nbsp;
		<button @click="increment">+</button>&nbsp;
		<button @click="decrement">-</button>&nbsp;
		<button @click="incrementOdd">和为奇数再+</button>&nbsp;
		<button @click="incrementWait">等500毫秒+</button>
	</div>
</template>

<script>
	export default {
		name:'Count',
		data() {
			return {
				car:'奔驰',
				number:1
			}
		},
		methods:{
			increment(){
				//通过commit指挥mutations中的JIA
				console.log('**',this.$store)
				this.$store.commit('JIA',this.number)
			},
			decrement(){
				//通过commit指挥mutations中的JIAN
				this.$store.commit('JIAN',this.number)
			},
			incrementOdd(){
				//通过dispatch指挥actions中的jiaOdd
				this.$store.dispatch('jiaOdd',this.number)
			},
			incrementWait(){
				//通过dispatch指挥actions中的jiaWait
				this.$store.dispatch('jiaWait',this.number)
			},
		},
		mounted(){
			console.log(this.$store)
		}
	}
</script>
