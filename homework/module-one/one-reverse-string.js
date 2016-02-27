#!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec --grep reverseString
 * 
 */
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    var reversal = "";
    for(var i = input.length - 1; i >= 0; i--) {
        reversal = (reversal + input[i]);
    }
    return reversal;
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.reverseString = reverseString;