import Vue from 'vue'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//TODO 引入element-ui组件要大写  但是用的时候<el-button>默认按钮</el-button>  加el- 并且小写
import {Button,Input,Row} from 'element-ui';
import App from './App'

Vue.config.productionTip = false
//TODO Vue.use(ElementUI);写完这句  ElementUI所有组件全局注册了
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);

new Vue({
	el:'#app',
	render: h => h(App),
})

