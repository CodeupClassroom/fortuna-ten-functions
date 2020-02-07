"use strict";

/**
 * Write your solutions here.
 *
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

// 2.
function isTrue(a) {
    return (a === true);
}

// 3.
function isFalse(a) {
    return (a === false);
}

//4.
function not(a) {
    return !a;
}

//5.
function addOne(a) {
    return ++a;
}

//6.
function isEven(a) {
    return a % 2 === 0;
}

//7.
function isIdentical(a, b) {
    return a === b;
}

//8. come back to this one
function isEqual(a, b) {
    return a == b;
}

//9.
function or(a, b) {
    return a || b;
}

//10.
function and(a, b) {
    return a && b;
}

//11.
function concat(a, b) {
    if (a && b === isNaN()) {
        return a + b;
    } else if (a && b === !isNaN()){
        return a + b;
    } else {
        return "nothing";
    }
}