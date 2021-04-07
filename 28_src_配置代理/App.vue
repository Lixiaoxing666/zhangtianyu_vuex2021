<template>
	<div>
		<button @click="getStuInfo">点我获取学生信息</button>
		<button @click="getCarInfo">点我获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStuInfo(){
				axios.get('http://localhost:8080/api1/students').then(
					response => {console.log('成功了',response.data)},
					error => {console.log('失败了',error.message)}
				)
			},
			getCarInfo(){
				axios.get('http://localhost:8080/api2/cars').then(
					response => {console.log('成功了',response.data)},
					error => {console.log('失败了',error.message)}
				)
			}
		},
	}
</script>
