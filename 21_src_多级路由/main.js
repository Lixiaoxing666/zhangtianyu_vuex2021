import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const vm = new Vue({
	el:'#app',
	render: h => h(App),
	router
})
console.log(vm)

