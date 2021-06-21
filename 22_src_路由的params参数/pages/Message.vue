<template>
	<div>
		<ul>
			<li :key="m.id" v-for="m in messageArr">
				<!-- <a href="/message1"> {{m.title}} </a> -->
				<!--TODO ## 18.路由params参数
			(1).注册路时声明接收params：
						path:'detail/:id'
			(2).路由链接：
						<router-link to="/home/message/detail/001">点我</router-link>
			(3).路由组件中接收：
						this.$route.params.id-->
				<!--TODO 路由传参params参数 -->
				<router-link :to="`/home/message/detail/${m.id}/${m.title}/${m.content}`"> {{m.title}} </router-link>
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
