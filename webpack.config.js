const path = require('path');
const webpack = require('webpack');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
const compilationVersion = isProduction ? 'production' : 'development';

// const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssLoaders = [
	isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
	// MiniCssExtractPlugin.loader, // zawsze, nawet w dev
	{
		loader: 'css-loader',
		options: { sourceMap: true }
	},
	{
		loader: 'postcss-loader',
		options: { sourceMap: true }
	},
	{
		loader: 'sass-loader',
		options: { 
			sourceMap: true,
			sassOptions: { quietDeps: true }
		}
	}
];

module.exports = {
	mode: compilationVersion,
	entry: {
		script: "./assets/js/app.js"
	},
	output: {
		// filename: "[contenthash:6][name].bundle.js", // [name] - klucz z entry app.js
		filename: "[name].bundle.js", // [name] - klucz z entry app.js
		path: path.resolve(__dirname + "/build"),
	},
	module: {
		rules: [
				// {
				// 	test: /\.(jpg|png|svg|gif)$/,
				// 	loader: 'url-loader'
				// },
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: {
						presets: [
							"@babel/preset-env"
						],
						plugins: []
					}
				},
				{
					test: [/\.css$/, /\.s[ac]ss$/i],
					use: cssLoaders
				},
		]
	},
	plugins: [
			// new CleanWebpackPlugin(), // clear files in build
			new MiniCssExtractPlugin({
					filename: "style.css",
					chunkFilename: '[id].css',
					ignoreOrder: false
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
	],
	devtool : isProduction ? 'source-map' : 'eval-source-map'
}