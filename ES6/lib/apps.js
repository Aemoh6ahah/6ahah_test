"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo1)();
(0, _module.foo2)();
(0, _module2.foo3)();
(0, _module2.foo4)();
_module4.default.foo4();
console.log(_module4.default.name);

(0, _jquery2.default)('body').css('background', 'red');
console.log('123');