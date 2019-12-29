const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// INFORM WEBPACK THAT WE'RE BUILDING
	// FOR NODEJS, RATHER THAN A BROWSER
	target: 'node',

	// TELL WEBPACK THE ROOT FILE OF
	// OUR SERVER APPLICATION
	entry: './src/index.js',

	// TELL WEBPACK WHERE TO PUT
	// THE OUTPUT FILE THAT'S GENERATED
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
