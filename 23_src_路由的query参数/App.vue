<template>
	<div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<!-- 普通html中我们使用a标签进行页面的跳转 -->
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中我们使用 <router-link> -->
					<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name:'App',
		mounted(){
			// console.log('App',this)
		}
	}
</script>
