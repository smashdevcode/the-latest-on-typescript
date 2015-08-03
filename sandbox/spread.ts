
namespace Sandbox.Spread {
    function myFunction(value1: number, value2: number, value3: number) {
        console.log(value1);
        console.log(value2);
        console.log(value3);
    }
    var myArray = [1, 2, 3];
    myFunction(...myArray);
}
