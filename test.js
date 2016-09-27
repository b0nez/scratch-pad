'use strict';

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    let args = Array.from(arguments).join('');
    
    console.log(args);
    
    var strings = [stringOne, stringTwo];
    return strings.join();
    
    // YOUR CODE ABOVE HERE //
}

join("hello", "world");
console.log("goodbye");