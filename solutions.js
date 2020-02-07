"use strict";

//NOTE: WORK BELOW IS CONTINUED PRACTICE AFTER ALREADY SUBMITTING INITIAL EFFORT VIA SLACK (GITHUB CREDENTIALS NOT WORKING)

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

// 1. Define a function named `isTrue` that takes in any input and returns true if the input provided is exactly equal to `true` in value and data type.

function isTrue(anyInputType) {
    return anyInputType === true;
}

// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function isTrue(input) {
//     return input === true;
// }

// 2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

function isFalse(anyInputType) {
    return anyInputType === false;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function isFalse(input) {
//     return input === false;
// }

// 3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.

function not(anyInputType) {
    return !anyInputType;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function not(input) {
//     return !input;
// }

// 4. Define a function named `addOne` that takes in a single input. If the input is a number or a numeric string, return the value plus one.

function addOne(x) {
    var numberInput = parseFloat(x);
    return numberInput + 1;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function addOne(input) {
//     return parseFloat(input) + 1;
// }

// 5. Define a function named `isEven` that takes in a single input. If the input is an even number or a string containing an even number, return `true`. Any other input should return false for the output.

function isEven(singleInput) {
    return singleInput % 2 === 0;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function isEven(input) {
//     return parseFloat(input) % 2 === 0;
// }

// 6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal both in data type and in value, then return `true`. If the values are not the same data type or not the same value, return `false`.

function isIdentical(arg1, arg2) {
    return arg1 === arg2;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function isIdentical(inputA, InputB) {
//     return inputA === inputB;
// }

// 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

function isEqual(arg1, arg2) {
    return arg1 == arg2;
    }
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function isEqual(inputA, inputB) {
//     return inputA == inputB;
// }

// 8. Define a function named `or` that takes in two input arguments. The output returned should be the result of an `or` operation on both inputs.

function or(inp1, inp2) {
    return inp1 || inp2;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function or(inputA, inputB) {
//     return inputA || inputB;
// }

// 9. Define a function named `and` that takes in two input arguments and returns the result of a logical `and` operation of both inputs.

function and(inp1, inp2) {
    return inp1 && inp2;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function and(inputA, inputB) {
//     return inputA && inputB;
// }

// 10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.

function concat(arg1, arg2) {
    return arg1 + arg2;
}
// ------------------INSTRUCTOR SOLUTION BELOW:------------------

// function concat(inputA, inputB) {
//     return inputA.toString() + inputB.toString(); // can ALSO force return to be a string through: return "" + input A + input B;
// }
7ba03-9f5c3 06bb6-3506b 3dca8-941a0 7375e-ec6c8 129ca-834c6 4434c-5f598 c6262-7aff1 2595f-97ab9 ddd1c-6a910 10e67-9f63d 4f342-f2c90 2c6a6-c72a4 4948c-f49a6 14f25-6a669 e6271-f0909 2738b-cfb0b