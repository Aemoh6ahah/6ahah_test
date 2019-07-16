'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo1 = foo1;
exports.foo2 = foo2;
//分别暴露
function foo1() {
    console.log('这是module1中的foo1');
}
function foo2() {
    console.log('这是module1中的foo2');
}