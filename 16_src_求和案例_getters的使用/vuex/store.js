/* 
	该文件专门用于创建并暴露一个vuex中的核心管理者——store
*/

//引入vue核心库
import Vue from 'vue'
//引入vuex
import vuex from 'vuex'
//应用vuex插件
Vue.use(vuex)

//准备actions
const actions = {
    /* 	jia(miniStore,value){
            console.log('组件中有人dispatch了jia')
            //通过commit指挥mutations里的JIA
            miniStore.commit('JIA',value)
        },
        jian(miniStore,value){
            console.log('组件中有人dispatch了jian')
            //通过commit指挥mutations里的JIA
            miniStore.commit('JIAN',value)
        }, */
    jiaOdd(miniStore, value) {
        if (miniStore.state.sum % 2) {
            miniStore.commit('JIA', value)
        }
    },
    jiaWait(miniStore, value) {
        setTimeout(() => {
            miniStore.commit('JIA', value)
        }, 500)
    }
}

//准备mutations
const mutations = {
    JIA(state, value) {
        console.log('actions中有人commit了JIA，我要进行加了')
        state.sum += value
    },
    JIAN(state, value) {
        console.log('actions中有人commit了JIA，我要进行加了')
        state.sum -= value
    }
}

//准备state
const state = {
    sum: 0,
}
/**
 * TODO Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属
 * 性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被
 * 重新计算。Getter 接受 state 作为其第一个参数：*/
//准备getters，getters用于对state中保存的数据进行计算，从而得到一个新的属性
	//TODO 在标签中使用时这样使用：$store.getters.bigSum 就是这个值
const getters = {
    bigSum(state) {
        return state.sum * 100
    }
}

//创建一个store
const store = new vuex.Store({
    actions,
    mutations,
    state,
    getters
})

//暴露store
export default store
