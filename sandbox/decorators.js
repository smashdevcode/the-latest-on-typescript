var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sandbox;
(function (Sandbox) {
    var Decorators;
    (function (Decorators) {
        var MyClass = (function () {
            function MyClass() {
            }
            MyClass.prototype.myMethod = function (arg) {
                console.log('Executing myMethod');
                return 'Message -- ' + arg;
            };
            __decorate([
                Decorators.log
            ], MyClass.prototype, "myMethod", null);
            return MyClass;
        }());
        var myClass = new MyClass();
        myClass.myMethod('testing');
    })(Decorators = Sandbox.Decorators || (Sandbox.Decorators = {}));
})(Sandbox || (Sandbox = {}));
//# sourceMappingURL=decorators.js.map