<template>
	<div class="app">

		<CateGory cateTile="美食">
			<template slot="cb">
				<span>各种美食应有尽有</span>
			</template>
			<template slot="ct">
				<img :src="foodUrl" alt="">
			</template>
		</CateGory>

		<CateGory cateTile="游戏">
			<template slot="ct">
				<ul>
					<li :key="g.id" v-for="g in gameArr">{{g.name}}</li>
				</ul>
			</template>
			<template slot="cb">
				<ul>
					<li>游戏种类全</li>
					<li>破解工具多</li>
					<li>汉化版本全</li>
				</ul>
			</template>
		</CateGory>

		<CateGory cateTile="电影">
			<template slot="ct">
				<video :src="movieUrl" controls></video>
			</template>
			<template slot="cb">
				<h3>各种电影应有尽有</h3>
			</template>
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