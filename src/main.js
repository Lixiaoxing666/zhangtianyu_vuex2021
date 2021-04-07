import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {Button,Input,Row} from 'element-ui';
import App from './App'

Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);

new Vue({
	el:'#app',
	render: h => h(App),
})

