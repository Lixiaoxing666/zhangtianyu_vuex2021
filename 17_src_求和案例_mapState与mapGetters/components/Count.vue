<template>
	<div>
		<h2>当前求和为:{{sum}}</h2>
		<h4>当前求和放大100倍后：{{bigSum}}</h4>
		<h4>当前求和-1后：{{smallSum}}</h4>
		<h4>学校名：{{school}}</h4>
		<h4>学校地址：{{address}}</h4>
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
	// TODO mapState,mapGetters要导入
	import {mapState,mapGetters} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				car:'奔驰',
				number:1,
			}
		},
		computed:{
			/* sum:function(){
				return this.$store.state.sum
			},
			school(){
				return this.$store.state.school
			},
			address(){
				//todo 调用this.$store.state 去store中去取
				return this.$store.state.address
			}, */

			//todo 借助mapState批量获取vuex中的数据（正常写法）
			/* ...mapState({
				he:'sum',
				ming:'school',
				dizhi:'address'
			//	 TODO categoryList: (state) => state.home.categoryList,  home是一个子store文件
			}), */

			//todo 借助mapState批量获取vuex中的数据（精简写法）  这样我们省略了this.$store.state.sum写法
			// TODO 直接在标签使用sum即可
 			...mapState(['sum','school','address']),

			/* ********************************************* */
			/* daHe(){
				return this.$store.getters.bigSum
			},
			xiaoHe(){
				return this.$store.getters.smallSum
			}, */

			/* ...mapGetters({
				daHe:'bigSum',
				xiaoHe:'smallSum',
			}) */
            //todo 借助mapGetters批量获取vuex中getters的数据（精简写法）
            //TODO 省略了$store.getters.bigSum写法
			...mapGetters(['bigSum','smallSum'])
			
		},
		mounted(){

		},
		methods:{
			increment(){
				//通过commit指挥mutations中的JIA
				// console.log('**',this.$store)
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
	}
</script>
