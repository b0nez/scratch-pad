#!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#type"
 *
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
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
    if (value !== null && typeof(value) === 'object' && Array.isArray(value) !== true && value instanceof Date !== true) {
        return true;
    } else {
        return false;
    }
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    if (Array.isArray(value) === true || typeof(value) === 'object' && value !== null && value instanceof Date !== true) {
        return true;
    } else {
        return false;
    }
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
    if (typeof(value) === 'string') {
        return 'string';
    } else if (typeof(value) === 'boolean') {
        return 'boolean';
    } else if (typeof(value) === 'number') {
        return 'number';
    } else if (typeof(value) === 'undefined') {
        return 'undefined';
    } else if (typeof(value) === 'function') {
        return 'function';
    } else if (typeof(value) === 'object') {
        if (value === null) {
            return 'null';
        } else if (value instanceof Date === true) {
            return 'date';
        } else if (Array.isArray(value) === true) {
            return 'array';
        } else return 'object'
    }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.isArray = isArray;
module.exports.isObject = isObject;
module.exports.isCollection = isCollection;
module.exports.typeOf = typeOf;
