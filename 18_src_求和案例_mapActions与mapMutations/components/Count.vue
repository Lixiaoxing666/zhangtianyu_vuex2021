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
		<button @click="JIA(number)">+</button>&nbsp;
		<button @click="JIAN(number)">-</button>&nbsp;
		<button @click="jiaOdd(number)">和为奇数再+</button>&nbsp;
		<button @click="jiaWait(number)">等500毫秒+</button>
	</div>
</template>

<script>
	//todo mapXXX的方法都需要引入声明
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
            //TODO 方法什么时候会被调用？1.有人读取的时候; 2.依赖的数据发生变化时
            //TODO 即简写方式省略掉了get()声明  （即：只有get方法时，不需要set时,才可以简写）
			/* sum:function(){
				return this.$store.state.sum
			},
			school(){
				return this.$store.state.school
			},
			address(){
				return this.$store.state.address
			}, */

			//借助mapState批量获取vuex中的数据（正常写法）
			/* ...mapState({
				he:'sum',
				ming:'school',
				dizhi:'address'
			}), */

			//借助mapState批量获取vuex中的数据（精简写法）
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

			...mapGetters(['bigSum','smallSum'])
			
		},
		methods:{
			/* increment(){
				//通过commit指挥mutations中的JIA
				// console.log('**',this.$store)
				this.$store.commit('JIA',this.number)
			},

			decrement(){
				//通过commit指挥mutations中的JIAN
				this.$store.commit('JIAN',this.number)
			}, */
			
			//靠mapMutations批量生成操作数据的函数（完整写法）
			/* ...mapMutations({
				increment:'JIA',
				decrement:'JIAN'
			}), */

			//todo 靠mapMutations批量生成操作数据的函数（精简写法）
			//TODO 省略了this.$store.commit('JIAN',this.number)这种写法
			//TODO 注意：...mapMutations和...mapActions都是在methods里写，
			// TODO 而...mapState和...mapGetters都是写在computed（一旦发生变化就会读取）
			...mapMutations(['JIA','JIAN']),

			/* ********************************** */

			/* incrementOdd(){
				//通过dispatch指挥actions中的jiaOdd
				this.$store.dispatch('jiaOdd',this.number)
			},
			incrementWait(){
				//通过dispatch指挥actions中的jiaWait
				this.$store.dispatch('jiaWait',this.number)
			}, */

			//靠mapActions批量生成操作数据的函数（完整写法）
			/* ...mapActions({
				incrementOdd:'jiaOdd',
				incrementWait:'jiaWait'
			}) */

			//TODO 靠mapActions批量生成操作数据的函数（精简写法）
			//TODO this.$store.dispatch('jiaWait',this.number)
			...mapActions(['jiaOdd','jiaWait'])
			
		},
		mounted(){
			/* const x = mapMutations({
				increment:'JIA',
				decrement:'JIAN'
			})
			console.log('&&&&',x) */
			console.log()
		},
	}
</script>
