<template>
	<div>
		<ul>
			<li :key="m.id" v-for="m in messageArr">
				<!-- <a href="/message1"> {{m.title}} </a> -->
				<!-- <router-link :to="`/home/message/detail/${m.id}?title=${m.title}&content=${m.content}`"> {{m.title}} </router-link> -->
				<router-link
					:to="{
						name:'xiangqing', //跳转哪个路由（路径的代替者）
						params:{id:m.id}, //携带params参数
						query:{ //携带query参数
							title:m.title,
							content:m.content
						}
					}"
				> 
					{{m.title}} 
				</router-link>
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
