#!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-12
 * Good morning!
 *
 * // hour is 12-17
 * Good afternoon! 
 *
 * // hour is 17-22
 * Good evening!
 *
 * // hour is 22-24 
 * Good night! 
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *   can be used to test that the hour is within the morning threshold. It's 
 *   best to be consistant and use the SAME type of comparison for each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec --grep greeter-app
 * 
 */

function greeter(hour) 
{
    // YOUR CODE BELOW HERE //
    if (hour < 12)
    {
        console.log("Good Morning!");
    }
    else if (hour < 17)
    {
        console.log("Good Afternoon!"); 
    }
    else if (hour < 22)
    {
        console.log("Good Evening!");
    }
    else console.log("Good Night!");    
    

    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */
var today = new Date();
var hour = today.getHours();
greeter(hour);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
module.exports.greeter = greeter;