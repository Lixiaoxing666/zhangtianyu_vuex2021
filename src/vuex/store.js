/* 
	该文件专门用于创建并暴露一个vuex中的核心管理者——store
*/

//引入vue核心库
import Vue from 'vue'
//引入vuex
import vuex from 'vuex'

//应用vuex插件
Vue.use(vuex)
//创建一个store
const store = new vuex.Store()

//暴露store
export default store
