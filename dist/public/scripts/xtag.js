webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thumb = new _index2.default.Star();
xtag.register('x-star', {
  content: '<div class="star" id="star">\n                <p style="font-size:40px;">\u661F\u661F</p>\n            </div>\n            <span class="hide" id="animation">+1</span>',
  methods: {
    praise: function praise() {
      var _this = this;
      thumb.clickAction();
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800);
    }
  },

  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == "star") {
        var t = "";
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this.praise();
        }, 500);
      }
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thumb = new _index2.default.Thumb();
xtag.register('x-praise', {
  content: '<div class="hand" id="thumb">\n        <div class="finger"></div>\n        <div class="finger"></div>\n        <div class="finger"></div>\n        <div class="finger"></div>\n        <div class="finger thumb"></div>\n        <div class="arm"></div>\n    </div>\n    <span class="hide" id="animation">+1</span>',
  methods: {
    praise: function praise() {
      var _this = this;
      thumb.clickAction();
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800);
    }
  },

  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == "thumb") {
        var t = "";
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this.praise();
        }, 500);
      }
    }
  }
});

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
],[6]);