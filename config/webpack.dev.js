const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest= require('webpack-manifest');
const cssnext = require('postcss-cssnext');
const cssvariables = require('postcss-css-variables');
const precss = require('precss');
const apply = require('postcss-apply');
const customMedia = require("postcss-custom-media")

const dev = {
    entry: {
        index: ['./src/public/scripts/index.es', './src/public/scripts/function.es'],
        xtag: ['./src/public/scripts/xtag.es','./src/public/scripts/xstar.es']
    },
    output: {
        filename: 'public/scripts/[name].js',
        path: path.join(__dirname, '../dist'),
        publicPath:'http://localhost:3000/'
    },
    module: {
        loaders: [{
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: [
                    "latest",
                    "stage-3"
                ]
            }
        },{
            //设置对应的资源后缀.
            test: /\.(css)$/,
            //设置后缀对应的加载器.
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{ loader: 'css-loader' }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                precss({ browsers: [' Firefox ESR'] ,cascade: true}),
                                cssnext({}),
                                cssvariables({}),
                                // apply({}),
                                customMedia({})
                            ];
                        }
                    }
                }]
            })
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "public/scripts/[name].js"
        }),
        new ExtractTextPlugin("public/css/[name].css"),
        //new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/views/layout.html',
            filename:'views/layout.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template:'./src/views/index.js',
            filename:'views/index.html',
            inject:false,
            chunks:['vendor','index','xtag']
        }),
        new HtmlWebpackPlugin({
            template:'./src/widget/index.html',
            filename:'widget/index.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            template:'./src/views/star.js',
            filename:'views/star.html',
            inject:false,
            chunks:['vendor','index','xtag']
        }),
        new HtmlWebpackPlugin({
            template:'./src/widget/star.html',
            filename:'widget/star.html',
            inject:false
        }),
        new Manifest({
            cache: [
              'public/css/vendor.css',
              'public/scripts/index.js',
              'public/scripts/xtag.js',
              'public/scripts/vendor.js'
            ],
            //Add time in comments. 
            timestamp: true,
            // 生成的文件名字，选填 
            // The generated file name, optional. 
            filename:'cache.manifest', 
            // 注意*星号前面用空格隔开 
            network: [
              'http://localhost:3000/ *',
              'http://192.168.144.223:3000/ *'
              //'http://cdn.bootcss.com/ *'
            ],
            // 注意中间用空格隔开 
            //fallback: ['/ /404.html'],
            // manifest 文件中添加注释 
            // Add notes to manifest file. 
            headcomment: '我是注释', 
            master: ['views/layout.html']
        })
    ]
}
module.exports = dev;