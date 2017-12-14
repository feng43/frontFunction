// 已经弃用  请使用npm run build打包
module.exports = {
	entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/min",//打包后的文件存放的地方
		filename: "index.min.js"//打包后输出文件的文件名
	},
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    }
}