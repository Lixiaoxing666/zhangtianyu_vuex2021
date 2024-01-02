<template>
	<ul>
		<!--TODO 为啥加：？？？ID的冒号-->
		<li>ID:{{id}}</li>
		<li>TITLE:{{title}}</li>
		<li>CONTENT:{{content}}</li>
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		computed:{
			id(){
                //TODO 在对应组件中 通过 this.$route.params.id接收params参数
				return this.$route.params.id
			},
			title(){
				return this.$route.params.title
			},
			content(){
				return this.$route.params.content
			}
		},
		mounted(){
			console.log('Detail',this)
		}
	}
</script>
