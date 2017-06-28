const dev = require('./config/webpack.dev.js');
const prod = require('./config/webpack.prod.js');
console.log('当前模式:' + process.env.NODE_ENV);
//判断处于开发模式 or 上线模式
switch (process.env.NODE_ENV) {
    case 'development':
        //开发模式
        module.exports = dev;
        break;
    case 'production':
        //上线模式
        module.exports = prod;
        break;
    default:
        module.exports = dev;
        break;
}