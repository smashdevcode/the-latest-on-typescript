var Sandbox;
(function (Sandbox) {
    var Spread;
    (function (Spread) {
        function myFunction(value1, value2, value3) {
            console.log(value1);
            console.log(value2);
            console.log(value3);
        }
        var myArray = [1, 2, 3];
        myFunction.apply(void 0, myArray);
    })(Spread = Sandbox.Spread || (Sandbox.Spread = {}));
})(Sandbox || (Sandbox = {}));
//# sourceMappingURL=spread.js.map