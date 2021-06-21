<template>
	<div>
		<ul>
			<li :key="m.id" v-for="m in messageArr">
				<!-- <a href="/message1"> {{m.title}} </a> -->
				<!--TODO 下一节：路由传参-->
				<router-link to="/home/message/detail"> {{m.title}} </router-link>
			</li>
		</ul>
		<hr/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data() {
			return {
				messageArr:[
					{id:'001',title:'消息1',content:'你好，尚硅谷'},
					{id:'002',title:'消息2',content:'你好，北京'},
					{id:'003',title:'消息3',content:'你好，中国'}
				]
			}
		},
	}
</script>
