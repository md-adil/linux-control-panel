const path = require('path');

module.exports = {
	entry: [ path.resolve(__dirname, '../app/index.js') ],
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../dist')
	},
	target: 'electron-renderer',
	module: {
		rules: []
	},
	plugins: []
}
