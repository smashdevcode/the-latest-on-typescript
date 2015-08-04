
// Import a single named export
//import {sayHello} from './my-module';

// Import all named exports
import * as m from './my-module';

// Import the default export
import MyClass from './my-class';

m.sayHello();
m.sayHelloAgain();

var myClass = new MyClass(1);
console.log(`MyClass.prop1: ${myClass.prop1}`);
