//my test1
const Koa = require('koa');
const app = new Koa();

const router = require('koa-simple-router')
const render = require('koa-swig');
const co = require('co');
const path = require('path');
const serve = require('koa-static');
import babel_co from 'babel-core';
import babel_polyfill from 'babel-polyfill'
import initController from './controller/initController';
initController.init(app,router);
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
app.use(serve(path.join(__dirname)));
app.listen(3000,function(){
    console.log('process.pid:'+process.pid);
});
export default app;