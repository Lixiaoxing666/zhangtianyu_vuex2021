import Vue from 'vue'
import App from './App'
/*todo vueResource已抛弃的库 了解 功能相当于axios*/
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)

 const vm = new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
// console.log('#',vm)

