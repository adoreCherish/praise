'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexModel = require('../model/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var indexController = {
	init: function init() {
		var _this = this;

		return function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return ctx.render('./index');

							case 2:
								ctx.body = _context.sent;

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}();
	},
	update: function update() {
		var _this2 = this;

		return function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
				var update;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								update = new _indexModel2.default(ctx);
								_context2.next = 3;
								return update.updateData();

							case 3:
								ctx.body = _context2.sent;

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x3, _x4) {
				return _ref2.apply(this, arguments);
			};
		}();
	},
	star: function star() {
		var _this3 = this;

		return function () {
			var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!ctx.response.header['x-pjax']) {
									_context3.next = 4;
									break;
								}

								ctx.body = '<x-star></x-star>';
								_context3.next = 7;
								break;

							case 4:
								_context3.next = 6;
								return ctx.render('./star');

							case 6:
								ctx.body = _context3.sent;

							case 7:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this3);
			}));

			return function (_x5, _x6) {
				return _ref3.apply(this, arguments);
			};
		}();
	},
	praise: function praise() {
		var _this4 = this;

		return function () {
			var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								if (!ctx.response.header['x-pjax']) {
									_context4.next = 4;
									break;
								}

								ctx.body = '<x-praise></x-praise>';
								_context4.next = 7;
								break;

							case 4:
								_context4.next = 6;
								return ctx.render('./index');

							case 6:
								ctx.body = _context4.sent;

							case 7:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, _this4);
			}));

			return function (_x7, _x8) {
				return _ref4.apply(this, arguments);
			};
		}();
	},
	advertisement: function advertisement() {
		var _this5 = this;

		return function () {
			var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ctx, next) {
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								ctx.body = '<div style="height:30px;background-color:red;margin-top:20px;" id="advertisement">我是广告我是广告啦~~~</div>';

							case 1:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, _this5);
			}));

			return function (_x9, _x10) {
				return _ref5.apply(this, arguments);
			};
		}();
	}
};
exports.default = indexController;