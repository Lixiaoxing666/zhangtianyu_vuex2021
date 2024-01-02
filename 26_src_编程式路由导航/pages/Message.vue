<template>
	<div>
		<ul>
			<li :key="m.id" v-for="m in messageArr">
				<!-- <a href="/message1"> {{m.title}} </a> -->
				<!-- <router-link :to="`/home/message/detail/${m.id}?title=${m.title}&content=${m.content}`"> {{m.title}} </router-link> -->
				<!--todo 与react一样 router-link里加replace 不会给回退留下痕迹  不加默认push-->
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
				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
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
		methods:{
			pushShow(m){
                //todo 抛开router-link实现路由跳转 用this.$router.push
				this.$router.push({
					//TODO 下面相当于吧router-link里的都粘过来了 m是遍历的项
					name:'xiangqing', //TODO 跳转哪个路由（路径的代替者）
					params:{id:m.id}, //TODO 携带params参数
					query:{ //TODO 携带query参数
						title:m.title,
						content:m.content
					}
				})
			},
			replaceShow(m){
				this.$router.replace({
					name:'xiangqing', //跳转哪个路由（路径的代替者）
					params:{id:m.id}, //携带params参数
					query:{ //携带query参数
						title:m.title,
						content:m.content
					}
				})
			}
		}
	}
</script>
