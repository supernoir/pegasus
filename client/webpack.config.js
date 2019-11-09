const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry : path.join(__dirname, 'src', 'index'),
	mode  : 'development',
	output: {
		filename: 'bundle.js',
		path    : path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test   : /.jsx?$/,
			include: [
				path.resolve(__dirname, 'src')
			],
			exclude: [
				path.resolve(__dirname, 'node_modules'),
			],
			loader: 'babel-loader',
			query : {
				presets: [
					"@babel/env",
					"@babel/react",
				],
				"plugins": [
    ["@babel/plugin-transform-async-to-generator", {
      "module": "bluebird",
      "method": "coroutine"
    }]
  ]
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
