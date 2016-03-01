#!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec --grep type
 *
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    var isAnObject = true;
    
    if (value === null) isAnObject = false;
    if (Array.isArray(value) === true) isAnObject = false;   // dont really need the === true
    
    if (value instanceof Date === true) isAnObject = false;
    if (typeof value !== 'object') isAnObject = false;
    
    return isAnObject;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    var isAnObject = true;
    
    if (value === null) isAnObject = false;
    if (Array.isArray(value) === true) isAnObject = true;   // dont really need the === true
    
    if (value instanceof Date === true) isAnObject = false;
    if (typeof value !== 'object') isAnObject = false;
    
    return isAnObject;
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    if (value instanceof Date) return 'date';
    return typeof value;
    
    

    
    
    
    
    // var kindOf;
    
    // if (value === null) kindOf = 'null';
    // if (Array.isArray(value) === true) kindOf = 'array';   // dont really need the === true
    
    // if (value instanceof Date === true) kindOf = 'Date';
    // if (typeof value !== 'object') kindOf = ;
    
    // return kindOf;
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.isArray = isArray;
module.exports.isObject = isObject;
module.exports.isCollection = isCollection;
module.exports.typeOf = typeOf;
