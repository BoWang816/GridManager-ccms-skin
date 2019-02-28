const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const genRules = require('./webpack-common.loader');
const buildPath = path.join(__dirname, "dist");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = {
    mode: 'production',

	// 入口文件所在的上下文
	context: path.join(__dirname, "src/"),

	// 入口文件配置
	entry: {
		js: './js/index.js'
	},

	// 文件导出的配置
	output:{
		path: buildPath ,
		filename: "js/index.js",
        libraryTarget: "umd"
	},

    // 优化代码
    optimization: {
        minimizer: [
            // 压缩js
            new UglifyJsPlugin({
                uglifyOptions: {
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    warnings: false
                }
            }),

            // 压缩css
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {removeAll: true},
                    minifyGradients: true
                },
                canPrint: true
            })
        ]
    },

	// 以插件形式定制webpack构建过程
	plugins: [
        // 将样式文件 抽取至独立文件内
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
            chunkFilename: '[id].css'
        }),

		// 将文件复制到构建目录
		// CopyWebpackPlugin-> https://github.com/webpack-contrib/copy-webpack-plugin
		new CopyWebpackPlugin([
			{from: path.join(__dirname, '/package.json'), to: '', toType: 'file'},
			{from: path.join(__dirname, '/README.md'), to: '', toType: 'file'}
		])
	],

	// 处理项目中的不同类型的模块。
	module: {
		rules: genRules('src', false)
	}
};

module.exports = config;
