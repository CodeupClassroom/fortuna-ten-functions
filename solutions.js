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

function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

function not(input) {
    return !Boolean(input);
}

function addOne(num) {
    if (!isNaN(num)) {
        return parseFloat(num) + 1;
    }
}

function isEven(input) {
    if (!isNaN(input)) {
        return parseFloat(input) % 2 === 0;
    } else  {
        return false;
    }
}

function isIdentical(in1, in2) {
    return in1 === in2;
}

function isEqual(in1, in2) {
    return in1 == in2;
}

function or(in1, in2) {
    return in1 || in2;
}

function and(in1, in2) {
    return in1 && in2;
}

function concat(in1, in2) {
    return in1.toString() + in2.toString();
}


