
namespace Sandbox.LetConst {
    // Define constants
    /*const myConstant = 4;
    console.log(myConstant);*/

    // Block level variables

    // Prevent unexpected behavior

    // Example 1
    /*var foo = 123;
    if (true) {
        var foo = 456;
    }
    console.log(foo); // 456*/

    // Example 2
    /*var index = 0;
    var array = [1, 2, 3];
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
    console.log(index); // 0*/

    // Compiler won't allow you to access block level variables outside of that block
    /*if (true) {
        let a = 'something';
    }
    if (true) {
        let b = 'something';
    }
    console.log(a);
    console.log(b);*/
}
