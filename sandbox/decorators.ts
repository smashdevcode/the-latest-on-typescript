
namespace Sandbox.Decorators {

    // A decorator is:
    // * an expression
    // * that evaluates to a function
    // * that takes the target, name, and property descriptor as arguments
    // * and optionally returns a property descriptor to install on the target object

    // Atom TypeScript wasn't playing along...
    // Needs to be compiled from the command line

    // Decorators are being used by...
    // AngularJS 2 - https://angular.io/docs/js/latest/quickstart.html
    // Aurelia - http://eisenbergeffect.bluespire.com/aurelia-update-with-decorators-ie9-and-more/

    // Starting to see community support for libaries of decorators...
    // https://github.com/jayphelps/core-decorators.js

    // class MyClass {
    //     @log
    //     myMethod(arg: string) {
    //         console.log('Executing myMethod');
    //         return 'Message -- ' + arg;
    //     }
    // }
    //
    // var myClass = new MyClass();
    // myClass.myMethod('testing');
}
