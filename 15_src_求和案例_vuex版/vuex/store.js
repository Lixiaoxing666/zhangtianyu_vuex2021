/* 
	todo 该文件专门用于创建并暴露一个vuex中的核心管理者——store
*/
//引入vue核心库
import Vue from 'vue'
//引入vuex
import vuex from 'vuex'
//todo 第1步：声明应用vuex插件  vue中应用插件都这么引入Vue.use
Vue.use(vuex)


/**
 Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。
todo  组件中调用actions时：
 // 通过dispatch指挥actions中的jiaOdd
this.$store.dispatch('jiaOdd',this.number)
 */
//准备actions
const actions = {
	//todo 参数miniStore是用来再次调用mutations的
/* 	jia(miniStore,value){
		console.log('组件中有人dispatch派遣了jia')
		//TODO 通过miniStore.commit间接指挥mutations里的JIA
		miniStore.commit('JIA',value)
	},
	jian(miniStore,value){
		console.log('组件中有人dispatch了jian')
		//通过commit指挥mutations里的JIA
		miniStore.commit('JIAN',value)
	}, */
	jiaOdd(miniStore,value){
		if(miniStore.state.sum % 2){
			miniStore.commit('JIA',value)
		}
	},
	jiaWait(miniStore,value){
		setTimeout(()=>{
			miniStore.commit('JIA',value)
		},500)
	}
}
/**
 * mutation 必须同步执行   Action 可以包含任意异步操作。
 *更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 * Vuex 中的 mutation 非常类似于事件：每个 mutation
 * 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
 * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受
 * state 作为第一个参数：
 */
	//准备mutations (n. [遗] 突变；变化；转变)
const mutations = {
	JIA(state,value){
		console.log('actions中有人commit了JIA，我要进行加了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('actions中有人commit了JIA，我要进行加了')
		state.sum -= value
	}
}

//TODO 准备state
const state = {
	sum:98,
}

//todo 第2步：创建一个store
const store = new vuex.Store({
	//TODO vuex store 的三大核心 state  actions  mutations
	actions,
	mutations,
	state
})

//暴露store
export default store
