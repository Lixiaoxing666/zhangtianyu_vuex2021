//引入Vue核心库
import Vue from 'vue'
//引入App外壳组件
import App from './App.vue'

//关闭运行开模式提示
Vue.config.productionTip = false

new Vue({
	el:'#app',
  render: h => h(App), //一会说
	// template:`<App></App>`,
	// components:{App}
})
