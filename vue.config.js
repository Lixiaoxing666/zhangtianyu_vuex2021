module.exports = {
	//
  lintOnSave:false, //TODO 关闭所有语法检查 比如定义变量a, 但是还没用的时候会报错  配置这个不会报错 上线以后改为true
	devServer: {
		proxy: {
		'/api1': {// 匹配所有以 '/api'开头的请求路径
			target: 'http://localhost:5000',// 代理目标的基础路径
			changeOrigin: true,
			pathRewrite: {'^/api1': ''}
		},
		'/api2': {// 匹配所有以 '/api'开头的请求路径
			target: 'http://localhost:5001',// 代理目标的基础路径
			changeOrigin: true,
			pathRewrite: {'^/api2': ''}
		}
	}
}
}