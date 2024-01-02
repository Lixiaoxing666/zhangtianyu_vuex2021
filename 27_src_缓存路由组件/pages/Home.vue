<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!--TODO 缓存路由组件：在点了别的路由在点回来 输入框里的内容还在 -->
			<keep-alive include="News">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
	}
</script>
