"use strict";

// 1.

function isTrue(input) {
    if (typeof input === 'number') {
        return false;
    } else if (typeof input === 'string') {
        return false;
    } else {
        return Boolean(input) === true;
    }
}

// 1. Define a function named `isTrue` that takes in any input and returns true if the input provided is exactly equal to `true` in value and data type.
//
// isTrue(true)             // true
// isTrue(false)            // false
// isTrue(0)                // false
// isTrue(null)             // false
// isTrue("true")           // false
// isTrue("Banana")         // false
// isTrue([1, 2])           // false

// 2.


function isFalse(   input) {
    if (typeof input === 'number') {
        return false;
    } else if (typeof input === 'string') {
        return false;
    } else if (input === null) {
        return false;
    } else if (input === undefined) {
        return false;
    }        else {
        return Boolean(input) === false;
    }
}



// 2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
//
// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false

// 3.

function not(input) {
    return !Boolean(input);
}

// 3.
//
// Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.
//
// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false
//

// 4.

function addOne(input) {
    return (Number(input) + 1);
}

// 4. Define a function named `addOne` that takes in a single input. If the input is a number or a numeric string, return the value plus one.
//
// addOne(0)                    // 1
// addOne(2)                    // 3
// console.log(addOne(-5));                // -4
// addOne(5.789)                // 6.789
// addOne(Infinity)             // Infinity
// addOne("2")                  // 3
// consol.log(addOne("0"))                  // 1
// addOne("banana")             // NaN
// addOne(true)                 // NaN
// addOne(NaN)                  // NaN
//
//
// 5.

function isEven(input) {
    if (input === false) {
        return false;
    } else {
        return (Number(input) % 2 === 0);
    }
}

// 5. Define a function named `isEven` that takes in a single input. If the input is an even number or a string containing an even number, return `true`. Any other input should return false for the output.
//
// isEven(2)                   // true
// isEven(-8)                  // true
// isEven(0)                   // true
// isEven("42")                // true
// isEven(1)                   // false
// isEven("-3")                // false
// console.log(isEven(false));              // false
// isEven("banana")            // false
//

// 6.

function isIdentical(n1, n2) {
    return (n1 === n2);
}


// 6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal both in data type and in value, then return `true`. If the values are not the same data type or not the same value, return `false`.
//
// isIdentical(3, 3)                     // true
// isIdentical(false, false)             // true
// isIdentical("hello", "hello")         // true
// isIdentical(3, 3.0)                   // true
// isIdentical(undefined, undefined)     // true
// isIdentical(2, "2")                   // false
// isIdentical("javascript", "java")     // false
//

// 7.

function isEqual(n1, n2) {
    return (n1 == n2);
}

// 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
//
// isEqual(3, "3")                       // true
// isEqual("abc123", "abc123")           // true
// isEqual(true, 1)                      // true
// isEqual(0, false)                     // true
// isEqual(4, -5)                        // false
// isEqual("java", "javascript")         // false
//

// 8.

function or(n1, n2) {
    return n1 || n2
}

// 8. Define a function named `or` that takes in two input arguments. The output returned should be the result of an `or` operation on both inputs.
//
// console.log(or(true, true)  )                  // true
// console.log(or(true, false)  )                 // true
// console.log(or(false, true)   )                // true
// console.log(or(false, false)   )               // false
// console.log(or("hello", "world"))              // "hello" (this behavior is non-obvious, research more!)
//
//

// 9.
function and (n1, n2) {
    return n1 && n2;
}

//
// 9. Define a function named `and` that takes in two input arguments and returns the result of a logical `and` operation of both inputs.
//
// and(true, true)                    // true
// and(true, false)                   // false
// and(false, true)                   // false
// and(false, false)                  // false
// and("hello", "world")              // "world" (this behavior is non-obvious, research more)
//
//

// 10.

function concat(n1, n2) {
    return (n1.toString() + n2.toString());
}

// 10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
//
// concat("code", "up")                // "codeup"
// concat("connect", 4)                // "connect4"
// concat("hello", "world")            // "helloworld"
// concat(4, 2)                        // "42"
// // concat(true, true)                  // "truetrue"
//
//
// /**
//  * Write your solutions here.
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  * If you don't know what an iffe is, don't worry about it :)
//  *
//  * This file is for defining the following functions. See README.md for more detail.
//  * isTrue
//  * isFalse
//  * not
//  * addOne
//  * isEven
//  * isIdentical
//  * isEqual
//  * or
//  * and
//  * concat
//  */
