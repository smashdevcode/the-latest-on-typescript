
// Two ways to export members:
// 1) Place the "export" keyword before a member's declaration
// 2) Export using a separate export declaration (similar to the reveal pattern)

function sayHello() {
    console.log('Hello world!');
}

function sayHelloAgain() {
    console.log('Hello again!');
}

export { sayHello, sayHelloAgain };
