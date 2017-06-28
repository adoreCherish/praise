'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request-promise');

var indexModel = function () {
	function indexModel(ctx) {
		_classCallCheck(this, indexModel);

		this.ctx = ctx;
	}

	_createClass(indexModel, [{
		key: 'updateData',
		value: function updateData() {
			var options = {
				method: 'GET',
				uri: 'http://localhost/phpTest.php'
			};
			return new Promise(function (resolve, reject) {
				resolve(options).then(function (result) {
					//console.log('result:'+result);
					var info = JSON.parse(result);
					if (info) {
						resolve({
							data: info
						});
					} else {
						reject({
							data: 0
						});
					}
				}).catch(function (err) {});
			});
		}
	}]);

	return indexModel;
}();

exports.default = indexModel;