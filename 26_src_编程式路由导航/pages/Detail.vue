<template>
	<ul>
		<li>ID:{{id}}</li>
		<li>TITLE:{{title}}</li>
		<li>CONTENT:{{content}}</li>
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		props:['id','title','content'],
		// computed:{
		// 	// id(){
		// 	// 	return this.$route.params.id
		// 	// },
		// 	title(){
		// 		return this.$route.query.title
		// 	},
		// 	content(){
		// 		return this.$route.query.content
		// 	}
		// },
		mounted(){
			console.log('Detail',this)
		}
	}
</script>
