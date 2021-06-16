<template>
	<div class="app">
<!--todo 给子组件传递名为cateTile的字符串 -->
		<CateGory cateTile="美食">
			<!--TODO 自定义的子标签CateGory的标签体中间的内容默认不展示  想展示在子标签写<slot/>-->
			<img :src="foodUrl" alt="">
		</CateGory>

		<CateGory cateTile="游戏">
			<ul>
				<li :key="g.id" v-for="g in gameArr">{{g.name}}</li>
			</ul>
		</CateGory>

		<CateGory cateTile="电影">
			<!--todo video:这是一段视频  controls：播放键等-->
			<video :src="movieUrl" controls></video>
		</CateGory>

	</div>
</template>

<script>
	import CateGory from './components/Category'
	export default {
		name:'App',
		data() {
			return {
				foodUrl:'https://s3.ax1x.com/2021/01/16/srJlq0.jpg',
				gameArr:[
					{id:'001',name:'英雄联盟'},
					{id:'002',name:'王者农药'},
					{id:'003',name:'绝地求生'},
				],
				movieUrl:'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4'
			}
		},
		components:{CateGory},
	}
</script>

<style lang="css">
	.app{
		display: flex;
		justify-content: space-around;
	}
	img{
		width: 100%;
	}
	video{
		width: 100%;
	}
</style>