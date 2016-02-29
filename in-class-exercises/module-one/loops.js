#!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec --grep loops
 * 
 * Otherwise you can run the all tests by running:
 * 
 *   npm test
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // var forward = [1, 2, 3];
  
  // for (var i = 0; i < forward.length; i++) {
  //   console.log(forward[i]);
  // }
  
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
  
  // var backward = [1, 2, 3];
  
  // for (var i = backward.length - 1; i > -1; i--) {
  //   console.log(backward[i]);
  // }
  
  for (var i = array.length - 1; i > -1; i--) {
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
  
  // var keys = Object.keys(object);

  // for (var i = 0; i < keys.length; i++) {
  // console.log(object[keys[i]]);
  // }
  
  for (var key in object) {
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // var keys = Object.keys(object);

  // for (var i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  // }
  
  for (var key in object) {
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var keys = Object.keys(object);
  console.log(keys);
  return keys;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var obj = [];
  for (var key in object) {
    obj.push(key);
  }
   return obj.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var revObjValues = Object.keys(object);
  for (var i = revObjValues.length - 1; i >= 0; i--) {
    console.log(object[revObjValues[i]]);
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
