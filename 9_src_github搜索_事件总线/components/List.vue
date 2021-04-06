<template>
	<div class="row">
		<h2 v-show="info.isFirst">欢迎使用</h2>
		<h2 v-show="info.isLoading">loading.....</h2>
		<h2 v-show="info.errMsg">{{info.errMsg}}</h2>
		<div v-show="info.users.length" v-for="userObj in info.users" class="card">
			<a :href="userObj.html_url" target="_blank">
				<img :src="userObj.avatar_url" style='width: 100px'/>
			</a>
			<p class="card-text">{{userObj.login}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'List',
		data(){
			return {
				info:{
					users:[],
					isFirst:true,
					isLoading:false,
					errMsg:''
				}
			}
		},
		methods:{
			updateList(obj){
				this.info = {...this.info,...obj}
			}
		},
		mounted(){
			this.$bus.$on('update-list',this.updateList)
		},
		beforeDestroy() {
			this.$bus.$off('update-list')
		},
	}
</script>

<style lang="css" scoped>
	.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>