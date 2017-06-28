const webpack = require('webpack');
const path = require('path');
const dev = {
    entry:{
        index:['./src/public/scripts/index.es','./src/public/scripts/function.js'],
        xtag:'./src/public/scripts/xtag.js'
    },
    output:{
        filename:'[name]-[hash5].js',
        path:path.join(__dirname,'dist')
    },
    plugins:{},
    module:{},
    resolve:{}
}
module.exports = dev;