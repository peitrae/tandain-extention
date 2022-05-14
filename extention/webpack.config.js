const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
	output: {
    uniqueName: 'tandainExtention',
    clean: true,
		publicPath: 'http://localhost:3001/',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},

	devServer: {
		port: 3001,
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(png|jpg|gif|jpe?g|svg)$/,
				exclude: /node_modules/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
					},
				},
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'tandainExtention',
			filename: 'remoteEntry.js',
			remotes: {
				tandainClient:
					'tandainClient@http://localhost:3000/_next/static/chunks/remoteEntry.js',
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
			},
		}),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
			manifest: './public/manifest.json',
			favicon: './public/favicon.ico',
		}),
	],
};
