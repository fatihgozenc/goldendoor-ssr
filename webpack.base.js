require('dotenv').config();
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// TELL WEBPACK TO RUN BABEL ON EVERY FILE
	// IT RUNS THROUGH
	mode: process.env.NODE_ENV,
	node: {
		fs: "empty"
 	},
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'@babel/react',
						['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
					]
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
						},
					},
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};
