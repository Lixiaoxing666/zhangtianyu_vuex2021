import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//TODO 全局事件总线：任意组件间的通信问题 就是自定义事件（只能父子）的升级版
const vm = new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {                      //TODO 安装全局事件总线
		Vue.prototype.$bus = this
	},
})
console.log('###',vm)
