import Vue from 'vue'
import App from './App'
// import vueResource from 'vue-resource'
/*TODO 入口文件引入自定义的vuex/store.js  */
import store from './vuex/store'

Vue.config.productionTip = false


new Vue({
	el:'#app',
	render: h => h(App),
	// beforeCreate() {
	// 	Vue.prototype.$bus = this //安装全局事件总线
	// },
	store, /*todo 声明store*/
})


