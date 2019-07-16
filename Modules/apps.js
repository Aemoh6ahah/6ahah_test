let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');



module1.foo('hi');
console.log(module1.data);

module2('hello');
module3.foo('hello')