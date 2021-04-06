import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(vueResource)

const vm = new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
	store,
})
console.log('vm',vm)


