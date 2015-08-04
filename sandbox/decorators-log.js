var Sandbox;
(function (Sandbox) {
    var Decorators;
    (function (Decorators) {
        function log(target, propertyKey, descriptor) {
            var originalMethod = descriptor.value; // save a reference to the original method
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.log('The method args are: ' + JSON.stringify(args)); // pre
                var result = originalMethod.apply(this, args); // run and store the result
                console.log('The return value is: ' + result); // post
                return result; // return the result of the original method
            };
            return descriptor;
        }
        Decorators.log = log;
    })(Decorators = Sandbox.Decorators || (Sandbox.Decorators = {}));
})(Sandbox || (Sandbox = {}));
//# sourceMappingURL=decorators-log.js.map