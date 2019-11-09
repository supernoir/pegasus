const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry : path.join(__dirname, 'app', 'index'),
	mode  : 'development',
	output: {
		filename: 'bundle.js',
		path    : path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test   : /.jsx?$/,
			include: [
				path.resolve(__dirname, 'app')
			],
			exclude: [
				path.resolve(__dirname, 'node_modules'),
			],
			loader: 'babel-loader',
			query : {
				presets: ['es2015']
			},
		},
		{
			test   : /\.tsx?$/,
			loader : 'awesome-typescript-loader',
			exclude: /node_modules/,
		},
		{
			enforce: 'pre',
			test   : /\.js$/,
			loader : 'source-map-loader'
		}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx','.json', '.js', '.jsx', '.css']
	},
	devtool  : 'source-map',
	devServer: {
		publicPath: path.join('/')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title   : 'PegaSUS',
			filename: 'index.html',
			template: 'index.html'
		})
	],
};