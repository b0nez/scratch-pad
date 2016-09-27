#!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#loops"
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var x in object) {
    console.log(object[x]);
  }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var x in object) {
  console.log(x);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var keys = [];
  for(var x in object) {
    keys.push(x);
  }
  return keys.length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var values = [];
  for (var x in object) {
    values.push(object[x]);
  }
  values = values.reverse();
  for (var y in values) {
    console.log(values[y]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.printArrayValues = printArrayValues;
module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
module.exports.printObjectValues = printObjectValues;
module.exports.getObjectKeys = getObjectKeys;
module.exports.printObjectKeys = printObjectKeys;
module.exports.getObjectLength = getObjectLength;
module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
