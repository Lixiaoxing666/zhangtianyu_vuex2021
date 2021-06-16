import Vue from 'vue'
import App from './App'
//TODO 入口文件引入路由
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
//TODO 声明使用路由
Vue.use(VueRouter)

const vm = new Vue({
	el:'#app',
	render: h => h(App),
	//TODO 声明使用router
	router
})
console.log(vm)

