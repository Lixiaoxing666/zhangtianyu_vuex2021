<template>
	<div>
		<h2>当前求和为:{{sum}}</h2>
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
				sum:0,
				number:1
			}
		},
		methods:{
			increment(){
				this.sum += this.number
			},
			decrement(){
				this.sum -= this.number
			},
			incrementOdd(){
				if(this.sum % 2){
					this.sum += this.number
				}
			},
			incrementWait(){
				setTimeout(()=>{
					this.sum += this.number
				},500)
			},
		}
	}
</script>
