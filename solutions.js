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


// isTrue(true)             // true
// // // isTrue(false)            // false
// // // isTrue(0)                // false
// // // isTrue(null)             // false
// // // isTrue("true")           // false
// // // isTrue("Banana")         // false
// // // isTrue([1, 2])           // false

function isTrue(input) {
    return input === true
}

function isFalse(input) {
    return input === false
}


// Define a function named not that takes in any input and returns the boolean opposite of the provided input.

function not(input) {
    return input !== typeof(input)
}

function addOne(number) {
    return  number + 1
}

function isEven(input) {
    if (input % 2 === 0) {
        return true;
    }else {
        return false
    }
}

function isIdentical(a, b) {
    return a === b
}

// Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

function isEqual(a, b) {
    return a == b
}


function or(x, y) {
    return x || y
}

// Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.

function and(inputa, inputb) {
    return inputa && inputb
}


// Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals


function concat(a, b) {
    return
}