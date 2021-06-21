<template>
	<!--<section> 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
-->
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input v-model="keyWord" type="text" placeholder="enter the name you search"/>&nbsp;
			<button @click="search">Search</button>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'Search',
		data(){
			return {
				keyWord:''
			}
		},
		methods:{
			search(){
				//TODO 获取用户的输入 或者这样const keyWord=this.keyWord
				const {keyWord} = this
				//TODO 请求前，通过$bus传递数据给List
				this.$bus.$emit('update-list',{users:[],isFirst:false,isLoading:true,errMsg:''})
				//axios发送请求
				axios.get('https://api.github.com/search/users',
					{
					    params:{ q:keyWord}
					}
					    )
					.then(
					response => {
						console.log('成功了',response.data.items)
						const {items} = response.data
						//TODO 请求成功了，通过$bus传递数据给List
						this.$bus.$emit('update-list',{users:items,isLoading:false,errMsg:''})
					},
					error => {
						console.log('失败了',error.message)
						//请求失败了，通过$bus传递数据给List
						this.$bus.$emit('update-list',{users:[],isLoading:false,errMsg:error.message})
					}
				)
			}
		}
	}
</script>