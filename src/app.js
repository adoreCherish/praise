'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var app = new Koa();

var router = require('koa-simple-router');
var render = require('koa-swig');
var co = require('co');
var path = require('path');
var serve = require('koa-static');

_initController2.default.init(app, router);
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
app.use(serve(path.join(__dirname)));
app.listen(3000);
exports.default = app;
