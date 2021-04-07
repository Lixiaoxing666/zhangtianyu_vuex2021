module.exports = {
  lintOnSave:false, //关闭所有语法检查
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