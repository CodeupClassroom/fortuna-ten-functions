"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

/*
*

    Define a function named

    isTrue
    that takes in any input and returns true if the input provided is exactly equal to true in value and boolean in data type.

*/

function isTrue(input) {
    var output;
    output = input === true;
    return output;
}


/*
*

   Define a function named isFalse that takes in a value and returns true if and only if the argument provided false.
   */
function isFalse(input) {
    var output;
    output = input === false;
    return output;
}

/*

   Define a function named not that takes in any input and returns the boolean opposite of the provided input.

   */
function not(input) {
    var output;
    output = Boolean(input);
    output = output !== true;
    return output;
}

/*

   Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.

  */
function addOne(input) {
    return Number(input) + 1;
}

/*

   Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.

   */
function isEven(input) {
    var output;
    output = input % 2 === 0;

    if (input === false) {
        return false;
    }
    return output;
}

/*

   Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true.
   If the values are not the same data type or not the same value, return false.
*/
function isIdentical(x, y) {
    return x === y;
}

/*


   isIdentical(3, 3)                     // true

   isIdentical(false, false)             // true

   isIdentical("hello", "hello")         // true

   isIdentical(3, 3.0)                   // true

   isIdentical(undefined, undefined)     // true

   isIdentical(2, "2")                   // false

   isIdentical("javascript", "java")     // false

   Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
*/
function isEqual(x, y) {
    if (isNaN(x) || isNaN(y) || (y < 0) || (x < 0)) {
        return false
    } else {

        if (Boolean(x) === Boolean(y)) {
            return true;
        } else {
            return false;
        }
    }

}

/*


   isEqual(3, "3")                       // true

   isEqual("abc123", "abc123")           // true

   isEqual(true, 1)                      // true

   isEqual(0, false)                     // true

   isEqual(4, -5)                        // false

   isEqual("java", "javascript")         // false

   Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
*/
function or(x, y) {
    var output;
    if ((x || y) === true) {
        output = true;
    } else if (x !== y) {
        output = x;

    } else {
        output = y;
    }
    return output;
}

/*


   or(true, true)                    // true

   or(true, false)                   // true

   or(false, true)                   // true

   or(false, false)                  // false

   or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)

   Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.

*/
function and(a, b) {
    if ((a || b) === "string") {
        return b;
    } else {
        return Boolean(a + b);
    }
}

/*

   and(true, true)                    // true

   and(true, false)                   // false

   and(false, true)                   // false

   and(false, false)                  // false

   and("hello", "world")              // "world" (this behavior is non-obvious, research more)

   Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result.
    If two numbers are provided, then return the string concatenation of each set of numerals.
*/
function concat(a, b){
var output = " ";
   String(output = a + b);
return output;
}


/*


   concat("code", "up")                // "codeup"

   concat("connect", 4)                // "connect4"

   concat("hello", "world")            // "helloworld"

   concat(4, 2)                        // "42"

   concat(true, true)                  // "truetrue"


*
* */
