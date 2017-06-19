var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'index.js',
		library: 'TokenAutocomplete',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: [
						'es2015',
						'react',
						'stage-2',
					],
					plugins: [
						'transform-decorators-legacy'
					]
				}
			}
		]
	},
	externals: {
		'react': 'React'
	},
	resolve: {
		alias: {
			utils: path.join(__dirname, 'src/_utils')
		},
		extensions: [
			'',
			'.js',
			'.jsx'
		],
		modulesDirectories: [
			'node_modules'
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			sourcemap: false
		})
	]
};
