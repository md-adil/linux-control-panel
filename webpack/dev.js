const webpack = require('webpack'),
	path = require('path'),
	base = require('./base'),
	_ = require('lodash');

base.entry = [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server'
].concat(base.entry);


_.merge(base, {
	output: {
		publicPath: 'http://localhost:8080/'
	},
	
	devServer: {
	}
});

base.module.rules = base.module.rules.concat([
	{
		test: /\.jsx?/,
		use: [{
			loader: 'babel-loader',
			options: {
				presets: ['react'],
				plugins: ['transform-object-rest-spread', 'transform-class-properties', 'react-hot-loader/babel']
			}
		}]
	},
	{
		test: /\.scss/,
		use: [ 'style-loader', 'css-loader', 'sass-loader' ]
	}
]);

base.plugins.concat([
	new webpack.HotModuleReplacementPlugin()
]);

module.exports = base;