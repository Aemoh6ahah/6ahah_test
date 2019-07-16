import {foo1,foo2} from "./module1";
import {foo3,foo4} from "./module2";
import module3 from "./module3"
import $ from "jquery"


foo1()
foo2()
foo3()
foo4()
module3.foo4()
console.log(module3.name)

$('body').css('background', 'red')
console.log('123')