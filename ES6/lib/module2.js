'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//一次暴露
function foo3() {
    console.log('我是module2中的foo3');
}
function foo4() {
    console.log('我是module2中的foo3');
}

exports.foo3 = foo3;
exports.foo4 = foo4;