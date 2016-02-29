#!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec --grep first-class-functions
 * 
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value){
        return value > base;
    };
    // YOUR CODE ABOVE HERE //
}
//var greaterThan2=createGreaterThanFilter(2);
//console.log(greaterThan2(3));

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value){
        return value < base;
    
     // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string){
        return string[0] === startsWith;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
     return function (string){
        return length.string-1 === endsWith;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
   
   var output =[];
   for(i= 0; i < strings.length; i++){
        var string =Strings[i];
        output.push(modify(string));
    };
    return output;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way, return true of ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
   
   var output =[];
   for(i= 0; i < strings.length; i++){
        var string =Strings[i];
        output.push(test(string));
    };
    return output(test);
    // YOUR CODE ABOVE HERE //
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.createGreaterThanFilter = createGreaterThanFilter;
module.exports.createLessThanFilter = createLessThanFilter;
module.exports.createStartsWithFilter = createStartsWithFilter;
module.exports.createEndsWithFilter = createEndsWithFilter;
module.exports.modifyStrings = modifyStrings;
module.exports.allStringsPass = allStringsPass;