const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: [ path.resolve(__dirname, '../app/index.js') ],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../dist')
	},
	target: 'electron-renderer',
	module: {
		rules: [
			{
				test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
	       		use: [{
		           loader: 'file-loader',
		           options: {
		             name: '[name].[ext]',
		             outputPath: 'fonts/',    // where the fonts will go
		           }
		        }]
			}, {
				test: /\.jpe?g|\.png$/,
	       		use: [{
		           loader: 'file-loader',
		           options: {
		             name: '[name].[ext]',
		             outputPath: 'images/',    // where the fonts will go
		           }
		        }]
			}
		]
	},
	plugins: [new HTMLWebpackPlugin()]
}
