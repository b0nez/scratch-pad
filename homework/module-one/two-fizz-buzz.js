#!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec --grep fizzBuzz
*/
    // YOUR CODE GOES BELOW HERE //
function fizzBuzz() {    
    for(var index = 0; index < 101; index++) {
        if (index % 15 === 0){
        console.log("FizzBuzz");
        }
        else if (index % 3 === 0) {
            console.log("Fizz");
        } 
        else if(index % 5 === 0){
        console.log("Buzz");
        } 
        else{
            console.log(index);
        }
    }
}





    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.fizzBuzz = fizzBuzz