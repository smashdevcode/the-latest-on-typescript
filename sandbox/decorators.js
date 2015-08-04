var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var Sandbox;
(function (Sandbox) {
    var Decorators;
    (function (Decorators) {
        // A decorator is:
        // * an expression
        // * that evaluates to a function
        // * that takes the target, name, and property descriptor as arguments
        // * and optionally returns a property descriptor to install on the target object
        // Atom TypeScript wasn't playing along...
        // Needs to be compiled from the command line
        var MyClass = (function () {
            function MyClass() {
            }
            MyClass.prototype.myMethod = function (arg) {
                console.log('Executing myMethod');
                return 'Message -- ' + arg;
            };
            Object.defineProperty(MyClass.prototype, "myMethod",
                __decorate([
                    Decorators.log
                ], MyClass.prototype, "myMethod", Object.getOwnPropertyDescriptor(MyClass.prototype, "myMethod")));
            return MyClass;
        })();
        var myClass = new MyClass();
        myClass.myMethod('testing');
    })(Decorators = Sandbox.Decorators || (Sandbox.Decorators = {}));
})(Sandbox || (Sandbox = {}));
//# sourceMappingURL=decorators.js.map