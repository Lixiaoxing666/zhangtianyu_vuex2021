import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {     //todo 安装全局事件总线
		Vue.prototype.$bus = this
	},
})

