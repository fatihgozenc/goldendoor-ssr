const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	// TELL WEBPACK THE ROOT FILE OF
	// OUR SERVER APPLICATION
	entry: './src/client/client.js',

	// TELL WEBPACK WHERE TO PUT
	// THE OUTPUT FILE THAT'S GENERATED
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};

module.exports = merge(baseConfig, config);
