//引入Vue核心库
import Vue from 'vue'
//引入App外壳组件
import App from './App.vue'

//关闭运行开模式提示
Vue.config.productionTip = false

/* 
	关h函数：
			1.vue.js与vue.xxx.xxx.js的区别：
					vue.js是完整版的Vue，包含全部的功能+模板解析器
					vue.xxx.xxx.js是残缺版，不包含模板解析器
			2.h函数可以帮我们调用到vue-template-compiler这个loader，这个loader可以编译Vue模板
*/

new Vue({
	el:'#app',
	render: h => h(App)
	// template:`<App></App>`,
	// components:{App}
})
