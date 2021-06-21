import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const vm = new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {                      //TODO 安装全局事件总线
		Vue.prototype.$bus = this
	},
})
console.log('###',vm)
