// Import a single named export
//import {sayHello} from './my-module';
System.register(['./my-module', './my-class'], function(exports_1) {
    var m, my_class_1;
    var myClass;
    return {
        setters:[
            function (_m) {
                m = _m;
            },
            function (_my_class_1) {
                my_class_1 = _my_class_1;
            }],
        execute: function() {
            m.sayHello();
            m.sayHelloAgain();
            myClass = new my_class_1.default(1);
            console.log("MyClass.prop1: " + myClass.prop1);
        }
    }
});
//# sourceMappingURL=main.js.map