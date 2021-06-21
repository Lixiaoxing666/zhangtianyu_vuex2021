import Vue from 'vue'
import App from './App'

/*TODO 入口文件引入自定义的文件vuex/store.js  */
import store from './vuex/store'
//关闭运行开模式提示
Vue.config.productionTip = false


new Vue({
	el:'#app',
	render: h => h(App),
	// beforeCreate() {
	// 	Vue.prototype.$bus = this //安装全局事件总线
	// },
	store, /*todo 声明store*/
})


